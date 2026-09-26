# Codex Runbook — EXP-01 Industrial Maison Rouge

## Phase 0 — Plan mode

Before mutation, produce a concise plan derived from live repo evidence and this package.

Do not ask for approval unless a true blocker/deviation exists. The human has already approved the creative direction and execution strategy.

## Phase 1 — Reconcile live authority

1. `git remote -v`
2. `git status`
3. `git branch --show-current`
4. `git fetch origin`
5. inspect `main...feature/home`
6. read current repo collaboration instructions and EXP-01 work package
7. read current Control Tower assignment/rubric if available
8. classify any contradiction

### Branch synchronization

Work on `feature/home`.

Bring current `main` into the branch using a non-destructive merge approach consistent with repository policy.

Do not:
- force-push;
- overwrite teammate work;
- merge PR #3 to main;
- rebase destructively.

If a conflict touches protected collaborator-owned surfaces, stop and report the exact files/conflict.

## Phase 2 — Install this package

Copy package files into the repo according to `INSTALL_PATCH_MANIFEST.yaml`.

Preserve authoritative repo file:

`docs/collaboration/PRODUCT_CONTENT_CONTRACT.yaml`

Do not copy a substitute product contract from elsewhere.

Verify after copy:
- YAML parses;
- contracts have expected versions/status;
- 11 production assets exist;
- asset SHA-256 values match manifest;
- reference asset exists;
- DR-001 and DR-002 exist.

Commit this as one logical contract/assets installation change.

Suggested commit:
`chore(exp-01): install Industrial Maison Rouge v2 contracts and assets`

## Phase 3 — Implement Home

Modify only:
- `index.html`
- `assets/home/home-motion.js` if separated script is used
- EXP-01 evidence/status docs when justified

Implement exact IA:

1. header/nav
2. campaign hero
3. New arrivals
4. Best sellers
5. editorial/category bridge
6. footer

Use canonical product data from the live `PRODUCT_CONTENT_CONTRACT.yaml`.

Use local manifest assets.

Follow:
- REFERENCE_CONTRACT
- VISUAL_CONTRACT
- COPYWRITING_STANDARD
- EFFECTS_CONTRACT v2
- ASSET_CONTRACT
- HOME_IMPLEMENTATION_CONTRACT v2

Suggested commit:
`feat(home): implement Industrial Maison Rouge golden reference`

## Phase 4 — Structural/static verification

Check:
- protected pages unchanged;
- exactly one H1;
- semantic landmarks;
- accessible search label;
- skip link;
- alt text;
- canonical names/prices;
- local asset resolution;
- no lorem/placeholder content;
- no unsupported claims;
- no React/Vue/Angular;
- no GSAP/Lenis/Three.js/WebGL;
- Level-4 script is presentation-only.

## Phase 5 — Runtime/render verification

Use a real browser.

Render:
- 390x844
- 768x1024
- 1440x900

Also test:
- reduced-motion
- keyboard navigation
- JavaScript disabled
- console errors

Measure page client/scroll width.

Save fresh screenshots/evidence bound to current commit.

## Phase 6 — Adversarial review

Search for concrete failure modes:

- design still reads as Quiet Atelier with merely red accents;
- insufficient raw/brutalist structure;
- excessive crimson;
- excessive surrealism;
- generic ecommerce-template drift;
- hero readability/crop failure;
- product mismatch;
- mobile overflow;
- motion jank;
- blank parallax edges;
- content unavailable without JS;
- reduced-motion failure;
- stale/hotlinked assets;
- protected file mutation.

Only perform another correction round when a concrete failure exists.

## Phase 7 — Verification after correction

Re-run all checks affected by the correction and all regression-sensitive viewport checks.

Evidence must correspond to final commit.

Suggested fix commit only when necessary:
`fix(home): resolve Golden Reference QA findings`

## Phase 8 — PR handoff

Update existing PR #3 rather than creating unnecessary duplication.

PR must state:
- EXP-01 owner/scope;
- Industrial Maison Rouge direction;
- contract versions;
- DR-001;
- DR-002;
- canonical asset count;
- effects Level 4;
- rubric mapping;
- tested viewport results;
- reduced-motion/JS-disabled result;
- exact final commit SHA;
- protected views untouched;
- limitations, if any;
- explicit STOP before collaborator views.

Keep PR unmerged.

## Phase 9 — Stop

Once the evidence is green, output a compact final report and request exactly one human decision:

**Approve or reject Industrial Maison Rouge Home as the EXP-01 Golden Reference.**

Do not:
- merge;
- propagate styling;
- start Catalog/Product/Cart/Checkout;
- start SEO/Schema integration.
