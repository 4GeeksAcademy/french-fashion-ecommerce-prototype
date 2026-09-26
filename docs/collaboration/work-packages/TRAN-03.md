# TRAN-03 — Transaction/Forms

- **ROLE:** Transaction/Forms.
- **OBJECTIVE:** Cart and Checkout.
- **OWNS:** cart.html; checkout.html.
- **DOES_NOT_OWN:** Home; Catalog; Product; creative contracts.
- **DEPENDENCIES:** all four transversal contracts APPROVED/FROZEN; ORCH-00 decision ownership.
- **RUBRIC_COVERAGE:** R13-R16 plus shared structural/responsive criteria; no criterion is PASS until Control Tower evidence verifies it.
- **MUST_REUSE:** locked reference, visual, copy, product-content contracts.
- **LOCAL_FREEDOM:** form and cart layout within contracts; coherent sample arithmetic, without inventing global policy.
- **ALLOWED_WRITES:** cart.html; checkout.html; only on assigned feature/PR branch.
- **FORBIDDEN_WRITES:** other HTML; frozen transversal contracts; no simultaneous file ownership.
- **VIEWPORTS:** 390x844, 768x1024, 1440x900 for every owned view.
- **TESTS:** source/semantic and internal-link checks; relevant rubric checks; rendered overflow, legibility, interaction and contract review; revision-bound evidence.
- **DEVIATION_PROCESS:** pause affected work and use [deviation protocol](../DEVIATION_RESCUE_PROTOCOL.md); ORCH-00 decides USE_EXISTING, LOCAL_VARIANT, EXTEND_CONTRACT or REJECT.
- **DEFINITION_OF_DONE:** owned deliverables, tests/evidence, contract conformance, reviewed PR and accepted handoff. Rubric PASS is assigned only by Control Tower audit.
- **PR_REQUIREMENTS:** owner, summary, rubric mapping, contract versions, viewport results, evidence, deviations, limitations, knowledge handoff.
- **KNOWLEDGE_HANDOFF:** record commit/PR, decisions, unresolved questions, tested states, evidence and next owner.
