# Image Specifications V2 — Portfolio Capture Brief

This version is restructured around the **3 before/after comparison pairs** (Homepage, Palestine, Zakat) plus essential supporting images. Total: ~12 images. Roughly 60 minutes of focused capture work.

**Setup once before you start:**

1. Open Chrome, set your browser window to **1440px wide** for desktop captures. For mobile, use Chrome DevTools → Device Toolbar → iPhone 14 Pro preset (393x852).
2. Sign out of any DeenRelief admin account before capturing — no WordPress admin bars, no "Hi, Abigail" chrome.
3. Use a clean Chrome profile if possible — extensions visible in toolbar (Honey, Grammarly, AdBlock badges) read as amateur.
4. Save all images as PNG.
5. **For the new site: take the password off temporarily** while capturing, or capture directly from your local dev environment with `localhost` cropped out.
6. **Capture the same scroll position / equivalent crop** in each before/after pair — visual symmetry is what makes comparisons read as comparisons rather than as random screenshots side-by-side.

---

## PAIR 1 — Homepage Comparison

### Image 1A — Old Homepage (Desktop)

**Filename:** `01a-homepage-old-desktop.png`
**URL:** https://deenrelief.org
**Browser width:** 1440px
**Crop:** Top of page through to just below the hero. Approximately 1440 × 900px.
**Notes:**
- Capture the "Welcome to Deen Relief / Supporting Children with Cancer" hero
- No browser chrome in final crop
- No cookie banner — accept or dismiss before capturing

### Image 1B — New Homepage (Desktop)

**Filename:** `01b-homepage-new-desktop.png`
**URL:** Your Vercel deployment, homepage
**Browser width:** 1440px
**Crop:** Equivalent — top of page through to just below the hero. Same approximate height as 1A.
**Critical:** Take the password off the staging site before capturing, OR capture from `localhost:3000` and crop out the URL bar.

---

## PAIR 2 — Palestine Campaign Comparison

### Image 2A — Old Palestine Page (Desktop)

**Filename:** `02a-palestine-old-desktop.png`
**URL:** https://deenrelief.org/palestine-emergency-relief-campaign/
**Browser width:** 1440px
**Crop:** Top of page through to the hero plus the "Why This Appeal Is Urgent" section. Approximately 1440 × 1100px.
**Notes:**
- Capture should include the campaign hero, the bullet list of urgency points, and the volunteer photo

### Image 2B — New Palestine Page (Desktop)

**Filename:** `02b-palestine-new-desktop.png`
**URL:** Your new /palestine campaign page
**Browser width:** 1440px
**Crop:** Equivalent — top of page through to a similar visual depth as 2A. Same approximate height.

### Image 2C — New Palestine Page (Mobile, donation form in hero)

**Filename:** `02c-palestine-new-mobile.png`
**Device:** Chrome DevTools → iPhone 14 Pro (393 × 852)
**Crop:** Full mobile viewport showing the campaign hero with the donation form integrated
**Notes:**
- This is the visual proof of the "hero-integrated donation form on mobile" claim. If your build doesn't have this exact treatment yet, capture the closest version

---

## PAIR 3 — Zakat Page Comparison

### Image 3A — Old Zakat Page (Desktop)

**Filename:** `03a-zakat-old-desktop.png`
**URL:** https://deenrelief.org/fulfill-your-duty-contribute-zakat-today/
**Browser width:** 1440px
**Crop:** Top of page showing "Fulfil Your Zakat With Confidence" hero, the bullet list, and the photo. Approximately 1440 × 1000px.

### Image 3B — New Zakat Page (Desktop)

**Filename:** `03b-zakat-new-desktop.png`
**URL:** Your new /zakat page
**Browser width:** 1440px
**Crop:** Equivalent visual depth — make sure the donation form (which on the new build leads the page) is prominent in the crop.

---

## SUPPORTING IMAGES

### Image 4 — Donation Flow (Stripe Checkout Detail)

