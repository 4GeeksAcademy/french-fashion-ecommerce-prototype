---
version: 1.0
status: FROZEN
owner: EXP-01
frozen_at: 2026-09-25
---

# Copywriting standard v1.0

## Language lock

Primary storefront language: **English** (`lang="en"`).

French proper nouns, accents and product names may remain French when they are part of the fictional Atelier Vérité naming system. Do not add ornamental French phrases when a clear English label is better.

## Brand voice

Audience: design-aware adults shopping a fictional contemporary French-fashion collection.

Voice:
- restrained;
- precise;
- editorial but not poetic to the point of ambiguity;
- confident without superlatives;
- commercial actions are direct.

Good: “Soft tailoring for transitional days.”  
Avoid: “The most exquisite Parisian essential you will ever own.”

## Product naming

- Every canonical product has one stable unique name.
- Product name order: **distinctive model name + product type only when needed for clarity**.
- Keep accents consistent.
- Never rename a product between Home, Catalog, Product, Cart, Checkout or Schema.org.
- SKU is the stable reference identifier.

## Category taxonomy

Exactly four canonical storefront categories:
- Footwear
- Shirts
- Pants
- Accessories

Do not create near-duplicates such as “Shoes” beside “Footwear” or “Trousers” beside “Pants” in canonical data. Editorial copy may use ordinary synonyms only when it does not function as taxonomy.

## CTA dictionary

| Intent | Canonical copy |
| --- | --- |
| Main campaign | Shop the collection |
| Catalog navigation | Browse catalog |
| Product card/detail | View product |
| Add action | Add to cart |
| Continue after cart | Continue shopping |
| Checkout entry/final prototype action | Purchase |
| Editorial discovery | Discover |

Do not alternate between “Buy now”, “Shop now”, “Get yours”, etc. for the same action.

## Price and currency

- Currency: **EUR** (`EUR`).
- Display pattern: `€240`, `€1,250`; no decimals for this prototype.
- Canonical numeric values live in PRODUCT_CONTENT_CONTRACT.yaml.
- Never imply tax, discount, shipping or payment terms that are not explicitly defined by the owning transactional view.

## Product descriptions

### Short
- One sentence.
- 8–20 words preferred.
- State silhouette, construction idea or styling role.
- No unsupported performance, sustainability, rarity or origin claims.

### Long
- 2–4 concise sentences.
- Explain silhouette/construction, material composition from canonical prototype data and intended styling context.
- Do not repeat price or CTA language.

## Fictional product claims policy

The 20 products are explicitly **fictional prototype merchandise created for this academic exercise**. Their names, prices, sizes and material compositions are canonical design data, not claims about real commercial goods.

Do not attach real-world provenance, certifications, sustainability claims, “Made in France”, scarcity, discount, shipping guarantees or other factual claims that would require external evidence.

## Materials and recommended use

- Materials must match the canonical product record exactly.
- Recommended use is phrased as styling guidance, not a performance guarantee.
- Prefer “Designed for layered everyday styling” over “Keeps you warm in all weather.”

## Search and filters

Search:
- label: “Search products”
- placeholder: “Search the collection”

Filter labels:
- “Category”
- “Size”

Static prototype rule: visible controls may demonstrate expected UI, but copy must not promise live filtering/search behavior when none exists.

## Cart

Canonical labels:
- Unit price
- Quantity
- Line total
- Subtotal
- Tax
- Total
- Purchase

If sample cart content is prefilled, it should be clearly understandable as prototype state without pretending persistence.

## Checkout

Visible stage headings:
1. Personal details
2. Shipping address
3. Card payment details

The final transactional view must state that it is an academic prototype and does not process a real payment.

## Accessibility copy

- Link text should make sense out of context.
- Form controls require explicit labels.
- Error/status text must name the problem and next action.
- Avoid “click here”, icon-only text alternatives and vague “More”.

## Alt text

For meaningful product/editorial imagery:
- describe visible clothing/product type plus a distinguishing visible attribute;
- keep it concise;
- do not begin with “image of”;
- do not infer material, provenance or model identity from appearance alone.

Decorative imagery uses empty alt text only when it adds no information.

## SEO patterns

### Title
`{Page purpose} — Atelier Vérité`

Home exception:
`Atelier Vérité — Contemporary French Fashion`

### Meta description
- unique per page;
- roughly 120–160 characters when practical;
- describe visible static content honestly;
- no keyword stuffing or unsupported marketing claims.

SEO/Schema integration remains owned by INTEG-04; EXP-01 only keeps Home metadata truthful.

## Capitalization and punctuation

- Navigation: Title case where natural.
- Section headings: sentence case.
- Utility labels may use uppercase with letter spacing.
- Buttons/CTAs: sentence case.
- Product names preserve canonical capitalization.
- Avoid exclamation marks unless a concrete content need justifies one.

## Forbidden copy

- lorem ipsum;
- placeholder production copy;
- false functionality;
- unsupported superlatives;
- fabricated reviews/ratings;
- false discounts, urgency or scarcity;
- fake shipping/payment guarantees;
- “click here”.

## Consistency gate

Before handoff, compare every product name, SKU, category, price, currency, size vocabulary, material term and CTA against PRODUCT_CONTENT_CONTRACT.yaml and this standard.

## Freeze rule

Status is **FROZEN**. Any later change requires the deviation protocol, ORCH-00 disposition, version increment and revalidation of affected copy.
