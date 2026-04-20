/**
 * Screenshot script for capturing Prototype page
 * Usage: node scripts/screenshot.js
 *
 * Prerequisites:
 *   npm install playwright
 *   npx playwright install chromium
 */

const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

(async () => {
  // If your dev server is already running on http://localhost:5173,
  // change the URL below accordingly.

  const url = process.env.URL || 'http://localhost:5173/prototype';
  const outputDir = path.join(__dirname, '../public/images/docx/module5_prototype');

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 1280, height: 900 }
  });

  console.log(`Navigating to ${url} ...`);
  await page.goto(url, { waitUntil: 'networkidle' });

  // Wait for images to load
  await page.waitForTimeout(2000);

  // Screenshot the full page
  const fullPagePath = path.join(outputDir, 'screenshot_full.png');
  await page.screenshot({ path: fullPagePath, fullPage: true });
  console.log(`Full page screenshot saved: ${fullPagePath}`);

  // Screenshot specific sections (adjust selectors as needed)
  const hiFi = await page.locator('img[alt="High-fi prototype"]').first();
  if (await hiFi.isVisible().catch(() => false)) {
    const hiFiPath = path.join(outputDir, 'screenshot_hifi.png');
    await hiFi.screenshot({ path: hiFiPath });
    console.log(`High-fi element screenshot saved: ${hiFiPath}`);
  }

  await browser.close();
  console.log('Done!');
})();