**Filename:** `04-donation-checkout.png`
**Capture target:** Your Stripe Elements donation form mid-checkout, showing amount tiers, monthly/one-time toggle, and live Gift Aid math
**Browser width:** 1440px (or zoomed-in crop tightly around the form itself)
**Notes:**
- Use a test amount like £30 in the field so the Gift Aid math shows "becomes £37.50"
- Don't show real card details — Stripe test card 4242 4242 4242 4242, or just leave blank

### Image 5 — Design System Specimen (Optional but high-impact)

**Filename:** `05-design-system-specimen.png`
**Capture target:** A custom-built specimen page or Figma frame showing typography, colours, and ProofTag side-by-side
**Notes:**
- Build a single 1440 × 900 frame in Figma:
  - Top half: type specimen (Source Serif 4 display heading, body in DM Sans, a quote block)
  - Bottom-left: 5 colour swatches with hex codes (cream, charcoal, green, amber, dark green)
  - Bottom-right: ProofTag component shown applied to a placeholder photo
- Export as PNG at 2x for crispness
- **If too much effort for V1, skip — the Design System section uses pure typography on the page itself**

### Image 6 — Prayer Times Page

**Filename:** `06-prayer-times-london.png`
**Capture target:** /prayer-times/london (or any specific city page) on your new build
**Browser width:** 1440px
**Crop:** Top of page showing city name H1, prayer times table, hint of the rest of the page
**Notes:**
- Proves the "96 dynamically-rendered SSR pages" claim; one page is enough

### Image 7 — Blog Article

**Filename:** `07-blog-zakat-article.png`
**Capture target:** Any blog article page on your new build (the strongest-looking Zakat or Sadaqah article)
**Browser width:** 1440px
**Crop:** Top of article — title, byline, hero image, opening paragraphs
**Notes:**
- Goal is to show editorial typography quality and content depth

---

## CAPTURE PRIORITY ORDER

If you only have 30-45 minutes, capture in this order:

1. **Pair 1: Homepage old + new (1A, 1B)** — non-negotiable, the hero comparison
2. **Pair 2: Palestine old + new (2A, 2B)** — your highest-traffic landing page comparison
3. **Pair 3: Zakat old + new (3A, 3B)** — your highest-intent landing page comparison
4. **Image 2C: Palestine mobile** — proves the mobile-first claim
5. **Image 4: Donation checkout** — proves the Stripe build
6. **Image 6 + 7: Prayer times + blog article** — proves the content/SEO infrastructure
7. **Image 5: Design specimen** — only if you can spare 30 mins in Figma

The before/after pairs (1, 2, 3) are the heart of the case study. If you only have 20 minutes, capture those six images and nothing else — the page works on those alone.

---

## CRITICAL: Symmetry rules for before/after pairs

Before/after comparisons land or fail on **visual symmetry**. The brain reads two images side-by-side and compares them — if the framing is inconsistent, the comparison is harder to parse and feels less polished.

For each pair:

- **Same browser width** (1440px both)
- **Same crop dimensions** (if old screenshot is 1440 × 900, new screenshot should also be 1440 × 900)
- **Same scroll position** (capture from the top of the page in both)
- **Same logical content** (if old shows hero + 1 section, new should show hero + 1 section, even if the section is structured differently)
- **No browser chrome in either** — both should be pure viewport content

This is the single most important rule in this entire document. A poorly-cropped comparison reads as amateurish even with excellent design work in the screenshots themselves.

---

## Privacy & Pre-Publish Checklist

Before any of these go live:

- [ ] No real donor names visible in any screenshot (this includes admin pages, donation logs, Stripe customer pages)
- [ ] No test transaction IDs visible
- [ ] No staging/preview URLs visible in browser chrome (crop or blur, or capture from localhost)
- [ ] No "Hi, Abigail" or other admin-area chrome
- [ ] No leftover "TEST" / "TODO" / Lorem Ipsum copy in any captured page
- [ ] Director at DeenRelief informed (courtesy heads-up, not request for permission)
- [ ] Cookie banner / consent banner dismissed before capturing
- [ ] Chrome browser extensions hidden or use a clean profile
- [ ] If site password is removed for capture: re-enable after capturing
