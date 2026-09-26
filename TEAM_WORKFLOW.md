# Team workflow

Three people collaborate through process responsibility and view ownership. The existing shared foundation was merged in PR #1. Its six prepared feature branches remain untouched until the applicable work package is ready.

| Process | Responsibility | View/branch lineage |
| --- | --- | --- |
| ORCH-00 | Decisions, governance, contracts gate, PR coordination | no domain implementation |
| EXP-01 | References, four creative contracts, Home golden reference | feature/home |
| DISC-02 | Catalog and Product | feature/catalog, feature/product |
| TRAN-03 | Cart and Checkout | feature/cart, feature/checkout |
| INTEG-04 | SEO, Schema.org, cross-page integration after handoff | feature/seo-schema |

Read [execution plan](docs/collaboration/COLLABORATIVE_EXECUTION_PLAN.md), your [scope](docs/collaboration/scopes/EXP-01.yaml), and matching work package. Actual human GitHub identities are pending; do not fabricate contributor attribution. ORCH-00 binds work packages to the real three-person team when access is confirmed.

Each major part uses a clear branch and PR. Update from main before review, preserve others' commits, resolve conflicts together, and do not force-push over teammate work. The PR states rubric coverage, contract conformance, tested viewports, evidence, deviations, limitations, and handoff. Only ORCH-00 accepts contract changes. DISC-02 and TRAN-03 may not start their view work until transversal contracts are locked. INTEG-04 starts after both handoffs.
