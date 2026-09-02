# Yacht Survey Tips

Last reviewed: 2026-09-02

## Purpose

Yacht Survey Tips is a professional educational knowledge centre derived from All Yacht Service's Tuesday Survey Tips. Website articles expand a short social post into cautious, inspectable guidance; they are not a substitute for a vessel-specific survey or specialist diagnosis.

## Current architecture

- Shared types: [`src/data/yacht-survey-tips/types.ts`](../../src/data/yacht-survey-tips/types.ts).
- English hub/order: [`src/data/yacht-survey-tips.ts`](../../src/data/yacht-survey-tips.ts).
- One English typed article module per slug: [`src/data/yacht-survey-tips`](../../src/data/yacht-survey-tips).
- Parallel Spanish/Russian hub and article modules: [`src/data/es`](../../src/data/es) and [`src/data/ru`](../../src/data/ru).
- Explicit localized Astro routes: English, [`src/pages/es/yacht-survey-tips`](../../src/pages/es/yacht-survey-tips) and [`src/pages/ru/yacht-survey-tips`](../../src/pages/ru/yacht-survey-tips).
- Hub card: [`src/components/SurveyArticleCard.astro`](../../src/components/SurveyArticleCard.astro).
- Shared article renderer and schema: [`src/components/SurveyTipArticlePage.astro`](../../src/components/SurveyTipArticlePage.astro).
- Original infographic assets: [`public/images/yacht-survey-tips`](../../public/images/yacht-survey-tips).
- Route equivalents: [`src/data/navigation.ts`](../../src/data/navigation.ts).

The hub arrays are the visible archive order and must remain newest first in EN/ES/RU. Article/page counts are not an architectural invariant.

## Weekly article workflow

1. Receive the final source social text and original infographic. Confirm publication date from reliable source metadata or owner input; do not guess.
2. Inspect the current local article, hub, route, schema and CSS patterns.
3. Write the English educational article from the source facts, adding explanation without inventing diagnosis, intervals or scope.
4. Create professional Spanish and Russian equivalents from the approved English source.
5. Use the same lowercase ASCII slug across EN/ES/RU under the Survey Tips path.
6. Add three typed article data modules and three explicit Astro routes.
7. Add the route group to `translatedRoutes` only after all three pages exist.
8. Add all hub cards at the front of their `latestArticles` arrays in matching newest-first order.
9. Store the original infographic under the article asset folder without re-creating or cropping its content. Record real dimensions.
10. Add localized image alt text, caption/social alt text, title, description and metadata.
11. Reuse the shared Article/WebPage/Business/Person schema architecture and visible Breadcrumbs.
12. Add useful related articles/services and localized Contact routes without linking to nonexistent pages.
13. Build, verify the three sitemap URLs and reciprocal hreflang/English x-default, and run all applicable regressions.
14. Deploy and request Search Console indexing only when explicitly authorized; otherwise report the local state.

The repository skill [Add Tuesday Yacht Survey Tip](../../.agents/skills/add-yacht-survey-tip/SKILL.md) packages this workflow.

## Content and safety rules

- Turn a social caption into a coherent educational article; do not copy hashtags or repetitive social boilerplate.
- Use restrained surveyor wording such as “may indicate,” “visible sign,” “warrants further investigation” and “within the agreed scope.”
- Distinguish a visible observation from a cause, concealed condition, diagnosis or repair conclusion.
- Do not invent defect frequency, safety outcome, replacement interval, regulation, manufacturer requirement or survey result.
- Keep owner DIY checks conservative, non-destructive and safe. Do not instruct unqualified readers to dismantle energized, pressurized, underwater or load-bearing systems.
- A professional general survey does not automatically equal a specialist rig, engine, electrical or other inspection unless the scope says so.
- Preserve conflict, qualification and insurance boundaries in [Business and Legal](../BUSINESS_AND_LEGAL.md).
- Translate meaning and limitations professionally, not word-for-word mechanically.

## Archive design contract

- Compact knowledge-library list; no Featured Survey Advice/Featured Guide block.
- Infographic left and article summary right on desktop; stacked on mobile.
- Controlled portrait frame in the archive.
- `object-fit: contain`, complete graphic visible and important embedded text never cropped.
- Original infographics may retain English text; localized alt text and surrounding article content provide language-appropriate context.
- Current image treatment is grayscale in the site presentation.

See [Design System](../DESIGN_SYSTEM.md).

## Metadata and schema

Every article requires a unique localized SEO title, meta description, H1, standfirst and self-canonical. Route equivalents produce reciprocal EN/ES/RU hreflang and English `x-default`. Open Graph/Twitter use the original infographic and localized alt text. Shared rendering emits:

- `WebPage` with localized language and canonical page ID;
- `Article` with stable page/article IDs, publication/modified dates, image, section, author and publisher;
- `BreadcrumbList` from visible breadcrumbs;
- the stable Aleksandrs Person ID and Business provider ID.

Do not create locale-specific Person/Business entities.

## Author-spacing regression

The article metadata component must render visible whitespace between localized prefix and the author name:

- `By Aleksandrs Tolkacovs`
- `Por Aleksandrs Tolkacovs`
- `Материал подготовил Aleksandrs Tolkacovs`

Fix spacing in the shared component, never with article-specific padded strings. Structured-data author fields remain the unmodified name.

## Validation and delivery report

Run the Survey Tip, EN/ES/RU, image, schema, sitemap, route/link, type, lint, format and both indexability build checks described in [Testing and Quality](../TESTING_AND_QUALITY.md). Final handoff should state title, slug, publication date, routes, files, original image path/dimensions, archive position, canonical/hreflang/schema/sitemap result, test results and whether any commit/push/deployment occurred.
