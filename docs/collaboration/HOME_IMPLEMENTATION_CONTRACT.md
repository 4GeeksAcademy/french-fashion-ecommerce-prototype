---
version: 2.0
status: FROZEN
owner: EXP-01
target: index.html
direction: INDUSTRIAL_MAISON_ROUGE
executor: Codex
interaction_level: 4
supersedes: 1.0
---

# Home Implementation Contract — Industrial Maison Rouge

## 1. Mission

Reimplement `index.html` as the EXP-01 Golden Reference using the frozen v2 creative system.

This contract is executable, not inspirational.

## 2. Allowed writes

- `index.html`
- Home-specific assets defined by ASSET_CONTRACT / HOME_ASSET_MANIFEST
- EXP-01 contract/evidence files only when required for accurate status

## 3. Forbidden writes

Do not modify:
- `catalog.html`
- `product.html`
- `cart.html`
- `checkout.html`

Do not begin:
- DISC-02
- TRAN-03
- INTEG-04

Do not propagate v2 styling to other views before human Golden Reference approval.

## 4. Technology

Required:
- semantic HTML5;
- Tailwind CSS browser v4 already used by the project;
- no React/Vue/Angular;
- vanilla JavaScript is **required only for the Level 4 cinematic effects** defined in EFFECTS_CONTRACT v2.0;
- no JavaScript framework or animation library;
- no new dependency/build system.

Preferred motion file: `assets/home/home-motion.js`.

Use Tailwind utilities for styling. Keep JavaScript presentation-only: it must not implement product state, cart logic, live search, routing or authentication.

## 5. Current-data dependency

Read before coding:
- `docs/collaboration/PRODUCT_CONTENT_CONTRACT.yaml`

It controls:
- SKU;
- product name;
- category;
- price;
- sizes;
- materials;
- descriptions;
- image alt basis;
- Home group membership.

Do not copy product data from the visual reference image.

## 6. Required Home IA

Exact top-level sequence:

1. skip link;
2. header / primary navigation;
3. campaign hero;
4. New arrivals horizontal rail;
5. Best sellers horizontal rail;
6. editorial/category bridge;
7. footer.

Do not add unrequired service/shipping/payment strips.

## 7. Header implementation

Semantic:
- `<header>`
- `<nav aria-label="Primary">`

Required assignment elements:
- brand/logo text;
- search bar;
- account menu.

Also retain:
- Catalog link;
- Cart link.

### Desktop layout
- Ink background;
- centered ATELIER VÉRITÉ wordmark;
- compact left navigation;
- right utilities;
- hard 1 px bottom rule.

### Mobile/tablet
- wrapping is allowed;
- search may become second row;
- no overlap;
- no hidden required element.

### Account
Use native `details/summary` if disclosure content is shown.
Copy follows COPYWRITING_STANDARD.

## 8. Hero implementation

Add deterministic selector:
`data-section="hero"`

Semantic:
`<section aria-labelledby="home-title">`

Asset:
`assets/home/hero-industrial-maison-rouge.webp`

Image:
- meaningful alt;
- `fetchpriority="high"`;
- no lazy loading;
- explicit aspect/size behavior;
- object-cover;
- crop follows ASSET_CONTRACT.

Text:
- eyebrow: `Industrial Maison Rouge · Study 01`
- H1 id `home-title`: `The structure of desire.`
- deck from COPYWRITING_STANDARD;
- primary CTA: `Shop the collection` -> `catalog.html`;
- optional text link: `Discover` -> `#new-arrivals`.

Visual:
- text left;
- subject right;
- crimson contained primarily in asset + CTA;
- no carousel;
- no autoplay;
- no gradient-heavy treatment.

## 9. New arrivals rail

Selector:
`data-section="new-arrivals"`

Required:
- id `new-arrivals`;
- heading `New arrivals`;
- horizontal `overflow-x-auto`;
- six canonical products in manifest order;
- each card semantic `<article>`;
- each card links to `product.html`;
- rail itself may overflow; page may not.

Light surface:
Bone/Ivory.

## 10. Best sellers rail

Selector:
`data-section="best-sellers"`

Required:
- heading `Best sellers`;
- horizontal `overflow-x-auto`;
- canonical products in manifest order;
- dark surface Ink/Charcoal;
- Warm White text;
- product identity/price copied from canonical data.

Do not fabricate badges/reviews.

## 11. Product card implementation

Required elements:
- image;
- category;
- product name;
- price.

Optional:
- small `+` action mark as decorative/visual cue only if it does not falsely imply add-to-cart behavior;
- otherwise use a text `View product`.

Avoid nested interactive controls inside an anchor.

