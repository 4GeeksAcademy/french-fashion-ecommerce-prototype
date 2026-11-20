const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
  const errs = []; p.on('pageerror', e => errs.push(e.message));
  let fail = 0;
  await p.goto('file:///tmp/qa/entry.html');
  await p.click('#e-cat'); await p.waitForLoadState('load');
  const cards = await p.$$eval('a[href*="product.html?sku="]', as => as.map(a => a.getAttribute('href')));
  console.log('catalog cards linked:', cards.length);
  for (const href of cards) {
    const sku = href.split('sku=')[1];
    await p.goto('http://localhost:3000/catalog.html');
    await p.click(`a[href="${href}"]`);
    await p.waitForLoadState('load');
    const h1 = await p.textContent('#product-title');
    const ref = await p.textContent('#product-sku');
    const ok = ref === sku && p.url().includes('sku=' + sku);
    if (!ok) { fail++; console.log('MISMATCH', sku, h1, ref); }
  }
  console.log('card->product mismatches:', fail);
  await p.goto('file:///tmp/qa/entry.html');
  await p.click('#e-prod'); await p.waitForLoadState('load');
  console.log('entry product:', await p.textContent('#product-title'), await p.textContent('#product-sku'));
  await p.goto('file:///tmp/qa/entry.html');
  await p.click('#e-bad'); await p.waitForLoadState('load');
  console.log('bad sku visible not-found:', await p.isVisible('#not-found'));
  console.log('js errors:', errs.length, errs);
  await b.close();
})();
