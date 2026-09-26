# EXP-01 Deviation Record — DR-002

- **Process:** EXP-01 — Experience Foundation
- **Date:** 2026-09-26
- **Decision:** LOCAL_VARIANT for Home Golden Reference only
- **Human direction:** Implementation Level 4 — Cinematic Interaction
- **Affected files:** `index.html`, optional `assets/home/home-motion.js`, Effects/Home implementation contracts
- **Unaffected files:** `catalog.html`, `product.html`, `cart.html`, `checkout.html`
- **Propagation:** FORBIDDEN before Golden Reference approval

## Why this deviation exists

The normalized EXP-01 scope contains the conservative constraint **“HTML and Tailwind only.”**
The current Control Tower assignment state separately says no application framework or dynamic cart/checkout implementation is required and permits a later **rubric-safe micro-interaction** when justified.

The human explicitly selected **Level 4 — Cinematic Interaction** for the Home direction.

This creates a real contract delta that must not be silently ignored.

## Disposition

Authorize a **Home-only local variant**:

- semantic HTML remains the content/runtime foundation;
- Tailwind CSS remains the styling system;
- a small local **vanilla JavaScript** file may implement presentation-only cinematic effects;
- JavaScript must not implement application/business state;
- JavaScript must not become a dependency of navigation, search visibility, product content, account content, cart state, routing or checkout;
- no framework or animation library may be introduced.

The visual result must remain complete with JavaScript disabled.

## Allowed JavaScript mechanisms

- `IntersectionObserver`
- `requestAnimationFrame`
- passive scroll observation
- `matchMedia("(prefers-reduced-motion: reduce)")`
- class/data-attribute toggling for presentation state

## Forbidden

- React / Vue / Angular
- GSAP / ScrollTrigger
- Lenis or smooth-scroll libraries
- Three.js / WebGL
- canvas effects
- custom cursors
- scroll-jacking
- app state, persistence, cart/search/auth logic
- propagation of this exception to collaborator views without a separate decision

## Validation

The local variant is acceptable only if:

1. Home remains fully usable with JavaScript disabled.
2. Reduced-motion disables non-essential choreography.
3. There are zero JavaScript console errors.
4. There is no page-level horizontal overflow.
5. Motion does not affect rubric content availability.
6. R18 remains conformant: Tailwind drives styling and no unrelated framework is introduced.
7. The final PR explicitly records this deviation.

## Status after Golden approval

Golden Reference approval may validate this Home-only interaction pattern.
It does **not** automatically require or authorize equivalent motion on Catalog/Product/Cart/Checkout.
