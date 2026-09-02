---
name: maintain-project-docs
description: Update All Yacht Service current-state documentation and ADRs after material architecture, routing, localization, SEO, legal, business, infrastructure or recurring-workflow changes, while validating links and preserving production output.
---

# Maintain project documentation

Use when a material project decision or implementation contract has changed, or when repository documentation is known to have drifted. Do not use merely to restyle prose unrelated to project knowledge.

## Read and establish truth

Read [`AGENTS.md`](../../../AGENTS.md), the [documentation index](../../../docs/README.md), [Documentation Policy](../../../docs/DOCUMENTATION_POLICY.md) and relevant [ADR guidance](../../../docs/adr/README.md). Inspect actual current local code, configuration, tests, git status and useful history before editing. Apply the documented source precedence; report unresolved contradictions instead of guessing.

## Workflow

1. Identify affected current-state docs, feature guides, operational runbooks, agent instructions and repository skills.
2. Update only documents genuinely reviewed, and update their `Last reviewed` date only after comparing them with current sources.
3. Link to code/config sources of truth instead of duplicating volatile route tables, legal values, environment values or article/page counts.
4. Decide whether a durable architectural decision changed. If yes, add the next ADR and supersede/cross-link the old ADR; never rewrite an accepted ADR to hide history.
5. Keep `AGENTS.md` concise and skills workflow-focused. Put detailed facts in docs.
6. Do not include secrets, credentials or provider values; names and verified public business data only where needed.
7. Run the documentation link checker and the skill validator for changed skill bundles.
8. For a documentation-only change that is meant to be behavior-neutral, compare equivalent build outputs/routes/sitemap before and after.

Do not commit, push, deploy or change external provider configuration unless explicitly requested.

## Expected output

Report sources inspected, contradictions resolved, docs/ADRs/skills changed, ADR evidence and status, link/skill validation, production-output comparison, secret result, remaining uncertainties and git/deployment status.
