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

const absolute = (pathname) =>
  `https://www.allyachtservice.com${pathname === '/' ? '/' : pathname}`;
const routeToFile = (pathname) =>
  pathname === '/' ? 'index.html' : `${pathname.slice(1)}.html`;
const getHreflangs = (html) =>
  [
    ...html.matchAll(
      /<link\s+rel="alternate"\s+hreflang="([^"]+)"\s+href="([^"]+)"/gu,
    ),
  ].map((match) => ({ code: match[1], href: match[2] }));
const getSchemas = (html, pathname) => {
  const schemas = [];
  for (const match of html.matchAll(
    /<script[^>]+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gu,
  )) {
    try {
      const parsed = JSON.parse(match[1]);
      schemas.push(...(Array.isArray(parsed) ? parsed : [parsed]));
    } catch (error) {
      failures.push(`${pathname} contains invalid JSON-LD: ${error.message}`);
    }
  }
  return schemas;
};
const visibleText = (html) =>
  html
    .replace(/<script\b[\s\S]*?<\/script>/giu, ' ')
    .replace(/<style\b[\s\S]*?<\/style>/giu, ' ')
    .replace(/<[^>]+>/gu, ' ')
    .replace(/&(?:amp|#38);/gu, '&')
    .replace(/&(?:nbsp|#160);/gu, ' ')
    .replace(/\s+/gu, ' ')
    .trim();

const navigationSource = read('src/data/navigation.ts');
const languageSource = read('src/data/languages.ts');
const uiSource = read('src/i18n/ui.ts');
const footerSource = read('src/i18n/footer.ts');
const contactCopySource = read('src/i18n/contact.ts');
const contactFormSource = read('src/components/ContactForm.astro');
const headerSource = read('src/components/Header.astro');
const mobileSource = read('src/components/MobileNavigation.astro');
const contactValidationSource = read('functions/_lib/contact-form.ts');
const emailSource = read('functions/_lib/email.ts');
const surveyEstimateSource = read(
  'src/lib/calculators/prePurchaseSurveyEstimate.ts',
);
const deliveryEstimateSource = read(
  'src/lib/calculators/yachtDeliveryEstimate.ts',
);

assert(
  languageSource.includes(
    "export const localeCodes = ['en', 'es', 'ru'] as const;",
  ),
  'The supported locale union must remain exactly en, es and ru.',
);
assert(
  !/(?:code|htmlLang|hreflang):\s*['"](?:fr|it|gr|el)['"]/u.test(
    `${languageSource}\n${navigationSource}`,
  ),
  'A removed French, Italian or Greek locale remains configured.',
);
assert(
  navigationSource.includes("ru: '/ru/contact'"),
  'Contact route equivalence does not include /ru/contact.',
);
assert(
  contactCopySource.includes("locale: 'ru-RU'") &&
    contactCopySource.includes(
      "'pre-purchase-survey': 'Предпокупочный сюрвейерский осмотр'",
    ) &&
    contactCopySource.includes(
      "'insurance-survey': 'Сюрвейерский осмотр для страхования'",
    ) &&
    contactCopySource.includes(
      "'valuation-damage-survey': 'Оценка стоимости или ущерба'",
    ) &&
    contactCopySource.includes(
      "'buyer-representation': 'Представительство покупателя'",
    ) &&
    contactCopySource.includes("'yacht-delivery': 'Перегон яхты'"),
  'Russian Contact labels or ru-RU formatting are incomplete.',
);
assert(
  contactFormSource.includes("getRoutePath('privacyPolicy', contactLocale)") &&
    contactFormSource.includes("getRequiredRoutePath('privacyPolicy', 'en')") &&
    !contactFormSource.includes(
      "getRequiredRoutePath('privacyPolicy', contactLocale)",
    ),
  'Russian Contact must fall back explicitly to the published English Privacy Policy.',
);
assert(
  contactValidationSource.includes(
    "type SubmissionLocale = 'en' | 'es' | 'ru'",
  ) &&
    emailSource.includes("submission.locale === 'ru'") &&
    emailSource.includes("return 'Russian'"),
  'The secure Contact pipeline does not identify Russian submissions.',
);
assert(
  surveyEstimateSource.includes("'ays:pre-purchase-survey-estimate:v1'") &&
    deliveryEstimateSource.includes("'ays:yacht-delivery-estimate:v1'") &&
    !/ays:[^'"]*ru/iu.test(
      `${surveyEstimateSource}\n${deliveryEstimateSource}\n${contactFormSource}`,
    ),
  'Calculator storage keys changed or a Russian-only storage key was added.',
);
assert(
  headerSource.includes("event.key === 'ArrowDown'") &&
    headerSource.includes("'ArrowUp'") &&
    headerSource.includes("event.key === 'Escape'") &&
    headerSource.includes("document.addEventListener('focusin'") &&
    headerSource.includes("document.addEventListener('pointerdown'") &&
    !/dropdown\.addEventListener\(\s*['"]click['"]/u.test(headerSource),
  'The proven desktop Services disclosure behaviour has regressed.',
);
assert(
  mobileSource.includes('primaryNavigation.map') &&
    !mobileSource.includes('serviceNavigation.map'),
  'The mobile navigation must remain a flat list.',
);
assert(
  uiSource.includes("skipToContent: 'Перейти к содержимому'") &&
    uiSource.includes("openMenu: 'Открыть меню навигации'") &&
    footerSource.includes(
      "appointments: 'Рекомендуется предварительная запись.'",
    ),
  'Shared Russian interface or footer copy is incomplete.',
);

const unsupportedRussianRoutes = [
  '/ru/pre-purchase-survey',
  '/ru/insurance-survey',
  '/ru/buyer-representation',
  '/ru/yacht-delivery',
  '/ru/valuation-damage-survey',
  '/ru/about-us',
  '/ru/pre-purchase-survey-calculator',
  '/ru/yacht-delivery-calculator',
  '/ru/yacht-survey-tips',
  '/ru/yachts-for-sale',
  '/ru/privacy-policy',
  '/ru/cookie-policy',
  '/ru/legal-notice',
  '/ru/terms-and-conditions',
];
for (const pathname of unsupportedRussianRoutes) {
  assert(
    !existsSync(resolve(projectRoot, `src/pages/${pathname.slice(1)}.astro`)),
    `Unsupported source route ${pathname} must not exist.`,
  );
}

const distDirectory = resolve(projectRoot, 'dist');
assert(
  existsSync(distDirectory),
  'dist is missing. Run PUBLIC_SITE_INDEXABLE=false npm run build first.',
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

  for (const pathname of [
    '/',
    '/es',
    '/ru',
    '/contact',
    '/es/contact',
    '/ru/contact',
    '/privacy-policy',
  ]) {
    assert(
      builtPages.has(routeToFile(pathname)),
      `dist/${routeToFile(pathname)} is missing.`,
    );
  }
  for (const pathname of [...unsupportedRussianRoutes, '/fr', '/it', '/gr']) {
    assert(
      !builtPages.has(routeToFile(pathname)),
      `Unsupported route ${pathname} was generated.`,
    );
  }

  const expectedAlternates = {
    home: [
      ['en', absolute('/')],
      ['es', absolute('/es')],
      ['ru', absolute('/ru')],
      ['x-default', absolute('/')],
    ],
    contact: [
      ['en', absolute('/contact')],
      ['es', absolute('/es/contact')],
      ['ru', absolute('/ru/contact')],
      ['x-default', absolute('/contact')],
    ],
  };
  for (const [pathname, kind] of [
    ['/', 'home'],
    ['/es', 'home'],
    ['/ru', 'home'],
    ['/contact', 'contact'],
    ['/es/contact', 'contact'],
    ['/ru/contact', 'contact'],
  ]) {
    const actual = getHreflangs(getBuiltPage(pathname));
    const expected = expectedAlternates[kind];
    assert(
      actual.length === expected.length &&
        expected.every(([code, href]) =>
          actual.some((item) => item.code === code && item.href === href),
        ),
      `${pathname} has incorrect EN/ES/RU hreflang equivalence.`,
    );
  }

  const russianHome = getBuiltPage('/ru');
  const russianContact = getBuiltPage('/ru/contact');
  assert(
    russianHome.includes('<html lang="ru">') &&
      russianHome.includes(
        '<link rel="canonical" href="https://www.allyachtservice.com/ru">',
      ) &&
      russianHome.includes('<meta property="og:locale" content="ru_RU">') &&
      russianHome.includes(
        '<meta property="og:image:alt" content="Парусная яхта в море">',
      ) &&
      russianHome.includes('href="/ru/contact"') &&
      !russianHome.includes('Содержание готовится'),
    '/ru homepage metadata, Contact route or completed content is incorrect.',
  );
  assert(
    russianContact.includes('<html lang="ru">') &&
      russianContact.includes('<title>Контакты | All Yacht Service</title>') &&
      russianContact.includes(
        '<meta name="description" content="Свяжитесь с All Yacht Service, чтобы запросить сюрвейерский осмотр яхты, оценку стоимости или ущерба, поддержку покупателя или профессиональный перегон.">',
      ) &&
      russianContact.includes(
        '<link rel="canonical" href="https://www.allyachtservice.com/ru/contact">',
      ) &&
      russianContact.includes(
        '<meta property="og:url" content="https://www.allyachtservice.com/ru/contact">',
      ) &&
      russianContact.includes('<meta property="og:locale" content="ru_RU">') &&
      russianContact.includes(
        '<meta property="og:image:alt" content="Парусная яхта в Средиземном море, в зоне работы All Yacht Service">',
      ),
    '/ru/contact metadata is incomplete or incorrect.',
  );
  assert(
    (russianContact.match(/<h1(?:\s|>)/gu) ?? []).length === 1 &&
      russianContact.includes('<h1>Связаться с All Yacht Service</h1>'),
    '/ru/contact must contain exactly one correct H1.',
  );
  assert(
    russianContact.includes('name="locale" value="ru"') &&
      russianContact.includes('novalidate') &&
      russianContact.includes('>Предпочтительная дата<') &&
      russianContact.includes('href="/privacy-policy"') &&
      russianContact.includes(
        'В настоящее время доступна на английском языке.',
      ),
    '/ru/contact locale, validation or Privacy Policy fallback is incorrect.',
  );
  for (const value of [
    'pre-purchase-survey',
    'insurance-survey',
    'valuation-damage-survey',
    'buyer-representation',
    'yacht-delivery',
    'general-enquiry',
  ]) {
    assert(
      russianContact.includes(`value="${value}"`),
      `/ru/contact is missing canonical service value ${value}.`,
    );
  }
  for (const label of [
    'Имя',
    'Электронная почта',
    'Телефон / WhatsApp',
    'Требуемая услуга',
    'Тип судна',
    'Длина яхты',
    'Местонахождение яхты',
    'Предпочтительная дата',
    'Сообщение',
    'Прикрепить файлы',
    'Отправить запрос',
  ]) {
    assert(
      visibleText(russianContact).includes(label),
      `/ru/contact is missing visible Russian form text: ${label}.`,
    );
  }

  const schemas = getSchemas(russianContact, '/ru/contact');
  assert(
    schemas.some(
      (schema) =>
        schema['@type'] === 'ContactPage' &&
        schema['@id'] === `${absolute('/ru/contact')}#page` &&
        schema.inLanguage === 'ru' &&
        schema.mainEntity?.['@id'] ===
          'https://www.allyachtservice.com/#business',
    ),
    '/ru/contact is missing its stable Russian ContactPage schema.',
  );
  assert(
    schemas.some(
      (schema) =>
        schema['@type'] === 'BreadcrumbList' &&
        schema.itemListElement?.[0]?.name === 'Главная' &&
        schema.itemListElement?.[1]?.name === 'Контакты',
    ),
    '/ru/contact is missing localized BreadcrumbList schema.',
  );
  assert(
    schemas.filter(
      (schema) =>
        schema['@type'] === 'ProfessionalService' &&
        schema['@id'] === 'https://www.allyachtservice.com/#business',
    ).length === 1,
    '/ru/contact must expose exactly one stable business entity.',
  );

  for (const [path, html] of builtPages) {
    if (
      path !== 'index.html' &&
      path !== 'es.html' &&
      path !== 'ru.html' &&
      path !== 'contact.html' &&
      path !== 'es/contact.html' &&
      path !== 'ru/contact.html'
    ) {
      assert(
        !getHreflangs(html).some(({ code }) => code === 'ru'),
        `dist/${path} incorrectly exposes Russian hreflang.`,
      );
    }
    const ids = [...html.matchAll(/\sid="([^"]+)"/gu)].map((match) => match[1]);
    assert(
      ids.length === new Set(ids).size,
      `dist/${path} contains duplicate IDs.`,
    );
    assert(
      !/<a\b[^>]*href=""[^>]*>/u.test(html),
      `dist/${path} contains an empty link.`,
    );
    assert(
      !/<button\b[^>]*>\s*<\/button>/u.test(html),
      `dist/${path} contains an empty button.`,
    );
  }

  const builtRouteSet = new Set(
    [...builtPages.keys()].map((path) =>
      path === 'index.html' ? '/' : `/${path.replace(/\.html$/u, '')}`,
    ),
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

  const sitemap = ['dist/sitemap-index.xml', 'dist/sitemap-0.xml']
    .filter((path) => existsSync(resolve(projectRoot, path)))
    .map(read)
    .join('\n');
  assert(
    sitemap.includes('<loc>https://www.allyachtservice.com/ru/contact</loc>'),
    'The sitemap does not contain /ru/contact.',
  );
  for (const pathname of unsupportedRussianRoutes) {
    assert(
      !sitemap.includes(`<loc>${absolute(pathname)}</loc>`),
      `The sitemap contains unsupported route ${pathname}.`,
    );
  }
}

if (failures.length > 0) {
  process.stderr.write('Russian localisation validation failed:\n');
  for (const failure of failures) process.stderr.write(`- ${failure}\n`);
  process.exitCode = 1;
} else {
  process.stdout.write('Russian localisation validation passed.\n');
}
