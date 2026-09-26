---
version: 1.0
status: FROZEN
owner: EXP-01
direction: INDUSTRIAL_MAISON_ROUGE
manifest: docs/collaboration/HOME_ASSET_MANIFEST.yaml
---

# Asset Contract — Industrial Maison Rouge Home

## 1. Objective

Provide deterministic local visual assets so the Golden Home does not depend on random hotlinks or third-party image availability.

## 2. Asset classes

### A. Conditioning reference
`assets/reference/industrial-maison-rouge-home-reference.png`

Purpose:
- composition;
- visual rhythm;
- material palette;
- crimson/surreal balance.

Never ship it as a production hero or product image.

### B. Production campaign asset
One Home hero image.

### C. Production product assets
Ten canonical product images used by the two Home rails.

### D. Reused crops
Category bridge may reuse/crop production product assets. No additional category art is required for v1.

## 3. Local-first rule

Final Golden Reference should use repository-local production assets.

External Unsplash/Pexels/etc. hotlinks are permitted only as a temporary development fallback and cannot support final visual approval.

## 4. File format

Preferred:
- WebP;
- sRGB;
- no alpha unless needed;
- no baked text;
- no watermark.

Hero:
- source >= 1500x900;
- use the audited native campaign export; do not upscale solely to satisfy an arbitrary pixel target.

Product:
- source >= 1100x1375;
- 4:5;
- audited generator-native 4:5 export (~1122x1402).

## 5. Art direction — global

- high-fashion editorial;
- raw concrete / cement / stone / bone environments;
- black/charcoal dominant wardrobe;
- restrained bone/ivory pieces;
- crimson only on selected assets;
- low-key directional light;
- sharp architectural shadow;
- no glossy ecommerce-white seamless look;
- no neon;
- no visible brand marks;
- no readable text inside images.

## 6. Hero generation contract

Required scene:
- brutalist raw-concrete architectural setting;
- one fashion figure in sculptural black tailoring;
- figure primarily right of center;
- head/body pose slightly uncanny but anatomically plausible;
- a large deep-crimson fabric/form intersects the architecture;
- left 38–46% retains dark, low-detail text-safe space;
- architectural geometry remains legible;
- luxury editorial photography, not fantasy illustration;
- no logo, typography, signage or watermark;
- avoid recognizable real-person likeness.

### Hero negative constraints
Reject:
- extra limbs/fingers;
- broken anatomy;
- crimson covering the entire frame;
- sci-fi/cyberpunk architecture;
- excessive smoke;
- glossy red latex aesthetic;
- fantasy gothic architecture;
- baked text.

## 7. Product generation contract

Every product asset must preserve the canonical product type.

### Clothing
- model/editorial or clean styled still life;
- raw concrete/bone background;
- garment silhouette clearly visible;
- cropped so product remains identifiable.

### Footwear/accessories
- architectural still life preferred;
- simple concrete/stone plinth;
- one product only unless the canonical item is naturally a pair of shoes;
- no luxury-brand logo.

### Color distribution
Across Home product images:
- majority black/charcoal/bone;
- maximum 2–3 crimson-dominant product images;
- do not recolor every canonical product crimson.

## 8. Consistency

All production assets must appear to belong to the same campaign:
- same approximate color temperature;
- same contrast family;
- same concrete/bone world;
- similar photographic grain/clarity;
- no mixed illustration styles.

## 9. Focal-safe contract

Hero:
- desktop text-safe zone left;
- mobile crop must retain subject and crimson intervention;
- do not place critical anatomy at extreme edges.

Product:
- central product occupies roughly 65–85% of image height;
- leave enough negative edge space for responsive crop.

## 10. Content truth

The generated image must not contradict the canonical product identity.

If a record is `Sillage Loafer`, asset must visibly read as a loafer.

If the generation is visually wrong, regenerate the asset; do not rename the product.

## 11. Alt text

Use `PRODUCT_CONTENT_CONTRACT.yaml` image_alt as the starting point.

The final visible asset must remain compatible with that text.

## 12. Asset QA gate

Reject any asset with:
- third-party logos;
- watermark;
- baked text;
- obvious anatomy defects;
- duplicated/merged accessories;
- impossible shoe geometry;
- product/category mismatch;
- random color drift;
- cyberpunk/neon styling;
- severe compression;
- low resolution;
- insufficient contrast with planned text overlay.

## 13. Asset status semantics

- `DEFINED`: art direction specified but image not produced.
- `GENERATED`: file exists.
- `REVIEWED`: visual QA passed.
- `CANONICAL`: approved for implementation.
- `REJECTED`: must not be used.

Final Home approval requires every used production asset to be `CANONICAL`.
