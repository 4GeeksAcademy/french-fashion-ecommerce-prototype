# KICKSTART — 4g-006 / EXP-01 / Industrial Maison Rouge

Continue 4Geeks assignment `4g-006-fashion-ecommerce-prototype` in **EXP-01 — EXPERIENCE FOUNDATION + GOLDEN HOME** scope.

You are receiving the attached handoff package:

`EXP01_4G006_INDUSTRIAL_MAISON_ROUGE_CODEX_HANDOFF_FINAL.zip`

Your job is to carry EXP-01 from the current remote repository state through a fully implemented, verified Home Golden Reference and then **STOP at the human approval gate**.

## Operating mode

**PLAN MODE FIRST.**

Inspect live state before changing anything. Do not reconstruct current operational state from chat history or package assumptions.

After the plan is internally coherent, execute from beginning to end without unnecessary approval checkpoints.

Pause only for:
- an ownership collision;
- destructive ambiguity;
- unrecoverable branch conflict;
- authorization failure;
- a contradiction that changes the approved scope.

## Authority

Use this order:

1. current academic repository state;
2. current 4Geeks Control Tower assignment state;
3. frozen/approved EXP-01 contracts installed from this package;
4. explicit current human decisions encoded in DR-001 / DR-002;
5. handoff snapshots/history.

Live authoritative state overrides a stale snapshot.

## Repositories

Academic repo was historically recorded as:

`Picazo333/french-fashion-ecommerce-prototype`

GitHub currently resolves it as:

`4GeeksAcademy/french-fashion-ecommerce-prototype`

Resolve the actual current remote with:

```bash
git remote -v
```

Do not mutate Control Tower merely to reconcile that owner-name discrepancy.

Control Tower:

`Picazo333/4geeks-control-tower`

Assignment:

`assignments/2026/4g-006-fashion-ecommerce-prototype/`

## First reads

Read current repo versions of:

1. `README.md`
2. `AGENTS.md`
3. `TEAM_WORKFLOW.md`
4. `docs/collaboration/COLLABORATIVE_EXECUTION_PLAN.md`
5. `docs/collaboration/CONTRACT_INDEX.yaml`
6. `docs/collaboration/COLLABORATION_CONTRACT.md`
7. `docs/collaboration/scopes/EXP-01.yaml`
8. `docs/collaboration/work-packages/EXP-01.md`
9. `docs/collaboration/DEVIATION_RESCUE_PROTOCOL.md`
10. `docs/collaboration/PRODUCT_CONTENT_CONTRACT.yaml`
11. current `index.html`

Then read from this package:

12. `handoff/AUTHORITATIVE_STATE_SNAPSHOT.md`
13. `handoff/RUBRIC_EXECUTION_MATRIX.md`
14. `handoff/CODEX_RUNBOOK.md`
15. `INSTALL_PATCH_MANIFEST.yaml`
16. all replacement/new EXP-01 contracts
17. `docs/collaboration/ASSET_AUDIT.md`
18. `docs/collaboration/HOME_ASSET_MANIFEST.yaml`

If Control Tower is accessible, also inspect its current `assignment.yaml` and rubric contract before implementation.

## Current human decisions

These are approved and should not be reopened absent new material evidence:

- final creative direction: **Industrial Maison Rouge**
- previous Quiet Atelier creative direction is superseded
- brutalist/industrial structure is dominant
- surrealism is controlled and secondary
- crimson is a precise signature accent
- canonical Home production images are the 11 local assets in this package
- interaction profile: **Level 4 — Cinematic Interaction**
- Level 4 is a **Home-only local variant**
- small vanilla JS is allowed only for presentation effects
- no JS framework or animation library
- no propagation before Golden Reference approval

## Scope

Own EXP-01 only.

### Allowed writes

- `index.html`
- `assets/home/**`
- EXP-01-owned creative contracts/evidence/status files

### Protected

Do not modify:

- `catalog.html`
- `product.html`
- `cart.html`
- `checkout.html`

Do not perform:

- DISC-02
- TRAN-03
- INTEG-04
- final cross-page Schema/SEO integration
- global rubric completion claims

## Branch

Use:

`feature/home`

At handoff snapshot it was ahead of main by 7 and behind by 2. **Re-check live state.**

Synchronize `feature/home` with current `main` before final PR review using a non-destructive merge approach.

Never force-push over teammate work.

Do not merge PR #3 to `main`.

## Package installation

Install the package according to:

`INSTALL_PATCH_MANIFEST.yaml`

The package supersedes:

- REFERENCE_CONTRACT v1 -> v2
- VISUAL_CONTRACT v1 -> v2
- COPYWRITING_STANDARD v1 -> v2

It adds:

- EFFECTS_CONTRACT v2
- ASSET_CONTRACT
- HOME_ASSET_MANIFEST
- HOME_IMPLEMENTATION_CONTRACT v2
- DR-001
- DR-002
- 11 canonical production assets
- reference/evidence assets

**Do not replace or rewrite** live:

`docs/collaboration/PRODUCT_CONTENT_CONTRACT.yaml`

It remains authoritative v1.0.

