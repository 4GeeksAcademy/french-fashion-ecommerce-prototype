# Team workflow

Three people collaborate through process responsibility and view ownership. The existing shared foundation was merged in PR #1. Contributor branches receive current main through the onboarding work order; implementation remains gated by identity/access and branch readiness.

| Process | Responsibility | View/branch lineage |
| --- | --- | --- |
| ORCH-00 | Decisions, governance, contracts gate, PR coordination | no domain implementation |
| EXP-01 | References, four creative contracts, Home golden reference | feature/home |
| DISC-02 | Ruth (`ruthcarol281076`) — Catalog and Product | feature/catalog, feature/product |
| TRAN-03 | Rodrigo (GitHub username pending) — Cart and Checkout | feature/cart, feature/checkout |
| INTEG-04 | SEO, Schema.org, cross-page integration after handoff | feature/seo-schema |

## Current collaboration state

EXP-01 is complete. The Home Golden Reference is approved and the shared Reference, Visual, Copywriting and Product Content contracts are frozen for downstream use.

DISC-02 and TRAN-03 are therefore released by the creative-contract gate, but they must not begin implementation until ORCH-00 has:
1. confirmed the real GitHub identity/access for each teammate;
2. bound the teammate to the correct work package; and
3. ensured the owned feature branches are updated from current `main`.

Read [execution plan](docs/collaboration/COLLABORATIVE_EXECUTION_PLAN.md), [CONTRACT_INDEX](docs/collaboration/CONTRACT_INDEX.yaml), your assigned scope YAML and matching work package. Do not fabricate contributor attribution.

Each major part uses a clear branch and PR. Update from main before review, preserve others' commits, resolve conflicts together, and do not force-push over teammate work. The PR states rubric coverage, contract conformance, tested viewports, evidence, deviations, limitations, and handoff. Only ORCH-00 accepts contract changes. INTEG-04 starts after both handoffs.

## Contributor onboarding

Ruth access is UNVERIFIED. Rodrigo username/access are PENDING.

- [Empieza aquí](docs/collaboration/onboarding/00_EMPIEZA_AQUI_RUTH_Y_RODRIGO.md)
- [Guía de ramas](docs/collaboration/onboarding/01_GUIA_FACIL_PARA_TRABAJAR_EN_TU_RAMA.md)
- [Prompt de Ruth](docs/collaboration/onboarding/02_RUTH_COPIA_ESTE_PROMPT_CATALOGO_Y_PRODUCTO.md)
- [Prompt de Rodrigo](docs/collaboration/onboarding/03_RODRIGO_COPIA_ESTE_PROMPT_CARRITO_Y_CHECKOUT.md)
