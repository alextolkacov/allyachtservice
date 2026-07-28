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
    title: 'Privacy Policy | All Yacht Service',
    description:
      'Learn how All Yacht Service handles personal data submitted through enquiries, attachments, calculators and website security services.',
  },
  {
    route: '/cookie-policy',
    file: 'dist/cookie-policy.html',
    title: 'Cookie and Browser Storage Policy | All Yacht Service',
    description:
      'Learn which cookies and browser-storage technologies are used by the All Yacht Service website and how they support essential functions.',
  },
  {
    route: '/legal-notice',
    file: 'dist/legal-notice.html',
    title: 'Legal Notice | All Yacht Service',
    description:
      'Legal and website-operator information for the All Yacht Service website.',
  },
  {
    route: '/terms-and-conditions',
    file: 'dist/terms-and-conditions.html',
    title: 'Website Terms and Conditions | All Yacht Service',
    description:
      'Terms governing use of the All Yacht Service website, calculators, educational content and external links.',
  },
];
const legalRoutes = policies.map(({ route }) => route);
const footer = read('src/components/Footer.astro');
const contactForm = read('src/components/ContactForm.astro');
const contactValidation = read('functions/_lib/contact-form.ts');
const contactEndpoint = read('functions/api/contact.ts');
const turnstileValidation = read('functions/_lib/turnstile.ts');
const surveyEstimate = read('src/lib/calculators/prePurchaseSurveyEstimate.ts');
const deliveryEstimate = read('src/lib/calculators/yachtDeliveryEstimate.ts');
const sourceFiles = [
  'src/components/ContactForm.astro',
  'src/components/SeoHead.astro',
  'src/components/YachtDeliveryCalculator.astro',
  'src/components/PrePurchaseSurveyCalculator.astro',
  'src/layouts/BaseLayout.astro',
  'src/pages/contact.astro',
].map(read);
const sourceCorpus = sourceFiles.join('\n');

for (const route of legalRoutes) {
  assert(footer.includes(`href="${route}"`), `Footer is missing ${route}.`);
}

assert(
  contactForm.includes(
    'I confirm that I have read the\n        {\' \'}<a href="/privacy-policy">Privacy Policy</a> and understand how my',
  ),
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
    hreflangs.length === 2 &&
      hreflangs.includes('en') &&
      hreflangs.includes('x-default'),
    `${policy.route} must expose only en and x-default hreflang.`,
  );
  assert(
    schemaTypes.includes('WebPage') &&
      schemaTypes.includes('BreadcrumbList') &&
      schemaTypes.includes('ProfessionalService'),
    `${policy.route} is missing required structured data.`,
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
}

if (failures.length > 0) {
  process.stderr.write('Legal foundation validation failed:\n');
  for (const failure of failures) process.stderr.write(`- ${failure}\n`);
  process.exitCode = 1;
} else {
  process.stdout.write(
    `Legal foundation validation passed for ${policies.length} policy routes.\n`,
  );
}
