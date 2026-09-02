---
name: predeploy-validation
description: Assess whether the All Yacht Service repository is ready to push or deploy by running current production checks, comparing routes and sitemap, checking indexability, legal state and secret hygiene, and issuing an evidence-based GO or NO-GO without deploying.
---

# Pre-deployment validation

Use for “is this ready to deploy?”, “run final production checks” or equivalent release-readiness requests. This is a read-only assessment unless the user separately asks to fix failures.

## Read first

Read [`AGENTS.md`](../../../AGENTS.md), [Testing and Quality](../../../docs/TESTING_AND_QUALITY.md), [Deployment and Operations](../../../docs/DEPLOYMENT_AND_OPERATIONS.md) and [Security and Secrets](../../../docs/SECURITY_AND_SECRETS.md). Inspect current `package.json`, git status/diff and relevant code/config rather than relying on a hardcoded command list.

## Workflow

1. Establish the intended change and expected route/sitemap effects from the current diff/history.
2. Run every relevant current check, including available Astro/TypeScript and Function typecheck, ESLint, Prettier, legal, EN/ES/RU, calculators, docs, SEO/schema/sitemap/routes/internal links and image integrity.
3. Build with `PUBLIC_SITE_INDEXABLE=false`; confirm ordinary pages are noindex and 404 is noindex.
4. Build with `PUBLIC_SITE_INDEXABLE=true`; confirm the legal guard passes, ordinary production pages are indexable and 404 remains noindex.
5. Compare generated route and sitemap changes with intent. Confirm the canonical origin remains `https://www.allyachtservice.com`, reciprocal localized alternates remain valid and no unexpected route disappeared.
6. Check the current/staged tree for accidental credentials without printing matched values. Confirm real environment files remain ignored/untracked.
7. When Contact is in scope, validate the server/browser contract and Cloudflare preview; perform live delivery only with explicit authorization and configured safe test data.

Do not alter functionality or weaken tests merely to obtain a pass. Diagnose failures and distinguish stale fixtures from product regressions. Do not deploy, push, change providers or rotate credentials unless explicitly requested.

## Stop and recommendation rules

Issue `NO-GO` for a failed required check, secret exposure, unexpected route/sitemap loss, invalid legal/indexability state, production noindex, indexable 404, canonical-host drift or unresolved material uncertainty. A deliberate documented change may explain a snapshot difference but does not excuse missing validation.

Issue `GO` only when the checks relevant to the actual change pass and no release blocker remains.

## Final report

Lead with `GO` or `NO-GO`, then report worktree/commit assessed, commands and results, both build modes, route/sitemap comparison, SEO/indexability/404, legal/localization/calculator/Contact status as applicable, secret-scan result, external checks not provable locally, and confirmation that no deployment occurred.
