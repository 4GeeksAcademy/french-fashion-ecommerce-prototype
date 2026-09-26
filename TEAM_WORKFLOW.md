# Team workflow

Three people collaborate through process responsibility and view ownership. The existing shared foundation was merged in PR #1. Its six prepared feature branches remain untouched until the applicable work package is ready.

| Process | Responsibility | View/branch lineage |
| --- | --- | --- |
| ORCH-00 | Decisions, governance, contracts gate, PR coordination | no domain implementation |
| EXP-01 | References, four creative contracts, Home golden reference | feature/home |
| DISC-02 | Catalog and Product | feature/catalog, feature/product |
| TRAN-03 | Cart and Checkout | feature/cart, feature/checkout |
| INTEG-04 | SEO, Schema.org, cross-page integration after handoff | feature/seo-schema |

## Current collaboration state

EXP-01 is complete. The Home Golden Reference is approved and the shared Reference, Visual, Copywriting and Product Content contracts are frozen for downstream use.

DISC-02 and TRAN-03 are therefore released by the creative-contract gate, but they must not begin implementation until ORCH-00 has:
1. confirmed the real GitHub identity/access for each teammate;
2. bound the teammate to the correct work package; and
3. ensured the owned feature branches are updated from current `main`.

Read [execution plan](docs/collaboration/COLLABORATIVE_EXECUTION_PLAN.md), [CONTRACT_INDEX](docs/collaboration/CONTRACT_INDEX.yaml), your assigned scope YAML and matching work package. Do not fabricate contributor attribution.

Each major part uses a clear branch and PR. Update from main before review, preserve others' commits, resolve conflicts together, and do not force-push over teammate work. The PR states rubric coverage, contract conformance, tested viewports, evidence, deviations, limitations, and handoff. Only ORCH-00 accepts contract changes. INTEG-04 starts after both handoffs.