After installation verify all 11 asset hashes from the manifest.

## Required Home IA

Implement exactly:

1. Header / primary navigation
2. Campaign hero
3. New arrivals horizontal rail
4. Best sellers horizontal rail
5. Editorial/category bridge
6. Footer

Do not add unsupported shipping/payment/service promises or unrelated sections.

## Product truth

Use the live canonical product contract for:

- SKU
- name
- category
- price
- descriptions/alt basis

Do not use product names/prices invented by the generated visual reference.

## Visual direction

Implement **Industrial Maison Rouge**, not a minor recolor of Quiet Atelier.

Target balance:

- ~65% industrial/brutalist structure
- ~20% editorial luxury/commerce clarity
- ~15% surreal/crimson tension

Characteristics:

- concrete / raw architecture
- Ink/Charcoal/Bone/Ivory surfaces
- controlled Crimson
- Didone-style display typography + utilitarian sans
- hard rectangles
- 0–2px radius
- no card shadows
- strong editorial photography
- crisp architectural cuts
- product hierarchy remains obvious

Use the provided reference image only as conditioning for atmosphere/composition.

## Effects Level 4

Implement bounded cinematic interaction with:

- vanilla JavaScript only
- `IntersectionObserver`
- `requestAnimationFrame`
- CSS transforms/opacity
- `prefers-reduced-motion`

Required effects:

1. desktop/tablet hero differential parallax;
2. hero copy clipped/translated reveal;
3. one-time section reveals;
4. product-card stagger;
5. one or two controlled crimson wipes;
6. restrained card/nav/category microinteractions.

Do not add:

- GSAP
- ScrollTrigger
- Lenis
- Three.js
- WebGL
- React/Vue/Angular
- animation libraries
- smooth-scroll
- custom cursor
- scroll-jacking

JavaScript is presentation-only.

The complete Home must still work and make sense with JavaScript disabled.

## QA sequence

Use:

**coverage -> adversarial review -> correction -> verification**

Another iteration requires a concrete failure mode.

### Static checks

Verify:

- exactly one H1
- semantic landmarks
- skip link
- accessible search label
- canonical product names/prices
- local assets only for Home production imagery
- alt text
- required footer content
- no unsupported claims
- no unrelated framework/library
- protected views unchanged

### Runtime

Render and inspect:

- `390x844`
- `768x1024`
- `1440x900`

For every viewport verify:

- `document.documentElement.scrollWidth <= document.documentElement.clientWidth`
- no essential clipping/overlap
- header/search usable
- hero legible
- CTA visible
- New arrivals horizontal
- Best sellers horizontal
- category bridge readable
- footer readable
- all local images resolve
- no console errors

Also test:

- keyboard-only
- `prefers-reduced-motion: reduce`
- JavaScript disabled

Motion must degrade to a complete static page.

## Adversarial review

Specifically attempt to falsify:

- “this really looks Industrial Maison Rouge”
- crimson is controlled
- brutalist structure is actually present
- surrealism is not excessive
- page does not look like a generic Shopify/SaaS template
- hero crop/contrast works
- product assets match canonical items
- motion is smooth and bounded
- no mobile overflow
- no blank parallax edges
- no content dependency on JavaScript
- no protected-file regression

Only fix real failures.

## Evidence

Evidence must be bound to the final EXP-01 commit SHA.

Capture:

- static check output
- exact commit SHA
- 3 responsive screenshots
- viewport width/scroll-width metrics
- reduced-motion result
- JavaScript-disabled result
- console-error result
- changed-file list
- asset/hash verification
- adversarial review findings and fixes

Do not convert global Control Tower rubric statuses to PASS unless Control Tower's own audit supports it.

## PR

Existing PR:

`https://github.com/4GeeksAcademy/french-fashion-ecommerce-prototype/pull/3`

After implementation/verification, update it to describe:

- Industrial Maison Rouge
- v2 contracts
- 11 canonical assets
- DR-001
- DR-002
- Level 4 motion
- tested viewports
- exact final SHA
- protected views unchanged
- limitations
- handoff/STOP

Keep the PR unmerged.

## Definition of Done for EXP-01

- live branch reconciled safely with current main
- all v2 contracts installed and validated
- product contract v1 preserved
- 11 canonical assets verified by hash
- Home implements all EXP-01 rubric surfaces
- Level 4 interaction implemented without frameworks
- JavaScript-disabled static fallback complete
- reduced-motion PASS
- 390x844 PASS
- 768x1024 PASS
- 1440x900 PASS
- zero material visual defects
- zero copy inconsistency
- zero console errors
- protected collaborator views unchanged
- PR #3 current and evidence-bound
- fresh Golden Reference evidence exists

## STOP CONDITION

When Definition of Done is met:

**STOP.**

Do not merge.
Do not style/implement collaborator views.
Do not start SEO/Schema integration.

Return:

1. final EXP-01 commit SHA;
2. PR URL;
3. concise audit matrix;
4. links/paths to the three Golden screenshots;
5. any residual limitation;
6. one final question only:

**“¿Apruebas Industrial Maison Rouge Home como Golden Reference de EXP-01?”**
