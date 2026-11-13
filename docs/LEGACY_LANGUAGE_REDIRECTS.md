# Legacy language-subdomain redirects

Last reviewed: 2026-11-13

## Status and scope

The canonical public host is `www.allyachtservice.com`; the published languages are English at the root, Spanish under `/es` and Russian under `/ru`. The [Cloudflare Bulk Redirect CSV](../ops/legacy-language-redirects.csv) maps exact URLs on `es.allyachtservice.com` and `ru.allyachtservice.com` to equivalent pages. It includes the owner-reported historical Spanish slug `/inspecciones-previas-a-la-compra` → `/es/pre-purchase-survey`. Its current-path mappings are a dated snapshot, **not** an inventory of every route published since; for example, the latest Survey Tip paths are absent. Add a row only after confirming that a corresponding legacy URL existed or otherwise needs consolidation. Every existing row specifies a 301 with query-string preservation.

This file is a **deployment artifact, not an active redirect configuration**. Cloudflare Pages' `_redirects` file cannot match a different hostname. On 2026-11-13, `https://es.allyachtservice.com/inspecciones-previas-a-la-compra?handoff_probe=1` returned HTTP 301 to `https://www.allyachtservice.com/es/pre-purchase-survey?handoff_probe=1`. That confirms one Spanish mapping and query-string preservation, not import/activation of every CSV row. A Russian legacy-host request timed out in this audit, so its current DNS/HTTPS and redirect behavior remain unverified. Verify the provider configuration and all required historical URLs before considering consolidation complete. Do not point legacy hosts to duplicate HTML pages or a blanket homepage fallback.

## Mapping and activation workflow

1. Export all legacy subdomain URLs seen in Search Console, server logs and any historical sitemap. Compare with the CSV. Add exact one-to-one or closest relevant **live** targets for additional historical slugs. Do not make a blanket fallback to a language homepage. The historical inventory is not yet complete.
2. Check every target in the CSV returns a 200 on the canonical host and is self-canonical. `npm run check:seo` validates local generated targets and CSV uniqueness.
3. In Cloudflare, import the CSV into a Bulk Redirect List and enable the associated rule for the applicable zone. The CSV intentionally omits a header and uses `301,TRUE` for status and query preservation. Use the exact list in the repository as the reviewed source of truth.
4. Ensure `es.allyachtservice.com` and `ru.allyachtservice.com` route through the redirect provider, with HTTPS working. Do not publish a duplicate HTML site on them.
5. Test representative old URLs with and without query strings using `curl -I`. Expect one 301 to the mapped canonical URL, then a 200 with a matching self-canonical, no loop and no extra hop. Recheck Search Console indexing/canonical reports after crawl.

No repository change can make these cross-host redirects live while the old hostnames are unresolved or while the provider rule is inactive. The code sprint does not alter DNS or the owner's Cloudflare dashboard.

Reference: [Cloudflare Pages redirects](https://developers.cloudflare.com/pages/configuration/redirects/) and [Bulk Redirect CSV format](https://developers.cloudflare.com/rules/url-forwarding/bulk-redirects/reference/csv-file-format/).
