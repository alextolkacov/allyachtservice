# All Yacht Service

Production multilingual website for All Yacht Service, providing yacht-surveying, technical buyer-support and yacht-delivery information and enquiry paths.

## Production

Canonical URL: [https://www.allyachtservice.com](https://www.allyachtservice.com)

## Stack

Astro static site generation, strict TypeScript, Tailwind CSS and project CSS, deployed through Cloudflare Pages. The Contact endpoint uses Cloudflare Pages Functions, Turnstile and the Gmail API.

The repository currently requires Node.js 24 and npm 11 or later; inspect `package.json` and `.nvmrc` for the executable runtime contract.

## Local development

```sh
nvm use
npm install
npm run dev
```

Copy `.env.example` to `.env` when a local build needs explicit public build settings. For local Cloudflare Pages/Functions emulation, copy `.dev.vars.example` to the ignored `.dev.vars`, configure only authorized test values, and run the current `preview:cloudflare` package script. Never commit credentials.

## Supported languages

The public site supports exactly English, Spanish and Russian. English uses root routes; genuine Spanish and Russian equivalents use `/es` and `/ru`.

## Documentation

- [Documentation index](docs/README.md)
- [Agent instructions](AGENTS.md)
- [Project specification](docs/PROJECT_SPECIFICATION.md)
- [Architecture](docs/ARCHITECTURE.md)
- [Architecture Decision Records](docs/adr/README.md)

Repository-scoped Codex workflows are documented in the [documentation index](docs/README.md) and stored under `.agents/skills`.

## Validation

Inspect the current scripts in `package.json`; see [Testing and Quality](docs/TESTING_AND_QUALITY.md) for what each check covers and which changes require both preview-safe and production/indexable builds.

## Deployment

See [Deployment and Operations](docs/DEPLOYMENT_AND_OPERATIONS.md) for Cloudflare Pages settings, environment names, external DNS/redirect context and the release checklist.
