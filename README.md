# All Yacht Service

Multilingual website for All Yacht Service. The site uses Astro, strict
TypeScript, Tailwind CSS, static generation, and npm. It is configured for
deployment to Cloudflare Pages.

The English homepage, Contact page, Pre-Purchase Yacht Survey page, Insurance
Condition Yacht Survey page, Yacht Buyer Representation page, Yacht Delivery
page, Yacht Valuation and Damage Assessment page, About Us page, and
Pre-Purchase Yacht Survey Cost Calculator contain the first production-ready
implementations. The Yacht Delivery Cost Calculator is also available as a
native planning tool.
The English Yacht Survey Tips hub and its first two articles are available at
`/yacht-survey-tips`, `/yacht-survey-tips/shiny-hull`, and
`/yacht-survey-tips/deck-moisture-soft-spots`.
The English Yachts for Sale and Buyer Support referral page is available at
`/yachts-for-sale`.
The Contact page uses a Cloudflare Pages Function, Turnstile, and the existing
Google Workspace mailbox to validate and deliver enquiries securely.
Spanish Translation Batch 5 publishes six complete Spanish service and business
pages, both calculator pages, the Yacht Survey Tips hub and its two published
articles, the Yachts for Sale referral page, the Spanish homepage and Contact
page. The Russian homepage retains its localized development placeholder inside
the same shared visual system. Spanish legal policies remain pending. French,
Italian and Greek are deferred and not currently supported.

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

## Spanish localisation

Locale metadata remains central in `src/data/languages.ts`. The only supported
languages are English, Spanish and Russian:

| Language | URL locale | HTML language | Homepage | Label |
| -------- | ---------- | ------------- | -------- | ----- |
| English  | `en`       | `en`          | `/`      | `EN`  |
| Spanish  | `es`       | `es`          | `/es`    | `ES`  |
| Russian  | `ru`       | `ru`          | `/ru`    | `RU`  |

Spanish formatting uses `es-ES`. French, Italian and Greek are deferred and not
currently supported; they have no routes, selector entries, hreflang records,
Open Graph locale alternates or sitemap entries.

Published route equivalents are declared in the typed `translatedRoutes` map
in `src/data/navigation.ts`. The current Spanish equivalents are:

| Content                         | English                                       | Spanish                                          |
| ------------------------------- | --------------------------------------------- | ------------------------------------------------ |
| Home                            | `/`                                           | `/es`                                            |
| Contact                         | `/contact`                                    | `/es/contact`                                    |
| Pre-Purchase Survey             | `/pre-purchase-survey`                        | `/es/pre-purchase-survey`                        |
| Insurance Condition Survey      | `/insurance-survey`                           | `/es/insurance-survey`                           |
| Buyer Representation            | `/buyer-representation`                       | `/es/buyer-representation`                       |
| Yacht Delivery                  | `/yacht-delivery`                             | `/es/yacht-delivery`                             |
| Valuation and Damage Assessment | `/valuation-damage-survey`                    | `/es/valuation-damage-survey`                    |
| About Us                        | `/about-us`                                   | `/es/about-us`                                   |
| Survey Cost Calculator          | `/pre-purchase-survey-calculator`             | `/es/pre-purchase-survey-calculator`             |
| Delivery Cost Calculator        | `/yacht-delivery-calculator`                  | `/es/yacht-delivery-calculator`                  |
| Yachts for Sale                 | `/yachts-for-sale`                            | `/es/yachts-for-sale`                            |
| Yacht Survey Tips               | `/yacht-survey-tips`                          | `/es/yacht-survey-tips`                          |
| Deck Moisture article           | `/yacht-survey-tips/deck-moisture-soft-spots` | `/es/yacht-survey-tips/deck-moisture-soft-spots` |
| Shiny Hull article              | `/yacht-survey-tips/shiny-hull`               | `/es/yacht-survey-tips/shiny-hull`               |

