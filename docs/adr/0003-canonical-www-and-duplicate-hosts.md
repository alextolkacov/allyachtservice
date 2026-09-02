# ADR-0003: Canonical www origin and duplicate-host strategy

- Status: Accepted
- Decision date: 2026-07-27
- Last reviewed: 2026-09-02
- Decision owners: Project owner and repository maintainers
- Related documentation: [SEO and Indexing](../SEO_AND_INDEXING.md), [Deployment and Operations](../DEPLOYMENT_AND_OPERATIONS.md)

## Context

Astro and site configuration consistently define `https://www.allyachtservice.com` as the production origin. Earlier January 2026 CNAME commits and current owner-supplied provider context show that apex, `www` and the Cloudflare Pages hostname have all needed explicit treatment.

Repository code proves the canonical output but cannot prove current DNS/redirect provider state. That state must be checked in Namecheap and Cloudflare before change.

## Decision

- Use `https://www.allyachtservice.com` for every canonical, absolute schema ID, Open Graph URL and sitemap URL.
- Permanently redirect the apex to `www` with path/query preservation.
- Redirect the public `pages.dev` hostname to the canonical origin or otherwise prevent it from becoming an indexable duplicate.
- Keep external redirect/DNS configuration operationally verified rather than pretending the repository enforces it.

## Alternatives considered

The git history shows changes around an apex CNAME, but the original provider-level alternatives and detailed rationale are not recorded.

## Consequences

### Positive

- One stable origin consolidates indexing and schema identity.
- Stable Business/Person IDs do not vary by host.
- Duplicate Pages-host content is prevented operationally.

### Negative / trade-offs

- Correctness depends partly on external Namecheap/Cloudflare settings.
- Static build-time code cannot serve different robots policies by request hostname.
- Redirect path preservation must be tested outside the repository.

## Implementation references

- [`astro.config.ts`](../../astro.config.ts)
- [`src/data/site.ts`](../../src/data/site.ts)
- [`src/utils/seo.ts`](../../src/utils/seo.ts)
- January 2026 CNAME commits and Astro foundation commit `ae8f41a`.
- Owner-supplied 2026-09-02 operational context for current Namecheap/Cloudflare redirects.

## Supersedes / Superseded by

None.
