# Development handoff across Macs

Last reviewed: 2026-11-13

This is the starting point for a new developer or Codex session after cloning the repository. It connects existing runbooks; executable code, configuration and current Git state remain authoritative. Do not infer today's deployment or worktree status from the dated snapshot below.

## Orient before editing

1. Run `git status --short --branch`, `git log -1 --oneline` and `git remote -v`. Preserve any work already present on that Mac. Compare the checked-out branch with its tracking branch before pulling or starting a change.
2. Read [`AGENTS.md`](../AGENTS.md), this guide and the [documentation index](README.md). Then read only the affected [architecture](ARCHITECTURE.md), [feature guide](features/YACHT_SURVEY_TIPS.md), [operations](DEPLOYMENT_AND_OPERATIONS.md), [security](SECURITY_AND_SECRETS.md), [testing](TESTING_AND_QUALITY.md) and [ADR](adr/README.md) documents.
3. Inspect [`package.json`](../package.json), [`astro.config.ts`](../astro.config.ts), the relevant source files and current regression scripts. Current local implementation outranks a chat transcript or dated status note. Use [`src/data/navigation.ts`](../src/data/navigation.ts) for real routes and translation groups; do not guess them.
4. Check whether the task matches a repository skill in [`.agents/skills`](../.agents/skills). If facts conflict, follow the [documentation source precedence](README.md#source-precedence), investigate and report unresolved differences rather than silently choosing a narrative.

The site is an Astro static multipage application with strict TypeScript and Tailwind/project CSS. English uses root URLs; genuine Spanish and Russian equivalents use `/es` and `/ru`. Cloudflare Pages serves static output and Pages Functions handle `/api/*`. The [architecture guide](ARCHITECTURE.md) explains boundaries; do not introduce a new rendering, localization, SEO or content architecture to resume routine work.

## Fresh Mac setup

Prerequisites: Git, [Node.js 24](../.nvmrc) (`>=24 <25` in `package.json`), npm 11 or later, and repository access. The commands below assume `nvm` is installed; if using another Node manager, select a compatible Node/npm pair before `npm ci`. No global Astro or Wrangler installation is required.

```sh
git clone https://github.com/alextolkacov/allyachtservice.git
cd allyachtservice
nvm install
nvm use
node --version
npm --version
npm ci
cp .env.example .env
npm run dev
```

Open the local URL printed by Astro. `.env.example` supplies a preview-safe local build setting and an official public Turnstile test site key; `.env` is ignored by Git. If an existing `.env` is already present, review it rather than overwriting it. A static page can be developed without private Gmail credentials. Do not copy secrets into the repository or a chat.

For a built static preview, run `PUBLIC_SITE_INDEXABLE=false npm run build` followed by `npm run preview`. `npm run preview:cloudflare` instead builds and starts local Cloudflare Pages/Functions emulation. To exercise actual Contact delivery locally, make an ignored `.dev.vars` from [`.dev.vars.example`](../.dev.vars.example) and fill it only with authorized test credentials from the approved secret holder; the example alone is not a working Gmail configuration. Non-secret Function defaults are declared in [`wrangler.jsonc`](../wrangler.jsonc). See [Contact Form](features/CONTACT_FORM.md) before testing submissions.

## Checks and build modes

Run change-specific checks from [Testing and Quality](TESTING_AND_QUALITY.md). For a full local validation, use the current scripts in `package.json` in this order:

```sh
npm run format:check
npm run typecheck
npm run lint
npm run check:calculators
npm run check:docs
PUBLIC_SITE_INDEXABLE=false npm run build
npm run check:legal
npm run check:i18n
PUBLIC_SITE_INDEXABLE=true npm run build
npm run check:seo
git diff --check
```

`npm run check` is available for Astro diagnostics alone; `typecheck` includes it and also checks Functions TypeScript. The legal and localization checks read generated `dist`, so run them after the preview-safe build. The SEO check reads the indexable build. Inspect representative output, the 404 and sitemap when routes, indexability or SEO change. An indexable build is a local artifact, **not** permission to deploy it. The ordinary Astro preview does not exercise Pages Functions.

## Environment and external services

Use names and ownership, not values, in documentation:

| Setting or service                                                                                           | Where it belongs                                                             | Purpose                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `PUBLIC_SITE_INDEXABLE`                                                                                      | Local `.env` or Cloudflare build environment                                 | Exactly `true` makes ordinary pages indexable; any other value is preview-safe `noindex`. A static build cannot set different robots tags by hostname. |
| `PUBLIC_TURNSTILE_SITE_KEY`                                                                                  | Local `.env` or Cloudflare build environment                                 | Public browser key; the tracked example contains an official local test key, not the production key.                                                   |
| `CONTACT_FROM_EMAIL`, `CONTACT_TO_EMAIL`, `TURNSTILE_EXPECTED_HOSTNAMES`                                     | Versioned non-secret defaults in `wrangler.jsonc`; verify provider overrides | Pages Function sender, recipient and accepted Turnstile hostnames.                                                                                     |
| `TURNSTILE_SECRET_KEY`, `GOOGLE_OAUTH_CLIENT_ID`, `GOOGLE_OAUTH_CLIENT_SECRET`, `GOOGLE_OAUTH_REFRESH_TOKEN` | Ignored local `.dev.vars` and Cloudflare encrypted secrets                   | Server-side Turnstile verification and Gmail send-only delivery. Never use `PUBLIC_` for these.                                                        |

External dependencies are Cloudflare Pages/Functions, Turnstile, Google OAuth/Gmail, and DNS/redirect configuration outside this repository. Search Console is also external; publishing or requesting indexing requires explicit owner direction. [Security and Secrets](SECURITY_AND_SECRETS.md) defines handling; [Deployment and Operations](DEPLOYMENT_AND_OPERATIONS.md) defines release verification. Do not assume a freshly cloned Mac has provider access or secret values.

## Moving work safely between Macs

Git synchronizes **committed and pushed** tracked files, not ignored `.env`/`.dev.vars`, untracked files or a local stash. Before leaving Mac A, run `git status --short --branch` and review the diff. With the owner's approval, commit the intended work on the agreed branch and push it; do not force-push `main` or commit credentials. A work-in-progress feature branch is preferable to an unreviewed `main` commit when the change is unfinished. If work must remain uncommitted, transfer it by an explicitly reviewed method; do not assume it will appear on Mac B.

On Mac B, clone or inspect the existing worktree, run `git fetch --prune`, select the intended tracking branch and use `git pull --ff-only` **only after** confirming the worktree is clean. Compare commit IDs with the pushed branch, run `npm ci` after dependency changes, recreate ignored local configuration from approved sources, and rerun the relevant checks. Never resolve a divergence with `git reset --hard`, a force push or an overwrite of another Mac's edits without explicit approval. Codex must not commit, push or deploy unless asked for that action.

## Survey Tips and approved boundaries

For a future Tuesday Survey Tip, read the complete [Survey Tips workflow](../.agents/skills/add-yacht-survey-tip/SKILL.md) and [feature guide](features/YACHT_SURVEY_TIPS.md). Obtain the final source text, original image and confirmed publication date; create genuine EN/ES/RU typed article modules and three explicit Astro routes; add the route group to `translatedRoutes`; place each card first in its localized archive. Preserve the source infographic, full `contain` display, shared author spacing and schema IDs. Verify localized metadata, links, reciprocal hreflang, sitemap and both build modes. Do not infer article facts or dates from a social image alone.

For any page, preserve the approved business, legal and professional wording in [Business and Legal](BUSINESS_AND_LEGAL.md), the existing locale contract in [Content and Localisation](CONTENT_AND_LOCALISATION.md), and the canonical/indexing rules in [SEO and Indexing](SEO_AND_INDEXING.md). If a durable decision truly changes, update current-state docs and add/supersede an ADR; routine content additions do not require one.

## Dated status and what remains unknown

Verified on **2026-11-13, before this documentation edit**: local `main` was clean at `405174f` (`Add Sea Trial article to Survey Tips`), and local `origin/main` pointed to the same commit. The site includes EN/ES/RU service and company pages, calculators, Contact Function, legal pages and localized Survey Tips; inspect code for the exact current inventory. This documentation-only handoff is deliberately left **uncommitted** for owner review, so a subsequent `git status` will show documentation changes until the owner handles them.

Public HTTP checks on 2026-11-13 returned 200 for the canonical homepage, the 10 November sea-trial article and `sitemap-index.xml`; the article showed the expected title/date and `index, follow`. The `pages.dev` hostname ended at `www.allyachtservice.com`. One historical Spanish pre-purchase URL returned a 301 to its `/es` equivalent with the query string preserved. This verifies those specific responses, **not** the Cloudflare deployment commit, every redirect, production environment values, Search Console state or Contact delivery. The exact Pages deployment/secret state and the full legacy-host migration remain unverified; a Russian legacy-host request timed out during this audit. Recheck provider configuration and representative routes before any release. See [Legacy Language Redirects](LEGACY_LANGUAGE_REDIRECTS.md).

No application-code defect was established by this documentation audit. The legacy redirect CSV is a dated snapshot and does not include the newest Survey Tip routes; whether those URLs ever existed on old hosts is unknown, so do not add speculative redirects. Outstanding owner/provider checks are the exact Cloudflare project and deployed commit, production/Preview environment separation, real Turnstile/Gmail configuration, complete legacy ES/RU redirects (including DNS/HTTPS and the historical URL inventory), and any Search Console indexing action. A new clone is ready to develop after local runtime and configuration setup; production release readiness must be assessed separately with the [pre-deployment workflow](../.agents/skills/predeploy-validation/SKILL.md).
