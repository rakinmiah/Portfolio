import { chromium } from "playwright";
import { mkdir } from "fs/promises";

await mkdir("/tmp/portfolio-verify", { recursive: true });
const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({
  viewport: { width: 1440, height: 900 },
});
const page = await context.newPage();
const errors = [];
page.on("pageerror", (e) => errors.push(`pageerror: ${e.message}`));
page.on("console", (m) => {
  if (m.type() === "error" || m.type() === "warning") {
    errors.push(`${m.type()}: ${m.text()}`);
  }
});
await page.goto("http://localhost:3002/", { waitUntil: "networkidle", timeout: 30000 });
await page.screenshot({
  path: "/tmp/portfolio-verify/hero.png",
  clip: { x: 0, y: 0, width: 1440, height: 900 },
});
// Scroll into case study area to capture before/after pair
await page.evaluate(() => window.scrollTo(0, 2400));
await page.waitForTimeout(1000);
await page.screenshot({
  path: "/tmp/portfolio-verify/case-study.png",
  clip: { x: 0, y: 0, width: 1440, height: 900 },
});
await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
await page.waitForTimeout(800);
await page.screenshot({
  path: "/tmp/portfolio-verify/footer.png",
  clip: { x: 0, y: 0, width: 1440, height: 900 },
});
console.log("ERRORS:", errors.length ? errors : "none");
await browser.close();
