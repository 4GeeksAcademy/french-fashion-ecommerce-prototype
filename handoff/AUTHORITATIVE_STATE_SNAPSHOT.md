# Authoritative State Snapshot — EXP-01 Handoff

**Captured:** 2026-09-26  
**Purpose:** Give Codex a starting checkpoint. This is a snapshot, not a replacement for live verification.

## Authority order

Codex must use:

1. current academic repository state;
2. current 4Geeks Control Tower assignment state;
3. frozen/approved contracts in this handoff after their installation;
4. explicit current human decisions;
5. this snapshot / historical context.

If live evidence differs from this snapshot, **live authoritative state wins** and the delta must be reported before destructive work.

## Academic repository identity

Historical Control Tower records still name:

`Picazo333/french-fashion-ecommerce-prototype`

GitHub currently resolves the repository as:

`4GeeksAcademy/french-fashion-ecommerce-prototype`

This appears to be a repository transfer/move.

### Required Codex behavior

Before any write run:

```bash
git remote -v
git status
git branch --show-current
git fetch origin
```

Use the actual current remote returned by Git.

Do **not** edit Control Tower merely to reconcile the owner-name discrepancy during EXP-01.

## Branch state at handoff snapshot

Target branch:

`feature/home`

Remote comparison observed immediately before this handoff:

- status: `diverged`
- `feature/home` ahead of `main`: **7 commits**
- `feature/home` behind `main`: **2 commits**
- observed current `main` SHA: `6b14d2a92fa15f15ad8c6d1dfb2eb7d762098070`
- common merge base: `f132d41080c31585ad7241d5c4b215a1d0d13eb7`

The two `main`-side changes observed previously were documentation additions. Codex must re-check; do not assume they are still the only delta.

## Existing PR

PR #3 exists:

`https://github.com/4GeeksAcademy/french-fashion-ecommerce-prototype/pull/3`

Its current description/title still describes the superseded **Quiet Atelier** implementation.

Do not merge it before v2 implementation + QA + Golden Reference human approval.

After successful v2 implementation, update PR #3 rather than creating unnecessary duplicate PRs unless the live repo state makes that impossible.

## Current remote EXP-01 contracts before installation

The remote `feature/home` still has:

- REFERENCE_CONTRACT v1.0 — Quiet Atelier
- VISUAL_CONTRACT v1.0 — Quiet Atelier
- COPYWRITING_STANDARD v1.0
- PRODUCT_CONTENT_CONTRACT v1.0
- Home implementation corresponding to the earlier Quiet Atelier attempt

This handoff intentionally supersedes the first three creative contracts with v2.
`PRODUCT_CONTENT_CONTRACT.yaml` v1.0 remains authoritative and must be preserved.

## Control Tower state

Assignment:

`4g-006-fashion-ecommerce-prototype`

Observed state:

- delivery: `BUILDING`
- knowledge: `NOT_STARTED`
- next process: `EXP-01`
- validation: `NOT_STARTED`
- rubric: `0 PASS / 26 UNVERIFIED`
- required responsive sizes:
  - 390x844
  - 768x1024
  - 1440x900

Do not mark global rubric criteria PASS from EXP-01 alone.

## Human creative decisions locked in this handoff

1. Chosen direction: **Industrial Maison Rouge**.
2. Quiet Atelier is superseded for the Golden Home.
3. Brutalist/industrial structure is primary.
4. Surreal influence is deliberately bounded.
5. Crimson is a controlled signature accent.
6. Production assets are local and canonical.
7. Interaction profile: **Level 4 — Cinematic Interaction**.
8. Level 4 uses bounded vanilla JS only for presentation effects.
9. No GSAP/Lenis/WebGL/framework escalation.
10. Stop after fresh Golden Home evidence and request one final human approval.
