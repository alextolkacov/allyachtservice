import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import process from 'node:process';

const projectRoot = resolve(import.meta.dirname, '..');
const read = (path) => readFileSync(resolve(projectRoot, path), 'utf8');
const failures = [];
const assert = (condition, message) => {
  if (!condition) failures.push(message);
};

const policies = [
  {
    route: '/privacy-policy',
    file: 'dist/privacy-policy.html',
    locale: 'en',
    equivalentRoute: '/es/privacy-policy',
    title: 'Privacy Policy | All Yacht Service',
    description:
      'Learn how All Yacht Service handles personal data submitted through enquiries, attachments, calculators and website security services.',
    h1: 'Privacy Policy',
  },
  {
    route: '/cookie-policy',
    file: 'dist/cookie-policy.html',
    locale: 'en',
    equivalentRoute: '/es/cookie-policy',
    title: 'Cookie and Browser Storage Policy | All Yacht Service',
    description:
      'Learn which cookies and browser-storage technologies are used by the All Yacht Service website and how they support essential functions.',
    h1: 'Cookie and Browser Storage Policy',
  },
  {
    route: '/legal-notice',
    file: 'dist/legal-notice.html',
    locale: 'en',
    equivalentRoute: '/es/legal-notice',
    title: 'Legal Notice | All Yacht Service',
    description:
      'Legal and website-operator information for the All Yacht Service website.',
    h1: 'Legal Notice',
  },
  {
    route: '/terms-and-conditions',
    file: 'dist/terms-and-conditions.html',
    locale: 'en',
    equivalentRoute: '/es/terms-and-conditions',
    title: 'Website Terms and Conditions | All Yacht Service',
    description:
      'Terms governing use of the All Yacht Service website, calculators, educational content and external links.',
    h1: 'Website Terms and Conditions',
  },
  {
    route: '/es/privacy-policy',
    file: 'dist/es/privacy-policy.html',
    locale: 'es',
    equivalentRoute: '/privacy-policy',
    title: 'Política de privacidad | All Yacht Service',
    description:
      'Conozca cómo All Yacht Service trata los datos personales enviados mediante consultas, archivos adjuntos, calculadoras y servicios de seguridad del sitio web.',
    h1: 'Política de privacidad',
  },
  {
    route: '/es/cookie-policy',
    file: 'dist/es/cookie-policy.html',
    locale: 'es',
    equivalentRoute: '/cookie-policy',
    title: 'Política de cookies y almacenamiento | All Yacht Service',
    description:
      'Conozca las cookies y tecnologías de almacenamiento del navegador utilizadas por All Yacht Service para funciones esenciales, calculadoras y seguridad.',
    h1: 'Política de cookies y almacenamiento del navegador',
  },
  {
    route: '/es/legal-notice',
    file: 'dist/es/legal-notice.html',
    locale: 'es',
    equivalentRoute: '/legal-notice',
    title: 'Aviso legal | All Yacht Service',
    description:
      'Información legal y datos del operador del sitio web de All Yacht Service.',
    h1: 'Aviso legal',
  },
  {
    route: '/es/terms-and-conditions',
    file: 'dist/es/terms-and-conditions.html',
    locale: 'es',
    equivalentRoute: '/terms-and-conditions',
    title: 'Términos y condiciones del sitio web | All Yacht Service',
    description:
      'Condiciones aplicables al uso del sitio web, calculadoras, artículos educativos y enlaces externos de All Yacht Service.',
    h1: 'Términos y condiciones del sitio web',
  },
];
const footer = read('src/components/Footer.astro');
const navigation = read('src/data/navigation.ts');
const contactForm = read('src/components/ContactForm.astro');
const contactCopy = read('src/i18n/contact.ts');
const contactValidation = read('functions/_lib/contact-form.ts');
const contactEndpoint = read('functions/api/contact.ts');
const turnstileValidation = read('functions/_lib/turnstile.ts');
const surveyEstimate = read('src/lib/calculators/prePurchaseSurveyEstimate.ts');
const deliveryEstimate = read('src/lib/calculators/yachtDeliveryEstimate.ts');
const spanishPolicySources = [
  'src/pages/es/privacy-policy.astro',
  'src/pages/es/cookie-policy.astro',
  'src/pages/es/legal-notice.astro',
  'src/pages/es/terms-and-conditions.astro',
].map(read);
const sourceFiles = [
  'src/components/ContactForm.astro',
  'src/components/SeoHead.astro',
  'src/components/YachtDeliveryCalculator.astro',
  'src/components/PrePurchaseSurveyCalculator.astro',
  'src/layouts/BaseLayout.astro',
  'src/pages/contact.astro',
].map(read);
const sourceCorpus = sourceFiles.join('\n');

