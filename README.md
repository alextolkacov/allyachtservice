# All Yacht Service

Multilingual website for All Yacht Service. The site uses Astro, strict
TypeScript, Tailwind CSS, static generation, and npm. It is configured for
deployment to Cloudflare Pages.

The English homepage, Pre-Purchase Yacht Survey page, and Yacht Delivery page
contain the first production-ready visual implementations.
The Spanish, Russian, French, Italian, and Greek homepages retain localized
development placeholders inside the same shared header, visual system, and
footer. Other service pages, redirects, legal-page content, reviews, and a
contact form backend are not part of the current sprint.

## Local setup

Requirements:

- Node.js 24 LTS (see `.nvmrc`)
- npm 11 or later

Install and start the development server:

```sh
nvm use
npm install
npm run dev
```

The development server prints the local URL. Astro does not perform automatic
browser-language redirects.

## Commands

```sh
npm run dev          # Start the local development server
npm run build        # Generate the static production site in dist/
npm run preview      # Preview the production build locally
npm run lint         # Run ESLint
npm run format       # Apply Prettier formatting
npm run format:check # Check formatting without changing files
npm run typecheck    # Run Astro and TypeScript checks
```

Before merging changes, run:

```sh
npm run format:check
npm run lint
npm run typecheck
npm run build
```

## Cloudflare Pages

Connect the GitHub repository
`alextolkacov/allyachtservice` to a Cloudflare Pages project and use:

| Setting                | Value           |
| ---------------------- | --------------- |
| Framework preset       | Astro           |
| Production branch      | `main`          |
| Build command          | `npm run build` |
| Build output directory | `dist`          |
| Root directory         | `/`             |
| Node.js version        | `24`            |

For the current pre-launch deployment, add this build-time environment variable
in Cloudflare Pages:

```text
PUBLIC_SITE_INDEXABLE=false
```

This is a fully static Astro project, so it does not require the Cloudflare
adapter or Pages Functions. Cloudflare should publish the generated `dist`
directory as static assets.

Astro is configured with `trailingSlash: "never"` and file-format build output.
Keep the Cloudflare URL-normalization settings aligned with that policy.

## Environment-variable strategy

Copy `.env.example` to `.env` for local builds that should mirror the current
pre-launch deployment:

```sh
cp .env.example .env
```

`PUBLIC_SITE_INDEXABLE` controls the robots meta tag at build time:

- `false` or unset: normal pages output `noindex, nofollow`.
- `true`: normal pages output `index, follow`.
- Explicit error pages such as `404.astro` remain `noindex, nofollow` in both
  modes.

Keep `PUBLIC_SITE_INDEXABLE=false` in the Cloudflare Pages production
environment while the site is in pre-launch review. Immediately before
connecting or launching `https://www.allyachtservice.com`, change the production
value to `true` and trigger a fresh build. Hostname detection is not used because
the `pages.dev` hostname and a custom domain may serve the same static build.

After launch, redirect the `pages.dev` hostname to the custom domain or prevent
it from becoming a duplicate public version through the Cloudflare project
configuration.

- Prefix a value with `PUBLIC_` only when it is safe to expose in browser code.
- Keep secrets unprefixed and use them only in server-side code or a separate
  backend.
- Remember that values used during a static build are compiled into the output.
- Configure production build-time values in Cloudflare Pages rather than
  committing `.env` files.
- Keep `.env.example` synchronized with all required variable names, without
  including real credentials.

A future contact form backend should be designed and deployed separately; it is
not part of this foundation.

## Folder structure

```text
src/
  components/       Reusable navigation, SEO, breadcrumb, card, and CTA UI
  data/             Confirmed site data, languages, and translated route maps
  layouts/          Base, service, and article page shells
  pages/            File-based English, translated, service, and 404 routes
  styles/           Global Tailwind theme and shared accessible UI styles
  utils/            Canonical URL, schema, and hreflang helpers
public/
  images/           Optimized local WebP assets reused from the existing site
  logo/             Supplied logo artwork
  robots.txt        Crawler rules and sitemap discovery
```

The first alphabetically named SVG in `public/logo/` is used automatically by
the header. Keep one approved SVG logo in that directory to avoid ambiguity.
Until it is supplied, the business name is rendered as an accessible text
fallback.

## Content and translation conventions

- English uses root URLs, such as `/` and `/services`.
- Spanish, Russian, French, Italian, and Greek use `/es`, `/ru`, `/fr`, `/it`,
  and `/gr`.
- The Greek URL prefix is `gr`; its correct HTML and hreflang language code is
  `el`.
- URLs must be lowercase and ASCII-only, with hyphens between words.
- Do not create `/home`, file-extension URLs, or language query parameters.
- Do not add trailing slashes to internal links or canonical URLs.
- Do not add browser-language redirects.

Every published translation must be added to `src/data/navigation.ts`.
`LanguageSwitcher.astro` links to the exact equivalent when one exists. When a
service translation is not yet published, the visible selector may link to that
language's homepage, but its accessible label identifies it as a homepage and
the destination is not emitted as an SEO alternate.

Each page must also provide:

- a unique localized title and description;
- the correct locale and translated-route ID;
- a canonical pathname that matches its route;
- complete translated content before publication.

`SeoHead.astro` generates the self-referencing canonical URL, only the published
hreflang equivalents, `x-default`, Open Graph metadata, Twitter card metadata,
and environment-controlled robots output. `BaseLayout.astro` adds
`ProfessionalService` structured data using only confirmed information.
`Breadcrumbs.astro` adds `BreadcrumbList` structured data when used, and service
pages may add page-specific `Service` data.

Astro generates a top-level `404.html` from `src/pages/404.astro`. Do not add a
SPA fallback such as `/* /index.html 200`; Cloudflare Pages must serve the custom
404 document with a 404 response for unknown routes.

Do not add ratings or review schema. Do not state a company registration or VAT
number, registered-company status, or professional-liability-insurance claims.
The approved professional wording is “IIMS-Certified Yacht and Small Craft
Marine Surveyor and Licensed Captain.”