The language switcher uses an equivalent route when the map contains one. If a
translation is not published, it links to that language's homepage and its
accessible label identifies the destination as a homepage. Spanish header,
mobile-menu, and footer links to untranslated English content retain the real
English URL and include a visible `— English` or `— inglés` indication. Do not
add a locale to the route map until the corresponding static page genuinely
exists.

The small typed dictionaries in `src/i18n/` contain shared Spanish interface,
footer, Contact, validation and calculator presentation strings. Both
calculator components read `src/i18n/calculators.ts`; the locale changes only
visible copy and `en-GB`/`es-ES` formatting. Pure calculations, canonical enum
values and estimate contracts remain locale-free in `src/lib/calculators/`.
Page-specific Spanish content lives in typed modules under `src/data/es/` and
is rendered through the shared layouts and localized content components. The
current English page component, data, metadata, schema, CTA destinations,
limitations, images and internal links are the source of truth for every
translation; do not translate an earlier draft or add unsupported claims.

Internal Contact service values remain canonical English slugs such as
`pre-purchase-survey`; only their labels are translated. Contact CTAs from
Spanish pages use `/es/contact?service=<canonical-service-code>`. The Spanish
form posts to the existing `/api/contact` Function and submits `locale=es`,
allowing the internal email to identify the website language without
translating visitor text or changing Reply-To behaviour.

Valid calculator payloads are still read from the existing versioned
`sessionStorage` keys, matched to their references, limited to 24 hours, and
recomputed by the original pricing logic. Spanish Contact translates only the
visible summary and uses `es-ES` date, number, and euro formatting. It does not
translate enum values, stored payloads, formulas, routes, or amounts.

For each genuine page pair, SEO alternates contain the English URL, Spanish URL
and `x-default` pointing to English. The Russian homepage fallback shown in the
language selector is never emitted as a service-page hreflang. The global
business entity remains `https://www.allyachtservice.com/#business`, and the
About page reuses the existing stable Aleksandrs Person ID rather than creating
locale-specific entities.

### Spanish marine-survey terminology

| English concept            | Preferred Spanish term              |
| -------------------------- | ----------------------------------- |
| Pre-purchase survey        | Inspección precompra                |
| Insurance condition survey | Inspección de condición para seguro |
| Buyer representation       | Representación del comprador        |
| Yacht delivery             | Entrega profesional de yates        |
| Yacht valuation            | Valoración de yates                 |
| Damage assessment          | Evaluación de daños                 |
| Marine surveyor            | Inspector naval                     |
| Survey report              | Informe de inspección               |
| Sea trial                  | Prueba de mar                       |
| Haul-out                   | Varada                              |
| Hull                       | Casco                               |
| Deck                       | Cubierta                            |
| Rigging                    | Aparejo                             |
| Deck moisture              | Humedad en la cubierta              |
| Deck core                  | Núcleo de la cubierta               |
| Moisture meter             | Medidor de humedad                  |
| Thermal imaging            | Termografía                         |
| Tap/percussion testing     | Prueba de percusión                 |
| Chainplates                | Cadenotes                           |
| Windlass                   | Molinete de ancla                   |
| Hull fairness              | Regularidad de las líneas del casco |
| Fairing                    | Enmasillado y alisado               |
| Re-lamination              | Relaminación                        |
| Osmosis                    | Ósmosis                             |

Use “inspector naval de yates y embarcaciones menores” where the more formal
professional description is appropriate. Natural contextual variations are
allowed when they preserve the same technical meaning; never translate
“survey” as a customer questionnaire.

This remains staged localisation. All four Spanish legal policies are pending,
as are Russian translations beyond the homepage. English fallback links must
identify their language until each real translation is published. The Spanish
version must not be presented as complete until the legal-policy batch and a
final native-language, accessibility, legal and SEO review have passed.
Production indexing remains blocked by the unresolved central legal
configuration; keep `PUBLIC_SITE_INDEXABLE=false`.

After a build, validate the current Spanish publishing boundary with:

```sh
npm run check:i18n
npm run check:calculators
```

## Yachts for Sale referral page

`/yachts-for-sale` and `/es/yachts-for-sale` are static English and Spanish
gateways to current yacht listings on Premium Yachts Spain and to independent
buyer-side technical support from All Yacht Service. The verified external
destinations are:

