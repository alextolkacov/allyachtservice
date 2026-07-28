import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { createHash } from 'node:crypto';
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

const getSchemas = (html, pageName) => {
  const schemas = [];

  for (const match of html.matchAll(
    /<script[^>]+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gu,
  )) {
    try {
      const parsed = JSON.parse(match[1]);
      schemas.push(...(Array.isArray(parsed) ? parsed : [parsed]));
    } catch (error) {
      failures.push(`${pageName} contains invalid JSON-LD: ${error.message}`);
    }
  }

  return schemas;
};

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

const absolute = (pathname) =>
  `https://www.allyachtservice.com${pathname === '/' ? '/' : pathname}`;
const routeToFile = (pathname) => {
  if (pathname === '/') return 'index.html';
  return `${pathname.slice(1)}.html`;
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

const translatedPages = [
  {
    en: '/pre-purchase-survey',
    es: '/es/pre-purchase-survey',
    title: 'Inspección precompra de yates en España | All Yacht Service',
    description:
      'Inspección precompra independiente para yates a vela, yates a motor y catamaranes en España y el Mediterráneo.',
    h1: 'Inspección precompra de yates en España',
    pageType: 'WebPage',
    serviceCount: 1,
    serviceCode: 'pre-purchase-survey',
  },
  {
    en: '/insurance-survey',
    es: '/es/insurance-survey',
    title: 'Inspección de yates para seguro en España | All Yacht Service',
    description:
      'Inspecciones independientes de condición para seguro de yates en España y el Mediterráneo, con informes claros sobre estado y seguridad.',
    h1: 'Inspección de condición para seguro de yates',
    pageType: 'WebPage',
    serviceCount: 1,
    serviceCode: 'insurance-survey',
  },
  {
    en: '/buyer-representation',
    es: '/es/buyer-representation',
    title: 'Representación para compradores de yates | All Yacht Service',
    description:
      'Asistencia técnica independiente para compradores de yates antes, durante y después de la compra en España y el Mediterráneo.',
    h1: 'Representación independiente para compradores de yates',
    pageType: 'WebPage',
    serviceCount: 1,
    serviceCode: 'buyer-representation',
  },
  {
    en: '/yacht-delivery',
    es: '/es/yacht-delivery',
    title:
      'Entrega profesional de yates en el Mediterráneo | All Yacht Service',
    description:
      'Servicio profesional de entrega de yates en España y el Mediterráneo, con planificación, preparación y asistencia técnica.',
    h1: 'Entrega profesional de yates en España y el Mediterráneo',
    pageType: 'WebPage',
    serviceCount: 1,
    serviceCode: 'yacht-delivery',
  },
  {
    en: '/valuation-damage-survey',
    es: '/es/valuation-damage-survey',
    title: 'Valoración y evaluación de daños de yates | All Yacht Service',
    description:
      'Valoración independiente y evaluación de daños de yates en España y el Mediterráneo, con pruebas documentadas e informes claros.',
    h1: 'Valoración y evaluación de daños de yates en España',
    pageType: 'WebPage',
    serviceCount: 2,
    serviceCode: 'valuation-damage-survey',
  },
  {
    en: '/about-us',
    es: '/es/about-us',
    title: 'Sobre All Yacht Service | Inspector naval de yates',
    description:
      'Conozca All Yacht Service y a Aleksandrs Tolkacovs, inspector naval certificado por IIMS con base en Altea, España.',
    h1: 'Sobre All Yacht Service',
    pageType: 'AboutPage',
    serviceCount: 0,
  },
  {
    en: '/pre-purchase-survey-calculator',
    es: '/es/pre-purchase-survey-calculator',
    title: 'Calculadora de inspección precompra | All Yacht Service',
    description:
      'Calcule una estimación inicial del coste de una inspección precompra de un yate según su eslora, tipo y alcance de inspección.',
    h1: 'Calculadora del coste de una inspección precompra',
    pageType: 'WebPage',
    serviceCount: 0,
    serviceCode: 'pre-purchase-survey',
  },
  {
    en: '/yacht-delivery-calculator',
    es: '/es/yacht-delivery-calculator',
    title: 'Calculadora de entrega de yates | All Yacht Service',
    description:
      'Calcule una estimación inicial de la distancia marítima y los honorarios profesionales para la entrega de un yate en el Mediterráneo.',
    h1: 'Calculadora de entrega profesional de yates',
    pageType: 'WebPage',
    serviceCount: 0,
    serviceCode: 'yacht-delivery',
  },
];

const spanishSurveyTipsPages = [
  {
    en: '/yacht-survey-tips',
    es: '/es/yacht-survey-tips',
    title: 'Consejos para la inspección de yates | All Yacht Service',
    description:
      'Consejos profesionales para compradores y propietarios de yates sobre inspecciones, defectos habituales, mantenimiento y evaluación del estado.',
    h1: 'Consejos para la inspección de yates',
    article: false,
  },
  {
    en: '/yacht-survey-tips/deck-moisture-soft-spots',
    es: '/es/yacht-survey-tips/deck-moisture-soft-spots',
    title: 'Humedad y zonas blandas en la cubierta | All Yacht Service',
    description:
      'Aprenda por qué aparece humedad en la cubierta de un yate, qué señales debe buscar un comprador y cómo se evalúan durante una inspección precompra.',
    h1: 'Humedad y zonas blandas en la cubierta: qué deben saber los compradores de yates',
    article: true,
    datePublished: '2026-07',
    dateModified: '2026-07-28',
    image: '/images/yacht-survey-tips/deck-moisture-soft-spots.png',
  },
  {
    en: '/yacht-survey-tips/shiny-hull',
    es: '/es/yacht-survey-tips/shiny-hull',
    title: 'Casco brillante y reparaciones anteriores | All Yacht Service',
    description:
      'Un casco brillante puede hacer menos visibles reparaciones o daños anteriores. Descubra qué debe comprobar un comprador antes de adquirir un yate usado.',
    h1: '¿Se puede confiar en un casco brillante? Qué debe comprobar un comprador de un yate usado',
    article: true,
    datePublished: '2026-07-28',
    dateModified: '2026-07-28',
    image: '/images/yacht-survey-tips/shiny-yacht-hull-hidden-repairs.png',
  },
];

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
  const getBuiltPage = (pathname) =>
    builtPages.get(routeToFile(pathname)) ?? '';

  const requiredRoutes = [
    '/',
    '/es',
    '/ru',
    '/contact',
    '/es/contact',
    ...translatedPages.flatMap(({ en, es }) => [en, es]),
    ...spanishSurveyTipsPages.flatMap(({ en, es }) => [en, es]),
  ];
  for (const pathname of requiredRoutes) {
    assert(
      builtPages.has(routeToFile(pathname)),
      `dist/${routeToFile(pathname)} is missing.`,
    );
  }

  const forbiddenRoutes = [
    '/fr',
    '/it',
    '/gr',
    '/ru/contact',
    '/ru/yacht-survey-tips',
    '/ru/yacht-survey-tips/deck-moisture-soft-spots',
    '/ru/yacht-survey-tips/shiny-hull',
    '/es/yachts-for-sale',
    '/es/privacy-policy',
    '/es/cookie-policy',
    '/es/legal-notice',
    '/es/terms-and-conditions',
  ];
  for (const pathname of forbiddenRoutes) {
    assert(
      !builtPages.has(routeToFile(pathname)),
      `An unsupported route generated dist/${routeToFile(pathname)}.`,
    );
  }

  const englishHome = getBuiltPage('/');
  const spanishHome = getBuiltPage('/es');
  const russianHome = getBuiltPage('/ru');
  const englishContact = getBuiltPage('/contact');
  const spanishContact = getBuiltPage('/es/contact');
  const homepageAlternates = {
    en: absolute('/'),
    es: absolute('/es'),
    ru: absolute('/ru'),
    'x-default': absolute('/'),
  };
  const contactAlternates = {
    en: absolute('/contact'),
    es: absolute('/es/contact'),
    'x-default': absolute('/contact'),
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

  for (const page of translatedPages) {
    const english = getBuiltPage(page.en);
    const spanish = getBuiltPage(page.es);
    const alternates = {
      en: absolute(page.en),
      es: absolute(page.es),
      'x-default': absolute(page.en),
    };

    assertHreflangs(english, alternates, page.en);
    assertHreflangs(spanish, alternates, page.es);
    assertOpenGraphLocales(english, 'en_GB', ['es_ES'], page.en);
    assertOpenGraphLocales(spanish, 'es_ES', ['en_GB'], page.es);

    assert(
      !getHreflangs(english).some(({ hreflang }) => hreflang === 'ru') &&
        !getHreflangs(spanish).some(({ hreflang }) => hreflang === 'ru'),
      `${page.en} or ${page.es} exposes a Russian homepage fallback as hreflang.`,
    );
    assert(
      spanish.includes('<html lang="es">'),
      `${page.es} must use html lang="es".`,
    );
    assert(
      (spanish.match(/<h1(?:\s|>)/gu) ?? []).length === 1,
      `${page.es} must contain exactly one H1.`,
    );
    assert(
      spanish.includes(`<h1>${page.h1}</h1>`),
      `${page.es} has an incorrect H1.`,
    );
    assert(
      spanish.includes(`<title>${page.title}</title>`),
      `${page.es} has an incorrect title.`,
    );
    assert(
      spanish.includes(
        `<meta name="description" content="${page.description}">`,
      ),
      `${page.es} has an incorrect description.`,
    );
    assert(
      spanish.includes(`<link rel="canonical" href="${absolute(page.es)}">`) &&
        spanish.includes(
          `<meta property="og:url" content="${absolute(page.es)}">`,
        ),
      `${page.es} canonical or Open Graph URL is incorrect.`,
    );
    assert(
      spanish.includes(`<meta property="og:title" content="${page.title}">`) &&
        spanish.includes(`<meta name="twitter:title" content="${page.title}">`),
      `${page.es} Open Graph or Twitter title is incorrect.`,
    );
    assert(
      spanish.includes('<meta name="robots" content="noindex, nofollow">'),
      `${page.es} preview must be noindex, nofollow.`,
    );

    const schemas = getSchemas(spanish, page.es);
    const pageId = `${absolute(page.es)}#page`;
    assert(
      schemas.some(
        (schema) =>
          schema['@type'] === page.pageType && schema['@id'] === pageId,
      ),
      `${page.es} is missing its ${page.pageType} schema with the stable page ID.`,
    );
    assert(
      schemas.some((schema) => schema['@type'] === 'BreadcrumbList'),
      `${page.es} is missing BreadcrumbList schema.`,
    );
    assert(
      schemas.filter((schema) => schema['@type'] === 'Service').length ===
        page.serviceCount,
      `${page.es} has an incorrect number of Service schemas.`,
    );
    for (const service of schemas.filter(
      (schema) => schema['@type'] === 'Service',
    )) {
      assert(
        service.provider?.['@id'] ===
          'https://www.allyachtservice.com/#business',
        `${page.es} Service schema has an incorrect provider ID.`,
      );
    }
    assert(
      JSON.stringify(schemas).includes(
        'https://www.allyachtservice.com/#business',
      ),
      `${page.es} does not reference the stable business entity.`,
    );

    if (page.serviceCode) {
      assert(
        spanish.includes(`href="/es/contact?service=${page.serviceCode}`),
        `${page.es} does not preserve the canonical Contact service code.`,
      );
    }
  }

  for (const page of spanishSurveyTipsPages) {
    const english = getBuiltPage(page.en);
    const spanish = getBuiltPage(page.es);
    const alternates = {
      en: absolute(page.en),
      es: absolute(page.es),
      'x-default': absolute(page.en),
    };

    assertHreflangs(english, alternates, page.en);
    assertHreflangs(spanish, alternates, page.es);
    assertOpenGraphLocales(english, 'en_GB', ['es_ES'], page.en);
    assertOpenGraphLocales(spanish, 'es_ES', ['en_GB'], page.es);
    assert(
      !getHreflangs(english).some(({ hreflang }) => hreflang === 'ru') &&
        !getHreflangs(spanish).some(({ hreflang }) => hreflang === 'ru'),
      `${page.en} or ${page.es} exposes a Russian homepage fallback as hreflang.`,
    );
    assert(
      spanish.includes('<html lang="es">'),
      `${page.es} must use html lang="es".`,
    );
    assert(
      (spanish.match(/<h1(?:\s|>)/gu) ?? []).length === 1 &&
        spanish.includes(`<h1>${page.h1}</h1>`),
      `${page.es} must contain its single required H1.`,
    );
    assert(
      spanish.includes(`<title>${page.title}</title>`) &&
        spanish.includes(
          `<meta name="description" content="${page.description}">`,
        ),
      `${page.es} has incorrect Spanish metadata.`,
    );
    assert(
      spanish.includes(`<link rel="canonical" href="${absolute(page.es)}">`) &&
        spanish.includes(
          `<meta property="og:url" content="${absolute(page.es)}">`,
        ) &&
        spanish.includes(
          `<meta property="og:title" content="${page.title}">`,
        ) &&
        spanish.includes(`<meta name="twitter:title" content="${page.title}">`),
      `${page.es} has incorrect canonical or social metadata.`,
    );
    assert(
      spanish.includes('<meta name="robots" content="noindex, nofollow">'),
      `${page.es} preview must be noindex, nofollow.`,
    );

    const schemas = getSchemas(spanish, page.es);
    const pageId = `${absolute(page.es)}#page`;
    assert(
      schemas.some(
        (schema) =>
          schema['@type'] === 'WebPage' &&
          schema['@id'] === pageId &&
          schema.inLanguage === 'es',
      ),
      `${page.es} is missing its Spanish WebPage schema.`,
    );
    assert(
      schemas.some((schema) => schema['@type'] === 'BreadcrumbList'),
      `${page.es} is missing BreadcrumbList schema.`,
    );
    assert(
      JSON.stringify(schemas).includes(
        'https://www.allyachtservice.com/#business',
      ),
      `${page.es} does not reference the stable business entity.`,
    );

    if (page.article) {
      const articleSchema = schemas.find(
        (schema) => schema['@type'] === 'Article',
      );
      assert(
        articleSchema?.['@id'] === `${absolute(page.es)}#article` &&
          articleSchema.inLanguage === 'es' &&
          articleSchema.datePublished === page.datePublished &&
          articleSchema.dateModified === page.dateModified &&
          articleSchema.timeRequired === 'PT5M' &&
          articleSchema.author?.['@id'] ===
            'https://www.allyachtservice.com/about-us#aleksandrs-tolkacovs' &&
          articleSchema.publisher?.['@id'] ===
            'https://www.allyachtservice.com/#business',
        `${page.es} has incomplete or unstable Article schema.`,
      );
      assert(
        spanish.includes(`src="${page.image}"`) &&
          spanish.includes('width="1122"') &&
          spanish.includes('height="1402"'),
        `${page.es} does not preserve the complete intrinsic article graphic.`,
      );
    }
  }

  const aboutSchemas = getSchemas(getBuiltPage('/es/about-us'), '/es/about-us');
  assert(
    aboutSchemas.some(
      (schema) =>
        schema['@type'] === 'Person' &&
        schema['@id'] ===
          'https://www.allyachtservice.com/about-us#aleksandrs-tolkacovs',
    ),
    '/es/about-us does not reuse the stable Aleksandrs Person ID.',
  );

  const translatedServiceRoutes = translatedPages.map(({ es }) => es);
  for (const pathname of translatedServiceRoutes) {
    assert(
      spanishHome.includes(`href="${pathname}"`),
      `/es homepage does not link to ${pathname}.`,
    );
  }
  for (const pathname of translatedServiceRoutes.filter(
    (route) => route !== '/es/about-us',
  )) {
    assert(
      spanishContact.includes(`href="${pathname}"`),
      `/es/contact guidance does not link to ${pathname}.`,
    );
  }

  const navigationRoutes = translatedServiceRoutes.filter(
    (route) => route !== '/es/about-us',
  );
  for (const page of translatedPages) {
    const spanish = getBuiltPage(page.es);
    for (const pathname of [...navigationRoutes, '/es/about-us']) {
      assert(
        spanish.includes(`href="${pathname}"`),
        `${page.es} shared Spanish navigation does not link to ${pathname}.`,
      );
    }
    assert(
      spanish.includes('href="/yachts-for-sale"') && spanish.includes('inglés'),
      `${page.es} does not identify Yachts for Sale as English-only.`,
    );
  }

  assert(
    getBuiltPage('/es/pre-purchase-survey').includes(
      'href="/es/pre-purchase-survey-calculator"',
    ) &&
      !getBuiltPage('/es/pre-purchase-survey').includes(
        'calculadora disponible actualmente en inglés',
      ),
    'The Spanish survey service does not link to the translated calculator.',
  );
  assert(
    getBuiltPage('/es/yacht-delivery').includes(
      'href="/es/yacht-delivery-calculator"',
    ) &&
      !getBuiltPage('/es/yacht-delivery').includes(
        'calculadora disponible actualmente en inglés',
      ),
    'The Spanish delivery service does not link to the translated calculator.',
  );
  assert(
    spanishHome.includes('href="/es/yacht-survey-tips"'),
    'The Spanish homepage does not link to the translated Survey Tips hub.',
  );
  assert(
    getBuiltPage('/es/yacht-survey-tips').includes(
      'href="/es/yacht-survey-tips/shiny-hull"',
    ) &&
      getBuiltPage('/es/yacht-survey-tips').includes(
        'href="/es/yacht-survey-tips/deck-moisture-soft-spots"',
      ),
    'The Spanish Survey Tips hub does not link to both published articles.',
  );

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
    for (const pathname of forbiddenRoutes.filter((route) =>
      route.startsWith('/es/'),
    )) {
      assert(
        !html.includes(`href="${pathname}"`),
        `dist/${path} links to missing translated route ${pathname}.`,
      );
    }
  }

  const builtRouteSet = new Set(
    [...builtPages.keys()].map((path) => {
      if (path === 'index.html') return '/';
      return `/${path.replace(/\.html$/u, '')}`;
    }),
  );
  for (const [path, html] of builtPages) {
    for (const match of html.matchAll(/<a\b[^>]*href="([^"]+)"/gu)) {
      const href = match[1].replace(/&amp;/gu, '&');
      if (!href.startsWith('/') || href.startsWith('//')) continue;
      const pathname = href.split(/[?#]/u)[0] || '/';
      if (pathname.startsWith('/api/')) continue;
      assert(
        builtRouteSet.has(pathname),
        `dist/${path} contains a broken internal link to ${href}.`,
      );
    }
  }

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
    getBuiltPage('/pre-purchase-survey-calculator').includes(
      'data-survey-calculator',
    ) &&
      getBuiltPage('/es/pre-purchase-survey-calculator').includes(
        'data-survey-calculator data-locale="es"',
      ) &&
      getBuiltPage('/yacht-delivery-calculator').includes(
        'data-delivery-calculator',
      ) &&
      getBuiltPage('/es/yacht-delivery-calculator').includes(
        'data-delivery-calculator data-locale="es"',
      ),
    'An English or Spanish calculator is missing or structurally incompatible.',
  );

  const terminologySources = [
    'src/data/es/pre-purchase-survey.ts',
    'src/data/es/insurance-survey.ts',
    'src/data/es/buyer-representation.ts',
    'src/data/es/yacht-delivery.ts',
    'src/data/es/valuation-damage-survey.ts',
    'src/data/es/about-us.ts',
    'src/data/es/yacht-survey-tips.ts',
    'src/data/es/yacht-survey-tips/deck-moisture-soft-spots.ts',
    'src/data/es/yacht-survey-tips/shiny-hull.ts',
  ]
    .map(read)
    .join('\n');
  for (const term of [
    'Inspección precompra',
    'Inspección de condición para seguro',
    'Representación del comprador',
    'Entrega profesional de yates',
    'Valoración de yates',
    'Evaluación de daños',
    'Inspector naval',
    'Informe de inspección',
    'Prueba de mar',
    'Varada',
    'Casco',
    'Cubierta',
    'Aparejo',
    'Inspector naval',
    'Núcleo de la cubierta',
    'Medidor de humedad',
    'Termografía',
    'Prueba de percusión',
    'Cadenotes',
    'Molinete de ancla',
    'Regularidad de las líneas del casco',
    'Enmasillado y alisado',
    'Relaminación',
    'Ósmosis',
  ]) {
    assert(
      terminologySources
        .toLocaleLowerCase('es')
        .includes(term.toLocaleLowerCase('es')),
      `The Spanish terminology audit could not find “${term}”.`,
    );
  }
  assert(
    !/\bencuesta\b/iu.test(terminologySources),
    'A marine survey was mistranslated as “encuesta”.',
  );

  const spanishHub = getBuiltPage('/es/yacht-survey-tips');
  const featuredSection =
    spanishHub.match(
      /survey-tips-featured-section[\s\S]*?survey-tips-categories-section/u,
    )?.[0] ?? '';
  const latestSection =
    spanishHub.match(
      /survey-tips-latest-section[\s\S]*?survey-tips-trust-section/u,
    )?.[0] ?? '';
  assert(
    featuredSection.includes(
      'Humedad y zonas blandas en la cubierta: qué deben saber los compradores de yates',
    ) &&
      !featuredSection.includes(
        '¿Se puede confiar en un casco brillante? Qué debe comprobar un comprador de un yate usado',
      ),
    'Deck Moisture must remain the Spanish Featured Guide.',
  );
  assert(
    latestSection.indexOf(
      '¿Se puede confiar en un casco brillante? Qué debe comprobar un comprador de un yate usado',
    ) <
      latestSection.indexOf(
        'Humedad y zonas blandas en la cubierta: qué deben saber los compradores de yates',
      ),
    'Spanish latest articles are not in newest-first order.',
  );
  const articleGraphicCss =
    read('src/styles/global.css').match(
      /\.survey-article-image-link img\s*\{([\s\S]*?)\}/u,
    )?.[1] ?? '';
  const guideGraphicCss =
    read('src/styles/global.css').match(
      /\.survey-guide-figure img\s*\{([\s\S]*?)\}/u,
    )?.[1] ?? '';
  assert(
    /width:\s*100%/u.test(articleGraphicCss) &&
      /height:\s*auto/u.test(articleGraphicCss) &&
      /object-fit:\s*contain/u.test(articleGraphicCss) &&
      !/object-fit:\s*cover/u.test(articleGraphicCss) &&
      /width:\s*100%/u.test(guideGraphicCss) &&
      /height:\s*auto/u.test(guideGraphicCss) &&
      /object-fit:\s*contain/u.test(guideGraphicCss) &&
      !/object-fit:\s*cover/u.test(guideGraphicCss),
    'Article graphics must retain the shared full-image no-crop rules.',
  );
  const englishImageHashes = {
    'public/images/yacht-survey-tips/deck-moisture-soft-spots.png':
      '77c20ed2604f30518f9e56b2e122b24ddd15481261f1861d38504279ec006404',
    'public/images/yacht-survey-tips/shiny-yacht-hull-hidden-repairs.png':
      'e2e93efaba4cf5ee1c9280ce9c6d017f5836cbb7fd61ceb6a022abd507668ada',
  };
  for (const [path, expectedHash] of Object.entries(englishImageHashes)) {
    const actualHash = createHash('sha256')
      .update(readFileSync(resolve(projectRoot, path)))
      .digest('hex');
    assert(
      actualHash === expectedHash,
      `${path} changed during Spanish localisation.`,
    );
  }

  const sitemap = ['dist/sitemap-0.xml', 'dist/sitemap-index.xml']
    .filter((path) => existsSync(resolve(projectRoot, path)))
    .map(read)
    .join('\n');
  for (const pathname of [
    '/es',
    '/es/contact',
    ...translatedServiceRoutes,
    ...spanishSurveyTipsPages.map(({ es }) => es),
  ]) {
    assert(
      sitemap.includes(`<loc>${absolute(pathname)}</loc>`),
      `The sitemap is missing ${pathname}.`,
    );
  }
  for (const pathname of forbiddenRoutes) {
    assert(
      !sitemap.includes(`<loc>${absolute(pathname)}</loc>`),
      `The sitemap exposes unsupported route ${pathname}.`,
    );
  }
}

if (failures.length > 0) {
  process.stderr.write('Localisation validation failed:\n');
  for (const failure of failures) process.stderr.write(`- ${failure}\n`);
  process.exitCode = 1;
} else {
  process.stdout.write(
    'Localisation validation passed for EN/ES Batch 4 equivalents, Spanish Survey Tips, calculators, navigation, metadata, schemas, sitemap, terminology, article ordering, image integrity, and route boundaries.\n',
  );
}
