import { chromium } from "playwright";
import { mkdir } from "fs/promises";
import path from "path";

const OUT = path.resolve("public/images");
await mkdir(OUT, { recursive: true });

const browser = await chromium.launch({ headless: true });

async function capture({ url, file, height, locateText, scrollOffset, dismissCookies }) {
  console.log(`Capturing ${file} from ${url}`);
  const context = await browser.newContext({
    viewport: { width: 1440, height: Math.max(height + 200, 1200) },
    deviceScaleFactor: 1,
    userAgent:
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36",
  });
  const page = await context.newPage();
  try {
    await page.goto(url, { waitUntil: "networkidle", timeout: 60000 });
  } catch {
    await page.goto(url, { waitUntil: "load", timeout: 60000 });
  }
  await page.waitForTimeout(2500);

  if (dismissCookies) {
    const candidates = [
      'button:has-text("Accept")',
      'button:has-text("Accept all")',
      'button:has-text("Agree")',
      'button:has-text("OK")',
      'button:has-text("Got it")',
      ".cky-btn-accept",
    ];
    for (const sel of candidates) {
      try {
        const el = page.locator(sel).first();
        if (await el.count()) {
          await el.click({ timeout: 1000 });
          console.log(`  dismissed cookies via ${sel}`);
          await page.waitForTimeout(800);
          break;
        }
      } catch {}
    }
  }

  let y = scrollOffset ?? 0;
  if (locateText) {
    try {
      const loc = page.getByText(locateText, { exact: false }).first();
      if (await loc.count()) {
        const box = await loc.boundingBox();
        if (box) {
          y = Math.max(0, Math.floor(box.y - 60));
          console.log(`  located "${locateText}" at y=${box.y}, scroll to ${y}`);
        }
      }
    } catch (e) {
      console.warn(`  locate failed: ${e.message}`);
    }
  }

  await page.evaluate((y) => window.scrollTo(0, y), y);
  await page.waitForTimeout(1200);

  const out = path.join(OUT, file);
  await page.screenshot({
    path: out,
    clip: { x: 0, y: 0, width: 1440, height },
    type: "png",
  });
  console.log(`  -> ${out}`);
  await context.close();
}

try {
  // V1 — donation form on the old Palestine campaign page
  await capture({
    url: "https://deenrelief.org/palestine-emergency-relief-campaign/",
    file: "04a-donation-old-desktop.png",
    height: 900,
    locateText: "Help a Family",
    scrollOffset: 1800,
    dismissCookies: true,
  });

  // V2 — Stripe-style donation form on new Palestine page
  await capture({
    url: "https://deen-relief-website.vercel.app/palestine",
    file: "04b-donation-new-desktop.png",
    height: 900,
    locateText: "Help a Family Survive",
    scrollOffset: 800,
  });
} finally {
  await browser.close();
}
console.log("Done.");
