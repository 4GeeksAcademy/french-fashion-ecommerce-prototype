---
version: 1.0
status: FROZEN
owner: EXP-01
frozen_at: 2026-09-25
golden_reference: index.html
---

# Visual contract — Quiet Atelier v1.0

This contract is normative for all five storefront views after Golden Reference approval. Home is the only implemented reference in EXP-01; dependent views must not propagate it before the human gate is accepted.

## Core tokens

| Area | Locked rule |
| --- | --- |
| Color | Paper `#F4F0E8` for primary page surface; Ivory `#FCFAF6` for elevated/light surfaces; Ink `#171614` for primary text; Stone `#CFC7BA` for separators; Muted `#6F6A63` for secondary text; Wine `#6F2634` for restrained accent/action emphasis. No gradients required. |
| Contrast | Body copy must use Ink or sufficiently dark Muted on Paper/Ivory. Wine is never the only carrier of state. |
| Typography | Display: serif stack (`ui-serif, Georgia, Cambria, "Times New Roman", serif`). Utility/body: sans stack (`ui-sans-serif, system-ui, sans-serif`). Display uses normal/medium weight; utility labels use medium/semibold with restrained tracking. |
| Type scale | Display hero: 2.75rem mobile → 4.75rem desktop; section title: 2rem → 3rem; card title: 1rem; body: 0.875–1rem; utility label: 0.6875–0.75rem uppercase with tracking. |
| Line height | Display ~0.95–1.05; body 1.5–1.7; utilities 1.2–1.4. |
| Spacing | Base rhythm: 4, 8, 12, 16, 24, 32, 48, 64, 96 px. Section spacing: 64 px mobile, 88–112 px desktop where content allows. |
| Containers | Primary max width: 1440 px; readable copy max width: ~42rem. Side gutters: 16 px mobile, 24–32 px tablet, 40–48 px desktop. |
| Grid | Use CSS/Tailwind grid for page structure; product rails use horizontal grid-flow columns with overflow-x auto. Desktop catalog later resolves to four columns per rubric. |
| Borders | 1 px low-contrast Stone separators. Strong Ink border only for primary controls or deliberate emphasis. |
| Radius | Default 0–2 px. Avoid rounded-card visual language. Circular radius permitted only for icon-only utility controls where needed. |
| Shadow | None by default. Do not use shadows to create hierarchy. |
| Images | Hero editorial crop: portrait/near 4:5; product media: 4:5. Use `object-cover`; preserve meaningful subject focal point. |
| Iconography | Inline text/symbols only unless an owned SVG is required. Keep stroke/simple geometry; no decorative icon packs required. |

## Header / navigation

- Header uses Paper/Ivory with a thin bottom border.
- Utility strip may use Ink background with Ivory text.
- Brand wordmark is text, uppercase, letter-spaced, not an imitation of a reference logo.
- Desktop hierarchy: brand → search → Catalog → Account → Cart.
- Mobile/tablet may wrap search to a second row; wrapping is preferred to cramped controls.
- Search remains a real labeled `input type="search"`; no fake icon-only search.
- Account menu should use native semantic disclosure (`details/summary`) if a menu is shown without JavaScript.
- Header must never obscure content.

## Footer

- Ink surface with Ivory primary text and muted warm secondary text.
- Required groups remain: Categories, Legal, Contact.
- Desktop: three or four columns; mobile: stacked.
- Links use visible focus states and underline or clear contrast on hover/focus.
- Contact copy may identify the prototype nature where useful, but must not imply a live service channel.

## Product card

Order is fixed:
1. 4:5 media;
2. category / small utility label when useful;
3. product name;
4. price;
5. optional compact text link.

Rules:
- Entire card may be a product link only if nested interactive elements are avoided.
- No ratings, discounts, scarcity labels or badges unless canonically present and truthful.
- Price is never visually detached from product name.
- Cards use border/space hierarchy, not elevated panels.
- Image alt text follows COPYWRITING_STANDARD v1.0.

## Horizontal rails

Use:
- `overflow-x-auto`;
- grid-flow columns;
- mobile card width around 78–84vw;
- tablet around 42–46vw;
- desktop around 23–25% of container.

The rail itself may overflow horizontally; the **page must not**. Provide visible continuation by allowing the next card edge or multiple cards to appear.

## Buttons / links

### Primary
- Ink background, Ivory text.
- Minimum height ~44 px.
- Square/subtle radius.
- Hover/focus may invert to Wine or use Wine outline only if contrast remains sufficient.

### Secondary
- Transparent background, Ink border/text.
- Same minimum target height.

### Text links
- Underline offset or border-bottom treatment.
- Never rely only on color to communicate interactivity.

### Disabled
- Use lowered contrast plus semantic `disabled`/aria state where applicable.
- Do not simulate unavailable functionality with active-looking controls.

## Inputs / selects / forms

- Persistent visible labels, except search may use an sr-only label paired with a specific placeholder.
- Border: Stone default, Ink/Wine focus.
- Height: minimum ~44 px.
- Background: Ivory.
- Error copy sits below the field and is not color-only.
- Native select behavior is preferred over custom JavaScript.
- Form groups use 16–24 px internal gap and 32–48 px section gap.

## Focus / hover

- Every keyboard-focusable element must expose a visible `focus-visible` treatment.
- Preferred focus: 2 px Ink or Wine ring with 2 px offset.
- Hover may underline, invert surface, or slightly reduce image opacity; core information/action must remain visible without hover.

## Motion

- Motion is optional and non-essential.
- If used, limit to opacity/transform transitions around 150–250 ms.
- Do not animate layout, auto-scroll product rails, or introduce motion required for comprehension.
- Respect `prefers-reduced-motion` if non-trivial motion is added later.

## Responsive contract

### 390 x 844
- No page-level horizontal scroll.
- Main gutters: 16 px.
- Hero stacks copy then media.
- Product rails remain horizontal.
- Footer stacks.
- Header is allowed to wrap into two rows.

### 768 x 1024
- Main gutters: 24–32 px.
- Hero may stack or split; Home v1.0 keeps a balanced stacked/tablet composition unless content is clearly improved by split.
- Product rails expose ~2 cards.
- Footer may use 2 columns.

### 1440 x 900
- Main gutters: 40–48 px.
- Hero uses a two-column editorial split.
- Product rails expose ~4 cards.
- Footer uses 3–4 columns.

## Golden Reference conformance

Home may be accepted only if:
- required content from R03–R07 is present where EXP-01 owns it;
- the hero, rails and footer visually follow the tokens above;
- typography, color, spacing and control styles are internally consistent;
- the three required renders have no material defect;
- copy and canonical product data match their frozen contracts.

## Freeze rule

Status is **FROZEN**. Any amendment after this point requires the deviation protocol, ORCH-00 decision, a version increment and revalidation of affected pages.