- brokerage overview:
  `https://www.premiumyachts.es/yacht-brokerage`
- sailing yachts:
  `https://www.premiumyachts.es/yacht-brokerage/sailing-boats`
- power boats:
  `https://www.premiumyachts.es/yacht-brokerage/power-boats`

The page does not duplicate or fetch brokerage inventory. Do not add listing
names, prices, availability, tax status, listing photographs, inventory schema,
iframes, scraping, or runtime requests to the brokerage website. Availability,
specifications, pricing and brokerage terms remain controlled externally and
must be confirmed with the listing broker.

The page includes a prominent disclosure that Aleksandrs Tolkacovs is Chief
Operating Officer of Premium Yachts Spain and that the two activities have
different commercial roles. It also explains how a commercial connection is
disclosed, how the buyer remains free to appoint another surveyor, and when an
instruction may be declined because independence cannot be appropriately
maintained.

`Yachts for Sale` appears in the desktop header, flat mobile menu, homepage
services grid, footer navigation and concise 404 destinations. Premium Yachts
Spain links use meaningful text, a visible external-destination label where
appropriate, `target="_blank"`, and `rel="noopener noreferrer"`. The genuine
page pair emits `en`, `es` and English `x-default` alternates; the Russian
homepage fallback remains a navigation convenience and is not an hreflang
equivalent. The Spanish page reuses the English page's images, external
destinations, limitations and disclosure while localising only the visitor
copy, metadata and structured-data fields.

The desktop Services disclosure uses native `<details>` and `<summary>`
behaviour so it remains operable by mouse and keyboard even before JavaScript
enhancement runs. The enhancement adds Arrow-key focus management, Escape,
focus-out and outside-click closing. The flat mobile navigation remains
separate and unchanged.

The three local page images are optimized copies of general imagery from the
verified brokerage overview. They are illustrative only and must not be
presented as evidence that a pictured yacht is currently available.

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
npm run check:i18n   # Validate published Spanish routes and metadata
npm run check:legal  # Validate legal-policy routes and privacy controls
```

Before merging changes, run:

```sh
npm run format:check
npm run lint
npm run typecheck
npm run build
npm run check:i18n
npm run check:legal
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

The Contact service value `valuation-damage-survey` selects the visible label
“Yacht Valuation or Damage Assessment”. Both the browser form and the
Cloudflare Pages Function validate this value, and submitted emails use the
same service label. Selecting it also asks the client to state whether the
required assignment is a valuation, damage assessment, or a combined scope.

## Yacht valuation and damage assessment

The English service page is generated at:

```text
/valuation-damage-survey
```

The page keeps valuation and damage assessment as two related but distinct
professional scopes. A valuation is a condition- and evidence-based opinion of
value for an agreed purpose and date; it is not a guaranteed selling price,
insured value, offer, tax assessment, legal or financial advice, or warranty of
condition. A damage assessment records accessible observed damage, apparent
extent, safety concerns, and supported technical observations. It does not
decide legal liability, insurance cover, claim settlement, or repair
authorisation.

Inspections are normally visual and non-destructive. Concealed areas,
restricted access, unavailable systems, lack of haul-out, missing
documentation, previous repairs, and changes before inspection may limit the
findings. Specialist testing, dismantling, laboratory work, repair quotations,
and final repair methods are included only when expressly agreed or supplied
by the appropriate specialist.

The page emits one `WebPage` entity and two separate `Service` entities:
`#valuation-service` and `#damage-service`. Both services reference the stable
global provider entity `https://www.allyachtservice.com/#business`; the visible
breadcrumb component emits the matching `BreadcrumbList`.

The hero currently reuses the closest approved technical-survey photograph,
and the contextual image shows yachts damaged ashore after severe weather.
Replace the reused hero image with approved original valuation or
damage-assessment inspection photography when it becomes available, preserving
the current dimensions, responsive behaviour, and accurate alternative text.

## Yacht Survey Tips publishing

