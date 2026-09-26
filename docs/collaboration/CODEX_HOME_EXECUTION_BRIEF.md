# Codex Execution Brief — EXP-01 Home v2

## Objective

Implement only the Home Golden Reference for **Industrial Maison Rouge**.

## Plan mode first

Before mutating:

1. inspect current repo state and remote;
2. confirm canonical repo location;
3. read:
   - README.md
   - AGENTS.md
   - TEAM_WORKFLOW.md
   - docs/collaboration/COLLABORATIVE_EXECUTION_PLAN.md
   - docs/collaboration/CONTRACT_INDEX.yaml
   - docs/collaboration/REFERENCE_CONTRACT.md
   - docs/collaboration/VISUAL_CONTRACT.md
   - docs/collaboration/COPYWRITING_STANDARD.md
   - docs/collaboration/EFFECTS_CONTRACT.md
   - docs/collaboration/ASSET_CONTRACT.md
   - docs/collaboration/HOME_ASSET_MANIFEST.yaml
   - docs/collaboration/HOME_IMPLEMENTATION_CONTRACT.md
   - docs/collaboration/PRODUCT_CONTENT_CONTRACT.yaml
   - docs/collaboration/DEVIATION_RESCUE_PROTOCOL.md
4. inspect current `index.html`;
5. inspect `feature/home` against `origin/main`;
6. synchronize `feature/home` with current main without force-push or rewriting history;
7. if synchronization conflicts with files outside EXP-01 ownership, stop and report.

## Asset gate

All 11 production assets in `HOME_ASSET_MANIFEST.yaml` are now `CANONICAL` and included locally in this pack.

Before implementation:
- verify every listed path exists;
- verify SHA-256 if the manifest provides it;
- do not replace these assets with hotlinks or newly generated alternatives unless a concrete defect is found and documented.

## Write boundary

Allowed:
- index.html
- assets/home/**
- EXP-01-owned evidence/status files when justified

Forbidden:
- catalog.html
- product.html
- cart.html
- checkout.html

## Implementation

Follow HOME_IMPLEMENTATION_CONTRACT exactly.

Use deterministic HTML/Tailwind for structure and styling. Implement only the bounded vanilla-JavaScript Level 4 motion layer required by `EFFECTS_CONTRACT.md` v2.0; no animation libraries or application JS.

Do not reinterpret the chosen mockup as literal source.

## Verification

Run:
1. static semantic/content checks;
2. asset path checks;
3. canonical product comparison;
4. no-framework / no-animation-library scan;
5. JS console-error check and reduced-motion check;
6. rendered QA at 390x844;
7. rendered QA at 768x1024;
8. rendered QA at 1440x900;
9. adversarial visual review;
10. bounded correction only if a concrete failure is identified;
11. repeat affected checks.

## Stop

Stop after fresh Golden Reference evidence exists.

Do not propagate the visual system and do not merge collaborator features.

The next action is the human Golden Reference approval gate.
