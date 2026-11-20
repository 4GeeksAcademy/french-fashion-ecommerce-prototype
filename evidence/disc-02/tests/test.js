const { chromium } = require('playwright');
const file = 'file:///workspaces/french-fashion-ecommerce-prototype-ruthcarol2810/catalog.html';
(async () => {
  const browser = await chromium.launch();
  for (const [w, h] of [[390, 844], [768, 1024], [1440, 900]]) {
    const page = await browser.newPage({ viewport: { width: w, height: h } });
    await page.goto(file, { waitUntil: 'load', timeout: 30000 });
    await page.waitForTimeout(1500);
    const m = await page.evaluate(() => {
      const items = [...document.querySelectorAll('.product-item')];
      const tops = new Set(items.map(i => Math.round(i.getBoundingClientRect().top)));
      const lefts = new Set(items.map(i => Math.round(i.getBoundingClientRect().left)));
      return {
        scrollW: document.documentElement.scrollWidth, clientW: document.documentElement.clientWidth,
        cards: items.length, cols: lefts.size, rows: tops.size,
        tailwindLoaded: getComputedStyle(document.querySelector('h1')).fontFamily.includes('Didot') || getComputedStyle(document.body).backgroundColor !== 'rgba(0, 0, 0, 0)'
      };
    });
    console.log(w + 'x' + h, JSON.stringify(m));
    await page.screenshot({ path: `/tmp/qa/catalog-${w}.png`, fullPage: false });
    await page.close();
  }
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto(file, { waitUntil: 'load' });
  await page.waitForTimeout(1000);
  await page.click('label:has-text("Footwear")');
  console.log('footwear shown:', await page.textContent('#result-count'));
  await page.click('label:has-text("Accessories")');
  await page.selectOption('#size-filter', 'OS');
  console.log('accessories+OS:', await page.textContent('#result-count'));
  await page.click('label:has-text("All")');
  await page.selectOption('#size-filter', 'all');
  console.log('reset:', await page.textContent('#result-count'));
  await browser.close();
})().catch(e => { console.error(e); process.exit(1); });
