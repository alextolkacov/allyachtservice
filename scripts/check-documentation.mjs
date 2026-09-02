import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { dirname, extname, relative, resolve, sep } from 'node:path';
import process from 'node:process';

const projectRoot = resolve(import.meta.dirname, '..');
const failures = [];

const requiredDocuments = [
  'AGENTS.md',
  'README.md',
  'docs/README.md',
  'docs/PROJECT_SPECIFICATION.md',
  'docs/ARCHITECTURE.md',
  'docs/DESIGN_SYSTEM.md',
  'docs/CONTENT_AND_LOCALISATION.md',
  'docs/SEO_AND_INDEXING.md',
  'docs/BUSINESS_AND_LEGAL.md',
  'docs/DEPLOYMENT_AND_OPERATIONS.md',
  'docs/SECURITY_AND_SECRETS.md',
  'docs/TESTING_AND_QUALITY.md',
  'docs/DOCUMENTATION_POLICY.md',
  'docs/features/CONTACT_FORM.md',
  'docs/features/CALCULATORS.md',
  'docs/features/YACHT_SURVEY_TIPS.md',
  'docs/adr/README.md',
  'docs/adr/TEMPLATE.md',
  'docs/adr/0001-static-astro-cloudflare-pages.md',
  'docs/adr/0002-three-language-route-parity.md',
  'docs/adr/0003-canonical-www-and-duplicate-hosts.md',
  'docs/adr/0004-production-indexability-guard.md',
  'docs/adr/0005-contact-form-turnstile-gmail.md',
  'docs/adr/0006-localised-presentation-shared-domain-logic.md',
  'docs/adr/0007-survey-tips-static-article-architecture.md',
  '.agents/skills/add-yacht-survey-tip/SKILL.md',
  '.agents/skills/localized-public-page/SKILL.md',
  '.agents/skills/predeploy-validation/SKILL.md',
  '.agents/skills/maintain-project-docs/SKILL.md',
];

const coreIndexTargets = [
  'PROJECT_SPECIFICATION.md',
  'ARCHITECTURE.md',
  'DESIGN_SYSTEM.md',
  'CONTENT_AND_LOCALISATION.md',
  'SEO_AND_INDEXING.md',
  'BUSINESS_AND_LEGAL.md',
  'DEPLOYMENT_AND_OPERATIONS.md',
  'SECURITY_AND_SECRETS.md',
  'TESTING_AND_QUALITY.md',
  'DOCUMENTATION_POLICY.md',
  'features/CONTACT_FORM.md',
  'features/CALCULATORS.md',
  'features/YACHT_SURVEY_TIPS.md',
  'adr/README.md',
];

function walkMarkdown(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = resolve(directory, entry.name);
    if (entry.isDirectory()) return walkMarkdown(path);
    return entry.isFile() && extname(entry.name).toLowerCase() === '.md'
      ? [path]
      : [];
  });
}

function report(message) {
  failures.push(message);
}

for (const path of requiredDocuments) {
  if (!existsSync(resolve(projectRoot, path))) {
    report(`Required documentation file is missing: ${path}`);
  }
}

const adrDirectory = resolve(projectRoot, 'docs/adr');
if (existsSync(adrDirectory)) {
  const adrNames = readdirSync(adrDirectory).filter(
    (name) => name !== 'README.md' && name !== 'TEMPLATE.md',
  );
  const adrPattern = /^\d{4}-[a-z0-9]+(?:-[a-z0-9]+)*\.md$/u;
  const seenNumbers = new Set();

  for (const name of adrNames) {
    if (!adrPattern.test(name)) {
      report(`ADR filename does not follow NNNN-lowercase-title.md: ${name}`);
      continue;
    }

    const number = name.slice(0, 4);
    if (seenNumbers.has(number)) {
      report(`ADR number is used more than once: ${number}`);
    }
    seenNumbers.add(number);
  }
}

const docsIndexPath = resolve(projectRoot, 'docs/README.md');
if (existsSync(docsIndexPath)) {
  const docsIndex = readFileSync(docsIndexPath, 'utf8');
  for (const target of coreIndexTargets) {
    if (!docsIndex.includes(`](${target})`)) {
      report(`docs/README.md does not link to ${target}`);
    }
  }
}

const agentsPath = resolve(projectRoot, 'AGENTS.md');
if (existsSync(agentsPath)) {
  const agents = readFileSync(agentsPath, 'utf8');
  for (const target of [
    'docs/README.md',
    'docs/TESTING_AND_QUALITY.md',
    'docs/adr/README.md',
  ]) {
    if (!agents.includes(target)) {
      report(`AGENTS.md does not point to ${target}`);
    }
  }
}

const markdownFiles = [
  ...new Set(
    [
      resolve(projectRoot, 'AGENTS.md'),
      resolve(projectRoot, 'README.md'),
      ...(existsSync(resolve(projectRoot, 'docs'))
        ? walkMarkdown(resolve(projectRoot, 'docs'))
        : []),
      ...(existsSync(resolve(projectRoot, '.agents/skills'))
        ? walkMarkdown(resolve(projectRoot, '.agents/skills'))
        : []),
    ].filter(existsSync),
  ),
];
const markdownLinkPattern = /!?\[[^\]]*\]\(([^)]+)\)/gu;

for (const markdownPath of markdownFiles) {
  const source = readFileSync(markdownPath, 'utf8');
  for (const match of source.matchAll(markdownLinkPattern)) {
    const rawTarget = (match[1] ?? '').trim();
    if (
      !rawTarget ||
      rawTarget.startsWith('#') ||
      /^(?:https?:|mailto:|tel:|data:)/iu.test(rawTarget)
    ) {
      continue;
    }

    const withoutTitle = rawTarget.startsWith('<')
      ? rawTarget.slice(1, rawTarget.indexOf('>'))
      : rawTarget.split(/\s+["']/u, 1)[0];
    const pathPart = (withoutTitle ?? '').split(/[?#]/u, 1)[0];
    if (!pathPart) continue;

    let decodedPath;
    try {
      decodedPath = decodeURIComponent(pathPart);
    } catch {
      report(
        `${relative(projectRoot, markdownPath)} contains an invalid encoded link: ${rawTarget}`,
      );
      continue;
    }

    const targetPath = decodedPath.startsWith('/')
      ? resolve(projectRoot, `.${decodedPath}`)
      : resolve(dirname(markdownPath), decodedPath);
    const projectRelativeTarget = relative(projectRoot, targetPath);

    if (
      projectRelativeTarget === '..' ||
      projectRelativeTarget.startsWith(`..${sep}`)
    ) {
      report(
        `${relative(projectRoot, markdownPath)} links outside the repository: ${rawTarget}`,
      );
      continue;
    }

    if (!existsSync(targetPath)) {
      report(
        `${relative(projectRoot, markdownPath)} has an unresolved relative link: ${rawTarget}`,
      );
      continue;
    }

    if (statSync(targetPath).isDirectory() && decodedPath.endsWith('.md')) {
      report(
        `${relative(projectRoot, markdownPath)} expects a Markdown file but links to a directory: ${rawTarget}`,
      );
    }
  }
}

if (failures.length > 0) {
  process.stderr.write('Documentation validation failed:\n');
  for (const failure of failures) process.stderr.write(`- ${failure}\n`);
  process.exitCode = 1;
} else {
  process.stdout.write(
    `Documentation validation passed for ${requiredDocuments.length} required files and ${markdownFiles.length} Markdown files.\n`,
  );
}
