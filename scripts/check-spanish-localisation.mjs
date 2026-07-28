import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { relative, resolve } from 'node:path';
import process from 'node:process';

const projectRoot = resolve(import.meta.dirname, '..');
const read = (path) => readFileSync(resolve(projectRoot, path), 'utf8');
const failures = [];
const assert = (condition, message) => {
  if (!condition) failures.push(message);
};

const walkHtml = (directory) =>
  readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = resolve(directory, entry.name);

    if (entry.isDirectory()) return walkHtml(path);
    return entry.isFile() && entry.name.endsWith('.html') ? [path] : [];
  });

const getHreflangs = (html) =>
  [
    ...html.matchAll(
      /<link\s+rel="alternate"\s+hreflang="([^"]+)"\s+href="([^"]+)"/gu,
    ),
  ].map((match) => ({ hreflang: match[1], href: match[2] }));

const getOpenGraphLocale = (html) =>
  html.match(/<meta\s+property="og:locale"\s+content="([^"]+)"/u)?.[1];

const getOpenGraphAlternates = (html) =>
  [
    ...html.matchAll(
      /<meta\s+property="og:locale:alternate"\s+content="([^"]+)"/gu,
    ),
  ].map((match) => match[1]);

const getSchema = (html) =>
  [
    ...html.matchAll(
      /<script[^>]+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gu,
    ),
  ].map((match) => JSON.parse(match[1]));

const schemaIncludes = (schemas, type) =>
  schemas.some((schema) =>
    Array.isArray(schema)
      ? schema.some((item) => item['@type'] === type)
      : schema['@type'] === type,
  );

const getLinkTexts = (fragment) =>
  [...fragment.matchAll(/<a\b[^>]*>([\s\S]*?)<\/a>/gu)].map((match) =>
    match[1]
      .replace(/<[^>]+>/gu, '')
      .replace(/&amp;/gu, '&')
      .replace(/\s+/gu, ' ')
      .trim(),
  );

const assertSameValues = (actual, expected, message) => {
  assert(
    actual.length === expected.length &&
      expected.every((value) => actual.includes(value)),
    `${message} Expected ${expected.join(', ')}; received ${actual.join(', ')}.`,
  );
};

const assertHreflangs = (html, expected, pageName) => {
  const actual = getHreflangs(html);
  const actualCodes = actual.map(({ hreflang }) => hreflang);

  assertSameValues(
    actualCodes,
    Object.keys(expected),
    `${pageName} has incorrect hreflang codes.`,
  );

  for (const [hreflang, href] of Object.entries(expected)) {
    assert(
      actual.some(
        (alternate) =>
          alternate.hreflang === hreflang && alternate.href === href,
      ),
      `${pageName} has an incorrect ${hreflang} hreflang URL.`,
    );
  }
};

const assertOpenGraphLocales = (
  html,
  primary,
  expectedAlternates,
  pageName,
) => {
  assert(
    getOpenGraphLocale(html) === primary,
    `${pageName} has an incorrect primary Open Graph locale.`,
  );
  assertSameValues(
    getOpenGraphAlternates(html),
    expectedAlternates,
    `${pageName} has incorrect alternate Open Graph locales.`,
  );
};

const localeSource = read('src/data/languages.ts');
const navigationSource = read('src/data/navigation.ts');
const astroConfig = read('astro.config.ts');
const footerSource = read('src/i18n/footer.ts');
const uiSource = read('src/i18n/ui.ts');
const centralLocaleSources = [
  localeSource,
  navigationSource,
  astroConfig,
  footerSource,
  uiSource,
].join('\n');

