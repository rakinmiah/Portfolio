import { chromium } from "playwright";
import path from "path";

const OUT = path.resolve("public/images");
const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({
  viewport: { width: 1440, height: 5000 },
  userAgent:
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36",
});
const page = await context.newPage();

await page.goto("https://deenrelief.org/palestine-emergency-relief-campaign/", {
  waitUntil: "networkidle",
  timeout: 60000,
});
await page.waitForTimeout(3500);

// The GiveWP donation iframe sits around y=2503. Aim a 900-tall crop slightly above so the
// section heading is visible.
const targetY = await page.evaluate(() => {
  const el = document.querySelector(".dr-donate__form-shell, iframe#give-form-shortcode-1");
  if (!el) return 2350;
  const top = el.getBoundingClientRect().top + window.scrollY;
  return Math.max(0, Math.floor(top - 120));
});
console.log("scroll target:", targetY);

await page.evaluate((y) => window.scrollTo(0, y), targetY);
await page.waitForTimeout(2000);

await page.screenshot({
  path: path.join(OUT, "04a-donation-old-desktop.png"),
  clip: { x: 0, y: 0, width: 1440, height: 900 },
  type: "png",
});
console.log("Saved 04a-donation-old-desktop.png");
await browser.close();