for (const route of [
  '/es/privacy-policy',
  '/es/cookie-policy',
  '/es/legal-notice',
  '/es/terms-and-conditions',
]) {
  assert(
    navigation.includes(`es: '${route}'`),
    `Route equivalence is missing ${route}.`,
  );
}

assert(
  contactForm.includes(
    "getRequiredRoutePath('privacyPolicy', contactLocale)",
  ) &&
    contactCopy.includes('I confirm that I have read the') &&
    contactCopy.includes(
      'and understand how my enquiry information will be handled.',
    ) &&
    contactCopy.includes('Confirmo que he leído la') &&
    contactCopy.includes(
      'y comprendo cómo se tratará la información de mi consulta.',
    ) &&
    contactCopy.includes("privacyLanguageNote: ''"),
  'Contact acknowledgement wording or direct Privacy Policy link has changed.',
);
assert(
  contactValidation.includes(
    'Confirm that you have read the Privacy Policy and understand how your enquiry information will be handled.',
  ),
  'Server-side acknowledgement validation wording is missing.',
);
assert(
  !/(google-analytics\.com|googletagmanager\.com|connect\.facebook\.net|clarity\.ms|plausible\.io|segment\.com)/iu.test(
    sourceCorpus,
  ),
  'An analytics or advertising script was found; update the cookie inventory and consent controls.',
);
assert(
  !/\blocalStorage\b/u.test(sourceCorpus),
  'localStorage is used but is not included in the current storage inventory.',
);
assert(
  sourceCorpus.includes('sessionStorage'),
  'Calculator sessionStorage implementation was not found.',
);
assert(
  surveyEstimate.includes("'ays:pre-purchase-survey-estimate:v1'") &&
    surveyEstimate.includes('SURVEY_ESTIMATE_MAX_AGE_MS = 24 * 60 * 60 * 1000'),
  'Survey calculator storage key or 24-hour validation has changed.',
);
assert(
  deliveryEstimate.includes("'ays:yacht-delivery-estimate:v1'") &&
    deliveryEstimate.includes(
      'DELIVERY_ESTIMATE_MAX_AGE_MS = 24 * 60 * 60 * 1000',
    ),
  'Delivery calculator storage key or 24-hour validation has changed.',
);
assert(
  contactValidation.includes('attachmentCount: 3') &&
    contactValidation.includes('attachmentBytes: 2_000_000') &&
    contactValidation.includes('totalAttachmentBytes: 3_000_000') &&
    contactValidation.includes("['application/pdf', ['pdf']]") &&
    contactValidation.includes("['image/webp', ['webp']]"),
  'Contact attachment count, size or type validation has changed.',
);
assert(
  contactForm.includes('class="cf-turnstile"') &&
    contactForm.includes('data-action="contact"') &&
    contactForm.includes('data-theme="light"') &&
    !contactForm.includes('data-appearance=') &&
    !contactForm.includes('data-execution='),
  'Turnstile browser configuration has changed; re-audit the policy wording.',
);
assert(
  contactEndpoint.includes('await verifyTurnstile({') &&
    turnstileValidation.includes(
      'https://challenges.cloudflare.com/turnstile/v0/siteverify',
    ) &&
    turnstileValidation.includes("result.action !== 'contact'"),
  'Turnstile server-side validation contract has changed.',
);