Product media:
- 4:5;
- local asset;
- lazy loading;
- `decoding="async"` where appropriate.

## 12. Editorial/category bridge

Selector:
`data-section="category-bridge"`

Content:
- headline: `Form. Tension. Utility. Trace.`
- subline: `Four ways into the same wardrobe.`

Required category taxonomy:
- Footwear
- Shirts
- Pants
- Accessories

Reuse mapped production assets as crops.
All tiles link to `catalog.html`.

Desktop:
- hard 4-column or asymmetric 2+2 structure.

Mobile:
- 2x2 or stacked;
- all category labels visible without hover.

## 13. Footer

Selector:
`data-section="footer"`

Required:
### Categories
- Footwear
- Shirts
- Pants
- Accessories

### Legal
- Terms and conditions
- Privacy policy
- About the brand

### Contact
`bonjour@atelier-verite.example`

Prototype disclaimer from COPYWRITING_STANDARD.

No shipping/payment/service claims.

## 14. Typography implementation

Use the stacks from VISUAL_CONTRACT.

Do not add an external webfont dependency unless a later amendment explicitly authorizes it.

The design must remain recognizable with browser-safe fallbacks.

## 15. Effects implementation — Level 4

Read `EFFECTS_CONTRACT.md` v2.0 and implement the complete bounded cinematic layer:

Required:
- hero media/copy differential parallax on tablet/desktop;
- hero clipped text reveal;
- one-time IntersectionObserver section reveals;
- product-card stagger on first rail entry;
- one or two crimson wipe punctuation effects;
- existing card/nav/category microinteractions;
- reduced-motion bypass.

Add deterministic motion hooks such as:
- `data-motion="hero"`
- `data-parallax-media`
- `data-reveal`
- `data-reveal-item`
- `data-crimson-wipe`

Core comprehension and all navigation must work with:
- JavaScript disabled;
- hover disabled;
- animations disabled;
- keyboard-only navigation.

Do not add GSAP, ScrollTrigger, Lenis, Three.js, smooth scrolling or other animation dependencies.

## 16. Responsive exact requirements

### 390x844
- `document.documentElement.scrollWidth <= clientWidth`;
- header readable and operable;
- hero 560–620 px;
- H1 no clipping;
- CTA visible;
- rail card width ~80–84vw;
- category bridge legible;
- footer stacked.

### 768x1024
- no page overflow;
- hero 620–680 px;
- ~2.2 cards visible;
- search/control layout not cramped;
- category bridge balanced.

### 1440x900
- no page overflow;
- hero 680–740 px;
- large Didone H1;
- roughly five cards visible;
- raw/light/dark/crimson rhythm clearly perceptible.

## 17. Semantics / accessibility

Required:
- exactly one H1;
- logical H2 hierarchy;
- `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`;
- search form has real label;
- visible focus state;
- skip link;
- descriptive image alt;
- link text meaningful;
- account disclosure keyboard-accessible;
- no color-only state.

## 18. Performance / stability

- local WebP assets;
- no page-level background video;
- one small local presentation script only;
- zero third-party JS;
- explicit media aspect ratios;
- lazy-load non-hero images;
- avoid content layout shift;
- no external hotlinked image dependency at Golden gate.

## 19. Contract assertions Codex must verify

Before render:
- no protected view changed;
- no third-party framework;
- no unsupported claims;
- all product names/prices match current canonical data;
- all manifest asset paths resolve and are `CANONICAL`;
- Level 4 motion script loads without console errors;
- reduced-motion bypass is verified;
- hero + both rails exist;
- footer has all requested groups;
- no lorem ipsum/placeholders.

## 20. QA loop

Use exactly:

`coverage -> adversarial review -> correction -> verification`

A further iteration requires a concrete failure mode.

Adversarial review should specifically search for:
- crimson overuse;
- loss of industrial structure;
- generic luxury-template drift;
- hero text contrast failure;
- product-image mismatch;
- mobile overflow;
- hidden required commerce elements;
- excessive surrealism;
- hover-only meaning;
- stale/hotlinked assets.

## 21. Render evidence

Render:
- 390x844;
- 768x1024;
- 1440x900.

For each record:
- commit SHA;
- clientWidth;
- scrollWidth;
- visible hero;
- New arrivals status;
- Best sellers status;
- header/footer status;
- material defect notes.

## 22. Definition of Done

Home implementation is ready for the human Golden gate only when:
- all frozen contracts are obeyed;
- required production assets are CANONICAL;
- canonical product/copy consistency passes;
- three viewport renders pass;
- no material visual defect remains;
- protected files are untouched;
- evidence is revision-bound.

Then request **one** final human approval.

Stop there.
