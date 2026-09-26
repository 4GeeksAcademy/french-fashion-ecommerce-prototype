---
version: 2.0
status: FROZEN
owner: EXP-01
parent: VISUAL_CONTRACT_v2.0
interaction_level: 4
profile: CINEMATIC_INTERACTION
javascript_required: true
javascript_scope: "effects only; no application/business behavior"
supersedes: 1.0
---

# Effects Contract — Industrial Maison Rouge v2.0

## 1. Decision

The human selected **Implementation Level 4 — Cinematic Interaction**.

The objective is to create a fashion-campaign feeling through controlled scroll choreography while preserving:
- semantic HTML;
- Tailwind as the styling system;
- native browser scrolling;
- accessibility;
- responsive stability;
- the assignment's static-commerce scope.

This is **not** permission to turn the project into an SPA or animation demo.

## 2. Technology boundary

Required/allowed:
- HTML5;
- Tailwind CSS browser v4;
- a small amount of local **vanilla JavaScript** dedicated only to presentation effects;
- `IntersectionObserver`;
- `requestAnimationFrame`;
- passive scroll listeners when needed;
- CSS transforms, opacity, clip/overflow and CSS custom properties;
- `matchMedia("(prefers-reduced-motion: reduce)")`.

Explicitly forbidden:
- GSAP;
- ScrollTrigger;
- Lenis;
- Three.js;
- WebGL;
- React/Vue/Angular;
- animation libraries;
- smooth-scroll libraries;
- canvas effects;
- custom cursor;
- application state in JavaScript.

## 3. Runtime structure

Preferred:
- `assets/home/home-motion.js`

The script must:
- fail safely;
- produce zero console errors;
- never be required to see or use core content;
- initialize after DOM availability;
- stop/avoid motion under reduced-motion.

## 4. Performance budget

- one small local script;
- target unminified size <= 12 KB;
- no third-party requests;
- no continuous expensive DOM reads;
- cache element references;
- use a dirty-flag `requestAnimationFrame` pattern for scroll-linked motion;
- use `transform` and `opacity`, not layout-affecting properties;
- do not animate width/height/top/left for core choreography.

## 5. Hero parallax

### Required effect
The hero media and the copy plane move at slightly different scroll rates.

Target:
- desktop media translateY range: approximately `-24px..24px`;
- tablet: approximately `-12px..12px`;
- mobile <= 480px: disable scroll parallax by default.

Rules:
- no zoom beyond `1.02`;
- no rotation;
- no pointer-following;
- no text becoming unreadable;
- no visible empty edges from transform.

The crimson intervention remains primarily baked into the hero asset. Do not synthesize a fake animated cloth simulation.

## 6. Hero text reveal

On initial viewport entry:
- eyebrow, H1, deck and CTA reveal through a restrained clipped/translated entrance;
- total sequence should complete in roughly `450–650ms`;
- stagger between elements: approximately `45–70ms`;
- translate distance <= 16px.

Do not delay access to the CTA for more than ~650ms.

Reduced motion: everything appears immediately.

## 7. Section reveals

Use `IntersectionObserver`.

Eligible:
- New arrivals heading/rail;
- Best sellers heading/rail;
- category bridge;
- footer top boundary.

Default:
- opacity `0 -> 1`;
- translateY `12px -> 0`;
- duration `320–420ms`.

Trigger once. Do not repeatedly animate when scrolling back and forth.

## 8. Product stagger

When a product rail first enters:
- individual cards may reveal in sequence;
- stagger: `35–55ms`;
- max per-card translate: 10px;
- max total rail choreography: ~500ms.

All card content exists and remains semantic before animation.

## 9. Crimson wipe

Allow **one or two** controlled crimson wipes in the entire Home.

Recommended placements:
1. boundary into Best sellers; and/or
2. category bridge entry.

Implementation:
- decorative absolutely positioned rectangle/rule;
- transform `scaleX(0) -> scaleX(1) -> scaleX(0)` or directional translate;
- duration `260–380ms`;
- no full-screen opaque flash;
- no text hidden behind it for a meaningful duration.

This is a signature punctuation mark, not a repeated motif.

## 10. Microinteractions

### CTA
- Crimson -> Crimson Deep;
- arrow/text translate <= 2px;
- `150–180ms`.

### Navigation
- underline/rule reveal;
- color/contrast shift;
- no displacement >2px.

### Product cards
- image scale `1.008–1.015`;
- slight contrast shift;
- action mark/rule to Crimson;
- no shadow lift;
- no rotation/3D tilt.

### Category tiles
- image contrast/opacity change <= 10%;
- small crimson rule reveal;
- text translate <=2px.

## 11. Dark/light architectural cuts

Section changes remain structurally hard.

Do **not** fade the entire page from black to bone or use long crossfades. Motion is layered over hard section boundaries.

## 12. Reduced motion

If `prefers-reduced-motion: reduce`:
- no parallax;
- no stagger;
- no crimson wipe animation;
- no reveal translation;
- optional <=100ms color/focus transitions only.

The static page must still fully embody Industrial Maison Rouge.

## 13. Accessibility invariants

- focus visible at all times;
- effects never remove or delay semantic content;
- hover never carries exclusive meaning;
- no flashing;
- no scroll-jacking;
- native scroll remains fully functional;
- keyboard navigation never triggers disruptive motion.

## 14. Failure conditions

FAIL if:
- JS is needed for navigation/search/account visibility;
- console errors occur;
- scroll becomes sticky/janky;
- parallax causes blank image edges;
- mobile loses readability;
- a reveal leaves content invisible due to JS failure;
- reduced-motion is ignored;
- animation becomes more salient than product imagery;
- third-party animation dependencies are added.

## 15. QA

Verify in all required viewports:
- 390x844;
- 768x1024;
- 1440x900.

Additionally verify:
- reduced-motion emulation;
- keyboard-only navigation;
- no console errors;
- no page-level horizontal overflow;
- no measurable layout shift caused by effects;
- effects disabled still produces a complete Home.

## 16. Freeze rule

FROZEN v2.0. Any move to GSAP/WebGL/smooth-scroll or broader application JS requires a new explicit decision.
