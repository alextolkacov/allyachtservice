# All Yacht Service

Multilingual website for All Yacht Service. The site uses Astro, strict
TypeScript, Tailwind CSS, static generation, and npm. It is configured for
deployment to Cloudflare Pages.

The English homepage, Contact page, Pre-Purchase Yacht Survey page, Insurance
Condition Yacht Survey page, Yacht Buyer Representation page, Yacht Delivery
page, and About Us page contain the first production-ready implementations.
The Contact page uses a Cloudflare Pages Function, Turnstile, and the existing
Google Workspace mailbox to validate and deliver enquiries securely.
The Spanish, Russian, French, Italian, and Greek homepages retain localized
development placeholders inside the same shared header, visual system, and
footer. Other service pages, redirects, legal-page content, and reviews are not
part of the current sprint.

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
npm run preview:cloudflare # Build and preview static pages plus Pages Functions
npm run lint         # Run ESLint
npm run format       # Apply Prettier formatting
npm run format:check # Check formatting without changing files
npm run typecheck    # Run Astro and Pages Function TypeScript checks
npm run functions:types # Regenerate Cloudflare runtime and binding types
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

Astro still generates static HTML. Only `/api/*` invokes Pages Functions,
because `public/_routes.json` limits the function routing scope. All other
requests are served as static assets and do not consume Function requests.

The contact backend is designed to avoid an additional paid service:

- Pages Function requests use the Workers Free allowance.
- Static asset requests remain free and do not invoke Functions.
- Turnstile provides bot verification.
- The server-side function sends through the existing
  `info@allyachtservice.com` Google Workspace account using the Gmail API.

No paid third-party form or transactional-email provider is required. Usage
must remain within Cloudflare's and Google's current no-additional-cost usage
limits.

Astro is configured with `trailingSlash: "never"` and file-format build output.
Keep the Cloudflare URL-normalization settings aligned with that policy.

## Contact form configuration

The form endpoint is `POST /api/contact`. It validates all fields and file
signatures on the server, checks a honeypot and submission timing, rate-limits
repeated requests, validates Turnstile through Siteverify, and sends the
enquiry only after those checks succeed.

Before production email delivery can work:

1. Create or select a Google Cloud project under the existing Google Workspace
   account.
2. Enable the Gmail API.
3. Create a server-side OAuth client and authorize
   `info@allyachtservice.com` for offline access using only the
   `https://www.googleapis.com/auth/gmail.send` scope.
4. Store the resulting client ID, client secret, and refresh token as encrypted
   Cloudflare Pages secrets. Never commit them.
5. Create a Turnstile widget for the production and preview hostnames.
6. Configure the following Cloudflare Pages values for Preview and Production
   as appropriate:

| Name                         | Visibility | Purpose                                |
| ---------------------------- | ---------- | -------------------------------------- |
| `PUBLIC_TURNSTILE_SITE_KEY`  | Plain text | Public widget key used at build time   |
| `TURNSTILE_SECRET_KEY`       | Encrypted  | Server-side Siteverify key             |
| `GOOGLE_OAUTH_CLIENT_ID`     | Encrypted  | Google server-side OAuth client ID     |
| `GOOGLE_OAUTH_CLIENT_SECRET` | Encrypted  | Google server-side OAuth client secret |
| `GOOGLE_OAUTH_REFRESH_TOKEN` | Encrypted  | Offline token for Gmail send access    |

The non-secret destination, sender, and accepted Turnstile hostnames are
declared in `wrangler.jsonc`. Rerun `npm run functions:types` whenever those
bindings change.

This implementation does not change the domain's existing Google MX, SPF, or
DKIM records.

The endpoint accepts up to three PDF, JPEG, PNG, or WebP attachments. Each file
may be at most 2 MB and their combined size may be at most 3 MB. This keeps the
encoded email well within Gmail's message-size limit.

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

For a local Cloudflare preview, also copy `.dev.vars.example` to `.dev.vars` and
replace the email placeholders if real test delivery is required:

```sh
cp .dev.vars.example .dev.vars
npm run preview:cloudflare
```

The example Turnstile sitekey and secret are Cloudflare's official always-pass
test pair. They must never be used in production.

## Calculator prefill contract

Future survey and delivery calculators can prefill `/contact` with query
parameters or session storage.

Supported query parameters include:

```text
service
vesselType
vesselLength
vesselLocation
preferredDate
message
source
estimateReference
calculatorSummary
```

For larger summaries, store the same fields as JSON under the session-storage
key `ays:contact-prefill` and navigate to `/contact`. The server validates every
prefilled value again before email delivery.

## Folder structure

```text
src/
  components/       Reusable navigation, SEO, contact, card, and CTA UI
  data/             Confirmed site data, languages, and translated route maps
  layouts/          Base, service, and article page shells
  pages/            File-based English, translated, service, and 404 routes
  styles/           Global Tailwind theme and shared accessible UI styles
  utils/            Canonical URL, schema, contact, and hreflang helpers
functions/
  api/               Cloudflare Pages Function endpoints
  _lib/              Form validation, Turnstile, and email delivery helpers
public/
  images/           Optimized local WebP assets reused from the existing site
  logo/             Supplied logo artwork
  _routes.json       Limits Pages Function invocation to /api/*
  _headers           Shared security and cache-control headers
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
