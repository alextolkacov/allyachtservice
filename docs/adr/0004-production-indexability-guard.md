# ADR-0004: Production indexability guard

- Status: Accepted
- Decision date: 2026-08-03
- Last reviewed: 2026-09-02
- Decision owners: Project owner and repository maintainers
- Related documentation: [SEO and Indexing](../SEO_AND_INDEXING.md), [Business and Legal](../BUSINESS_AND_LEGAL.md)

## Context

Static preview and production hostnames may serve the same artifact, so request-host detection cannot reliably select robots metadata. The repository also requires approved operator, registration, retention, applicable-law and owner-approval data before creating an indexable production artifact. Commit `ede00fa` completed the central legal configuration and guard on 2026-08-03.

## Decision

- Use explicit build-time `PUBLIC_SITE_INDEXABLE`.
- Emit `index, follow` only when its value is exactly `true`; otherwise emit `noindex, nofollow`.
- Block an indexable build when central required legal configuration is incomplete.
- Keep explicit page-level noindex dominant.
- Generate a genuine static `/404` document that is always `noindex, nofollow`, has no alternates/Business schema and never relies on an SPA fallback.

## Alternatives considered

Hostname-based static-build detection was rejected in project requirements because one artifact can be served on multiple hosts. Other alternatives are not recorded in repository history.

## Consequences

### Positive

- Preview-safe builds are explicit and deterministic.
- Accidental production indexing with incomplete central legal facts is blocked.
- The 404 cannot inherit normal indexability or homepage content.

### Negative / trade-offs

- A wrong provider build variable can noindex production or index a preview artifact.
- The legal guard proves configured completeness, not external legal review or external-provider correctness.
- Both build modes must be exercised before release.

## Implementation references

- [`src/utils/seo.ts`](../../src/utils/seo.ts)
- [`src/data/legal.ts`](../../src/data/legal.ts)
- [`src/pages/404.astro`](../../src/pages/404.astro)
- [`.env.example`](../../.env.example)
- Commit `ede00fa` (`Legal configuration fix`).

## Supersedes / Superseded by

None.
