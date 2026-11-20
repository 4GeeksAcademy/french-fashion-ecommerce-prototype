const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const skus = ['AV-FW-001','AV-AC-003','AV-FW-005','AV-AC-005','AV-XX-999',''];
  const sizes = [[390,844],[768,1024],[1440,900]];
  let fail = 0;
  for (const [w,h] of sizes) {
    const page = await browser.newPage({ viewport: { width: w, height: h } });
    const errors = [];
    page.on('pageerror', e => errors.push(e.message));
    for (const sku of skus) {
      const url = 'http://localhost:3000/product.html' + (sku ? '?sku=' + sku : '');
      await page.goto(url, { waitUntil: 'load' });
      await page.waitForTimeout(400);
      const r = await page.evaluate(() => ({
        title: document.title,
        h1: document.getElementById('product-title').textContent,
        notFoundVisible: !document.getElementById('not-found').hidden,
        viewVisible: !document.getElementById('product-view').hidden,
        imgVisible: !document.getElementById('product-image').hidden,
        imgSrc: document.getElementById('product-image').getAttribute('src'),
        phVisible: !document.getElementById('product-placeholder').hidden,
        sizes: [...document.querySelectorAll('#size option')].length,
        overflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
        cols: getComputedStyle(document.querySelector('section[aria-labelledby="product-title"] > div')).gridTemplateColumns.split(' ').length,
      }));
      console.log(w, sku || '(default)', JSON.stringify(r));
      if (r.overflow > 0) { fail++; console.log('OVERFLOW', w, sku); }
      if (errors.length) { fail++; console.log('JS ERR', errors); errors.length = 0; }
    }
    await page.close();
  }
  await browser.close();
  console.log('failures:', fail);
})();
