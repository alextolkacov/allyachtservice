# ADR-0007: Static localized Survey Tips article architecture

- Status: Accepted
- Decision date: 2026-08-20
- Last reviewed: 2026-09-02
- Decision owners: Project owner and repository maintainers
- Related documentation: [Yacht Survey Tips](../features/YACHT_SURVEY_TIPS.md), [Design System](../DESIGN_SYSTEM.md)

## Context

Survey Tips began in commit `5bfc020` on 2026-07-28. Later EN/ES/RU article additions and commit `6200f20` established the current typed per-article data, shared renderer, explicit localized routes, compact archive and original infographic assets. Recent commits continue that repeatable pattern.

The rationale below is reconstructed from current implementation and localization/image regression rules; no complete original design rationale is recorded.

## Decision

- Represent each article as typed EN/ES/RU data using shared interfaces.
- Create explicit static route files for all three locales and one typed route-equivalence group.
- Use shared card/article components and stable WebPage/Article/Business/Person schema IDs.
- Keep original infographic assets in the repository and expose them as social/article images with localized alt text.
- Maintain a newest-first compact archive with full `contain` image visibility and no Featured Guide block.
- Let Astro's route discovery and sitemap integration publish every article URL.

## Alternatives considered

A Featured Guide presentation existed in earlier documentation and was removed from the current implementation. The repository does not record a complete comparison with a CMS, dynamic article collection or translated-slug approach.

## Consequences

### Positive

- Article output is static, crawlable and inspectable in every language.
- Shared renderer preserves schema, metadata and author formatting.
- Original infographics remain visible without cropping embedded technical text.
- Weekly additions follow a deterministic source/data/route/archive workflow.

### Negative / trade-offs

- Each weekly addition touches multiple localized data, route and hub files.
- Archive order must be synchronized manually across locale modules.
- Image/content regressions include deliberately explicit fixtures that need review when adding an article.

## Implementation references

- [`src/data/yacht-survey-tips/types.ts`](../../src/data/yacht-survey-tips/types.ts)
- [`src/components/SurveyTipArticlePage.astro`](../../src/components/SurveyTipArticlePage.astro)
- [`src/components/SurveyArticleCard.astro`](../../src/components/SurveyArticleCard.astro)
- [`src/styles/global.css`](../../src/styles/global.css)
- Commits `5bfc020`, `6200f20`, `d9f35c1` and `2dde82b`.

## Supersedes / Superseded by

None.