const sitemap = ['dist/sitemap-0.xml', 'dist/sitemap-index.xml']
  .map((path) => {
    try {
      return read(path);
    } catch {
      return '';
    }
  })
  .join('\n');

for (const policy of policies) {
  const html = read(policy.file);
  const absoluteUrl = `https://www.allyachtservice.com${policy.route}`;
  const englishRoute =
    policy.locale === 'en' ? policy.route : policy.equivalentRoute;
  const spanishRoute =
    policy.locale === 'es' ? policy.route : policy.equivalentRoute;
  const h1Count = (html.match(/<h1(?:\s|>)/gu) ?? []).length;
  const ids = [...html.matchAll(/\sid="([^"]+)"/gu)].map((match) => match[1]);
  const duplicateIds = ids.filter((id, index) => ids.indexOf(id) !== index);
  const internalAnchors = [...html.matchAll(/href="#([^"]+)"/gu)].map(
    (match) => match[1],
  );
  const schemaScripts = [
    ...html.matchAll(
      /<script[^>]+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gu,
    ),
  ].map((match) => JSON.parse(match[1]));
  const schemaTypes = schemaScripts.flatMap((schema) =>
    Array.isArray(schema)
      ? schema.map((item) => item['@type'])
      : schema['@type'],
  );
  const hreflangs = [
    ...html.matchAll(/<link rel="alternate" hreflang="([^"]+)"/gu),
  ].map((match) => match[1]);

  assert(h1Count === 1, `${policy.route} must contain exactly one H1.`);
  assert(
    html.includes(`<html lang="${policy.locale}">`) &&
      html.includes(`<h1>${policy.h1}</h1>`),
    `${policy.route} has an incorrect document language or H1.`,
  );
  assert(
    duplicateIds.length === 0,
    `${policy.route} contains duplicate IDs: ${[...new Set(duplicateIds)].join(', ')}.`,
  );
  assert(
    internalAnchors.every((anchor) => ids.includes(anchor)),
    `${policy.route} contains a broken same-page anchor.`,
  );
  assert(
    html.includes(`<title>${policy.title}</title>`),
    `${policy.route} has an incorrect title.`,
  );
  assert(
    html.includes(`<meta name="description" content="${policy.description}">`),
    `${policy.route} has an incorrect meta description.`,
  );
  assert(
    html.includes(`<link rel="canonical" href="${absoluteUrl}">`),
    `${policy.route} has an incorrect canonical.`,
  );
  assert(
    html.includes('<meta name="robots" content="noindex, nofollow">'),
    `${policy.route} preview must be noindex, nofollow.`,
  );
  assert(
    hreflangs.length === 3 &&
      hreflangs.includes('en') &&
      hreflangs.includes('es') &&
      hreflangs.includes('x-default'),
    `${policy.route} must expose only en, es and x-default hreflang.`,
  );
  assert(
    html.includes(
      `<link rel="alternate" hreflang="en" href="https://www.allyachtservice.com${englishRoute}">`,
    ) &&
      html.includes(
        `<link rel="alternate" hreflang="es" href="https://www.allyachtservice.com${spanishRoute}">`,
      ) &&
      html.includes(
        `<link rel="alternate" hreflang="x-default" href="https://www.allyachtservice.com${englishRoute}">`,
      ),
    `${policy.route} has incorrect legal-policy hreflang URLs.`,
  );
  assert(
    schemaTypes.includes('WebPage') &&
      schemaTypes.includes('BreadcrumbList') &&
      schemaTypes.includes('ProfessionalService'),
    `${policy.route} is missing required structured data.`,
  );
  assert(
    schemaScripts.some(
      (schema) =>
        schema['@type'] === 'WebPage' &&
        schema['@id'] === `${absoluteUrl}#page` &&
        schema.inLanguage === policy.locale,
    ) &&
      JSON.stringify(schemaScripts).includes(
        'https://www.allyachtservice.com/#business',
      ),
    `${policy.route} has incomplete or unstable WebPage structured data.`,
  );
  assert(
    !schemaTypes.some((type) =>
      [
        'LegalService',
        'Product',
        'Offer',
        'FAQPage',
        'Review',
        'AggregateRating',
        'TermsOfService',
        'PrivacyPolicy',
      ].includes(type),
    ),
    `${policy.route} contains unsupported structured data.`,
  );
  assert(
    !/\b(null|undefined|company name here)\b/iu.test(html),
    `${policy.route} renders an unresolved placeholder value.`,
  );
  assert(
    !/(spanish limited company|incorporated company|vat registered|professionally insured|fully gdpr compliant|certified gdpr compliant|all data remains in (spain|the eu))/iu.test(
      html,
    ),
    `${policy.route} contains a prohibited unsupported claim.`,
  );
  assert(
    !/((we|all yacht service) guarantees? absolute security|is absolutely secure)/iu.test(
      html,
    ),
    `${policy.route} contains an absolute-security guarantee.`,
  );
  assert(
    sitemap.includes(`<loc>${absoluteUrl}</loc>`),
    `Sitemap is missing ${policy.route}.`,
  );

  if (policy.locale === 'es') {
    for (const englishLabel of [
      'Last reviewed',
      'On this page',
      'Draft legal information',
      'Questions about this information',
      'Related legal information',
      'Return to top',
      'Opens in a new tab',
    ]) {
      assert(
        !html.includes(englishLabel),
        `${policy.route} contains untranslated interface text: ${englishLabel}.`,
      );
    }
  }
}

