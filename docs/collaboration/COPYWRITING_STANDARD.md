---
version: 2.0
status: FROZEN
owner: EXP-01
direction: INDUSTRIAL_MAISON_ROUGE
supersedes: 1.0
---

# Copywriting Standard — Industrial Maison Rouge v2.0

## 1. Language lock

Primary storefront language: **English** (`lang="en"`).

French accents/proper names are allowed only where they are canonical Atelier Vérité names. The approved visual mockup contains French text, but that text is **not canonical copy**.

## 2. Voice

Voice is:
- architectural;
- restrained;
- precise;
- fashion-editorial;
- sensual in tension, not erotic;
- slightly uncanny;
- commercially direct.

The surreal component lives in **one controlled phrase**, not in every line.

### Good
- “The structure of desire.”
- “Form. Tension. Utility. Trace.”
- “A crimson interruption inside a quieter wardrobe.”

### Avoid
- purple prose;
- faux-philosophical paragraphs;
- excessive French;
- aggressive “edgy” slogans;
- luxury superlatives;
- claims about provenance not supported by canonical data.

## 3. Canonical Home campaign copy

### Eyebrow
`Industrial Maison Rouge · Study 01`

### H1
`The structure of desire.`

### Deck
`Sculptural silhouettes, quiet utility and a crimson interruption define Atelier Vérité’s seasonal study.`

### Primary CTA
`Shop the collection`

### Optional secondary text link
`Discover`

### New arrivals eyebrow
`New study`

### New arrivals heading
`New arrivals`

### Best sellers eyebrow
`Core rotation`

### Best sellers heading
`Best sellers`

### Editorial/category bridge
Primary line:
`Form. Tension. Utility. Trace.`

Supporting line:
`Four ways into the same wardrobe.`

## 4. Brand voice guardrail

The Home may feel conceptual, but it must still be understandable as ecommerce within two seconds.

Product and action labels are never surrealized.

## 5. Product naming

`PRODUCT_CONTENT_CONTRACT.yaml` v1.0 is authoritative.

No renaming between:
- Home;
- Catalog;
- Product;
- Cart;
- Checkout;
- later Schema.org.

## 6. Category taxonomy

Exactly:
- Footwear
- Shirts
- Pants
- Accessories

Do not use Women/Men as replacement taxonomy in the Home category bridge.

## 7. CTA dictionary

| Intent | Canonical text |
|---|---|
| Hero | Shop the collection |
| Catalog | Browse catalog |
| Product | View product |
| Add | Add to cart |
| Continue | Continue shopping |
| Checkout/final prototype action | Purchase |
| Editorial link | Discover |

Do not improvise synonyms without a contract amendment.

## 8. Price/currency

- EUR;
- display `€240`, `€1,250`;
- no decimals;
- values come from PRODUCT_CONTENT_CONTRACT.

## 9. Product descriptions

Home cards:
- product name;
- category;
- price;
- no long description required;
- optional one-line short description only if density remains controlled.

Do not invent materials in visible card copy unless copied from canonical data.

## 10. Claims policy

Never imply:
- free shipping;
- 30-day returns;
- secure payment guarantees;
- sustainability;
- Made in France;
- scarcity;
- sale pricing;
- real checkout;
- live account state.

Those elements appear in fashion references but are not supported by this academic prototype.

## 11. Search copy

- label: `Search products`
- placeholder: `Search the collection`
- submit: `Search`

Static-prototype behavior must not pretend to provide a functioning dynamic search engine.

## 12. Account copy

If native disclosure is used:
- summary: `Account`
- helper: `Static prototype. No sign-in is connected.`

## 13. Footer

Required category links:
- Footwear
- Shirts
- Pants
- Accessories

Required legal links:
- Terms and conditions
- Privacy policy
- About the brand

Contact:
- `bonjour@atelier-verite.example`

Prototype clarification:
`Static academic prototype. No live customer service or payment processing is connected.`

## 14. Accessibility copy

- no “click here”;
- links must be meaningful out of context;
- icon controls need accessible names;
- visible product text matches alt/image identity;
- form labels remain explicit.

## 15. Alt text

Use canonical image-alt guidance from PRODUCT_CONTENT_CONTRACT where the generated asset conforms.

If a generated asset visibly contradicts the canonical alt description, **reject/regenerate the asset** rather than silently changing product identity.

## 16. SEO pattern

Home title:
`Atelier Vérité — Contemporary French Fashion`

Home meta description:
`Explore Atelier Vérité, a fictional contemporary French-fashion prototype featuring an industrial editorial campaign, new arrivals and best sellers.`

No keyword stuffing.

## 17. Generated-reference exclusion

Do not copy from the approved mockup:
- `Structures du désir`;
- invented French product names;
- generated prices;
- delivery/payment claims;
- any garbled or invented text.

The mockup controls **atmosphere and composition only**.

## 18. Freeze rule

FROZEN v2.0.
