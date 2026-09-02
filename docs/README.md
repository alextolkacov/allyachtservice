# All Yacht Service documentation

Last reviewed: 2026-09-02

This documentation preserves the current product, engineering and operating context that cannot be inferred safely from a single source file. It is intended for maintainers and coding agents; it does not replace executable configuration, approved legal data or provider settings.

## Find the right document

| Question                                                     | Read                                                      |
| ------------------------------------------------------------ | --------------------------------------------------------- |
| What does the product do?                                    | [Project Specification](PROJECT_SPECIFICATION.md)         |
| How is it built?                                             | [Architecture](ARCHITECTURE.md)                           |
| Why was an architectural decision made?                      | [Architecture Decision Records](adr/README.md)            |
| How should pages look and behave responsively?               | [Design System](DESIGN_SYSTEM.md)                         |
| How do EN/ES/RU content and routes work?                     | [Content and Localisation](CONTENT_AND_LOCALISATION.md)   |
| How do SEO, schema and indexability work?                    | [SEO and Indexing](SEO_AND_INDEXING.md)                   |
| What must not be changed casually in business/legal content? | [Business and Legal](BUSINESS_AND_LEGAL.md)               |
| How is production built and deployed?                        | [Deployment and Operations](DEPLOYMENT_AND_OPERATIONS.md) |
| Where do secrets belong?                                     | [Security and Secrets](SECURITY_AND_SECRETS.md)           |
| How does Contact work?                                       | [Contact Form](features/CONTACT_FORM.md)                  |
| How do the calculators work?                                 | [Calculators](features/CALCULATORS.md)                    |
| How are Tuesday Survey Tips published?                       | [Yacht Survey Tips](features/YACHT_SURVEY_TIPS.md)        |
| Which checks should I run?                                   | [Testing and Quality](TESTING_AND_QUALITY.md)             |
| How should these documents be maintained?                    | [Documentation Policy](DOCUMENTATION_POLICY.md)           |

## Document types

- A **specification** describes the product, audiences, scope and non-goals.
- **Architecture and feature documentation** describe the current implementation and its maintained contracts.
- An **ADR** records a material decision in historical context, including known trade-offs. Accepted ADRs are not rewritten to conceal later changes.
- An **operational runbook** explains build, deployment and verification steps, including external settings that code cannot prove.
- A **skill** is a reusable Codex workflow. It is narrower than reference documentation and tells an agent how to perform a recurring task.

## Source precedence

When sources disagree, use this order:

1. Current local executable code, configuration and regression scripts for actual behavior.
2. Current local git history for historical evidence.
3. Approved legal/business data modules for legal and public facts.
4. Owner-confirmed external operational context.
5. This documentation and the root README.

Investigate discrepancies and update the stale side. Do not preserve a route count, article count or deployment assumption merely because it was written down.

## Repository workflows

Codex automatically discovers repository skills under `.agents/skills` when launched in this repository. Current workflows are:

- [Add Tuesday Yacht Survey Tip](../.agents/skills/add-yacht-survey-tip/SKILL.md)
- [Add or Modify Localized Public Page](../.agents/skills/localized-public-page/SKILL.md)
- [Pre-Deployment Validation](../.agents/skills/predeploy-validation/SKILL.md)
- [Maintain Project Documentation](../.agents/skills/maintain-project-docs/SKILL.md)

The supported location is documented by [official OpenAI Codex skill guidance](https://developers.openai.com/codex/skills). No additional registration is required for repository discovery; restart Codex if a new skill does not appear.

## Maintenance

Update the affected document in the same change as a material behavior or decision change. Update `Last reviewed` only after actually checking the document against current sources. Run the repository documentation check described in [Testing and Quality](TESTING_AND_QUALITY.md).