const englishContact = read('dist/contact.html');
const spanishContact = read('dist/es/contact.html');
assert(
  englishContact.includes('href="/privacy-policy"') &&
    !englishContact.includes('href="/es/privacy-policy"'),
  'English Contact must continue using the English Privacy Policy.',
);
assert(
  spanishContact.includes('href="/es/privacy-policy"') &&
    !spanishContact.includes('Disponible actualmente en inglés'),
  'Spanish Contact must use the Spanish Privacy Policy without an English fallback note.',
);
assert(
  footer.includes("'privacyPolicy'") &&
    footer.includes("'cookiePolicy'") &&
    footer.includes("'legalNotice'") &&
    footer.includes("'termsAndConditions'"),
  'The shared footer no longer resolves all policy route IDs.',
);
for (const policy of policies.filter(({ locale }) => locale === 'es')) {
  const html = read(policy.file);
  for (const route of [
    '/es/privacy-policy',
    '/es/cookie-policy',
    '/es/legal-notice',
    '/es/terms-and-conditions',
  ]) {
    assert(
      html.includes(`href="${route}"`) || route === policy.route,
      `${policy.route} footer or related navigation is missing ${route}.`,
    );
  }
}
assert(
  spanishPolicySources.every((source) => source.includes('locale="es"')) &&
    spanishPolicySources
      .filter((_, index) => index === 0 || index === 2 || index === 3)
      .every((source) => source.includes('legalConfig')),
  'Spanish policies do not reuse the shared locale-aware layout and central legal configuration.',
);
assert(
  !spanishPolicySources.some((source) =>
    /(es una sociedad limitada|número de iva:\s*\S|número de identificación fiscal confirmado|dispone de seguro de responsabilidad profesional|se somete a la jurisdicción exclusiva)/iu.test(
      source,
    ),
  ),
  'A Spanish policy contains an invented company, tax, insurance or jurisdiction claim.',
);

if (failures.length > 0) {
  process.stderr.write('Legal foundation validation failed:\n');
  for (const failure of failures) process.stderr.write(`- ${failure}\n`);
  process.exitCode = 1;
} else {
  process.stdout.write(
    `Legal foundation validation passed for ${policies.length} policy routes.\n`,
  );
}
