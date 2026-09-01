import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { relative, resolve } from 'node:path';
import process from 'node:process';
import { URL } from 'node:url';

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
const sharedFooterSource = read('src/components/Footer.astro');
const contactSectionSource = read('src/components/ContactSection.astro');
const contactCopySource = read('src/i18n/contact.ts');
const contactFormSource = read('src/components/ContactForm.astro');
const policyCopySource = read('src/i18n/policy.ts');
const policyLayoutSource = read('src/components/PolicyPageLayout.astro');
const legalConfigSource = read('src/data/legal.ts');
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
const calculatorCopySource = read('src/i18n/calculators.ts');
const surveyCalculatorSource = read(
  'src/components/PrePurchaseSurveyCalculator.astro',
);
const deliveryCalculatorSource = read(
  'src/components/YachtDeliveryCalculator.astro',
);
const russianHomePageSource = read('src/pages/ru/index.astro');
const russianHomeSource = read('src/data/ru/home.ts');
const russianSurveySource = read('src/data/ru/pre-purchase-survey.ts');
const russianDeliverySource = read('src/data/ru/yacht-delivery.ts');
const russianAboutSource = read('src/data/ru/about-us.ts');
const russianBuyerRepresentationSource = read(
  'src/data/ru/buyer-representation.ts',
);
const russianSurveyTipsSource = read('src/data/ru/yacht-survey-tips.ts');
const russianDeckArticleSource = read(
  'src/data/ru/yacht-survey-tips/deck-moisture-soft-spots.ts',
);
const russianShinyArticleSource = read(
  'src/data/ru/yacht-survey-tips/shiny-hull.ts',
);
const russianSteeringArticleSource = read(
  'src/data/ru/yacht-survey-tips/check-yacht-steering.ts',
);
const russianSeacocksArticleSource = read(
  'src/data/ru/yacht-survey-tips/check-yacht-seacocks.ts',
);
const russianElectricalCorrosionArticleSource = read(
  'src/data/ru/yacht-survey-tips/yacht-electrical-corrosion.ts',
);
const russianStandingRiggingArticleSource = read(
  'src/data/ru/yacht-survey-tips/standing-rigging-warning-signs.ts',
);
const russianYachtsForSaleSource = read('src/data/ru/yachts-for-sale.ts');
const russianYachtsForSalePageSource = read(
  'src/pages/ru/yachts-for-sale.astro',
);
const russianLegalPageSources = {
  privacyPolicy: read('src/pages/ru/privacy-policy.astro'),
  cookiePolicy: read('src/pages/ru/cookie-policy.astro'),
  legalNotice: read('src/pages/ru/legal-notice.astro'),
  termsAndConditions: read('src/pages/ru/terms-and-conditions.astro'),
};
const surveyArticleCardSource = read('src/components/SurveyArticleCard.astro');
const globalStyles = read('src/styles/global.css');

