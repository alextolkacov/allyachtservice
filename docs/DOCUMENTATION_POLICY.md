# Documentation policy

Last reviewed: 2026-09-02

## Purpose and artifacts

- `AGENTS.md` contains concise, persistent repository instructions that apply to every coding-agent task.
- `docs/` contains current knowledge, references, feature contracts and operational runbooks.
- An ADR records a historical architectural decision and its trade-offs.
- A repository `SKILL.md` under `.agents/skills` is a reusable executable workflow/playbook for a recurring task.

A skill should link to detailed docs and retain only required inputs, stop conditions, workflow, validation and output contract. It is not a second README.

## Update documentation in the same change

Review affected documents whenever changing:

- stack, rendering or repository architecture;
- supported languages, route equivalents or localized content rules;
- legal/business facts, retention or professional claims;
- deployment, DNS, environment names or external dependencies;
- Contact processing, validation, storage, Turnstile or Gmail;
- calculator formulas, payloads, storage or Contact handoff;
- canonical host, indexability, hreflang, sitemap or schema IDs;
- Survey Tips publishing workflow or archive design;
- core tokens, responsive patterns or accessibility behavior;
- a recurring workflow represented by a repository skill.

Update `Last reviewed` only on a document actually checked against current sources.

## ADR policy

An accepted ADR is an immutable historical record. Minor corrections, better links or status transitions are acceptable, but do not rewrite the decision to pretend a later choice was always true.

When a decision changes:

1. Add a new numbered ADR.
2. Set the old ADR to `Superseded` and link to the new ADR.
3. Link back from the new ADR.
4. Update current-state architecture/feature docs.

Use “Not recorded in repository history” for unsupported alternatives or rationale. See the [ADR guide](adr/README.md).

## Avoid volatile snapshots

Do not encode total routes, sitemap URLs, languages within a future plan, or Survey Tip article counts as architectural invariants. If a snapshot helps an audit, label it with an explicit date and keep the durable rule separate.

## Code versus docs

If code and documentation disagree:

1. inspect current local code/config/tests and relevant history;
2. determine which side is stale;
3. fix the stale side in the same change;
4. report an unresolved material contradiction rather than guessing.

Current approved legal modules outrank narrative documentation for facts. Provider UI must be verified for external DNS, redirects, environment and Search Console state.

## Validation

Run `npm run check:docs` after documentation changes. For new or modified skills, also run the installed skill creator's `quick_validate.py` against each bundle. For an asserted behavior-neutral documentation change, build in the same mode before and after and compare generated routes, sitemap and content fingerprint.
