---
version: 2.0
status: FROZEN
owner: EXP-01
direction: INDUSTRIAL_MAISON_ROUGE
supersedes: 1.0
golden_reference: index.html
mandatory_child: docs/collaboration/EFFECTS_CONTRACT.md
---

# Visual Contract — Industrial Maison Rouge v2.0

## 1. Design objective

Create a responsive fashion ecommerce Home that feels like a brutalist exhibition system interrupted by a controlled crimson/surreal gesture.

Hierarchy must remain commercial and immediately readable.

## 2. Canonical palette

| Token | Hex | Role |
|---|---:|---|
| Ink | `#11110F` | primary dark surface / text |
| Charcoal | `#1B1A18` | secondary dark surface |
| Concrete | `#77726C` | muted architectural tone |
| Steel | `#A6A19A` | secondary text / borders on dark |
| Bone | `#E8E1D8` | primary light editorial surface |
| Ivory | `#F5F0E8` | high-legibility light surface |
| Crimson | `#8B1020` | primary accent / CTA |
| Crimson Deep | `#5F0B15` | hover / deep accent |
| Warm White | `#FFFDF8` | high-contrast text on dark |

### Surface proportions
Target at desktop:
- dark surfaces: ~45–55%;
- light surfaces: ~35–45%;
- UI crimson fill: <=8% of visible interface area;
- crimson may occupy more inside campaign photography, but should not visually dominate the entire page.

### Forbidden colors
- cyan;
- electric blue;
- neon green/pink;
- saturated multicolor gradients.

## 3. Typography

No external font dependency is required.

### Display stack
`Didot, "Bodoni MT", "Times New Roman", serif`

Use for:
- H1;
- major section headings;
- editorial category labels;
- brand wordmark where appropriate.

### Utility/body stack
`"Helvetica Neue", Arial, ui-sans-serif, system-ui, sans-serif`

Use for:
- nav;
- search;
- product metadata;
- price;
- labels;
- CTA;
- body copy.

### Type scale

| Role | 390 | 768 | 1440 |
|---|---:|---:|---:|
| Hero H1 | 3.15rem | 4.6rem | 6.5rem |
| Section H2 | 2.1rem | 2.5rem | 3.25rem |
| Editorial tile title | 1.75rem | 2rem | 2.5rem |
| Product name | 0.92rem | 0.95rem | 1rem |
| Body | 0.9rem | 0.95rem | 1rem |
| Utility label | 0.65–0.72rem | same | same |

### Typography behavior
- H1 line-height: `0.88–0.96`;
- section titles: `0.95–1.05`;
- body: `1.5–1.65`;
- uppercase utility tracking: `0.12em–0.22em`;
- do not use faux bold Didone display text;
- body paragraphs max ~60–68 characters per line.

## 4. Grid

### Desktop 1440+
- 12-column conceptual grid;
- outer gutter: 40–48 px;
- section bounds can extend edge-to-edge;
- max content width: 1600 px;
- borders may define columns explicitly.

### Tablet 768
- 6-column conceptual grid;
- outer gutter: 24–32 px.

### Mobile 390
- 4-column conceptual grid;
- outer gutter: 16 px;
- no page-level horizontal overflow.

## 5. Geometry

- default radius: `0px`;
- permitted micro-radius: maximum `2px` only where browser controls need it;
- shadows: **none**;
- primary separators: 1 px;
- strong separators: 1 px Ink/Steel;
- use rectangular framing and hard boundaries.

## 6. Header

### Desktop
- black/Ink background;
- 64–72 px target height;
- left utility/nav group;
- centered brand;
- right search/account/cart utilities;
- 1 px bottom border in dark Steel/Concrete.

### Mobile/tablet
- brand and utilities remain readable;
- search may occupy a second row;
- wrapping is preferred to cramped controls;
- no hamburger is required if a compact wrap remains usable;
- account may use native `details/summary`;
- no JavaScript dependency.

## 7. Hero

### Composition
- full-width architectural campaign image;
- black tailoring / raw concrete / crimson sculptural interruption;
- subject primarily right of center;
- left 38–46% is text-safe;
- a subtle flat black overlay may be used for contrast; no decorative gradient required.

