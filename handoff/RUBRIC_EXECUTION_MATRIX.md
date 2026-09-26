# EXP-01 Rubric Execution Matrix

This matrix prevents Codex from over-claiming assignment completion.

## EXP-01-owned / directly testable

| Criterion | EXP-01 responsibility | Required evidence at this phase | Allowed status after EXP-01 |
|---|---|---|---|
| R03 Navbar | Home must contain brand/logo, search and account menu | `index.html` + 3 renders | Home evidence only; global criterion remains pending other views if required |
| R04 Hero | Implement clear campaign hero | source + 3 renders | Candidate PASS evidence for Home |
| R05 New arrivals | Horizontal responsive product-card rail | source + 3 renders | Candidate PASS evidence for Home |
| R06 Best sellers | Horizontal responsive product-card rail | source + 3 renders | Candidate PASS evidence for Home |
| R07 Footer | Home portion must expose required categories/legal/contact | source + renders | Shared criterion; do not claim global PASS yet |
| R17 Semantic HTML | Home must use semantic landmarks and logical headings | source audit | Home evidence only |
| R18 Tailwind/no unrelated frameworks | Tailwind remains styling system; Level-4 JS is presentation-only local variant | source/dependency scan + DR-002 | Home evidence only |
| R19 Responsive | Home must pass 390x844, 768x1024, 1440x900 | rendered QA + overflow metrics | 3/15 page/viewport evidence only |
| R22 Branch workflow | Work remains on `feature/home` | Git history | Partial assignment evidence |
| R23 PR workflow | PR #3 represents Home major part | PR state | Partial assignment evidence |
| R24 Sync before PR integration | `feature/home` must reconcile current `main` before final review | Git history/compare | EXP-01 evidence |
| R25 Commit quality | Logical, meaningful commits | Git history | EXP-01 evidence |

## Explicitly not owned by EXP-01

Do not implement or claim completion for:

- R08–R09 Catalog
- R10–R12 Product
- R13–R15 Cart
- R16 Checkout
- R20 Schema.org integration
- R21 final cross-page SEO
- R26 final submission-ready `main`
- global completion of R01/R02/R07/R17/R18/R19 across all five pages

These remain for later processes/integration.

## Golden Home evidence matrix

For each required viewport record:

| Check | 390x844 | 768x1024 | 1440x900 |
|---|---|---|---|
| page `scrollWidth <= clientWidth` | required | required | required |
| header usable | required | required | required |
| search usable | required | required | required |
| hero legible | required | required | required |
| CTA visible | required | required | required |
| New arrivals horizontal | required | required | required |
| Best sellers horizontal | required | required | required |
| category bridge readable | required | required | required |
| footer readable | required | required | required |
| local images resolve | required | required | required |
| no essential clipping/overlap | required | required | required |
| Level-4 motion stable | reduced/static preferred | required | required |
| reduced-motion fallback | required | required | required |
| console errors | 0 | 0 | 0 |

## Evidence freshness

Any material mutation after a screenshot/test invalidates affected evidence.

Golden evidence must be bound to the exact final EXP-01 commit SHA.

## Golden gate

When all EXP-01 checks are green:

1. update PR #3 with current contracts, commit SHA, viewports and deviations;
2. do **not** merge;
3. do **not** start DISC-02 / TRAN-03 / INTEG-04;
4. request human approval exactly once;
5. stop.
