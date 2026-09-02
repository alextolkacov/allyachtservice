# SEO and indexing

Last reviewed: 2026-09-02

## Canonical origin and URLs

The sole canonical production origin is `https://www.allyachtservice.com`. [`src/data/site.ts`](../src/data/site.ts) and [`astro.config.ts`](../astro.config.ts) use it for absolute URLs and sitemap generation.

[`normalizePathname`](../src/utils/seo.ts) enforces lowercase, ASCII-only paths with no spaces/underscores and strips trailing slashes. Astro builds separate static HTML files with `trailingSlash: 'never'` and `build.format: 'file'`.

Each page supplies a unique title/description and self-referencing canonical through [`BaseLayout`](../src/layouts/BaseLayout.astro) and [`SeoHead`](../src/components/SeoHead.astro). The same title and description flow to Open Graph and Twitter cards; pages with meaningful images use large-image cards.

## Languages and hreflang

[`src/utils/hreflang.ts`](../src/utils/hreflang.ts) derives alternates exclusively from genuine entries in [`src/data/navigation.ts`](../src/data/navigation.ts):

- `en`, `es` and `ru` for published equivalents;
- `x-default` to the English equivalent;
- no homepage fallback emitted as an equivalent alternate.

The sitemap integration applies the same English `x-default` rule. Language-specific entities are presentation variants, not duplicate Business or Person entities.

## Sitemap and robots

`@astrojs/sitemap` generates `sitemap-index.xml` and its child sitemap from the static route set. [`public/robots.txt`](../public/robots.txt) allows crawling and references the canonical sitemap index. Do not create or hand-maintain duplicate XML sitemap files.

Route and sitemap counts are deliberately not architectural requirements; they change with content.

## Indexability modes

`PUBLIC_SITE_INDEXABLE` is a build-time public setting:

- exactly `true`: ordinary pages emit `index, follow`;
- any other value: ordinary pages emit `noindex, nofollow`.

Page-level `noindex` always wins. The custom [`404.astro`](../src/pages/404.astro) disables alternates and Business schema and always emits `noindex, nofollow`. No SPA rewrite is present, so an unknown path cannot return homepage HTML.

Before an indexable build, [`assertLegalConfigurationForIndexableBuild`](../src/data/legal.ts) blocks generation if required approved operator, registration, retention, applicable-law or owner-approval fields are incomplete. This guard validates repository configuration; it does not prove external legal review.

Build-time hostname detection cannot distinguish a Pages preview hostname from a custom domain serving the same artifact. Environment settings and duplicate-host redirects are operational responsibilities. See [ADR-0004](adr/0004-production-indexability-guard.md) and [Deployment and Operations](DEPLOYMENT_AND_OPERATIONS.md).

## Structured data

[`src/utils/seo.ts`](../src/utils/seo.ts) defines the stable Business entity:

`https://www.allyachtservice.com/#business`

`BaseLayout` normally includes one `ProfessionalService` entity. Service schemas reference that entity by `@id`; pages must not create competing Organization/Business identities.

The stable Aleksandrs Person ID is defined in [`src/data/about-us.ts`](../src/data/about-us.ts):

`https://www.allyachtservice.com/about-us#aleksandrs-tolkacovs`

About and Survey Tips Article schemas reuse it in every locale. Breadcrumbs emit `BreadcrumbList` from visible items. Survey Tips pages emit `WebPage` plus `Article`, including dates, image, language, author and publisher. Service pages add verified `Service` data where implemented. `AggregateRating` and `Review` schema are not used.

Keep JSON-LD facts aligned with visible content and confirmed data. Never add `vatID`, ratings, insurance, qualifications or service claims merely for richer schema.

## Open Graph and articles

Localized pages use their locale's Open Graph code and list genuine alternate locales. Survey Tips set `og:type=article` and article publication/modified time, section and author metadata. Social images use canonical absolute URLs and localized alt text.

## Search Console workflow

Owner-supplied operational context confirms the sitemap index is already registered in Google Search Console. After an important new page or Survey Tip is deployed:

1. Verify the live canonical page and sitemap entry.
2. Use URL Inspection for the exact production URL.
3. Request indexing when priority justifies it.

Do not modify Search Console during ordinary code work unless explicitly asked.