### Height
- 390: 560–620 px;
- 768: 620–680 px;
- 1440: 680–740 px.

### Content
- one eyebrow;
- one H1;
- one concise deck;
- one primary CTA;
- optional micro-index / study label;
- no carousel requirement.

### CTA
- Crimson background;
- Warm White text;
- minimum 44 px height;
- hard rectangular geometry.

## 8. Product rails

Both required rails remain horizontal.

### Media
- 4:5;
- local production image;
- `object-cover`;
- explicit width/height or aspect-ratio to prevent layout shift.

### Card anatomy
1. image;
2. category label;
3. product name;
4. price;
5. optional small action mark (`+` or `View product`) if semantic nesting remains valid.

### Card styling
- no rounded card container;
- no drop shadow;
- no fake ratings;
- no discount badges;
- no decorative borders around the whole card unless used as a 1 px structural separator.

### Rail density
- 390: ~1.15–1.25 cards visible;
- 768: ~2.15–2.35 cards visible;
- 1440: ~4.7–5.2 cards visible.

Intentional rail overflow is permitted. Page overflow is not.

## 9. Light rail / dark rail rhythm

Preferred Home rhythm:
- New arrivals: Bone/Ivory surface, dark text;
- Best sellers: Ink/Charcoal surface, Warm White text;
- alternate surfaces create architectural sectional rhythm.

## 10. Editorial/category bridge

Use the canonical categories:
- Footwear;
- Shirts;
- Pants;
- Accessories.

Desktop:
- 4 structural tiles or one 2+2 asymmetric composition;
- hard separators;
- imagery may be reused as crops from production product assets.

Mobile:
- 2x2 or stacked;
- labels remain visible;
- avoid hiding category meaning behind hover.

## 11. Footer

- Ink/Charcoal background;
- Warm White primary text;
- Steel secondary text;
- 1 px top border;
- 3–4 desktop columns;
- stacked mobile;
- must include assignment-required Categories, Legal and Contact content;
- no unsupported service promises.

## 12. Imagery

### General
- restrained low-key lighting;
- concrete, cement, stone or bone studio surfaces;
- black/charcoal garments dominant;
- crimson appears selectively;
- no visible third-party branding;
- no watermarks;
- no typography baked into production assets.

### Human imagery
- editorial poses may be slightly uncanny;
- anatomy must remain plausible;
- no body horror;
- no extreme distortion;
- garments must remain legible.

### Product still life
- maintain product silhouette;
- hard/raw architectural background;
- no unrelated props that obscure the item.

## 13. Crimson usage

UI crimson may be used for:
- primary CTA;
- focus ring;
- tiny card action mark;
- selected micro-label;
- single rule/border;
- hover accent.

Do not use crimson simultaneously for:
- full nav;
- full footer;
- full product rail;
- all typography.

## 14. Accessibility

- normal body copy contrast target >=4.5:1;
- large display text >=3:1;
- visible keyboard focus independent of hover;
- minimum practical touch target ~44 px for controls;
- meaningful images require alt text;
- decorative imagery uses empty alt only when genuinely decorative;
- no essential information encoded by crimson alone.

## 15. Responsive acceptance

### 390x844
- no page overflow;
- header usable;
- hero text readable over image;
- primary CTA visible without collision;
- rails intentionally scroll inside their own containers;
- one full product card + continuation cue;
- category tiles readable;
- footer usable.

### 768x1024
- no page overflow;
- hero retains architectural tension;
- roughly two product cards plus continuation cue;
- no awkward orphaned labels;
- header search remains usable.

### 1440x900
- hero reads as full-width fashion campaign;
- H1 is visually dominant but not clipped;
- ~5 cards visible in rails;
- dark/light/crimson rhythm is apparent;
- no content appears like a generic card dashboard.

## 16. Visual failure conditions

FAIL if:
- the result looks like Quiet Atelier v1 with only a red button;
- crimson dominates;
- concrete/industrial cues disappear;
- surrealism becomes collage/noise;
- cards become rounded SaaS components;
- typography becomes illegible or overly decorative;
- product commerce hierarchy is weakened;
- page-level overflow exists.

## 17. Freeze rule

FROZEN v2.0. Changes require versioned amendment and affected-render revalidation.
