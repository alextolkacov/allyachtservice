---
name: add-yacht-survey-tip
description: Add and publish a Tuesday Yacht Survey Tip or Instagram Survey Tip as a complete localized EN/ES/RU website article, including its original infographic, routes, archive order, SEO, schema, sitemap, and regression validation.
---

# Add a Tuesday Yacht Survey Tip

Use this workflow for a new Survey Tips article. Do not use it for an unrelated service page or a documentation-only edit.

## Required inputs and stop conditions

Require the final source article/social text and original infographic/image. Require the publication date from owner input or reliable source metadata; derive it only when unambiguous. Stop and request the missing input when the image or source text is absent, or when a reliable date cannot be established.

Stop before publishing claims that require an unverified technical conclusion, qualification, legal/business fact, insurance status, replacement interval or specialist scope. Preserve existing unrelated worktree changes.

## Read first

Read completely:

- [`AGENTS.md`](../../../AGENTS.md)
- [Yacht Survey Tips](../../../docs/features/YACHT_SURVEY_TIPS.md)
- [Content and Localisation](../../../docs/CONTENT_AND_LOCALISATION.md)
- [SEO and Indexing](../../../docs/SEO_AND_INDEXING.md)
- [ADR-0002](../../../docs/adr/0002-three-language-route-parity.md)
- [ADR-0006](../../../docs/adr/0006-localised-presentation-shared-domain-logic.md)
- [ADR-0007](../../../docs/adr/0007-survey-tips-static-article-architecture.md)

Then inspect the current local article data, routes, hub arrays, shared renderer/card, styles, assets, regression scripts and git status. Current code outranks snapshots in documentation.

## Workflow

1. Turn the source into an English educational article; do not merely copy a caption.
2. Preserve source facts and safety limits. Omit hashtags/social boilerplate. Distinguish observation from diagnosis, keep DIY checks conservative, and never imply that a standard survey includes specialist inspection outside its agreed scope.
3. Choose a lowercase ASCII hyphenated slug and use it across EN/ES/RU, matching current convention.
4. Create the English typed article/data and genuine professional Spanish and Russian equivalents.
5. Create three explicit localized Astro routes.
6. Add one EN/ES/RU route group to `translatedRoutes` only after all pages exist.
7. Insert the article first in every localized archive array; keep all three orders equivalent.
8. Store the original infographic under the existing Survey Tips image directory. Preserve its full graphic, real dimensions and important embedded text. Do not crop it; retain `object-fit: contain`.
9. Add localized titles, descriptions, captions and alt/social-image text. English text inside an original infographic is acceptable; surrounding localized content must explain it.
10. Preserve the compact archive, mobile stack/desktop horizontal rows, no Featured Guide, shared author spacing, stable Business/Person IDs and shared schema renderer.
11. Add useful localized internal links only to real routes.
12. Confirm self-canonicals, reciprocal EN/ES/RU hreflang, English `x-default`, Open Graph image, `Article`, `WebPage` and `BreadcrumbList`, plus automatic sitemap entries.

Never claim professional liability insurance or add unsupported marine-survey facts, guarantees or replacement intervals.

## Validation

Inspect current `package.json` and [Testing and Quality](../../../docs/TESTING_AND_QUALITY.md); run every applicable current format, Astro/TypeScript, Function type, lint, EN/ES/RU, image, schema, route/link, sitemap and both indexability build check. Verify visible author strings are exactly spaced while JSON-LD author names remain unchanged.

Do not commit, push, deploy or request indexing unless explicitly authorized.

## Final report

Report the title, slug, publication date, three routes, files, image path/dimensions, archive position, canonical/hreflang/Open Graph/schema results, sitemap result, validation commands/results, and git/commit/push/deployment/indexing status.
