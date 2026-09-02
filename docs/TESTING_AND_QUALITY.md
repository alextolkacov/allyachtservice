# Testing and quality

Last reviewed: 2026-09-02

Always inspect [`package.json`](../package.json) before running checks; scripts are executable truth and may evolve faster than this summary.

## Current scripts

| Script                       | What it validates                                                                                                                                                        |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `npm run format:check`       | Prettier formatting for tracked source/document formats.                                                                                                                 |
| `npm run check`              | Astro component/content type and template diagnostics.                                                                                                                   |
| `npm run typecheck`          | Astro check plus strict Cloudflare Function TypeScript compilation.                                                                                                      |
| `npm run lint`               | ESLint recommended TypeScript and Astro rules.                                                                                                                           |
| `npm run check:legal`        | Central legal fields, localized policies, storage/tracking inventory, Contact privacy/attachments/Turnstile contracts and built legal routes. Requires a current `dist`. |
| `npm run check:i18n`         | Spanish then Russian route/content/navigation/metadata/schema/sitemap/terminology/link/image regressions. Requires a current `dist`.                                     |
| `npm run check:ru`           | Russian portion of localization regression.                                                                                                                              |
| `npm run check:calculators`  | Canonical survey/delivery formula cases, route graph, language equality and stored payload tamper/reference/expiry behavior.                                             |
| `npm run check:docs`         | Required docs, relative links, ADR naming, docs index and AGENTS links.                                                                                                  |
| `npm run build`              | Static production artifact and sitemap; behavior of robots metadata depends on `PUBLIC_SITE_INDEXABLE`.                                                                  |
| `npm run preview`            | Astro static preview of the existing build.                                                                                                                              |
| `npm run preview:cloudflare` | Build plus local Cloudflare Pages/Functions emulation.                                                                                                                   |
| `npm run functions:types`    | Regenerates Cloudflare binding types; this is a modifying maintenance command, not a routine read-only check.                                                            |

The localization scripts currently include some dated exact route and article assertions. They are valuable regressions, but when a deliberate route/article addition changes them, update the assertions in the same reviewed change rather than weakening them.

## Build modes

Run both:

```sh
PUBLIC_SITE_INDEXABLE=false npm run build
PUBLIC_SITE_INDEXABLE=true npm run build
```

The preview-safe build should emit `noindex, nofollow` on ordinary pages. The production build should emit `index, follow`, pass the legal guard and still keep `/404` non-indexable. In both modes inspect `dist/sitemap-index.xml`, the child sitemap and representative EN/ES/RU HTML.

Because several regression scripts inspect `dist`, run the intended build immediately before legal/localization checks.

## Expected scope by change

| Change                       | Minimum targeted checks before the full final suite                                                                                                                           |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Content-only, one language   | Format, Astro/typecheck, lint; normally parity/localization checks if the page is localized.                                                                                  |
| New localized route          | Both builds, EN/ES/RU localization, legal if policy/Contact related, sitemap, canonicals/hreflang, internal-link and generated-route inspection.                              |
| Survey Tip                   | Both builds, EN/ES/RU checks, image hash/dimensions/full-contain behavior, author spacing, Article/Breadcrumb schema and sitemap.                                             |
| Calculator                   | Typecheck, calculator regression, all localized presentation, Contact handoff, legal/storage inventory and both builds.                                                       |
| Contact                      | Typecheck, lint, legal regression, browser and server validation, Cloudflare preview with test configuration; controlled end-to-end delivery only when authorized/configured. |
| Legal/business               | Legal and EN/ES/RU regressions plus an indexable build to exercise the guard.                                                                                                 |
| Documentation/ADR/skill only | Format, docs checker, skill validator; compare static output when the task requires behavior-neutral proof.                                                                   |

## Quality expectations

- No broken internal links to nonexistent static routes.
- Genuine language equivalents and reciprocal hreflang only.
- Unique localized title/description/H1 and correct canonical.
- Valid JSON-LD with stable Business/Person IDs and visible factual support.
- No unexpected route or sitemap removal.
- Meaningful image alt text, declared dimensions and appropriate eager/lazy loading.
- Keyboard, focus, semantics, reduced motion and mobile/desktop layouts preserved.
- No console errors in relevant interactive paths.
- No secret or untracked environment value included in the diff.

Screenshots and manual browser checks are evidence for visual behavior, not automated tests. Do not change functionality solely to satisfy a brittle assertion; first decide whether code or the regression is stale.
