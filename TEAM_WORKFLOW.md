# Team workflow

Three people collaborate through process responsibility and view ownership. The existing shared foundation was merged in PR #1. The four contributor branches were synchronized to PR #6 main `fd81bc1cd8e190b068a4fb8b04e5eee8ee565752`; implementation remains gated by contributor-specific authorization and a fresh check against current main.

| Process | Responsibility | View/branch lineage |
| --- | --- | --- |
| ORCH-00 | Decisions, governance, contracts gate, PR coordination | no domain implementation |
| EXP-01 | References, four creative contracts, Home golden reference | feature/home |
| DISC-02 | Ruth (`ruthcarol281076`) — Catalog and Product | feature/catalog, feature/product |
| TRAN-03 | Rodrigo (GitHub username pending) — Cart and Checkout | feature/cart, feature/checkout |
| INTEG-04 | SEO, Schema.org, cross-page integration after handoff | feature/seo-schema |

## Current collaboration state

EXP-01 is complete. The Home Golden Reference is approved and the shared Reference, Visual, Copywriting and Product Content contracts are frozen for downstream use.

DISC-02 and TRAN-03 are released by the creative-contract gate. Ruth is bound to DISC-02 as `ruthcarol281076`: repository READ is verified, WRITE is pending verification. Rodrigo is assigned to TRAN-03; GitHub username/access remain PENDING.

All four contributor branches were synchronized to PR #6 main `fd81bc1cd8e190b068a4fb8b04e5eee8ee565752`. Before editing, re-fetch and re-check current main. Implementation requires every activation gate in CONTRIBUTOR_ASSIGNMENTS.yaml: matching active GitHub identity, verified repository WRITE capability and branch freshness. Each contributor uses their own authenticated GitHub account; git config alone does not prove identity.

Read [execution plan](docs/collaboration/COLLABORATIVE_EXECUTION_PLAN.md), [CONTRACT_INDEX](docs/collaboration/CONTRACT_INDEX.yaml), your assigned scope YAML and matching work package. Do not fabricate contributor attribution.

Each major part uses a clear branch and PR. Update from main before review, preserve others' commits, resolve conflicts together, and do not force-push over teammate work. The PR states rubric coverage, contract conformance, tested viewports, evidence, deviations, limitations, and handoff. Only ORCH-00 accepts contract changes. INTEG-04 starts after both handoffs.

## Contributor onboarding

Ruth READ is verified; WRITE is pending verification. Rodrigo username/access are PENDING. Initial branch synchronization is complete; re-check current main immediately before implementation.

- [Empieza aquí](docs/collaboration/onboarding/00_EMPIEZA_AQUI_RUTH_Y_RODRIGO.md)
- [Guía de ramas](docs/collaboration/onboarding/01_GUIA_FACIL_PARA_TRABAJAR_EN_TU_RAMA.md)
- [Prompt de Ruth](docs/collaboration/onboarding/02_RUTH_COPIA_ESTE_PROMPT_CATALOGO_Y_PRODUCTO.md)
- [Prompt de Rodrigo](docs/collaboration/onboarding/03_RODRIGO_COPIA_ESTE_PROMPT_CARRITO_Y_CHECKOUT.md)
