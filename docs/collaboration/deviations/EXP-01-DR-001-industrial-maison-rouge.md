# EXP-01 Deviation Record — DR-001

- **Process:** EXP-01 — Experience Foundation
- **Date:** 2026-09-25
- **Disposition:** EXTEND_CONTRACT
- **Decision authority:** explicit current human decision
- **Affected contracts:** REFERENCE_CONTRACT, VISUAL_CONTRACT, COPYWRITING_STANDARD
- **New child contracts:** EFFECTS_CONTRACT, ASSET_CONTRACT, HOME_IMPLEMENTATION_CONTRACT
- **Unchanged canonical data:** PRODUCT_CONTENT_CONTRACT v1.0
- **Affected implementation:** `index.html` only
- **Protected views:** `catalog.html`, `product.html`, `cart.html`, `checkout.html`

## Conflict

EXP-01 v1.0 froze **Quiet Atelier** before the visual-selection gate actually occurred. The human subsequently reviewed five Home routes and selected the fifth direction, asking to preserve the strong initial editorial base while adding:

- Balenciaga-influenced brutalist structure;
- a small, controlled surreal component;
- crimson accents.

The v1.0 creative direction is therefore superseded.

## Human decision

Adopt **Industrial Maison Rouge**.

The direction is intentionally hybrid:

- dominant brutalist / industrial structure;
- high-fashion editorial restraint;
- ecommerce clarity;
- controlled surreal tension;
- crimson as a precise interruption rather than a general decorative color.

The generated Industrial Maison Rouge mockup is an approved conditioning reference only. It has no authority over factual product data, prices, claims, taxonomy, copy or application behavior.

## Contract action

1. REFERENCE_CONTRACT -> v2.0.
2. VISUAL_CONTRACT -> v2.0.
3. COPYWRITING_STANDARD -> v2.0.
4. PRODUCT_CONTENT_CONTRACT remains v1.0.
5. Add EFFECTS_CONTRACT v1.0.
6. Add ASSET_CONTRACT v1.0.
7. Add HOME_IMPLEMENTATION_CONTRACT v1.0.
8. Add HOME_ASSET_MANIFEST v1.0.
9. Reimplement only Home after the above are present.
10. Invalidate all previous Home screenshots after implementation.
11. Re-render at 390x844, 768x1024 and 1440x900.
12. Stop at the single final Golden Reference human approval gate.

## Explicitly not authorized

- Catalog/Product/Cart/Checkout implementation.
- DISC-02, TRAN-03 or INTEG-04 execution.
- Copying Balenciaga branding, logo, campaign text, products, UI or proprietary graphic signatures.
- Replacing canonical product records with invented content from the generated mockup.
- Fake shipping, payment, scarcity, sustainability or service claims.
