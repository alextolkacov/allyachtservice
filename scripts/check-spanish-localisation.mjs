import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import process from 'node:process';

const projectRoot = resolve(import.meta.dirname, '..');
const read = (path) => readFileSync(resolve(projectRoot, path), 'utf8');
const failures = [];
const assert = (condition, message) => {
  if (!condition) failures.push(message);
};

const spanishContact = read('dist/es/contact.html');
const englishContact = read('dist/contact.html');
const spanishHome = read('dist/es.html');
const sitemap = ['dist/sitemap-0.xml', 'dist/sitemap-index.xml']
  .filter((path) => existsSync(resolve(projectRoot, path)))
  .map(read)
  .join('\n');

const getHreflangs = (html) =>
  [...html.matchAll(/<link rel="alternate" hreflang="([^"]+)"/gu)].map(
    (match) => match[1],
  );
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

const spanishContactHreflangs = getHreflangs(spanishContact);
const englishContactHreflangs = getHreflangs(englishContact);
const spanishHomeHreflangs = getHreflangs(spanishHome);
const schemas = getSchema(spanishContact);

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
assert(
  spanishContactHreflangs.length === 3 &&
    ['en', 'es', 'x-default'].every((value) =>
      spanishContactHreflangs.includes(value),
    ),
  '/es/contact must expose only en, es and x-default hreflang.',
);
assert(
  englishContactHreflangs.length === 3 &&
    ['en', 'es', 'x-default'].every((value) =>
      englishContactHreflangs.includes(value),
    ),
  '/contact must expose only en, es and x-default hreflang.',
);
assert(
  spanishHomeHreflangs.length === 7 &&
    ['en', 'es', 'ru', 'fr', 'it', 'el', 'x-default'].every((value) =>
      spanishHomeHreflangs.includes(value),
    ),
  '/es must retain all six homepage languages plus x-default.',
);
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
assert(
  sitemap.includes('<loc>https://www.allyachtservice.com/es/contact</loc>'),
  'Sitemap is missing /es/contact.',
);
assert(
  !sitemap.includes(
    '<loc>https://www.allyachtservice.com/es/pre-purchase-survey</loc>',
  ) && !existsSync(resolve(projectRoot, 'dist/es/pre-purchase-survey.html')),
  'A false Spanish service route was generated.',
);

if (failures.length > 0) {
  process.stderr.write('Spanish localisation validation failed:\n');
  for (const failure of failures) process.stderr.write(`- ${failure}\n`);
  process.exitCode = 1;
} else {
  process.stdout.write(
    'Spanish localisation validation passed for homepage and Contact equivalents.\n',
  );
}
