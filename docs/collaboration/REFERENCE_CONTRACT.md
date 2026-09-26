---
version: 1.0
status: FROZEN
owner: EXP-01
frozen_at: 2026-09-25
applies_to: "All five storefront views; Home is the Golden Reference."
---

# Reference contract — Quiet Atelier

## Visual thesis

**Quiet Atelier** is a product-first French editorial-commerce direction: warm neutral surfaces, strong photography, restrained typography, generous negative space and precise commercial hierarchy. The storefront should feel composed like a small fashion journal while remaining obviously shoppable.

The direction is intentionally derived from transferable patterns observed in current French fashion commerce, not from copied identity. It must remain recognizably **Atelier Vérité**, a fictional academic storefront.

## Selected references

| Reference | Provenance | Observed pattern | Decision |
| --- | --- | --- | --- |
| LEMAIRE — https://www.lemaire.fr/ | Official brand site, reviewed 2026-09-25 | Large editorial imagery, restrained neutral palette, generous whitespace, product-first modules, compact utility language | PRIMARY — use composition restraint and image hierarchy |
| A.P.C. — https://www.apcstore.com/ | Official brand site, reviewed 2026-09-25 | Clear commercial navigation, simple product rails, low-decoration product cards, direct labels | PRIMARY — use commerce clarity and card discipline |
| Sézane — https://www.sezane.com/ | Official brand site, reviewed 2026-09-25 | Campaign-led modules, editorial discovery prompts and clear collection grouping | SECONDARY — use campaign-to-commerce rhythm |
| Jacquemus — https://www.jacquemus.com/ | Official brand site, reviewed 2026-09-25 | Strong campaign framing followed by product-led commerce modules | SECONDARY — use hero confidence, not brand styling |

## USE

- Editorial asymmetry with a clear reading order.
- Warm ivory / stone surfaces with near-black text and one restrained wine accent.
- Large campaign image paired with concise copy and one primary action.
- Product cards where imagery dominates and metadata stays compact.
- Horizontal discovery rails that remain horizontally scrollable rather than collapsing into an unrelated vertical list.
- Tight utility copy in navigation; more expressive but still concise campaign copy.
- Border-led hierarchy and whitespace instead of shadow-heavy card chrome.
- Responsive reflow that preserves order: campaign message → action → product discovery.

## DO NOT USE

- Brand names, logos, campaign copy, product names, trademarks or distinctive graphical signatures from the references.
- Promotional claims copied from reference sites.
- Full-bleed autoplay video, custom cursor effects, parallax, modal campaigns or other behavior not rewarded by the assignment.
- Tiny low-contrast editorial text that harms accessibility.
- Hidden navigation or interactions that require JavaScript to satisfy core content.
- Generic gradient/neon SaaS styling, glassmorphism or heavy card shadows.
- Decorative French phrases when plain English is clearer.

## Golden Reference composition

Home establishes the shared visual grammar in this order:

1. utility strip;
2. shared navbar with brand, search, catalog, account and cart access;
3. split editorial campaign hero;
4. horizontal **New arrivals** rail;
5. compact editorial interlude / category bridge;
6. horizontal **Best sellers** rail;
7. shared multi-column footer.

## Minimum fidelity

### 390 x 844
- Single-column hero; image remains visually dominant without pushing the primary CTA below an unreasonable scroll depth.
- Product rails use horizontal overflow with snap-friendly cards; no page-level horizontal overflow.
- Search remains available and usable.
- Header actions remain legible without overlap.
- Touch targets are at least approximately 44 px high where practical.

### 768 x 1024
- Hero may remain stacked or become a balanced split only if copy and image both retain comfortable width.
- Product rails expose at least two cards plus a visual hint of continuation.
- Section spacing remains clearly differentiated.

### 1440 x 900
- Hero resolves as an editorial split with campaign copy and image in deliberate proportion.
- Product rails expose approximately four cards while preserving horizontal behavior.
- Main content uses a bounded wide container; typography does not stretch into long unreadable lines.

## Acceptance points

The Home Golden Reference is conformant only when:
- R04 hero purpose is visually obvious;
- R05 and R06 are distinct labeled horizontal product-card sections;
- product names/prices match the canonical product-content contract;
- visual tokens match VISUAL_CONTRACT v1.0;
- wording matches COPYWRITING_STANDARD v1.0;
- there is no essential overlap, clipping or page-level horizontal overflow at all three required viewports;
- the result has rendered evidence and reaches the final human Golden Reference approval gate.

## Freeze rule

This contract is **FROZEN** for dependent implementation. Any later change must use the deviation protocol, receive ORCH-00 disposition and trigger review of affected views.
