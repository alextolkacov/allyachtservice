import assert from 'node:assert/strict';
import { log } from 'node:console';
import { readFileSync, readdirSync } from 'node:fs';
import { join, relative } from 'node:path';
import { URL } from 'node:url';

const origin = 'https://www.allyachtservice.com';
const dist = new URL('../dist/', import.meta.url).pathname;
const redirectMap = new URL(
  '../ops/legacy-language-redirects.csv',
  import.meta.url,
);

function htmlFiles(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory()
      ? htmlFiles(path)
      : entry.name.endsWith('.html')
        ? [path]
        : [];
  });
}

function one(html, pattern, label, route) {
  const matches = [...html.matchAll(pattern)];
  assert.equal(matches.length, 1, `${route}: expected one ${label}`);
  return matches[0][1];
}

const pages = new Map();
const titles = new Map();
const descriptions = new Map();

for (const file of htmlFiles(dist)) {
  const route = relative(dist, file).replace(/\.html$/u, '');
  const html = readFileSync(file, 'utf8');
  const title = one(html, /<title>([^<]+)<\/title>/gu, 'title', route);
  const description = one(
    html,
    /<meta name="description" content="([^"]+)"\s*\/?\s*>/gu,
    'description',
    route,
  );
  const canonical = one(
    html,
    /<link rel="canonical" href="([^"]+)"\s*\/?\s*>/gu,
    'canonical',
    route,
  );
  const robots = one(
    html,
    /<meta name="robots" content="([^"]+)"\s*\/?\s*>/gu,
    'robots',
    route,
  );
  if (route === '404') {
    assert.equal(robots, 'noindex, nofollow', '404 must remain non-indexable');
  } else {
    assert.equal(
      robots,
      'index, follow',
      `${route}: production page is noindex`,
    );
  }
  one(html, /<h1\b[^>]*>([\s\S]*?)<\/h1>/gu, 'H1', route);
  assert.equal(
    one(
      html,
      /<meta property="og:url" content="([^"]+)"\s*\/?\s*>/gu,
      'og:url',
      route,
    ),
    canonical,
  );
  assert.ok(canonical.startsWith(`${origin}/`), `${route}: noncanonical host`);
  assert.ok(
    !/https?:\/\/(?:es|ru)\.allyachtservice\.com/iu.test(html),
    `${route}: legacy host reference`,
  );

  const alternates = new Map(
    [
      ...html.matchAll(
        /<link rel="alternate" hreflang="([^"]+)" href="([^"]+)"\s*\/?\s*>/gu,
      ),
    ].map((match) => [match[1], match[2]]),
  );
  if (route !== '404') {
    const language = one(
      html,
      /<html lang="([^"]+)"/gu,
      'html language',
      route,
    );
    assert.equal(
      alternates.get(language),
      canonical,
      `${route}: missing self hreflang`,
    );
    assert.equal(
      alternates.get('x-default'),
      alternates.get('en'),
      `${route}: wrong x-default`,
    );
  }
  for (const match of html.matchAll(
    /<script type="application\/ld\+json">([\s\S]*?)<\/script>/gu,
  )) {
    const schema = JSON.parse(match[1]);
    assert.ok(
      schema['@context'] === 'https://schema.org',
      `${route}: invalid schema context`,
    );
  }
  if (robots === 'index, follow') {
    assert.ok(
      !titles.has(title),
      `${route}: duplicate title with ${titles.get(title)}`,
    );
    assert.ok(
      !descriptions.has(description),
      `${route}: duplicate description with ${descriptions.get(description)}`,
    );
    titles.set(title, route);
    descriptions.set(description, route);
  }
  pages.set(canonical, { route, robots, alternates });
}

for (const [url, page] of pages) {
  if (page.route === '404') continue;
  for (const [lang, alternateUrl] of page.alternates) {
    if (lang === 'x-default') continue;
    const alternate = pages.get(alternateUrl);
    assert.ok(
      alternate,
      `${page.route}: missing ${lang} alternate ${alternateUrl}`,
    );
    const ownLang =
      url === `${origin}/`
        ? 'en'
        : url.startsWith(`${origin}/es`)
          ? 'es'
          : url.startsWith(`${origin}/ru`)
            ? 'ru'
            : 'en';
    assert.equal(
      alternate.alternates.get(ownLang),
      url,
      `${page.route}: nonreciprocal ${lang} alternate`,
    );
  }
}

const sitemap = readFileSync(join(dist, 'sitemap-0.xml'), 'utf8');
const listed = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/gu)].map(
  (match) => match[1],
);
assert.equal(new Set(listed).size, listed.length, 'duplicate sitemap URL');
for (const url of listed) {
  const pageUrl = url === origin ? `${origin}/` : url;
  assert.equal(
    pages.get(pageUrl)?.robots,
    'index, follow',
    `sitemap non-indexable or missing: ${url}`,
  );
}
for (const [url, page] of pages) {
  if (page.robots === 'index, follow')
    assert.ok(
      listed.includes(url === `${origin}/` ? origin : url),
      `${page.route}: missing sitemap URL`,
    );
}
assert.ok(
  !sitemap.includes('es.allyachtservice.com') &&
    !sitemap.includes('ru.allyachtservice.com'),
  'legacy host in sitemap',
);

const sources = new Set();
const redirects = readFileSync(redirectMap, 'utf8').trim().split('\n');
for (const row of redirects) {
  const [source, target, status, preserve, ...extra] = row.split(',');
  assert.match(
    source,
    /^(?:es|ru)\.allyachtservice\.com\//u,
    `invalid redirect source: ${source}`,
  );
  assert.ok(!sources.has(source), `duplicate redirect source: ${source}`);
  assert.ok(
    pages.has(target) && pages.get(target).robots === 'index, follow',
    `redirect target is not indexable: ${target}`,
  );
  assert.equal(status, '301', `non-permanent redirect: ${source}`);
  assert.equal(preserve, 'TRUE', `query not preserved: ${source}`);
  assert.equal(extra.length, 0, `unexpected redirect CSV fields: ${source}`);
  sources.add(source);
}

log(
  `SEO output verified: ${pages.size} HTML pages, ${listed.length} sitemap URLs, ${redirects.length} prepared redirects.`,
);