assert(
  localeSource.includes(
    "export const localeCodes = ['en', 'es', 'ru'] as const;",
  ),
  'The Locale union must contain exactly en, es and ru.',
);
assert(
  !/(?:code|htmlLang|hreflang):\s*['"](?:fr|it|gr|el)['"]/u.test(
    centralLocaleSources,
  ),
  'A removed French, Italian or Greek locale remains in central configuration.',
);
assert(
  !/(?:^|\s)(?:fr|it|gr|el):\s*['"]/mu.test(centralLocaleSources),
  'A removed French, Italian or Greek locale key remains in central configuration.',
);
assert(
  !/['"]\/(?:fr|it|gr)(?:\/|['"])/u.test(centralLocaleSources),
  'A removed French, Italian or Greek route remains in central configuration.',
);

for (const locale of ['fr', 'it', 'gr']) {
  assert(
    !existsSync(resolve(projectRoot, `src/pages/${locale}/index.astro`)),
    `src/pages/${locale}/index.astro must not exist.`,
  );
}

if (existsSync(resolve(projectRoot, 'public/_redirects'))) {
  assert(
    !/^\/\*\s+\/index\.html\s+200(?:\s|$)/mu.test(read('public/_redirects')),
    'The SPA fallback rewrite must not be present.',
  );
}

const distDirectory = resolve(projectRoot, 'dist');
assert(
  existsSync(distDirectory),
  'dist is missing. Run the preview-safe production build first.',
);

if (existsSync(distDirectory)) {
  const htmlFiles = walkHtml(distDirectory);
  const builtPages = new Map(
    htmlFiles.map((path) => [
      relative(distDirectory, path),
      readFileSync(path, 'utf8'),
    ]),
  );

  const englishHome = builtPages.get('index.html') ?? '';
  const spanishHome = builtPages.get('es.html') ?? '';
  const russianHome = builtPages.get('ru.html') ?? '';
  const englishContact = builtPages.get('contact.html') ?? '';
  const spanishContact = builtPages.get('es/contact.html') ?? '';

  for (const requiredPage of [
    'index.html',
    'es.html',
    'ru.html',
    'contact.html',
    'es/contact.html',
  ]) {
    assert(builtPages.has(requiredPage), `dist/${requiredPage} is missing.`);
  }

  for (const removedPath of [
    'fr.html',
    'it.html',
    'gr.html',
    'fr/index.html',
    'it/index.html',
    'gr/index.html',
    'ru/contact.html',
    'es/pre-purchase-survey.html',
  ]) {
    assert(
      !builtPages.has(removedPath),
      `An unsupported route generated dist/${removedPath}.`,
    );
  }

  const homepageAlternates = {
    en: 'https://www.allyachtservice.com/',
    es: 'https://www.allyachtservice.com/es',
    ru: 'https://www.allyachtservice.com/ru',
    'x-default': 'https://www.allyachtservice.com/',
  };
  const contactAlternates = {
    en: 'https://www.allyachtservice.com/contact',
    es: 'https://www.allyachtservice.com/es/contact',
    'x-default': 'https://www.allyachtservice.com/contact',
  };

  assertHreflangs(englishHome, homepageAlternates, '/');
  assertHreflangs(spanishHome, homepageAlternates, '/es');
  assertHreflangs(russianHome, homepageAlternates, '/ru');
  assertHreflangs(englishContact, contactAlternates, '/contact');
  assertHreflangs(spanishContact, contactAlternates, '/es/contact');

  assertOpenGraphLocales(englishHome, 'en_GB', ['es_ES', 'ru_RU'], '/');
  assertOpenGraphLocales(spanishHome, 'es_ES', ['en_GB', 'ru_RU'], '/es');
  assertOpenGraphLocales(russianHome, 'ru_RU', ['en_GB', 'es_ES'], '/ru');
  assertOpenGraphLocales(englishContact, 'en_GB', ['es_ES'], '/contact');
  assertOpenGraphLocales(spanishContact, 'es_ES', ['en_GB'], '/es/contact');

  const englishOnlyPages = [...builtPages.entries()].filter(
    ([path]) =>
      ![
        '404.html',
        'index.html',
        'es.html',
        'ru.html',
        'contact.html',
        'es/contact.html',
      ].includes(path),
  );

  for (const [path, html] of englishOnlyPages) {
    const canonical = html.match(
      /<link\s+rel="canonical"\s+href="([^"]+)"/u,
    )?.[1];

    assert(
      Boolean(canonical),
      `dist/${path} does not contain a canonical URL.`,
    );
    if (canonical) {
      assertHreflangs(
        html,
        { en: canonical, 'x-default': canonical },
        `dist/${path}`,
      );
    }
    assertOpenGraphLocales(html, 'en_GB', [], `dist/${path}`);
  }

  for (const [path, html] of builtPages) {
    const switchers = [
      ...html.matchAll(
        /<nav\s+class="language-switcher[^"]*"[^>]*>[\s\S]*?<\/nav>/gu,
      ),
    ].map((match) => match[0]);

    assert(
      switchers.length > 0,
      `dist/${path} does not contain the shared language switcher.`,
    );
    for (const switcher of switchers) {
      assertSameValues(
        getLinkTexts(switcher),
        ['EN', 'ES', 'RU'],
        `dist/${path} has incorrect visible language-switcher labels.`,
      );
    }

    const footerLanguages = html.match(
      /<ul\s+class="footer-link-list footer-language-list"[^>]*>[\s\S]*?<\/ul>/u,
    )?.[0];
    assert(
      Boolean(footerLanguages),
      `dist/${path} does not contain the shared footer language list.`,
    );
    if (footerLanguages) {
      assertSameValues(
        getLinkTexts(footerLanguages),
        ['EN', 'ES', 'RU'],
        `dist/${path} has incorrect visible footer language labels.`,
      );
    }

    assert(
      !/<a\b[^>]*href="\/(?:fr|it|gr)(?:\/|")/u.test(html),
      `dist/${path} links to a removed language route.`,
    );
    assert(
      !/<link\b[^>]*hreflang="(?:fr|it|el)"/u.test(html),
      `dist/${path} exposes a removed hreflang locale.`,
    );
    assert(
      !/<meta\b[^>]*content="(?:fr_FR|it_IT|el_GR)"/u.test(html),
      `dist/${path} exposes a removed Open Graph locale.`,
    );
  }

  assert(
    spanishContact.includes('<html lang="es">'),
    '/es/contact must use html lang="es".',
  );
  assert(
    (spanishContact.match(/<h1(?:\s|>)/gu) ?? []).length === 1,
    '/es/contact must contain exactly one H1.',
  );
  assert(
    spanishContact.includes('<h1>Contacte con All Yacht Service</h1>'),
    '/es/contact has an incorrect H1.',
  );
  assert(
    spanishContact.includes('<title>Contacto | All Yacht Service</title>'),
    '/es/contact has an incorrect title.',
  );
  assert(
    spanishContact.includes(
      '<meta name="description" content="Contacte con All Yacht Service para solicitar una inspección de yate, valoración, asistencia al comprador o entrega profesional.">',
    ),
    '/es/contact has an incorrect description.',
  );
  assert(
    spanishContact.includes(
      '<link rel="canonical" href="https://www.allyachtservice.com/es/contact">',
    ) &&
      spanishContact.includes(
        '<meta property="og:url" content="https://www.allyachtservice.com/es/contact">',
      ),
    '/es/contact canonical or Open Graph URL is incorrect.',
  );
  assert(
    spanishContact.includes('<meta name="robots" content="noindex, nofollow">'),
    '/es/contact preview must be noindex, nofollow.',
  );

  const schemas = getSchema(spanishContact);
  assert(
    schemaIncludes(schemas, 'ProfessionalService') &&
      schemaIncludes(schemas, 'ContactPage') &&
      schemaIncludes(schemas, 'BreadcrumbList'),
    '/es/contact is missing required structured data.',
  );
  assert(
    JSON.stringify(schemas).includes(
      'https://www.allyachtservice.com/#business',
    ) &&
      JSON.stringify(schemas).includes(
        'https://www.allyachtservice.com/es/contact#page',
      ),
    '/es/contact structured data does not use the stable entity IDs.',
  );
  assert(
    spanishContact.includes('name="locale" value="es"') &&
      spanishContact.includes('value="pre-purchase-survey"') &&
      spanishContact.includes('value="insurance-survey"') &&
      spanishContact.includes('value="valuation-damage-survey"') &&
      spanishContact.includes('value="buyer-representation"') &&
      spanishContact.includes('value="yacht-delivery"'),
    'Spanish Contact does not preserve locale or canonical service values.',
  );
  assert(
    spanishContact.includes('href="/privacy-policy"') &&
      spanishContact.includes('Política de privacidad') &&
      spanishContact.includes('Disponible actualmente en inglés.'),
    'Spanish Contact privacy acknowledgement is incorrect.',
  );
  assert(
    spanishContact.includes('Enviar consulta') &&
      spanishContact.includes('Adjuntar archivos') &&
      spanishContact.includes('Máximo de 2 MB por archivo y 3 MB en total'),
    'Spanish Contact form labels or attachment limits are incorrect.',
  );
  assert(
    englishContact.includes(
      '<title>Contact a Yacht Surveyor in Spain | All Yacht Service</title>',
    ) &&
      englishContact.includes('Tell Us About Your Requirements') &&
      englishContact.includes('Send Enquiry'),
    'English Contact content has regressed.',
  );

  const sitemap = ['dist/sitemap-0.xml', 'dist/sitemap-index.xml']
    .filter((path) => existsSync(resolve(projectRoot, path)))
    .map(read)
    .join('\n');

  assert(
    sitemap.includes('<loc>https://www.allyachtservice.com</loc>') &&
      sitemap.includes('<loc>https://www.allyachtservice.com/es</loc>') &&
      sitemap.includes('<loc>https://www.allyachtservice.com/ru</loc>') &&
      sitemap.includes('<loc>https://www.allyachtservice.com/contact</loc>') &&
      sitemap.includes('<loc>https://www.allyachtservice.com/es/contact</loc>'),
    'The sitemap is missing a supported route.',
  );
  assert(
    !/<loc>https:\/\/www\.allyachtservice\.com\/(?:fr|it|gr)(?:\/|<)/u.test(
      sitemap,
    ),
    'The sitemap exposes a removed language route.',
  );
  assert(
    !sitemap.includes(
      '<loc>https://www.allyachtservice.com/es/pre-purchase-survey</loc>',
    ) &&
      !sitemap.includes(
        '<loc>https://www.allyachtservice.com/ru/contact</loc>',
      ),
    'The sitemap exposes an untranslated route.',
  );
}

if (failures.length > 0) {
  process.stderr.write('Localisation validation failed:\n');
  for (const failure of failures) process.stderr.write(`- ${failure}\n`);
  process.exitCode = 1;
} else {
  process.stdout.write(
    'Localisation validation passed for 3 supported locales, published equivalents, and removed-route boundaries.\n',
  );
}