assert(
  !surveyArticleCardSource.includes('featured') &&
    !globalStyles.includes('.survey-article-featured') &&
    !globalStyles.includes('.survey-tips-featured-section') &&
    !russianSurveyTipsSource.includes('featuredArticle'),
  'Unused Featured Guide component, CSS or Russian hub data remains.',
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
const translatedServiceRoutes = [
  {
    en: '/pre-purchase-survey',
    es: '/es/pre-purchase-survey',
    ru: '/ru/pre-purchase-survey',
    title: 'Предпокупочный осмотр яхт в Испании | All Yacht Service',
    description:
      'Независимый предпокупочный сюрвейерский осмотр парусных яхт, моторных яхт и катамаранов в Испании и Средиземноморье.',
    heading: 'Предпокупочный сюрвейерский осмотр яхт в Испании',
  },
  {
    en: '/insurance-survey',
    es: '/es/insurance-survey',
    ru: '/ru/insurance-survey',
    title: 'Осмотр яхты для страхования в Испании | All Yacht Service',
    description:
      'Независимый осмотр технического состояния яхты для страхования в Испании и Средиземноморье с понятным сюрвейерским отчётом.',
    heading: 'Сюрвейерский осмотр яхты для страхования',
  },
  {
    en: '/buyer-representation',
    es: '/es/buyer-representation',
    ru: '/ru/buyer-representation',
    title: 'Представительство покупателей яхт | All Yacht Service',
    description:
      'Независимая техническая поддержка покупателей яхт до, во время и после покупки в Испании и Средиземноморье.',
    heading: 'Независимое представительство покупателей яхт',
  },
  {
    en: '/yacht-delivery',
    es: '/es/yacht-delivery',
    ru: '/ru/yacht-delivery',
    title: 'Профессиональный перегон яхт | All Yacht Service',
    description:
      'Профессиональный перегон парусных и моторных яхт по Испании и Средиземноморью с подготовкой судна и планированием перехода.',
    heading: 'Профессиональный перегон яхт в Испании и Средиземноморье',
  },
  {
    en: '/valuation-damage-survey',
    es: '/es/valuation-damage-survey',
    ru: '/ru/valuation-damage-survey',
    title: 'Оценка стоимости и ущерба яхт | All Yacht Service',
    description:
      'Независимая оценка стоимости яхт и профессиональная оценка ущерба в Испании и Средиземноморье.',
    heading: 'Оценка стоимости и ущерба яхт в Испании',
  },
  {
    en: '/about-us',
    es: '/es/about-us',
    ru: '/ru/about-us',
    title: 'Об All Yacht Service | Яхтенный сюрвейер',
    description:
      'Узнайте больше об All Yacht Service и Александре Толкачёве — сертифицированном IIMS сюрвейере яхт и маломерных судов в Альтее, Испания.',
    heading: 'Об All Yacht Service',
  },
];
for (const route of translatedServiceRoutes) {
  assert(
    navigationSource.includes(`ru: '${route.ru}'`),
    `Route equivalence does not include ${route.ru}.`,
  );
  assert(
    existsSync(resolve(projectRoot, `src/pages/${route.ru.slice(1)}.astro`)),
    `Published source route ${route.ru} is missing.`,
  );
}
const translatedCalculatorRoutes = [
  {
    en: '/pre-purchase-survey-calculator',
    es: '/es/pre-purchase-survey-calculator',
    ru: '/ru/pre-purchase-survey-calculator',
    title: 'Калькулятор стоимости осмотра яхты | All Yacht Service',
    description:
      'Рассчитайте ориентировочную стоимость предпокупочного сюрвейерского осмотра яхты с учётом её длины, типа и выбранного объёма проверки.',
    heading: 'Калькулятор стоимости предпокупочного сюрвейерского осмотра',
    contactService: 'pre-purchase-survey',
    componentMarker: 'data-survey-calculator data-locale="ru"',
  },
  {
    en: '/yacht-delivery-calculator',
    es: '/es/yacht-delivery-calculator',
    ru: '/ru/yacht-delivery-calculator',
    title: 'Калькулятор стоимости перегона яхты | All Yacht Service',
    description:
      'Рассчитайте ориентировочное расстояние по морскому маршруту и начальную стоимость профессионального перегона яхты по Средиземноморью.',
    heading: 'Калькулятор стоимости профессионального перегона яхты',
    contactService: 'yacht-delivery',
    componentMarker: 'data-delivery-calculator data-locale="ru"',
  },
];
for (const route of translatedCalculatorRoutes) {
  assert(
    navigationSource.includes(`ru: '${route.ru}'`),
    `Route equivalence does not include ${route.ru}.`,
  );
  assert(
    existsSync(resolve(projectRoot, `src/pages/${route.ru.slice(1)}.astro`)),
    `Published source route ${route.ru} is missing.`,
  );
}
const translatedSurveyTipsRoutes = [
  {
    en: '/yacht-survey-tips',
    es: '/es/yacht-survey-tips',
    ru: '/ru/yacht-survey-tips',
    title: 'Советы по осмотру яхт | All Yacht Service',
    description:
      'Профессиональные советы для покупателей и владельцев яхт о сюрвейерских осмотрах, типичных дефектах, техническом состоянии и обслуживании.',
    heading: 'Советы по сюрвейерскому осмотру яхт',
    article: false,
  },
  {
    en: '/yacht-survey-tips/standing-rigging-warning-signs',
    es: '/es/yacht-survey-tips/standing-rigging-warning-signs',
    ru: '/ru/yacht-survey-tips/standing-rigging-warning-signs',
    title: 'Признаки проблем стоячего такелажа | All Yacht Service',
    description:
      'Узнайте, какие признаки проблем стоячего такелажа можно проверить визуально и почему важны возраст, история и осмотр специалистом.',
    heading:
      'Не судите о стоячем такелаже по блеску: что проверить покупателю яхты',
    article: true,
    datePublished: '2026-09-01',
    dateModified: '2026-09-01',
    timeRequired: 'PT5M',
    readingTime: '5 минут чтения',
    articleSection: 'Предпокупочная проверка · Стоячий такелаж и паруса',
    image: '/images/yacht-survey-tips/standing-rigging-warning-signs.png',
    width: 1092,
    height: 1440,
    authorLine: 'Материал подготовил Aleksandrs Tolkacovs',
  },
  {
    en: '/yacht-survey-tips/check-yacht-steering',
    es: '/es/yacht-survey-tips/check-yacht-steering',
    ru: '/ru/yacht-survey-tips/check-yacht-steering',
    title:
      'Проверка рулевого управления яхты перед покупкой | All Yacht Service',
    description:
      'Узнайте о признаках неисправностей рулевого управления яхты и роли ходовых испытаний перед покупкой подержанной яхты.',
    heading:
      'Проверьте рулевое управление, прежде чем ему доверять: на что обратить внимание покупателю',
    article: true,
    datePublished: '2026-08-19',
    dateModified: '2026-08-19',
    timeRequired: 'PT5M',
    readingTime: '5 минут чтения',
    articleSection:
      'Предпокупочная проверка · Рулевое управление и ходовые испытания',
    image:
      '/images/yacht-survey-tips/check-yacht-steering-before-you-trust-it.png',
    width: 1092,
    height: 1440,
  },
  {
    en: '/yacht-survey-tips/yacht-electrical-corrosion',
    es: '/es/yacht-survey-tips/yacht-electrical-corrosion',
    ru: '/ru/yacht-survey-tips/yacht-electrical-corrosion',
    title: 'Коррозия электрооборудования яхты | All Yacht Service',
    description:
      'Узнайте о видимых признаках коррозии электрооборудования яхты, их значении и безопасной визуальной проверке без разборки оборудования.',
    heading:
      'Коррозия в электрооборудовании яхты: признаки для покупателя и владельца',
    article: true,
    datePublished: '2026-08-25',
    dateModified: '2026-08-25',
    timeRequired: 'PT5M',
    readingTime: '5 минут чтения',
    articleSection: 'Электрооборудование · Коррозия и попадание воды',
    image: '/images/yacht-survey-tips/electrical-corrosion-on-yachts.png',
    width: 1122,
    height: 1402,
    authorLine: 'Материал подготовил Aleksandrs Tolkacovs',
  },
  {
    en: '/yacht-survey-tips/check-yacht-seacocks',
    es: '/es/yacht-survey-tips/check-yacht-seacocks',
    ru: '/ru/yacht-survey-tips/check-yacht-seacocks',
    title: 'Кингстоны яхты: что проверить перед покупкой | All Yacht Service',
    description:
      'Узнайте, что проверить у кингстонов, шлангов и хомутов яхты и почему коррозия или следы утечек требуют исследования.',
    heading:
      'Не игнорируйте кингстоны: что проверить покупателю подержанной яхты',
    article: true,
    datePublished: '2026-08-05',
    dateModified: '2026-08-05',
    timeRequired: 'PT4M',
    readingTime: '4 минуты чтения',
    articleSection: 'Предпокупочная проверка · Забортная арматура',
    image: '/images/yacht-survey-tips/check-yacht-seacocks-below-waterline.png',
    width: 1092,
    height: 1440,
  },
  {
    en: '/yacht-survey-tips/deck-moisture-soft-spots',
    es: '/es/yacht-survey-tips/deck-moisture-soft-spots',
    ru: '/ru/yacht-survey-tips/deck-moisture-soft-spots',
    title: 'Влага и мягкие участки палубы яхты | All Yacht Service',
    description:
      'Узнайте, как влага попадает в палубу яхты, какие признаки может заметить покупатель и как состояние палубы оценивается при предпокупочном осмотре.',
    heading: 'Влага и мягкие участки палубы: что нужно знать покупателю яхты',
    article: true,
    datePublished: '2026-07',
    dateModified: '2026-07-28',
    timeRequired: 'PT5M',
    readingTime: '5 минут чтения',
    articleSection: 'Предпокупочный осмотр · Палуба и конструкции',
    image: '/images/yacht-survey-tips/deck-moisture-soft-spots.png',
    width: 1122,
    height: 1402,
  },
  {
    en: '/yacht-survey-tips/shiny-hull',
    es: '/es/yacht-survey-tips/shiny-hull',
    ru: '/ru/yacht-survey-tips/shiny-hull',
    title: 'Блестящий корпус и следы ремонта яхты | All Yacht Service',
    description:
      'Блестящая поверхность корпуса может сделать следы предыдущего ремонта менее заметными. Узнайте, что проверить перед покупкой подержанной яхты.',
    heading:
      'Можно ли доверять блестящему корпусу? Что проверить покупателю подержанной яхты',
    article: true,
    datePublished: '2026-07-28',
    dateModified: '2026-07-28',
    timeRequired: 'PT5M',
    readingTime: '5 минут чтения',
    articleSection: 'Предпокупочный осмотр · Корпус и конструкции',
    image: '/images/yacht-survey-tips/shiny-yacht-hull-hidden-repairs.png',
    width: 1122,
    height: 1402,
  },
];
for (const route of translatedSurveyTipsRoutes) {
  assert(
    navigationSource.includes(`ru: '${route.ru}'`),
    `Route equivalence does not include ${route.ru}.`,
  );
  assert(
    existsSync(resolve(projectRoot, `src/pages/${route.ru.slice(1)}.astro`)),
    `Published source route ${route.ru} is missing.`,
  );
}
const translatedYachtsForSaleRoute = {
  en: '/yachts-for-sale',
  es: '/es/yachts-for-sale',
  ru: '/ru/yachts-for-sale',
  title: 'Яхты на продажу в Испании и Средиземноморье | All Yacht Service',
  description:
    'Просматривайте яхты, представленные Premium Yachts Spain, и получите независимую техническую поддержку All Yacht Service перед покупкой.',
  heading: 'Яхты на продажу',
};
assert(
  navigationSource.includes("ru: '/ru/yachts-for-sale'"),
  'Yachts for Sale route equivalence does not include /ru/yachts-for-sale.',
);
assert(
  existsSync(resolve(projectRoot, 'src/pages/ru/yachts-for-sale.astro')),
  'Published source route /ru/yachts-for-sale is missing.',
);
for (const externalHref of [
  'https://www.premiumyachts.es/yacht-brokerage',
  'https://www.premiumyachts.es/yacht-brokerage/sailing-boats',
  'https://www.premiumyachts.es/yacht-brokerage/power-boats',
]) {
  assert(
    russianYachtsForSaleSource.includes(`href: '${externalHref}'`) ||
      russianYachtsForSaleSource.includes(
        externalHref === 'https://www.premiumyachts.es/yacht-brokerage'
          ? 'href: yachtsForSalePage.primaryCta.href'
          : externalHref.includes('sailing-boats')
            ? 'href: sailingYachts.href'
            : 'href: motorYachts.href',
      ),
    `Russian Yachts for Sale data does not preserve ${externalHref}.`,
  );
}
assert(
  russianYachtsForSalePageSource.includes(
    'Важная информация о коммерческих отношениях и независимости',
  ) &&
    /Покупатель вправе выбрать любого другого независимого сюрвейера\.\s+Выводы и\s+технические заключения All Yacht Service должны оставаться/u.test(
      russianYachtsForSalePageSource,
    ),
  'Russian Yachts for Sale does not preserve the commercial relationship and independence disclosure.',
);
assert(
  !/<iframe\b/iu.test(russianYachtsForSalePageSource) &&
    !/\bfetch\s*\(/u.test(
      `${russianYachtsForSaleSource}\n${russianYachtsForSalePageSource}`,
    ) &&
    !/[€$£]\s*\d|\d\s*[€$£]/u.test(
      `${russianYachtsForSaleSource}\n${russianYachtsForSalePageSource}`,
    ),
  'Russian Yachts for Sale must not add an iframe, runtime feed or copied prices.',
);
const translatedLegalRoutes = [
  {
    routeId: 'privacyPolicy',
    en: '/privacy-policy',
    es: '/es/privacy-policy',
    ru: '/ru/privacy-policy',
    title: 'Политика конфиденциальности | All Yacht Service',
    description:
      'Информация о том, как All Yacht Service обрабатывает персональные данные, полученные через сайт, форму обратной связи и деловую переписку.',
    heading: 'Политика конфиденциальности',
  },
  {
    routeId: 'cookiePolicy',
    en: '/cookie-policy',
    es: '/es/cookie-policy',
    ru: '/ru/cookie-policy',
    title: 'Политика cookies и хранения данных | All Yacht Service',
    description:
      'Информация о cookies, Cloudflare Turnstile и данных калькуляторов, временно сохраняемых в браузере на сайте All Yacht Service.',
    heading: 'Политика использования cookies и хранения данных в браузере',
  },
  {
    routeId: 'legalNotice',
    en: '/legal-notice',
    es: '/es/legal-notice',
    ru: '/ru/legal-notice',
    title: 'Юридическая информация | All Yacht Service',
    description:
      'Юридическая информация об операторе сайта All Yacht Service, профессиональных услугах, контактах и условиях использования сайта.',
    heading: 'Юридическая информация',
  },
  {
    routeId: 'termsAndConditions',
    en: '/terms-and-conditions',
    es: '/es/terms-and-conditions',
    ru: '/ru/terms-and-conditions',
    title: 'Условия использования сайта | All Yacht Service',
    description:
      'Условия использования сайта All Yacht Service, онлайн-калькуляторов, информационных материалов и форм обратной связи.',
    heading: 'Условия использования сайта',
  },
];
for (const route of translatedLegalRoutes) {
  assert(
    navigationSource.includes(`ru: '${route.ru}'`) &&
      existsSync(resolve(projectRoot, `src/pages/${route.ru.slice(1)}.astro`)),
    `Russian legal route equivalence or source is missing for ${route.ru}.`,
  );
}
assert(
  policyCopySource.includes("export type PolicyLocale = 'en' | 'es' | 'ru'") &&
    policyCopySource.includes('export interface LegalPolicyWording') &&
    policyLayoutSource.includes("locale === 'ru'") &&
    policyLayoutSource.includes("'Навигационная цепочка'"),
  'The shared policy layout does not provide Russian interface and approved legal wording.',
);
for (const confirmedField of [
  "legalOperatorName: 'PREMIUM YACHTS SPAIN, S.L.'",
  "operatorType: 'legal-entity'",
  "taxId: 'B06898027'",
  'enquiryRetentionMonths: 12',
  'unsuccessfulQuoteRetentionMonths: 12',
  'finalPolicyOwnerApproved: true',
  "policyOwnerApprovalDate: '2026-07-30'",
]) {
  assert(
    legalConfigSource.includes(confirmedField),
    `The central approved legal field is missing or changed: ${confirmedField}.`,
  );
}
assert(
  Object.values(russianLegalPageSources).every((source) =>
    source.includes('locale="ru"'),
  ) &&
    [
      russianLegalPageSources.privacyPolicy,
      russianLegalPageSources.legalNotice,
      russianLegalPageSources.termsAndConditions,
    ].every((source) => source.includes('legalConfig')),
  'Russian legal pages do not reuse the shared layout and central legal configuration.',
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
    navigationSource.includes("ru: '/ru/privacy-policy'") &&
    contactCopySource.includes("privacyLanguageNote: ''"),
  'Russian Contact does not resolve the published Russian Privacy Policy without a fallback note.',
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
  calculatorCopySource.includes(
    "export type CalculatorLocale = 'en' | 'es' | 'ru'",
  ) &&
    calculatorCopySource.includes("locale: 'ru-RU'") &&
    surveyCalculatorSource.includes('calculateSurveyEstimate') &&
    surveyCalculatorSource.includes('SURVEY_ESTIMATE_STORAGE_KEY') &&
    deliveryCalculatorSource.includes('calculateDeliveryEstimate') &&
    deliveryCalculatorSource.includes('DELIVERY_ESTIMATE_STORAGE_KEY'),
  'The Russian calculators are not using the shared locale-aware engines.',
);
assert(
  russianHomeSource.includes("href: '/ru/pre-purchase-survey-calculator'") &&
    russianHomeSource.includes("href: '/ru/yacht-delivery-calculator'") &&
    russianSurveySource.includes(
      "href: '/ru/pre-purchase-survey-calculator'",
    ) &&
    russianDeliverySource.includes("href: '/ru/yacht-delivery-calculator'") &&
    !/Рассчитать стоимость — на английском/u.test(russianHomeSource) &&
    !/languageNote:\s*'на английском'/u.test(
      `${russianSurveySource}\n${russianDeliverySource}`,
    ) &&
    !/Подробнее — на английском/u.test(russianHomePageSource),
  'Russian calculator links still use English routes or English-language notes.',
);
assert(
  !/[Мм]орской сюрвейер/u.test(
    `${russianHomePageSource}\n${russianHomeSource}`,
  ) &&
    russianHomePageSource.includes(
      'title="Яхтенный сюрвейер в Испании | All Yacht Service"',
    ) &&
    russianHomeSource.includes('Независимый яхтенный сюрвейер') &&
    russianHomeSource.includes('сюрвейер яхт и маломерных судов'),
  'Russian homepage surveyor terminology does not match the approved terms.',
);
assert(
  !/Chief Operating Officer/u.test(
    `${russianAboutSource}\n${russianBuyerRepresentationSource}\n${russianYachtsForSalePageSource}`,
  ) &&
    russianAboutSource.includes('Операционный директор') &&
    russianBuyerRepresentationSource.includes('Операционный директор') &&
    /Операционный\s+директор/u.test(russianYachtsForSalePageSource),
  'Russian commercial disclosures contain an untranslated role title.',
);
assert(
  russianHomeSource.includes("href: '/ru/yacht-survey-tips'") &&
    footerSource.includes(
      "yachtSurveyTips: 'Советы по сюрвейерскому осмотру яхт'",
    ) &&
    surveyArticleCardSource.includes("'Читать статью'") &&
    !surveyArticleCardSource.includes("'Читать материал'") &&
    !footerSource.includes(
      "yachtSurveyTips: 'Советы по сюрвейерскому осмотру яхт — на английском'",
    ),
  'Russian Survey Tips links or shared article-card labels are incomplete.',
);
assert(
  russianHomeSource.includes("href: '/ru/yachts-for-sale'") &&
    contactCopySource.includes("href: '/ru/yachts-for-sale'"),
  'Russian homepage or Contact guidance does not link to /ru/yachts-for-sale.',
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
  /\.footer-link-list a\s*\{[^}]*display:\s*flex;[^}]*min-height:\s*2\.75rem;/u.test(
    globalStyles,
  ) &&
    /\.footer-legal a\s*\{[^}]*display:\s*inline-flex;[^}]*min-height:\s*2\.75rem;/u.test(
      globalStyles,
    ),
  'Footer links do not retain a continuous 44-pixel target when long labels wrap.',
);
assert(
  contactSectionSource.includes('{ui.opensNewTab}') &&
    surveyCalculatorSource.includes('{ui.opensNewTab}') &&
    deliveryCalculatorSource.includes('{ui.opensNewTab}'),
  'A shared WhatsApp link opens a new tab without a localized announcement.',
);
assert(
  uiSource.includes("skipToContent: 'Перейти к содержимому'") &&
    uiSource.includes("openMenu: 'Открыть меню навигации'") &&
    footerSource.includes(
      "appointments: 'Рекомендуется предварительная запись.'",
    ),
  'Shared Russian interface or footer copy is incomplete.',
);
assert(
  sharedFooterSource.includes(
    "href={getRequiredRoutePath('privacyPolicy', currentLocale)}",
  ) &&
    sharedFooterSource.includes(
      "href={getRequiredRoutePath('cookiePolicy', currentLocale)}",
    ) &&
    sharedFooterSource.includes(
      "href={getRequiredRoutePath('legalNotice', currentLocale)}",
    ) &&
    sharedFooterSource.includes(
      "href={getRequiredRoutePath('termsAndConditions', currentLocale)}",
    ) &&
    !footerSource.includes('englishDestination') &&
    contactCopySource.includes("privacyLanguageNote: ''"),
  'Russian footer or Contact still exposes an English legal fallback.',
);

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
    ...translatedServiceRoutes.map((route) => route.ru),
    ...translatedCalculatorRoutes.map((route) => route.ru),
    ...translatedSurveyTipsRoutes.flatMap((route) => [
      route.en,
      route.es,
      route.ru,
    ]),
    translatedYachtsForSaleRoute.en,
    translatedYachtsForSaleRoute.es,
    translatedYachtsForSaleRoute.ru,
    ...translatedLegalRoutes.flatMap((route) => [route.en, route.es, route.ru]),
  ]) {
    assert(
      builtPages.has(routeToFile(pathname)),
      `dist/${routeToFile(pathname)} is missing.`,
    );
  }
  for (const pathname of ['/fr', '/it', '/gr']) {
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
  for (const route of translatedServiceRoutes) {
    const expected = [
      ['en', absolute(route.en)],
      ['es', absolute(route.es)],
      ['ru', absolute(route.ru)],
      ['x-default', absolute(route.en)],
    ];
    for (const pathname of [route.en, route.es, route.ru]) {
      const actual = getHreflangs(getBuiltPage(pathname));
      assert(
        actual.length === expected.length &&
          expected.every(([code, href]) =>
            actual.some((item) => item.code === code && item.href === href),
          ),
        `${pathname} has incorrect EN/ES/RU hreflang equivalence.`,
      );
    }
  }
  for (const route of translatedCalculatorRoutes) {
    const expected = [
      ['en', absolute(route.en)],
      ['es', absolute(route.es)],
      ['ru', absolute(route.ru)],
      ['x-default', absolute(route.en)],
    ];
    for (const pathname of [route.en, route.es, route.ru]) {
      const actual = getHreflangs(getBuiltPage(pathname));
      assert(
        actual.length === expected.length &&
          expected.every(([code, href]) =>
            actual.some((item) => item.code === code && item.href === href),
          ),
        `${pathname} has incorrect EN/ES/RU calculator hreflang equivalence.`,
      );
    }
  }
  for (const route of translatedSurveyTipsRoutes) {
    const expected = [
      ['en', absolute(route.en)],
      ['es', absolute(route.es)],
      ['ru', absolute(route.ru)],
      ['x-default', absolute(route.en)],
    ];
    for (const pathname of [route.en, route.es, route.ru]) {
      const actual = getHreflangs(getBuiltPage(pathname));
      assert(
        actual.length === expected.length &&
          expected.every(([code, href]) =>
            actual.some((item) => item.code === code && item.href === href),
          ),
        `${pathname} has incorrect EN/ES/RU Survey Tips hreflang equivalence.`,
      );
    }
  }
  {
    const route = translatedYachtsForSaleRoute;
    const expected = [
      ['en', absolute(route.en)],
      ['es', absolute(route.es)],
      ['ru', absolute(route.ru)],
      ['x-default', absolute(route.en)],
    ];
    for (const pathname of [route.en, route.es, route.ru]) {
      const actual = getHreflangs(getBuiltPage(pathname));
      assert(
        actual.length === expected.length &&
          expected.every(([code, href]) =>
            actual.some((item) => item.code === code && item.href === href),
          ),
        `${pathname} has incorrect EN/ES/RU Yachts for Sale hreflang equivalence.`,
      );
    }
  }
  for (const route of translatedLegalRoutes) {
    const expected = [
      ['en', absolute(route.en)],
      ['es', absolute(route.es)],
      ['ru', absolute(route.ru)],
      ['x-default', absolute(route.en)],
    ];
    for (const pathname of [route.en, route.es, route.ru]) {
      const actual = getHreflangs(getBuiltPage(pathname));
      assert(
        actual.length === expected.length &&
          expected.every(([code, href]) =>
            actual.some((item) => item.code === code && item.href === href),
          ),
        `${pathname} has incorrect EN/ES/RU legal hreflang equivalence.`,
      );
    }
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
      russianHome.includes('href="/ru/pre-purchase-survey-calculator"') &&
      russianHome.includes('href="/ru/yacht-delivery-calculator"') &&
      !russianHome.includes('Рассчитать стоимость — на английском') &&
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
    russianHome.includes('href="/ru/yachts-for-sale"') &&
      russianContact.includes('href="/ru/yachts-for-sale"') &&
      !russianHome.includes('Яхты на продажу — на английском') &&
      !russianContact.includes('Яхты на продажу — на английском'),
    'Russian homepage or Contact still exposes the English Yachts for Sale fallback.',
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
      russianContact.includes('href="/ru/pre-purchase-survey-calculator"') &&
      russianContact.includes('href="/ru/yacht-delivery-calculator"') &&
      russianContact.includes('href="/ru/privacy-policy"') &&
      !russianContact.includes(
        'В настоящее время доступна на английском языке.',
      ),
    '/ru/contact locale, validation or Russian Privacy Policy link is incorrect.',
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

  for (const route of translatedLegalRoutes) {
    const html = getBuiltPage(route.ru);
    const visible = visibleText(html);
    const routeSchemas = getSchemas(html, route.ru);
    const schemaTypes = routeSchemas.map((schema) => schema['@type']);

    assert(
      html.includes('<html lang="ru">') &&
        html.includes(`<title>${route.title}</title>`) &&
        html.includes(
          `<meta name="description" content="${route.description}">`,
        ) &&
        html.includes(`<link rel="canonical" href="${absolute(route.ru)}">`) &&
        html.includes(
          `<meta property="og:url" content="${absolute(route.ru)}">`,
        ) &&
        html.includes(`<meta property="og:title" content="${route.title}">`) &&
        html.includes(`<meta name="twitter:title" content="${route.title}">`) &&
        html.includes('<meta property="og:locale" content="ru_RU">') &&
        html.includes('<meta name="robots" content="noindex, nofollow">') &&
        html.includes(`<h1>${route.heading}</h1>`),
      `${route.ru} has incorrect Russian metadata, canonical, robots directive or H1.`,
    );
    assert(
      (html.match(/<h1(?:\s|>)/gu) ?? []).length === 1,
      `${route.ru} must contain exactly one H1.`,
    );
    assert(
      !visible.includes('Черновая версия юридической информации') &&
        !visible.includes('ожидает подтверждения'),
      `${route.ru} still exposes a Russian draft or unresolved-policy warning.`,
    );
    assert(
      routeSchemas.some(
        (schema) =>
          schema['@type'] === 'WebPage' &&
          schema['@id'] === `${absolute(route.ru)}#page` &&
          schema.inLanguage === 'ru' &&
          schema.about?.['@id'] === 'https://www.allyachtservice.com/#business',
      ) &&
        routeSchemas.some(
          (schema) =>
            schema['@type'] === 'BreadcrumbList' &&
            schema.itemListElement?.[0]?.name === 'Главная' &&
            schema.itemListElement?.[1]?.name === route.heading,
        ) &&
        schemaTypes.includes('ProfessionalService'),
      `${route.ru} is missing stable Russian WebPage, BreadcrumbList or business schema.`,
    );
    assert(
      !schemaTypes.some((type) =>
        [
          'LegalService',
          'Attorney',
          'GovernmentService',
          'Product',
          'Offer',
          'Review',
          'AggregateRating',
        ].includes(type),
      ),
      `${route.ru} contains unsupported legal or commercial schema.`,
    );
    for (const relatedRoute of translatedLegalRoutes) {
      assert(
        relatedRoute.routeId === route.routeId ||
          html.includes(`href="${relatedRoute.ru}"`),
        `${route.ru} does not link to related policy ${relatedRoute.ru}.`,
      );
    }
    for (const unintended of [
      'Privacy Policy',
      'Cookie Policy',
      'Legal Notice',
      'Terms and Conditions',
      'Draft legal information',
      'Last reviewed',
      'Data controller',
      'Your rights',
      'Contact us',
      'Related policies',
      'Opens in a new tab',
    ]) {
      assert(
        !visible.includes(unintended),
        `${route.ru} exposes untranslated legal UI: ${unintended}.`,
      );
    }
    assert(
      !/\b(?:null|undefined|company name here)\b/iu.test(html),
      `${route.ru} renders an unresolved configuration token.`,
    );
  }
  const russianPrivacyPolicy = getBuiltPage('/ru/privacy-policy');
  const russianCookiePolicy = getBuiltPage('/ru/cookie-policy');
  const russianLegalNotice = getBuiltPage('/ru/legal-notice');
  const russianTerms = getBuiltPage('/ru/terms-and-conditions');
  assert(
    visibleText(russianPrivacyPolicy).includes('12 месяцев') &&
      visibleText(russianLegalNotice).includes(
        'регулируются законодательством Испании',
      ) &&
      visibleText(russianTerms).includes(
        'Любой спор передаётся на рассмотрение судов',
      ),
    'Russian legal pages do not expose the approved retention, applicable-law or dispute wording.',
  );
  for (const storageKey of [
    'ays:pre-purchase-survey-estimate:v1',
    'ays:yacht-delivery-estimate:v1',
    'ays:contact-prefill',
  ]) {
    assert(
      russianCookiePolicy.includes(`<code>${storageKey}</code>`),
      `/ru/cookie-policy does not document ${storageKey}.`,
    );
  }
  assert(
    visibleText(russianCookiePolicy).includes(
      'Текущий исходный код не создаёт этот ключ.',
    ) &&
      visibleText(russianCookiePolicy).includes(
        'баннер согласия не реализован',
      ) &&
      visibleText(russianCookiePolicy).includes(
        'настроек Turnstile в панели Cloudflare до запуска',
      ),
    '/ru/cookie-policy does not preserve the current storage or consent assessment.',
  );

  for (const route of translatedServiceRoutes) {
    const html = getBuiltPage(route.ru);
    assert(
      html.includes('<html lang="ru">') &&
        html.includes(`<title>${route.title}</title>`) &&
        html.includes(
          `<meta name="description" content="${route.description}">`,
        ) &&
        html.includes(`<link rel="canonical" href="${absolute(route.ru)}">`) &&
        html.includes(
          `<meta property="og:url" content="${absolute(route.ru)}">`,
        ) &&
        html.includes('<meta property="og:locale" content="ru_RU">') &&
        html.includes(`<h1>${route.heading}</h1>`),
      `${route.ru} is missing required Russian metadata or H1.`,
    );
    assert(
      html.includes('href="/ru/contact?service=') ||
        route.ru === '/ru/about-us',
      `${route.ru} is missing a contextual Russian Contact link.`,
    );
    const routeSchemas = getSchemas(html, route.ru);
    assert(
      routeSchemas.some(
        (schema) =>
          ['WebPage', 'AboutPage'].includes(schema['@type']) &&
          schema.inLanguage === 'ru',
      ),
      `${route.ru} is missing its Russian page schema.`,
    );
    assert(
      routeSchemas.some(
        (schema) =>
          schema['@type'] === 'BreadcrumbList' &&
          schema.itemListElement?.[0]?.name === 'Главная',
      ),
      `${route.ru} is missing its localized BreadcrumbList schema.`,
    );
    if (route.ru !== '/ru/about-us') {
      assert(
        routeSchemas.some(
          (schema) =>
            schema['@type'] === 'Service' &&
            schema.provider?.['@id'] ===
              'https://www.allyachtservice.com/#business',
        ),
        `${route.ru} is missing a Service schema with the stable provider ID.`,
      );
    }
  }
  for (const route of translatedCalculatorRoutes) {
    const html = getBuiltPage(route.ru);
    assert(
      html.includes('<html lang="ru">') &&
        html.includes(`<title>${route.title}</title>`) &&
        html.includes(
          `<meta name="description" content="${route.description}">`,
        ) &&
        html.includes(`<link rel="canonical" href="${absolute(route.ru)}">`) &&
        html.includes(
          `<meta property="og:url" content="${absolute(route.ru)}">`,
        ) &&
        html.includes(`<meta property="og:title" content="${route.title}">`) &&
        html.includes(`<meta name="twitter:title" content="${route.title}">`) &&
        html.includes('<meta property="og:locale" content="ru_RU">') &&
        html.includes(`<h1>${route.heading}</h1>`) &&
        html.includes(route.componentMarker) &&
        html.includes(`href="/ru/contact?service=${route.contactService}`),
      `${route.ru} is missing required Russian calculator metadata, content or Contact routing.`,
    );
    assert(
      (html.match(/<h1(?:\s|>)/gu) ?? []).length === 1,
      `${route.ru} must contain exactly one H1.`,
    );
    for (const unintended of [
      'Calculate Estimate',
      'Start a New',
      'Request a Formal Quotation',
      'No ports found',
      'Please select a valid',
      'Estimated survey cost',
      'Reset',
      'New route',
      'Select port',
      'Search port',
      'Required',
      'Invalid',
      'Estimate reference',
      'Request a quote',
      'Remove estimate',
      'Opens in a new tab',
      'Start typing',
    ]) {
      assert(
        !visibleText(html).includes(unintended),
        `${route.ru} exposes untranslated calculator text: ${unintended}.`,
      );
    }
    const routeSchemas = getSchemas(html, route.ru);
    assert(
      routeSchemas.some(
        (schema) =>
          schema['@type'] === 'WebPage' &&
          schema['@id'] === `${absolute(route.ru)}#page` &&
          schema.inLanguage === 'ru' &&
          schema.about?.['@id'] === 'https://www.allyachtservice.com/#business',
      ),
      `${route.ru} is missing its stable Russian WebPage schema.`,
    );
    assert(
      routeSchemas.some(
        (schema) =>
          schema['@type'] === 'BreadcrumbList' &&
          schema.itemListElement?.[0]?.name === 'Главная' &&
          schema.itemListElement?.at(-1)?.name === 'Калькулятор стоимости',
      ),
      `${route.ru} is missing its localized BreadcrumbList schema.`,
    );
  }
  for (const route of translatedSurveyTipsRoutes) {
    const html = getBuiltPage(route.ru);
    const schemas = getSchemas(html, route.ru);
    assert(
      html.includes('<html lang="ru">') &&
        html.includes(`<title>${route.title}</title>`) &&
        html.includes(
          `<meta name="description" content="${route.description}">`,
        ) &&
        html.includes(`<link rel="canonical" href="${absolute(route.ru)}">`) &&
        html.includes(
          `<meta property="og:url" content="${absolute(route.ru)}">`,
        ) &&
        html.includes(`<meta property="og:title" content="${route.title}">`) &&
        html.includes(`<meta name="twitter:title" content="${route.title}">`) &&
        html.includes('<meta property="og:locale" content="ru_RU">') &&
        html.includes(`<h1>${route.heading}</h1>`) &&
        html.includes('<meta name="robots" content="noindex, nofollow">'),
      `${route.ru} is missing required Russian Survey Tips metadata or H1.`,
    );
    assert(
      (html.match(/<h1(?:\s|>)/gu) ?? []).length === 1,
      `${route.ru} must contain exactly one H1.`,
    );
    assert(
      schemas.some(
        (schema) =>
          schema['@type'] === 'WebPage' &&
          schema['@id'] === `${absolute(route.ru)}#page` &&
          schema.inLanguage === 'ru' &&
          schema.about?.['@id'] === 'https://www.allyachtservice.com/#business',
      ) &&
        schemas.some(
          (schema) =>
            schema['@type'] === 'BreadcrumbList' &&
            schema.itemListElement?.[0]?.name === 'Главная',
        ),
      `${route.ru} is missing stable Russian WebPage or BreadcrumbList schema.`,
    );
    if (route.article) {
      const articleSchema = schemas.find(
        (schema) => schema['@type'] === 'Article',
      );
      assert(
        articleSchema?.['@id'] === `${absolute(route.ru)}#article` &&
          articleSchema.inLanguage === 'ru' &&
          articleSchema.datePublished === route.datePublished &&
          articleSchema.dateModified === route.dateModified &&
          articleSchema.timeRequired === route.timeRequired &&
          articleSchema.articleSection === route.articleSection &&
          articleSchema.author?.name === 'Aleksandrs Tolkacovs' &&
          articleSchema.author?.['@id'] ===
            'https://www.allyachtservice.com/about-us#aleksandrs-tolkacovs' &&
          articleSchema.publisher?.['@id'] ===
            'https://www.allyachtservice.com/#business',
        `${route.ru} has incomplete or unstable Russian Article schema.`,
      );
      assert(
        html.includes(`src="${route.image}"`) &&
          html.includes(`width="${route.width}"`) &&
          html.includes(`height="${route.height}"`) &&
          html.includes(`<dd>${route.readingTime}</dd>`),
        `${route.ru} does not preserve article image dimensions or reading time.`,
      );
      if (route.authorLine) {
        assert(
          visibleText(html).includes(route.authorLine),
          `${route.ru} has incorrect visible author spacing.`,
        );
      }
    }
    for (const unintended of [
      'Featured Guide',
      'Latest Articles',
      'Read article',
      'Read guide',
      '>Published<',
      '>Updated<',
      'Related Services',
      'More Yacht Survey Tips',
      'Request a quote',
      'Opens in a new tab',
    ]) {
      assert(
        !visibleText(html).includes(unintended.replace(/^>|<$/gu, '')),
        `${route.ru} exposes untranslated Survey Tips text: ${unintended}.`,
      );
    }
  }

  {
    const route = translatedYachtsForSaleRoute;
    const html = getBuiltPage(route.ru);
    const schemas = getSchemas(html, route.ru);
    const visible = visibleText(html);

    assert(
      html.includes('<html lang="ru">') &&
        html.includes(`<title>${route.title}</title>`) &&
        html.includes(
          `<meta name="description" content="${route.description}">`,
        ) &&
        html.includes(`<link rel="canonical" href="${absolute(route.ru)}">`) &&
        html.includes(
          `<meta property="og:url" content="${absolute(route.ru)}">`,
        ) &&
        html.includes(`<meta property="og:title" content="${route.title}">`) &&
        html.includes(`<meta name="twitter:title" content="${route.title}">`) &&
        html.includes('<meta property="og:locale" content="ru_RU">') &&
        html.includes(`<h1>${route.heading}</h1>`) &&
        html.includes('<meta name="robots" content="noindex, nofollow">'),
      `${route.ru} is missing required Russian metadata, canonical, social metadata or H1.`,
    );
    assert(
      (html.match(/<h1(?:\s|>)/gu) ?? []).length === 1,
      `${route.ru} must contain exactly one H1.`,
    );
    assert(
      (html.match(/href="\/ru\/yachts-for-sale"/gu) ?? []).length >= 4 &&
        !visible.includes('Яхты на продажу — на английском'),
      `${route.ru} shared header, mobile navigation, footer or breadcrumbs still use an English fallback.`,
    );
    assert(
      schemas.some(
        (schema) =>
          schema['@type'] === 'WebPage' &&
          schema['@id'] === `${absolute(route.ru)}#page` &&
          schema.inLanguage === 'ru' &&
          schema.about?.['@id'] === 'https://www.allyachtservice.com/#business',
      ) &&
        schemas.some(
          (schema) =>
            schema['@type'] === 'BreadcrumbList' &&
            schema.itemListElement?.[0]?.name === 'Главная' &&
            schema.itemListElement?.[1]?.name === 'Яхты на продажу',
        ),
      `${route.ru} is missing stable Russian WebPage or BreadcrumbList schema.`,
    );
    assert(
      !schemas.some((schema) =>
        [
          'Product',
          'Offer',
          'ItemList',
          'Vehicle',
          'Boat',
          'PriceSpecification',
        ].includes(schema['@type']),
      ),
      `${route.ru} must not expose inventory, yacht, product, offer or price schema.`,
    );
    for (const href of [
      'https://www.premiumyachts.es/yacht-brokerage',
      'https://www.premiumyachts.es/yacht-brokerage/sailing-boats',
      'https://www.premiumyachts.es/yacht-brokerage/power-boats',
    ]) {
      const escapedHref = href.replace(/[.*+?^${}()|[\]\\]/gu, '\\$&');
      assert(
        new RegExp(
          `<a\\b(?=[^>]*href="${escapedHref}")(?=[^>]*target="_blank")(?=[^>]*rel="noopener noreferrer")[^>]*>`,
          'u',
        ).test(html),
        `${route.ru} does not preserve secure external link behaviour for ${href}.`,
      );
      assert(
        !href.includes('?'),
        `${route.ru} external brokerage links must not contain tracking parameters.`,
      );
    }
    for (const href of [
      '/ru/buyer-representation',
      '/ru/pre-purchase-survey',
      '/ru/pre-purchase-survey-calculator',
      '/ru/valuation-damage-survey',
      '/ru/yacht-survey-tips',
      '/ru/contact?service=buyer-representation',
      '/ru/contact?service=pre-purchase-survey',
    ]) {
      assert(
        html.includes(`href="${href}"`),
        `${route.ru} does not link to ${href}.`,
      );
    }
    for (const requiredDisclosure of [
      'Premium Yachts Spain и All Yacht Service являются отдельными коммерческими',
      'эта связь раскрывается до того, как All Yacht Service примет задание',
      'Покупатель вправе выбрать любого другого независимого сюрвейера',
      'технические заключения All Yacht Service должны оставаться профессионально независимыми',
    ]) {
      assert(
        visible.includes(requiredDisclosure),
        `${route.ru} is missing disclosure text: ${requiredDisclosure}.`,
      );
    }
    for (const unintended of [
      'Yachts for Sale',
      'Sailing Yachts',
      'Motor Yachts',
      'View Listings',
      'Learn More',
      'Buyer Support',
      'Important Disclosure',
      'Contact Us',
      'Opens in a new tab',
    ]) {
      assert(
        !visible.includes(unintended),
        `${route.ru} exposes untranslated Yachts for Sale UI: ${unintended}.`,
      );
    }
    assert(
      html.includes('src="/images/yachts-for-sale-marina.jpg"') &&
        html.includes('width="2048"') &&
        html.includes('height="1536"') &&
        html.includes('src="/images/yachts-for-sale-sailing.jpg"') &&
        html.includes('width="1280"') &&
        html.includes('height="719"') &&
        html.includes('src="/images/yachts-for-sale-power.jpg"') &&
        html.includes('width="1100"') &&
        html.includes('height="618"') &&
        visible.includes(
          'Изображения используются в иллюстративных целях и не представляют полный или актуальный перечень яхт, доступных к продаже.',
        ),
      `${route.ru} does not preserve the approved image dimensions and illustrative-image disclosure.`,
    );
    assert(
      !/<iframe\b/iu.test(html) &&
        !visible.includes('€') &&
        !visible.includes('VAT paid') &&
        !visible.includes('Tax paid'),
      `${route.ru} exposes copied inventory, prices, tax status or an embedded feed.`,
    );
  }

  const russianSurveyTipsHub = getBuiltPage('/ru/yacht-survey-tips');
  const latestSection =
    russianSurveyTipsHub.match(
      /survey-tips-latest-section[\s\S]*?survey-tips-categories-section/u,
    )?.[0] ?? '';
  const riggingTitle = 'Не судите о стоячем такелаже по блеску';
  const corrosionTitle = 'Коррозия в электрооборудовании яхты: что проверить';
  const deckTitle =
    'Влага и мягкие участки палубы: что нужно знать покупателю яхты';
  const shinyTitle =
    'Можно ли доверять блестящему корпусу? Что проверить покупателю подержанной яхты';
  const steeringTitle = 'Проверьте рулевое управление, прежде чем ему доверять';
  const seacocksTitle = 'Не игнорируйте кингстоны яхты';
  assert(
    !russianSurveyTipsHub.includes('survey-tips-featured-section') &&
      !visibleText(russianSurveyTipsHub).includes(
        'Главный материал о сюрвейерском осмотре',
      ),
    'The Russian Featured Guide must be removed.',
  );
  assert(
    russianSurveyTipsHub.indexOf('survey-tips-introduction') >= 0 &&
      russianSurveyTipsHub.indexOf('survey-tips-introduction') <
        russianSurveyTipsHub.indexOf('survey-tips-latest-section') &&
      russianSurveyTipsHub.indexOf('survey-tips-latest-section') <
        russianSurveyTipsHub.indexOf('survey-tips-categories-section'),
    'The Russian Latest Articles section must follow the introduction and precede Knowledge Areas.',
  );
  assert(
    latestSection.indexOf(riggingTitle) >= 0 &&
      latestSection.indexOf(riggingTitle) <
        latestSection.indexOf(corrosionTitle) &&
      latestSection.indexOf(corrosionTitle) <
        latestSection.indexOf(steeringTitle) &&
      latestSection.indexOf(steeringTitle) <
        latestSection.indexOf(seacocksTitle) &&
      latestSection.indexOf(seacocksTitle) <
        latestSection.indexOf(shinyTitle) &&
      latestSection.indexOf(shinyTitle) < latestSection.indexOf(deckTitle),
    'Russian latest articles are not in newest-first order.',
  );
  assert(
    (latestSection.match(/class="survey-article-card"/gu) ?? []).length === 6,
    'The Russian archive must contain all six published Survey Tips exactly once.',
  );
  assert(
    russianSurveyTipsHub.includes(
      'src="/images/yacht-survey-tips-background.jpg"',
    ) &&
      russianHome.includes('href="/ru/yacht-survey-tips"') &&
      !russianHome.includes(
        'Советы по сюрвейерскому осмотру яхт — на английском',
      ),
    'The Russian hub background or Russian homepage link is incorrect.',
  );

  const articleGraphicCss =
    globalStyles.match(
      /\.survey-article-image-link img\s*\{([\s\S]*?)\}/u,
    )?.[1] ?? '';
  const guideGraphicCss =
    globalStyles.match(/\.survey-guide-figure img\s*\{([\s\S]*?)\}/u)?.[1] ??
    '';
  assert(
    /width:\s*100%/u.test(articleGraphicCss) &&
      /height:\s*auto/u.test(articleGraphicCss) &&
      /object-fit:\s*contain/u.test(articleGraphicCss) &&
      !/object-fit:\s*cover/u.test(articleGraphicCss) &&
      /width:\s*100%/u.test(guideGraphicCss) &&
      /height:\s*auto/u.test(guideGraphicCss) &&
      /object-fit:\s*contain/u.test(guideGraphicCss) &&
      !/object-fit:\s*cover/u.test(guideGraphicCss),
    'Russian Survey Tips must retain the shared full-image no-crop rules.',
  );
  const protectedImageHashes = {
    'public/images/yacht-survey-tips/check-yacht-steering-before-you-trust-it.png':
      '6f19bb491e63b46e3b3e25bdd50ead416fcfede145f792644aedca6e4d7b2799',
    'public/images/yacht-survey-tips/check-yacht-seacocks-below-waterline.png':
      '243ed2c54a5b11406214480e7cf01a62765f5b855239462a3b736146d7643062',
    'public/images/yacht-survey-tips/electrical-corrosion-on-yachts.png':
      '0fb2ad0962ff4b359af0f00a7b3ec3e86035a8eb6ab36f99410da1f7bbd22396',
    'public/images/yacht-survey-tips/standing-rigging-warning-signs.png':
      '59ec4e30a3631944ffd41d6ab755e8c7af78b0f35c70ea7a84650706e869c596',
    'public/images/yacht-survey-tips/deck-moisture-soft-spots.png':
      '77c20ed2604f30518f9e56b2e122b24ddd15481261f1861d38504279ec006404',
    'public/images/yacht-survey-tips/shiny-yacht-hull-hidden-repairs.png':
      'e2e93efaba4cf5ee1c9280ce9c6d017f5836cbb7fd61ceb6a022abd507668ada',
    'public/images/yacht-survey-tips-background.jpg':
      'b82784e706d0549b1f421cebefd21af883e3b85686510f4db351778f27467c15',
  };
  for (const [path, expectedHash] of Object.entries(protectedImageHashes)) {
    const actualHash = createHash('sha256')
      .update(readFileSync(resolve(projectRoot, path)))
      .digest('hex');
    assert(
      actualHash === expectedHash,
      `${path} changed during Russian Survey Tips localisation.`,
    );
  }
  const protectedYachtsForSaleImageHashes = {
    'public/images/yachts-for-sale-marina.jpg':
      '50f43618ec197cd209084d514075e2ae79cc3b923e2463966270eb3cb421bd7c',
    'public/images/yachts-for-sale-sailing.jpg':
      '1953eba2d9de58d3042969ddb58fa682914d7dc9dbb5fa7b70e05302a0bfb1ad',
    'public/images/yachts-for-sale-power.jpg':
      'c1a6f8c92806f5d10232146171c9cc4d14fdd74d1693b47f8ef8f68ba5cb6e32',
  };
  for (const [path, expectedHash] of Object.entries(
    protectedYachtsForSaleImageHashes,
  )) {
    const actualHash = createHash('sha256')
      .update(readFileSync(resolve(projectRoot, path)))
      .digest('hex');
    assert(
      actualHash === expectedHash,
      `${path} changed during Russian Yachts for Sale localisation.`,
    );
  }
  assert(
    russianDeckArticleSource.includes(
      "src: '/images/yacht-survey-tips/deck-moisture-soft-spots.png'",
    ) &&
      russianShinyArticleSource.includes(
        "src: '/images/yacht-survey-tips/shiny-yacht-hull-hidden-repairs.png'",
      ) &&
      russianSteeringArticleSource.includes(
        "src: '/images/yacht-survey-tips/check-yacht-steering-before-you-trust-it.png'",
      ) &&
      russianSeacocksArticleSource.includes(
        "src: '/images/yacht-survey-tips/check-yacht-seacocks-below-waterline.png'",
      ) &&
      russianElectricalCorrosionArticleSource.includes(
        "src: '/images/yacht-survey-tips/electrical-corrosion-on-yachts.png'",
      ) &&
      russianStandingRiggingArticleSource.includes(
        "src: '/images/yacht-survey-tips/standing-rigging-warning-signs.png'",
      ) &&
      !/\/images\/yacht-survey-tips\/ru\//u.test(
        `${russianSurveyTipsSource}\n${russianDeckArticleSource}\n${russianShinyArticleSource}\n${russianSteeringArticleSource}\n${russianSeacocksArticleSource}\n${russianElectricalCorrosionArticleSource}\n${russianStandingRiggingArticleSource}`,
      ),
    'Russian pages do not reuse the protected English article graphics.',
  );
  const russianValuation = getBuiltPage('/ru/valuation-damage-survey');
  assert(
    getSchemas(russianValuation, '/ru/valuation-damage-survey').filter(
      (schema) => schema['@type'] === 'Service',
    ).length === 2,
    '/ru/valuation-damage-survey must expose valuation and damage Service schemas.',
  );
  const russianAbout = getBuiltPage('/ru/about-us');
  assert(
    getSchemas(russianAbout, '/ru/about-us').some(
      (schema) =>
        schema['@type'] === 'Person' &&
        schema.worksFor?.['@id'] ===
          'https://www.allyachtservice.com/#business',
    ),
    '/ru/about-us is missing its stable Person schema.',
  );

  const russianEquivalentPages = new Set([
    '/',
    '/es',
    '/ru',
    '/contact',
    '/es/contact',
    '/ru/contact',
    ...translatedServiceRoutes.flatMap((route) => [
      route.en,
      route.es,
      route.ru,
    ]),
    ...translatedCalculatorRoutes.flatMap((route) => [
      route.en,
      route.es,
      route.ru,
    ]),
    ...translatedSurveyTipsRoutes.flatMap((route) => [
      route.en,
      route.es,
      route.ru,
    ]),
    translatedYachtsForSaleRoute.en,
    translatedYachtsForSaleRoute.es,
    translatedYachtsForSaleRoute.ru,
    ...translatedLegalRoutes.flatMap((route) => [route.en, route.es, route.ru]),
  ]);
  for (const [path, html] of builtPages) {
    const pathname =
      path === 'index.html' ? '/' : `/${path.replace(/\.html$/u, '')}`;
    if (!russianEquivalentPages.has(pathname)) {
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
  const sitemapEntries = [...sitemap.matchAll(/<url>([\s\S]*?)<\/url>/gu)].map(
    ([, entry]) => ({
      loc: entry.match(/<loc>([^<]+)<\/loc>/u)?.[1] ?? '',
      links: [...entry.matchAll(/<xhtml:link\s+([^>]+)\/>/gu)].map(
        ([, attributes]) => ({
          code: attributes.match(/hreflang="([^"]+)"/u)?.[1] ?? '',
          href: attributes.match(/href="([^"]+)"/u)?.[1] ?? '',
        }),
      ),
    }),
  );
  assert(
    sitemapEntries.length === russianEquivalentPages.size,
    `The sitemap must contain exactly ${russianEquivalentPages.size} public URLs; found ${sitemapEntries.length}.`,
  );
  const sitemapPathnames = sitemapEntries.map(({ loc }) => {
    try {
      return new URL(loc).pathname;
    } catch {
      failures.push(
        `The sitemap contains an invalid URL: ${loc || '(empty)'}.`,
      );
      return '';
    }
  });
  assert(
    sitemapPathnames.length === new Set(sitemapPathnames).size,
    'The sitemap contains duplicate public routes.',
  );
  for (const pathname of russianEquivalentPages) {
    assert(
      sitemapPathnames.includes(pathname),
      `The sitemap does not contain ${pathname}.`,
    );
  }
  for (const pathname of sitemapPathnames) {
    assert(
      russianEquivalentPages.has(pathname),
      `The sitemap contains unsupported route ${pathname}.`,
    );
  }
  for (const [locale, expectedCount] of [
    ['en', 22],
    ['es', 22],
    ['ru', 22],
  ]) {
    const actualCount = sitemapPathnames.filter((pathname) => {
      if (locale === 'en') {
        return !pathname.startsWith('/es') && !pathname.startsWith('/ru');
      }
      return pathname === `/${locale}` || pathname.startsWith(`/${locale}/`);
    }).length;
    assert(
      actualCount === expectedCount,
      `The sitemap must contain ${expectedCount} ${locale.toUpperCase()} routes; found ${actualCount}.`,
    );
  }
  for (const { loc, links } of sitemapEntries) {
    const pathname = new URL(loc).pathname;
    const englishPathname =
      pathname === '/es' || pathname === '/ru'
        ? '/'
        : pathname.replace(/^\/(?:es|ru)(?=\/)/u, '');
    const expectedLinks = {
      en: absolute(englishPathname),
      es: absolute(englishPathname === '/' ? '/es' : `/es${englishPathname}`),
      ru: absolute(englishPathname === '/' ? '/ru' : `/ru${englishPathname}`),
      'x-default': absolute(englishPathname),
    };
    assert(
      links.length === 4 && new Set(links.map(({ code }) => code)).size === 4,
      `${pathname} must expose exactly one EN, ES, RU and x-default sitemap alternate.`,
    );
    for (const [code, href] of Object.entries(expectedLinks)) {
      assert(
        links.some((link) => link.code === code && link.href === href),
        `${pathname} has an incorrect or missing ${code} sitemap alternate.`,
      );
    }
  }
}

if (failures.length > 0) {
  process.stderr.write('Russian localisation validation failed:\n');
  for (const failure of failures) process.stderr.write(`- ${failure}\n`);
  process.exitCode = 1;
} else {
  process.stdout.write('Russian localisation validation passed.\n');
}