The English and Spanish knowledge hubs are generated at:

```text
/yacht-survey-tips
/es/yacht-survey-tips
```

The two published article pairs are:

```text
/yacht-survey-tips/shiny-hull
/es/yacht-survey-tips/shiny-hull
/yacht-survey-tips/deck-moisture-soft-spots
/es/yacht-survey-tips/deck-moisture-soft-spots
```

`/yacht-survey-tips/shiny-hull` is the **Pre-Purchase Checks · Hull &
Structure** article published on 28 July 2026 with a five-minute reading time.
Its primary source is
`https://www.allyachtservice.com/yacht-survey-tips/shiny-hull`. The local,
lossless grayscale image is
`public/images/yacht-survey-tips/shiny-yacht-hull-hidden-repairs.png` and
retains its intrinsic 1122 × 1402 dimensions. The Deck Moisture graphic has a
separate grayscale derivative at
`public/images/yacht-survey-tips/deck-moisture-soft-spots.png`; its original
source file remains untouched.

Shared article-card and category types live in
`src/data/yacht-survey-tips/types.ts`. Article-specific metadata and structured
content live in a named module under `src/data/yacht-survey-tips/`; the hub
imports the same typed card record used by the article so its title,
description, category, publication date, reading time, status, image, and URL
cannot drift independently. Each published article still has an explicit Astro
page in `src/pages/yacht-survey-tips/`, rather than a catch-all route.
Spanish article data follows the same typed structure under
`src/data/es/yacht-survey-tips/`, and each Spanish route remains an explicit
Astro page under `src/pages/es/yacht-survey-tips/`. The implemented English
article is always the translation source: preserve its section order, technical
limitations, dates, author, CTAs and internal relationships rather than
translating an earlier draft or introducing unsupported findings.

Survey-tip graphics are editorial content, not decorative crops. The shared
card displays the full intrinsic image with `width: 100%`, `height: auto`, and
`object-fit: contain`. Do not add `object-fit: cover`, fixed image heights,
overflow clipping, zoom effects, or background-image positioning to survey
article cards. A source that differs slightly from the usual 4:5 portrait
format must be contained rather than cropped or distorted. Card widths remain
consistent while image height follows the complete source ratio.

The Deck Moisture article remains the Featured Guide. Latest articles are
ordered by their approved publication dates, newest first: Shiny Hull, then
Deck Moisture. The water-and-partially-visible-yacht-hull hero background is a
separate hub asset and must not be reprocessed, repositioned, or replaced when
article graphics change.

The existing 1122 × 1402 black-and-white English article graphics are reused on
the Spanish pages with the owner's approval. They remain byte-identical,
uncropped and fully visible; accurate Spanish alt text, captions and article
HTML repeat the important educational information so understanding never
depends on embedded image text. Do not create locale-specific image copies
unless a future approved design review requires them.

Article pages retain the global `ProfessionalService` entity and add `WebPage`
and `Article` entities. The visible breadcrumb component adds the matching
`BreadcrumbList`. The Article publisher references the stable business ID
`https://www.allyachtservice.com/#business`; Spanish author data references the
stable Person ID
`https://www.allyachtservice.com/about-us#aleksandrs-tolkacovs`.

Publication dates reflect the approved editorial precision. If only a month is
approved, use the ISO reduced-precision value such as `2026-07` in metadata and
schema rather than inventing a day or time. `dateModified` records the actual
implementation or substantive content-update date. Do not add `wordCount`
unless it is calculated from the final rendered article.

The three published Survey Tips route entries contain genuine English and
Spanish equivalents. SEO alternates therefore include `en`, `es` and
`x-default`, with `x-default` pointing to English. Russian remains a clearly
labelled homepage fallback in the visible language switcher and is not emitted
as article hreflang.

Spanish article publication labels and visible dates use `es-ES` conventions.
The approved source publication precision is preserved: Deck Moisture remains
`2026-07`, while Shiny Hull remains `2026-07-28`. Spanish implementation uses
`2026-07-28` as `dateModified`. Spanish pre-purchase CTAs use
`/es/contact?service=pre-purchase-survey`; the service code remains canonical
and untranslated.

