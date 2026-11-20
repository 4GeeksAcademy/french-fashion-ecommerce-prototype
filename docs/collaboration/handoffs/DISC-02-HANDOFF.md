# DISC-02 Knowledge Handoff

- **Owner:** Ruth (`ruthcarol281076`), DISC-02
- **Date:** 2026-11-20
- **Status:** ready for review. Not accepted. Rubric PASS is not claimed; Control Tower assigns it.
- **Next owner:** ORCH-00 (review and decisions), then Ruth for any follow-up, then INTEG-04 after both contributor handoffs.

## Commits and PRs

| Item | Branch | Commit | PR (fork) |
|---|---|---|---|
| Catalog Phase 1 | `feature/catalog` | `b025596`, `4d7599c` (SKU links) | #1, base `main` |
| Product Phase 2 | `feature/product` | `51a52b6`, `e597f4f` (SKU routing) | #2, base `main` |
| Integrated view | `feature/integration` | `2a9f701` (merge of both) | not opened |
| Write-access record | `feature/catalog` | `0b8ec71` | included in #1 |

## Deliverables

- `catalog.html`: category radio filters, size select, live result count, 20-card grid, cards link to `product.html?sku=AV-XX-NNN`.
- `product.html`: product view driven by `?sku=` with default `AV-FW-001`. Unknown SKU shows a not-found section with a link back to the catalog. Data follows `PRODUCT_CONTENT_CONTRACT.yaml` v1.0 (FROZEN, read only).

## Contract conformance

- Frozen contracts used read only: REFERENCE, VISUAL, COPYWRITING, PRODUCT_CONTENT v1.0, ASSET, EFFECTS, HOME_IMPLEMENTATION, HOME_ASSET_MANIFEST.
- `index.html` (Golden Reference, APPROVED) was not modified.
- Currency EUR without decimals, 20 canonical records.

## Tested states

- Viewports 390x844, 768x1024, 1440x900 for both pages. No horizontal overflow.
- Filter results, SKU routing, card-to-product mapping (20 of 20), internal links, and zero JS errors.
- Full details: [evidence/disc-02/README.md](../../../evidence/disc-02/README.md) at commit `2a9f701`.

## Decisions and deviations

- Neutral placeholders with canonical alt text for 10 products that lack images. Documented in both PRs.
- Write-access discrepancy recorded in [DISC-02-DR-001](../deviations/DISC-02-DR-001-write-access-verification.md). Decision pending ORCH-00.
- Entry parameters from `index.html` to catalog and product are proposed only. They need an ORCH-00 decision and an EXP-01 owner action.

## Known limitations

- 10 products without images: AV-FW-004, AV-FW-005, AV-SH-004, AV-SH-005, AV-PT-002, AV-PT-004, AV-PT-005, AV-AC-003, AV-AC-004, AV-AC-005.
- `catalog.html?category=` not implemented.
- Integration branch exists only in local and fork; it has not been reviewed by ORCH-00.

## Open questions

1. Source for the 10 missing product images (EXP-01 or ORCH-00).
2. Whether the fork is an accepted write target, or whether upstream WRITE must be verified (DR-001).
3. Where `index.html` should pass parameters to catalog and product (ORCH-00/EXP-01).

## Next steps

- ORCH-00 reviews PRs #1 and #2 and DR-001.
- Ruth acknowledges any changes requested before modifying shared surfaces.
