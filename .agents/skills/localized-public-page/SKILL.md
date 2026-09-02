---
name: localized-public-page
description: Create or materially change an All Yacht Service public page while enforcing genuine English, Spanish, and Russian parity, route equivalence, localized SEO and schema, safe internal links, and sitemap validation.
---

# Add or modify a localized public page

Use for a new public page or a material public-page change. Do not use for a private engineering document, isolated style cleanup with no content effect, or a Survey Tip addition covered by `add-yacht-survey-tip`.

## Read and inspect

Read [`AGENTS.md`](../../../AGENTS.md), [Content and Localisation](../../../docs/CONTENT_AND_LOCALISATION.md), [SEO and Indexing](../../../docs/SEO_AND_INDEXING.md), [Design System](../../../docs/DESIGN_SYSTEM.md), [ADR-0002](../../../docs/adr/0002-three-language-route-parity.md) and any feature/legal ADRs that apply.

Inspect the current local route, data, layout, navigation, component, schema, link and test conventions before editing. Treat current English as the content source of truth unless the request explicitly establishes a different approved source.

Stop and ask for owner/legal clarification if required scope, legal/business facts or professional claims cannot be verified. Preserve unrelated worktree changes.

## Workflow

1. Complete or update the English page/content first.
2. Create genuine, meaning-equivalent Spanish and Russian versions; preserve scope, caveats, disclosures, links and safety boundaries.
3. For a new group, create three explicit route files and add `translatedRoutes` only when each real page exists.
4. Never translate canonical internal service codes, calculator enums/payloads or other domain identifiers.
5. Add localized title, meta description, H1/body, breadcrumbs, CTAs and meaningful image alt/social text.
6. Confirm each self-canonical; reciprocal `en`, `es`, `ru`; English `x-default`; correct Open Graph locale; appropriate visible and JSON-LD content.
7. Reuse stable Business and Person IDs. Add only schema types supported by the page's visible, verified facts.
8. Check navigation and all contextual/internal links in each locale. Link only to genuine routes; visibly/accessibly identify cross-language or homepage fallback links when allowed.
9. Verify generated static HTML and sitemap entries.

Never emit a locale homepage fallback as page-equivalent hreflang. Do not create a locale route that returns or imitates the homepage.

## Validation and permissions

Inspect current `package.json` and run applicable format, Astro/TypeScript, Function type, lint, EN/ES/RU, legal, calculator, route/link, schema, sitemap and preview/indexable build checks from [Testing and Quality](../../../docs/TESTING_AND_QUALITY.md). Compare generated pages for distinct localized content and equivalent domain behavior.

Do not commit, push or deploy unless explicitly requested.

## Expected output

Report affected route group, English source used, localized files/content, internal-link and schema decisions, canonical/hreflang/sitemap results, tests, unresolved facts, and git/deployment status.