Moisture-meter readings must always be described as comparative inspection
indicators that require construction, environmental, access, visual, acoustic,
and historical context. They do not independently prove wet core, structural
failure, or the required repair. Destructive investigation is not included in
a normal pre-purchase survey unless it is expressly authorised and agreed. Do
not publish generic repair prices.

Hull-finish articles follow the same cautious approach. Gloss, colour,
reflection or fairness differences may justify further investigation, but do
not independently prove concealed damage, defective repair, or structural
failure. A visible repair is not automatically unacceptable. Normal survey
work is visual and non-destructive; specialist opening or destructive
examination requires separate agreement and authorisation.

For each future article:

1. Add a typed, article-specific data module with approved content, dates,
   author, image, related services, and one published card record.
2. Create and build a genuine Astro page for the final lowercase,
   ASCII-and-hyphen URL.
3. Add the route to `src/data/navigation.ts`, listing only translations that
   exist.
4. Add `WebPage` and `Article` metadata, the visible breadcrumb trail, and the
   matching `BreadcrumbList`.
5. Add the card to the hub only after the route builds and returns HTTP 200.
6. Convert approved portrait graphics to a high-quality local grayscale asset
   without cropping, resizing, or reducing text legibility; record its
   intrinsic dimensions in article data.
7. Order the hub’s Latest list by approved publication date while preserving
   the separately selected Featured Guide.
8. Verify canonical, Open Graph article metadata, English-only or translated
   hreflang, schemas, internal links, sitemap inclusion, accessibility,
   complete-image presentation, and responsive layouts before release.

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

## Legal and policy foundation

The English legal routes are:

```text
/privacy-policy
/cookie-policy
/legal-notice
/terms-and-conditions
```

They share `src/components/PolicyPageLayout.astro`. Confirmed and unresolved
operator information, retention settings, the policy review date, and final
applicable-law wording are held in `src/data/legal.ts` rather than duplicated
across pages.

The current verified public information is the trading name, public office,
email, phone, website URL and country. The legal operator name; natural-person,
autónomo, company or other legal status; tax-identifier requirement and value;
registration information; legally valid contact or registered address;
retention periods; final applicable-law wording; and final legal approval are
not yet confirmed. Unresolved values are not rendered.

`astro.config.ts` calls the central legal guard before an indexable build.
`PUBLIC_SITE_INDEXABLE=false` permits local and preview builds and displays a
restrained draft notice on policy pages. `PUBLIC_SITE_INDEXABLE=true` fails
with a field-by-field error until the legal configuration is complete and the
final review is approved. Do not bypass this guard. After each policy or
technical change, run:

```sh
npm run build
npm run check:legal
```

The Contact checkbox is a required notice acknowledgement, not consent for all
processing. Its public wording is: “I confirm that I have read the Privacy
Policy and understand how my enquiry information will be handled.” The stable
request field remains named `consent` to avoid an unnecessary API change.

The current processor and service inventory is:

- Cloudflare Pages for website delivery, Cloudflare security services, and
  Turnstile for Contact-form abuse prevention.
- Google Workspace and the Gmail API for delivery to and storage in the
  authorised `info@allyachtservice.com` mailbox.
- Browser `sessionStorage` keys
  `ays:pre-purchase-survey-estimate:v1` and
  `ays:yacht-delivery-estimate:v1` for calculator-to-Contact transfer. The
  application validates each for 24 hours while the storage itself is
  session-based.

The Contact page uses Turnstile implicit rendering with the `contact` action
and light theme. The repository does not explicitly select Managed,
Non-interactive or Invisible widget mode and does not configure pre-clearance;
confirm the widget type, pre-clearance and Offlabel settings in the Cloudflare
dashboard before production. The server continues to validate every accepted
token with Siteverify.

The code audit found no installed analytics provider, advertising tag,
marketing cookie, social embed, external font or site-written cookie. A cookie
banner is therefore not added for the current strictly necessary calculator
session storage and form-security implementation. Before enabling analytics,
advertising, non-essential embeds or other optional storage, update the
technical inventory, assess consent requirements, update both policies and
activate appropriate consent controls before the technology loads.

