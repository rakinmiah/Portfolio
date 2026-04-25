import { chromium } from "playwright";
import { mkdir } from "fs/promises";
import path from "path";

const OUT = path.resolve("public/images");
await mkdir(OUT, { recursive: true });

const targets = [
  {
    file: "01a-homepage-old-desktop.png",
    url: "https://deenrelief.org/",
    height: 900,
    waitFor: 2500,
    dismissCookies: true,
  },
  {
    file: "01b-homepage-new-desktop.png",
    url: "https://deen-relief-website.vercel.app/",
    height: 900,
    waitFor: 2500,
  },
  {
    file: "02a-palestine-old-desktop.png",
    url: "https://deenrelief.org/palestine-emergency-relief-campaign/",
    height: 1100,
    waitFor: 2500,
    dismissCookies: true,
  },
  {
    file: "02b-palestine-new-desktop.png",
    url: "https://deen-relief-website.vercel.app/palestine",
    height: 1100,
    waitFor: 2500,
  },
  {
    file: "03a-zakat-old-desktop.png",
    url: "https://deenrelief.org/fulfill-your-duty-contribute-zakat-today/",
    height: 1000,
    waitFor: 2500,
    dismissCookies: true,
  },
  {
    file: "03b-zakat-new-desktop.png",
    url: "https://deen-relief-website.vercel.app/zakat",
    height: 1000,
    waitFor: 2500,
  },
];

const browser = await chromium.launch({ headless: true });
try {
  for (const t of targets) {
    console.log(`Capturing ${t.file} from ${t.url}`);
    const context = await browser.newContext({
      viewport: { width: 1440, height: t.height },
      deviceScaleFactor: 1,
      userAgent:
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36",
    });
    const page = await context.newPage();
    try {
      await page.goto(t.url, { waitUntil: "networkidle", timeout: 60000 });
    } catch (e) {
      console.warn(`networkidle timeout, falling back to load: ${e.message}`);
      try {
        await page.goto(t.url, { waitUntil: "load", timeout: 60000 });
      } catch (e2) {
        console.error(`load failed too: ${e2.message}`);
      }
    }
    await page.waitForTimeout(t.waitFor);

    // Try to dismiss common cookie banners
    if (t.dismissCookies) {
      const candidates = [
        'button:has-text("Accept")',
        'button:has-text("Accept all")',
        'button:has-text("Agree")',
        'button:has-text("OK")',
        'button:has-text("Got it")',
        '#cookie-accept',
        '[id*="cookie"] button',
        '.cky-btn-accept',
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

    // Scroll to top to make crop deterministic
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(400);

    const out = path.join(OUT, t.file);
    await page.screenshot({
      path: out,
      clip: { x: 0, y: 0, width: 1440, height: t.height },
      type: "png",
    });
    console.log(`  -> ${out}`);
    await context.close();
  }
} finally {
  await browser.close();
}
console.log("Done.");
