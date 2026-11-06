import { chromium } from 'playwright';
import { mkdir, readFile, writeFile, stat } from 'node:fs/promises';
import { resolve, dirname, extname, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import assert from 'node:assert/strict';
import { pages } from '../src/content.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const dist = resolve(root, 'dist');
const evidence = resolve(root, '.cache/playwright');
const reportFile = resolve(root, 'docs/desktop-review/playwright.json');
const origin = 'https://wl-preview.test';
const viewports = [
  { width: 320, height: 900 }, { width: 390, height: 844 },
  { width: 768, height: 1024 }, { width: 1024, height: 900 },
  { width: 1280, height: 900 }, { width: 1440, height: 900 },
  { width: 1920, height: 1080 }
];
const report = { date: new Date().toISOString(), status: 'running', method: 'Playwright Chromium; static build served with route.fulfill, no listener required', viewports, results: [], errors: [] };
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'application/javascript', '.avif': 'image/avif', '.webp': 'image/webp', '.svg': 'image/svg+xml' };
const normalize = value => value.replace(/\s+/g, ' ').trim();
await mkdir(evidence, { recursive: true });
await mkdir(dirname(reportFile), { recursive: true });
let browser;
try {
  browser = await chromium.launch({
    headless: true,
    ...(process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE ? { executablePath: process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE } : {})
  });
  report.browser = browser.version();
  const context = await browser.newContext({ reducedMotion: 'reduce' });
  // A real browser reads the built HTML/CSS/JS/images over an intercepted local
  // origin. This avoids requiring an open TCP port for the static-site checks.
  await context.route(`${origin}/**`, async route => {
    try {
      const pathname = decodeURIComponent(new URL(route.request().url()).pathname);
      let file = resolve(dist, '.' + pathname);
      if (file !== dist && !file.startsWith(dist + sep)) return route.fulfill({ status: 403 });
      if ((await stat(file)).isDirectory()) file = resolve(file, 'index.html');
      await route.fulfill({ status: 200, contentType: types[extname(file)] || 'application/octet-stream', body: await readFile(file) });
    } catch { await route.fulfill({ status: 404, body: 'Not found' }); }
  });
  const page = await context.newPage();
  let runtimeErrors = [];
  page.on('pageerror', error => runtimeErrors.push(error.message));
  page.on('console', message => { if (message.type() === 'error') runtimeErrors.push(message.text()); });
  page.on('response', response => { if (response.status() >= 400) runtimeErrors.push(`${response.status()} ${response.url()}`); });

  for (const viewport of viewports) {
    await page.setViewportSize(viewport);
    for (const [slug, data] of Object.entries(pages)) {
      runtimeErrors = [];
      const result = { path: `/${slug}/`, viewport, status: 'running' };
      try {
        await page.goto(`${origin}/${slug}/`, { waitUntil: 'networkidle' });
        assert.equal(await page.locator('h1').innerText(), data.title);
        assert.equal(await page.locator('.reading > section').count(), data.sections.length);
        for (const [index, [heading, text]] of data.sections.entries()) {
          const section = page.locator(`#secao-${index + 1}`);
          assert.equal(normalize(await section.locator('h2').innerText()), normalize(heading));
          assert.equal(normalize(await section.locator(':scope > p').innerText()), normalize(text));
          assert.equal(await section.isVisible(), true, `Hidden section ${heading}`);
        }
        // Load lazy assets as well, without contacting any production endpoint.
        await page.locator('img').evaluateAll(images => images.forEach(image => image.loading = 'eager'));
        await page.locator('img').evaluateAll(images => Promise.all(images.map(image => image.decode())));
        const metrics = await page.evaluate(() => {
          const rect = selector => { const r = document.querySelector(selector).getBoundingClientRect(); return { x:r.x, y:r.y, width:r.width, right:r.right, bottom:r.bottom }; };
          return {
            documentWidth: document.documentElement.scrollWidth,
            viewportWidth: innerWidth,
            hero: rect('.detail-hero__inner'),
            breadcrumb: rect('.breadcrumb'),
            layout: rect('.reading-layout'),
            article: rect('.reading'),
            contents: rect('.page-index'),
            firstHeading: rect('.reading > section h2'),
            firstParagraph: rect('.reading > section p'),
            sectionTextOverflow: [...document.querySelectorAll('.reading section')].filter(s => s.scrollWidth > s.clientWidth + 1).map(s => s.id),
            missingImages: [...document.images].filter(i => !i.complete || !i.naturalWidth).map(i => i.src)
          };
        });
        assert(metrics.documentWidth <= metrics.viewportWidth + 1, 'Horizontal page overflow');
        assert.deepEqual(metrics.missingImages, [], 'Missing images');
        assert.deepEqual(metrics.sectionTextOverflow, [], 'Section overflow');
        if (viewport.width >= 768) {
          assert(Math.abs(metrics.firstHeading.x - metrics.hero.x) <= 1, 'Body and hero must share a left edge');
          assert(Math.abs(metrics.firstHeading.x - metrics.breadcrumb.x) <= 1, 'Body and breadcrumb must align');
          assert(metrics.contents.x >= metrics.article.right + 30, 'Contents must sit to the right of the article');
          assert(metrics.article.width >= metrics.layout.width * .5, 'Article column too narrow');
          assert(metrics.firstParagraph.width <= 720, 'Paragraph measure too wide');
        } else {
          assert(metrics.contents.bottom < metrics.article.y, 'Mobile index must remain above article');
          assert(Math.abs(metrics.firstHeading.x - metrics.layout.x) <= 1, 'Mobile article alignment changed');
        }
        const indexGrouping = await page.locator('.page-index').evaluate(index => {
          const title = index.querySelector('h2').getBoundingClientRect();
          const nav = index.querySelector('nav').getBoundingClientRect();
          const bounds = index.getBoundingClientRect();
          return { display: getComputedStyle(index).display, titleBottom: title.bottom, navTop: nav.top, navBottom: nav.bottom, indexTop: bounds.top, scrollHeight: index.scrollHeight };
        });
        assert.notEqual(indexGrouping.display, 'contents', 'Index must remain a box containing its title and links');
        assert(indexGrouping.navTop >= indexGrouping.titleBottom, 'Index links must follow its title');
        assert(indexGrouping.navTop - indexGrouping.titleBottom <= 32, 'Index links separated from title');
        assert(indexGrouping.navBottom <= indexGrouping.indexTop + indexGrouping.scrollHeight + 2, 'Index links escaped their container');
        const tocLinks = page.locator('.page-index a');
        assert.equal(await tocLinks.count(), data.sections.length);
        for (const [index] of data.sections.entries()) assert.equal(await tocLinks.nth(index).getAttribute('href'), `#secao-${index + 1}`);
        if (viewport.width === 1440 || (viewport.width === 390 && ['seguro-auto', 'seguro-condominial'].includes(slug))) {
          const screenshot = `${slug}-${viewport.width}.png`;
          await page.screenshot({ path: resolve(evidence, screenshot), fullPage: true });
          result.screenshot = `.cache/playwright/${screenshot}`;
        }
        if (['seguro-auto', 'seguro-de-vida', 'seguro-condominial'].includes(slug) && [390,1440].includes(viewport.width)) {
          const target = page.locator('.page-index a').nth(1);
          await target.click();
          await page.waitForFunction(() => location.hash === '#secao-2');
          const anchor = await page.locator('#secao-2').boundingBox();
          const header = await page.locator('.header').boundingBox();
          assert(anchor.y >= header.y + header.height, 'Anchor hidden behind header');
          if (viewport.width >= 1024) {
            await page.locator('[data-quote]').click();
            assert.equal(await page.locator('.quote').evaluate(d => d.open), true);
            await page.keyboard.press('Escape');
            assert.equal(await page.locator('.quote').evaluate(d => d.open), false);
            assert.equal(await page.locator('[data-quote]').evaluate(el => document.activeElement === el), true);
          } else {
            await page.locator('.header__toggle').click();
            assert.equal(await page.locator('.header__toggle').getAttribute('aria-expanded'), 'true');
            await page.keyboard.press('Escape');
            assert.equal(await page.locator('.header__toggle').getAttribute('aria-expanded'), 'false');
          }
        }
        if (slug === 'seguro-condominial') {
          assert.equal(await page.locator('.coverage-table tbody tr').count(), 6);
          assert.equal(await page.locator('.coverage-table th').allTextContents().then(a => a.join(' / ')), 'Simples / Ampla');
        }
        for (const href of await page.locator('.reading a[href^="https://wa.me/"]').evaluateAll(links => links.map(a => a.href))) {
          const url = new URL(href);
          assert.equal(url.pathname, '/5511932039326');
          assert(url.searchParams.get('text').includes(data.title));
        }
        assert.deepEqual(runtimeErrors, [], 'Browser errors');
        result.status = 'passed'; result.metrics = metrics;
      } catch (error) {
        result.status = 'failed'; result.error = error.message;
      }
      report.results.push(result);
    }
  }
  await context.close();
  report.status = report.results.some(r => r.status === 'failed') ? 'failed' : 'passed';
} catch (error) {
  report.status = 'blocked';
  report.errors.push(error.message);
} finally {
  await browser?.close();
  await writeFile(reportFile, JSON.stringify(report, null, 2) + '\n');
}
console.log(`Playwright: ${report.status}; ${report.results.length} page/viewport checks completed. Report: ${reportFile}`);
if (report.status !== 'passed') {
  console.error(report.errors[0]?.split('\n').slice(0,3).join('\n') || report.results.filter(r => r.status === 'failed').map(r => `${r.path} @ ${r.viewport.width}: ${r.error}`).join('\n'));
  process.exitCode = 1;
}