Retention configuration must distinguish at least general enquiries,
unsuccessful quotations, instructed-service records and reports, attachments,
security records, and records required for legal, tax or accounting duties.
Approved periods and criteria must be entered in `src/data/legal.ts`; do not
insert guessed durations in page content.

These website terms govern website use only. They do not replace survey
engagement terms, a yacht-delivery contract, a brokerage agreement, report
reliance terms, a repair contract or other service-specific agreement.

Before changing `PUBLIC_SITE_INDEXABLE` to `true`, have the four drafts, central
configuration, retention schedule, provider/account settings and
applicable-law wording reviewed by a qualified Spanish legal or
data-protection professional. Review the
[GDPR](https://eur-lex.europa.eu/eli/reg/2016/679/oj/eng),
[Spanish LSSI](https://www.boe.es/buscar/act.php?id=BOE-A-2002-13758),
[AEPD guidance](https://www.aepd.es/),
[Cloudflare Turnstile documentation](https://developers.cloudflare.com/turnstile/),
[Turnstile Privacy Addendum](https://www.cloudflare.com/turnstile-privacy-policy/)
and the current
[Google Cloud Data Processing Addendum](https://cloud.google.com/terms/data-processing-addendum/)
as part of that review.

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

## Pre-purchase survey calculator

The English and Spanish calculators are generated at:

```text
/pre-purchase-survey-calculator
/es/pre-purchase-survey-calculator
```

The pricing logic was ported into this repository from the approved source
calculator without creating a runtime dependency:

| Source detail   | Value                                             |
| --------------- | ------------------------------------------------- |
| Repository      | `https://github.com/alextolkacov/pys-calculators` |
| Source file     | `survey/index.html`                               |
| Source commit   | `5ce07c0123f26fd46bd0dec0896b1c21d67df18a`        |
| Pricing version | `survey-2026-07-27`                               |
| Automatic range | 5–40 metres                                       |
| Storage key     | `ays:pre-purchase-survey-estimate:v1`             |
| Payload version | `1`                                               |

The `pys-calculators` repository remains unchanged. All runtime code is stored
inside `allyachtservice`, uses no client-side API key, and does not load scripts,
iframes, modules, or other assets from the source repository.

The two routes use the same calculator component and pricing functions. The
Spanish route formats visible numbers and euros with `es-ES`, but never stores
translated labels in the payload or changes a canonical value. Do not copy
pricing bands, multipliers, the range, discount or rounding rules into a
localized page or data module.

The result is explicitly approximate and non-binding. Completing a calculation
stores a versioned, non-personal payload in `sessionStorage`. Requesting a
formal quotation navigates to `/contact` or `/es/contact` with only the
service, source, and estimate reference in the URL. The Contact form validates
the stored payload,
shows the complete transferred summary for review, prefills the service, LOA
and yacht location, and includes that visible summary in the submitted email.
The visitor may remove it before submission. Malformed, mismatched, expired or
unsupported payloads are ignored safely.

Pricing formulas live in
`src/lib/calculators/prePurchaseSurvey.ts`. Any later coefficient, minimum,
discount, rounding, package or range change requires business approval. Record
the approved source commit and assign a new pricing version when the logic is
updated, then rerun representative boundary and package calculations before
release.

The website-wide public service scope was corrected from 24 to 40 metres where
the old number described the maximum vessel size handled by All Yacht Service.
The calculator still retains its distinct 18–24 metre and above 24–40 metre
pricing bands.

## Yacht delivery calculator

The English and Spanish calculators are generated at:

```text
/yacht-delivery-calculator
/es/yacht-delivery-calculator
```

The Mediterranean port graph, shortest-route behaviour, and pricing logic were
ported into this repository from the approved source calculator:

| Source detail                    | Value                                             |
| -------------------------------- | ------------------------------------------------- |
| Repository                       | `https://github.com/alextolkacov/pys-calculators` |
| Source file                      | `yacht-delivery/index.html`                       |
| Source repository-state commit   | `5ce07c0123f26fd46bd0dec0896b1c21d67df18a`        |
| Delivery-specific implementation | `73779c13947d18abe6bc78150de5184ec0b3426e`        |
| Source-file blob SHA             | `3a6e0323717f05df97ea61d457894ea712860b9c`        |
| Storage key                      | `ays:yacht-delivery-estimate:v1`                  |
| Payload version                  | `1`                                               |
| Stored-payload validity          | 24 hours                                          |

The `pys-calculators` repository remains unchanged. Its graph and pricing code
were ported into `allyachtservice`; there is no runtime import, iframe,
submodule, routing API, mapping API, client-side secret, or API key.

Both localized routes use the same 75-node, 108-edge graph, 74 selectable
ports, internal Ponza waypoint, bidirectional shortest-route implementation and
pricing module. Never duplicate the graph, port IDs, rates, base or minimum
fee, multipliers, correction factors or rounding rules in localized content.
Spanish changes only the visitor-facing presentation and uses `es-ES`
formatting.

The graph is a simplified network of approved Mediterranean and nearby Atlantic
ports and internal route waypoints. It calculates an approximate marine
corridor only. It is not a navigational route, passage plan, or substitute for
current charts, Notices to Mariners, weather routing, port restrictions, and a
vessel-specific passage review.

The displayed amount is an estimated starting professional delivery fee. It is
non-binding and is not a quotation, contract, invoice, or complete delivery
cost. Fuel, crew expenses, marina fees, formalities, waiting time, repairs, and
other exclusions are reviewed for the formal quotation.

Completing a calculation stores only the versioned, non-personal estimate
payload in `sessionStorage`. Requesting a quotation sends only the service,
source, and estimate reference in the URL. The Contact form loads the matching
session payload, validates its age and complete shape, recomputes the route and
fee, then shows the approximate summary for review. Yacht Delivery and the
vessel type are preselected, and the departure port prefills the editable
vessel-location field. No exact yacht length is inferred from a length band.
The visitor can remove the summary, and invalid, expired, mismatched, or
modified payloads are ignored safely.

`npm run check:calculators` covers the 5–40 metre survey boundaries, base,
custom and full packages, discount behaviour, short/medium/long and cross-graph
delivery routes, the Ponza waypoint, minimum and non-minimum fees, canonical
English/Spanish equality, and reference, tamper and 24-hour expiry validation.
The Spanish Contact page renders the validated result in Spanish while using
the unchanged keys `ays:pre-purchase-survey-estimate:v1` and
`ays:yacht-delivery-estimate:v1`, both with payload version `1`.

To update ports or graph connections, edit
`src/data/calculators/mediterraneanDeliveryRoutes.ts` only after comparing the
approved source node and edge sets. Preserve node keys, coordinates, types,
route factors, and bidirectional behaviour, record the new source commit and
blob SHA, and rerun route-parity checks in both directions.

Pricing coefficients are defined in
`src/lib/calculators/yachtDelivery.ts`. Changes to the base fee, minimum fee,
per-mile rates, complexity multipliers, urgency multiplier, or rounding rule
require explicit business approval and representative recalculation before
release.

Passage-duration and fuel estimation remain future backlog items. They must not
be added until validated business formulas and appropriate route assumptions
are approved.

## General calculator prefill contract

Other future calculators can continue to prefill `/contact` with query
parameters or the existing general-purpose session storage contract.

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
  lib/calculators/  Pure pricing logic and validated estimate payload contracts
  pages/            File-based English, translated, service, and 404 routes
  styles/           Global Tailwind theme and shared accessible UI styles
  utils/            Canonical URL, schema, contact, and hreflang helpers
functions/
  api/               Cloudflare Pages Function endpoints
  _lib/              Form validation, Turnstile, and email delivery helpers
public/
  images/           Optimized local image assets reused from approved sources
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
- Spanish and Russian use `/es` and `/ru`.
- French, Italian and Greek are deferred and not currently supported.
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
