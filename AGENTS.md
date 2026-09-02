# All Yacht Service agent instructions

This repository is the production website for **All Yacht Service**. Its canonical origin is `https://www.allyachtservice.com`. The application is an Astro static site with strict TypeScript, Tailwind CSS and project CSS, deployed through Cloudflare Pages; Pages Functions provide the Contact endpoint.

Supported languages are exactly English, Spanish and Russian. Do not add another language unless explicitly requested.

## Before modifying code

1. Inspect the current local worktree; do not rely on an old README, remote snapshot or chat history.
2. Read the [documentation index](docs/README.md) and the relevant architecture, design, operations or feature document.
3. Check the applicable [ADRs](docs/adr/README.md).
4. Preserve EN/ES/RU parity for public localized features.
5. Inspect `package.json` and [Testing and Quality](docs/TESTING_AND_QUALITY.md) for current validation.

## Critical invariants

- English is the content source of truth unless a feature explicitly says otherwise.
- Spanish and Russian pages must be genuine equivalents, never homepage fallbacks presented as page translations.
- `x-default` points to the English equivalent; the canonical host is `www.allyachtservice.com`.
- Inspect `src/data/navigation.ts`; never guess routes or translated equivalents.
- Preserve stable Business and Person schema IDs and do not create duplicate entities.
- Do not modify legal or business facts casually. Never invent service scope, guarantees, qualifications, certifications, insurance, VAT/VIES status or legal-review status.
- Do not make unsupported marine-survey claims. Distinguish observations, limitations and specialist diagnosis.
- Canonical internal service codes and calculator values are not translated.
- Never expose or commit secrets. Public build variables are not appropriate for credentials.
- Do not commit, push or deploy unless explicitly requested.
- Do not use screenshots as automated tests.
- Update the relevant current-state documentation and, when needed, add or supersede an ADR in the same change as a material decision.

## Documentation contract

- `docs/README.md` is the documentation index.
- General documentation describes the current state; executable code/configuration remains the final source of truth if drift occurs.
- Accepted ADRs are historical records. Supersede them rather than silently rewriting the decision.
- Repository workflows live as skills under `.agents/skills`; use the matching skill when applicable.
