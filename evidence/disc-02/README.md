# DISC-02 Evidence — Catalog and Product

- **Process:** DISC-02 (Ruth, `ruthcarol281076`)
- **Tested commit:** `2a9f701` on `feature/integration` (contains `feature/catalog` at `4d7599c` and `feature/product` at `e597f4f`)
- **Run date (UTC):** 2026-11-20 21:43
- **Result:** all scripts exit 0; `failures: 0`; `js errors: 0`

Evidence is bound to the commit above. Any later change to `catalog.html` or `product.html` requires re-running the tests.

## Environment

- Headless Chromium via Playwright 1.65.x (run from a scratch folder outside the repo).
- Local server: `python3 -m http.server 3000` at the repository root.
- Scripts in `tests/` reference the Codespace paths `/workspaces/...` and `/tmp/qa/`. Re-run with `NODE_PATH` pointing to a Playwright install.

## Activate the pages in this Codespace

1. Check out the branch: `git checkout feature/integration` (commit `2a9f701` or later).
2. From the repository root, start the server: `python3 -m http.server 3000`.
3. Open the pages in the browser: `"$BROWSER" http://localhost:3000/catalog.html`, or open the forwarded port 3000 from the Ports panel.
4. Product page: `http://localhost:3000/product.html?sku=AV-FW-001` (any of the 20 SKUs in the contract).
5. If an older version appears, hard reload (Ctrl+Shift+R). The server serves the working tree, so the checked-out branch decides what is shown.

Tailwind loads from a CDN, so the page needs internet access. Stop the server with Ctrl+C.

## Viewports

| Viewport | Catalog | Product |
|---|---|---|
| 390x844 | 1 column, 20 cards, no horizontal overflow | 1 column, image 100% of grid, no overflow |
| 768x1024 | 2 columns, 10 rows, no horizontal overflow | 1 column, no overflow |
| 1440x900 | 4 columns, 5 rows, no horizontal overflow | 2 columns, image 48% of grid, no overflow |

## Functional checks

| Check | Result | File |
|---|---|---|
| Category filter Footwear | 5 of 20 | `results/catalog-test.txt` |
| Accessories + size OS | 4 of 20 | `results/catalog-test.txt` |
| Reset filters | 20 of 20 | `results/catalog-test.txt` |
| Product by `?sku=` (5 SKUs), default, unknown SKU | correct title; unknown shows not-found | `results/sku-test.txt` |
| Catalog card links resolve to matching product | 20 of 20, 0 mismatches | `results/flow-test.txt` |
| Entry link to product | `AV-AC-003` (Ceinture Ligne) | `results/flow-test.txt` |
| Internal links on product | `catalog.html`, `index.html#new-arrivals`, `index.html`, `cart.html`, `#main-content` | `results/product-test.txt` |

## Screenshots

- `screenshots/catalog-390.png`, `catalog-768.png`, `catalog-1440.png`
- `screenshots/product-390.png`, `product-768.png`, `product-1440.png` (full page)

## Known limitations

- 10 of 20 products render a neutral placeholder instead of an image (SKUs listed in the PR body and handoff).
- `catalog.html?category=` is not implemented; the index-to-catalog parameter contract is pending ORCH-00/EXP-01.
- Rubric PASS is not claimed. Control Tower assigns it.

## Files

- `results/`: raw output of each script, plus `run-info.txt` with the commit and timestamp.
- `tests/`: scripts used for the run. `flow.js` needs `entry.html` at the path it references.
