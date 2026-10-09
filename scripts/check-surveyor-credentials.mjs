import { createHash } from 'node:crypto';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { resolve } from 'node:path';
import process from 'node:process';

const projectRoot = resolve(import.meta.dirname, '..');
const read = (path) => readFileSync(resolve(projectRoot, path), 'utf8');
const failures = [];
const assert = (condition, message) => {
  if (!condition) failures.push(message);
};
const sha256 = (path) =>
  createHash('sha256')
    .update(readFileSync(resolve(projectRoot, path)))
    .digest('hex');

const component = read('src/components/SurveyorCredentials.astro');
const credentialData = read('src/data/surveyor-credentials.ts');

assert(
  sha256('public/images/credentials/iims-logo.png') ===
    'ef95443745b76468768afde536da3396f9b9866e472939c3434ed0797f9cd2bb',
  'The supplied IIMS logo has changed.',
);
assert(
  sha256(
    'public/images/credentials/aleksandrs-tolkacovs-iims-certificate.pdf',
  ) === '943e1c27c50cbc338e2ad7ac1ee61776527912ed4b6daf665b0cc217bd4562a7',
  'The supplied IIMS certificate has changed.',
);
assert(
  sha256(
    'public/images/credentials/aleksandrs-tolkacovs-iims-certificate-preview.png',
  ) === '951651afc58f4c07ba32acbb343e4d66ada85af6b775198782a1cc790fce536c',
  'The IIMS certificate preview has changed.',
);
assert(
  component.includes('data-certificate-dialog') &&
    component.includes('dialog.showModal()') &&
    component.includes('href={copy.aboutHref}') &&
    component.includes('src={assets.certificate.previewSrc}') &&
    component.includes('href={assets.certificate.src}'),
  'The reusable credential component has lost its dialog or localized About link.',
);
assert(
  !component.includes('assets.logo') &&
    !component.includes('surveyor-credential-logo') &&
    !credentialData.includes('iims-logo.png') &&
    !credentialData.includes('logoAlt:'),
  'The IIMS logo is still configured for website display.',
);
assert(
  credentialData.includes(
    "aboutHref: '/about-us#professional-qualifications'",
  ) &&
    credentialData.includes(
      "aboutHref: '/es/about-us#professional-qualifications'",
    ) &&
    credentialData.includes(
      "aboutHref: '/ru/about-us#professional-qualifications'",
    ),
  'Localized credential links are incomplete.',
);

const pageExpectations = [
  ['src/pages/about-us.astro', 'locale="en" variant="full"'],
  ['src/pages/es/about-us.astro', 'locale="es" variant="full"'],
  ['src/pages/ru/about-us.astro', 'locale="ru" variant="full"'],
  ['src/pages/pre-purchase-survey.astro', 'locale="en"'],
  ['src/pages/insurance-survey.astro', 'locale="en"'],
  ['src/pages/valuation-damage-survey.astro', 'locale="en"'],
  ['src/pages/es/pre-purchase-survey.astro', 'locale="es"'],
  ['src/pages/es/insurance-survey.astro', 'locale="es"'],
  ['src/pages/es/valuation-damage-survey.astro', 'locale="es"'],
  ['src/pages/ru/pre-purchase-survey.astro', 'locale="ru"'],
  ['src/pages/ru/insurance-survey.astro', 'locale="ru"'],
  ['src/pages/ru/valuation-damage-survey.astro', 'locale="ru"'],
];
for (const [path, marker] of pageExpectations) {
  assert(
    read(path).includes(`<SurveyorCredentials ${marker}`),
    `${path} is missing its credential presentation.`,
  );
}

const builtAboutPages = [
  ['dist/about-us.html', 'Professional Qualifications'],
  ['dist/es/about-us.html', 'Cualificaciones profesionales'],
  ['dist/ru/about-us.html', 'Профессиональная квалификация'],
];
if (existsSync(resolve(projectRoot, 'dist'))) {
  const builtFiles = (directory) =>
    readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
      const path = resolve(directory, entry.name);
      return entry.isDirectory()
        ? builtFiles(path)
        : /\.(?:html|css)$/u.test(entry.name)
          ? [path]
          : [];
    });
  for (const path of builtFiles(resolve(projectRoot, 'dist'))) {
    assert(
      !/iims-logo\.png|surveyor-credential-logo/iu.test(
        readFileSync(path, 'utf8'),
      ),
      `${path} still references the IIMS logo in rendered HTML or CSS.`,
    );
  }
  for (const [path, heading] of builtAboutPages) {
    const html = read(path);
    assert(
      html.includes('id="professional-qualifications"') &&
        html.includes(heading) &&
        html.includes('data-certificate-dialog') &&
        html.includes('data-certificate-open') &&
        html.includes('data-certificate-close') &&
        html.includes(
          '/images/credentials/aleksandrs-tolkacovs-iims-certificate-preview.png',
        ) &&
        html.includes(
          '/images/credentials/aleksandrs-tolkacovs-iims-certificate.pdf',
        ),
      `${path} is missing its localized full credential section.`,
    );
    const schemas = [
      ...html.matchAll(
        /<script[^>]+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gu,
      ),
    ].flatMap((match) => {
      const parsed = JSON.parse(match[1]);
      return Array.isArray(parsed) ? parsed : [parsed];
    });
    const personSchemas = schemas.filter(
      (schema) => schema['@type'] === 'Person',
    );
    const businessSchema = schemas.find(
      (schema) => schema['@id'] === 'https://www.allyachtservice.com/#business',
    );
    assert(
      personSchemas.length === 1 &&
        personSchemas[0]['@id'] ===
          'https://www.allyachtservice.com/about-us#aleksandrs-tolkacovs' &&
        businessSchema?.founder?.['@id'] ===
          'https://www.allyachtservice.com/about-us#aleksandrs-tolkacovs',
      `${path} has unstable or duplicated Person/Business structured data.`,
    );
  }
}

if (failures.length > 0) {
  process.stderr.write('Surveyor credential validation failed:\n');
  for (const failure of failures) process.stderr.write(`- ${failure}\n`);
  process.exitCode = 1;
} else {
  process.stdout.write('Surveyor credential validation passed.\n');
}
