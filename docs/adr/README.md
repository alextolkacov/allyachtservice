# Architecture Decision Records

Last reviewed: 2026-09-02

An Architecture Decision Record (ADR) captures a material, durable technical decision, the evidence available at the time and its trade-offs. Current behavior still belongs in architecture/feature docs; an ADR explains why a boundary exists and preserves history.

## When to create one

Create an ADR when changing a decision that affects multiple features or future maintainers: rendering/deployment model, locale/route strategy, canonical origin, indexing safety, server-side providers, shared domain logic, persistent content architecture or stable schema identity.

Do not create an ADR for an ordinary content addition, routine dependency update or local implementation detail unless it changes a durable boundary.

## Numbering and status

Files use four digits followed by a lowercase hyphenated title: `0008-example-decision.md`. Numbers are monotonically increasing and never reused.

Status values:

- `Proposed` — under consideration, not an implementation contract.
- `Accepted` — current decision or accepted historical decision.
- `Deprecated` — retained but discouraged without a direct replacement.
- `Superseded` — replaced by a later linked ADR.
- `Rejected` — considered and not adopted.

Accepted ADRs are historical records. Do not rewrite one to pretend a new decision was always true. Add a new ADR, mark the old one `Superseded`, and cross-link both.

Use [the template](TEMPLATE.md). When rationale, alternatives or exact historical timing are not established by repository evidence, say so plainly.

## Current records

- [ADR-0001: Static Astro site on Cloudflare Pages](0001-static-astro-cloudflare-pages.md)
- [ADR-0002: Three-language route parity](0002-three-language-route-parity.md)
- [ADR-0003: Canonical www origin and duplicate-host strategy](0003-canonical-www-and-duplicate-hosts.md)
- [ADR-0004: Production indexability guard](0004-production-indexability-guard.md)
- [ADR-0005: Contact form with Pages Function, Turnstile and Gmail](0005-contact-form-turnstile-gmail.md)
- [ADR-0006: Localized presentation with shared canonical domain logic](0006-localised-presentation-shared-domain-logic.md)
- [ADR-0007: Static localized Survey Tips article architecture](0007-survey-tips-static-article-architecture.md)
