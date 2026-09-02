# ADR-0001: Static Astro site on Cloudflare Pages

- Status: Accepted
- Decision date: 2026-07-27
- Last reviewed: 2026-09-02
- Decision owners: Project owner and repository maintainers
- Related documentation: [Architecture](../ARCHITECTURE.md), [Deployment and Operations](../DEPLOYMENT_AND_OPERATIONS.md)

## Context

Commit `ae8f41a` established the Astro multilingual foundation on 2026-07-27. Current configuration generates independent HTML documents for public routes and uses Cloudflare Pages routing to invoke Functions only for `/api/*`. Most product behavior is content-driven and does not require request-time rendering; Contact requires server-side secret handling.

The rationale below is reconstructed from the current repository state, configuration and validation rules.

## Decision

Use Astro static site generation with strict TypeScript and Tailwind/project CSS, deployed through Cloudflare Pages. Use Cloudflare Pages Functions only for behavior requiring trusted request-time execution, currently the Contact endpoint. Do not use an SPA fallback or return the homepage for unknown routes.

## Alternatives considered

Not recorded in repository history.

## Consequences

### Positive

- Public routes are independently crawlable, cacheable static documents.
- Content, metadata and schemas are available without client-side rendering.
- Server secrets remain isolated in the narrow Pages Function boundary.
- Static output is easy to inspect and compare before deployment.

### Negative / trade-offs

- Every public route requires a generated page and explicit translation file.
- Dynamic features must be browser-only or implemented deliberately in Functions.
- Function behavior needs Cloudflare-specific local/type validation in addition to Astro checks.

## Implementation references

- [`astro.config.ts`](../../astro.config.ts)
- [`tsconfig.json`](../../tsconfig.json)
- [`public/_routes.json`](../../public/_routes.json)
- [`functions/api/contact.ts`](../../functions/api/contact.ts)
- Commit `ae8f41a` (`Initialize Astro multilingual website foundation`).

## Supersedes / Superseded by

None.
