const { chromium } = require('playwright');
const url = 'http://localhost:3000/product.html';
(async () => {
  const browser = await chromium.launch();
  for (const [w, h] of [[390, 844], [768, 1024], [1440, 900]]) {
    const page = await browser.newPage({ viewport: { width: w, height: h } });
    await page.goto(url, { waitUntil: 'load', timeout: 30000 });
    await page.waitForTimeout(1500);
    const m = await page.evaluate(() => {
      const img = document.querySelector('figure img');
      const grid = document.querySelector('section[aria-labelledby="product-title"] > div');
      const cols = getComputedStyle(grid).gridTemplateColumns.split(' ').length;
      const imgW = img.getBoundingClientRect().width, gridW = grid.getBoundingClientRect().width;
      return { scrollW: document.documentElement.scrollWidth, clientW: document.documentElement.clientWidth,
        imgLoaded: img.complete && img.naturalWidth > 0, columns: cols, imgShareOfGrid: Math.round(imgW / gridW * 100) + '%',
        h1Font: getComputedStyle(document.querySelector('h1')).fontFamily.slice(0, 20) };
    });
    console.log(w + 'x' + h, JSON.stringify(m));
    await page.screenshot({ path: `/tmp/qa/product-${w}.png`, fullPage: true });
    await page.close();
  }
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'load' });
  const links = await page.$$eval('a[href]', as => as.map(a => a.getAttribute('href')).filter(h => !h.startsWith('http') && !h.startsWith('mailto') && h !== '#'));
  console.log('internal links:', [...new Set(links)].join(', '));
  await browser.close();
})().catch(e => { console.error(e); process.exit(1); });
