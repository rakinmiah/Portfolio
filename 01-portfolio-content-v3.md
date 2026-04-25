# Portfolio Content (V3) — Rakin Miah

This version reflects the honest story: **same designer, V1 → V2.** The V1 pages on deenrelief.org are Rakin's own work, built fast on WordPress to capture Ramadan 2026 ad spend. The V2 rebuild on Next.js is the same design vision, fully realised on a proper stack. Captions and rationale lean into this continuity rather than positioning V1 as a foil.

All copy below is final.

---

## SECTION 1 — Hero

**Name (large display):**

Rakin Miah

**One-liner (subhead):**

I design and build high-converting websites and landing pages.

**Supporting line:**

Currently rebuilding deenrelief.org — a charity donation platform with a custom Stripe checkout, full design system and technical SEO foundation.

**Primary CTA:**

See the case study →

**Secondary CTA:**

rakin.rifat.miah@gmail.com

---

## SECTION 2 — About

**Section heading:** About

**Body (~80 words):**

I'm a designer and developer focused on the work that turns visitors into customers — page architecture, design systems, conversion-led layout decisions, and the technical groundwork (performance, structured data, accessibility) that lets a site rank and convert at the same time.

I build in Next.js and WordPress depending on the project, design in Figma, and ship to Vercel. Recent University of Sussex graduate, based in Brighton, working with UK clients.

---

## SECTION 3 — Featured Project: DeenRelief

### 3a. Project Header

**Eyebrow:** Featured Project · 2025–2026

**Title:** DeenRelief

**Subtitle:** Charity donation platform — design, development and full rebuild

**Status pill:** Currently in development · Launching 2026

### 3b. The Brief

**Heading:** The Brief

**Body:**

DeenRelief is a UK Islamic humanitarian charity (Charity No. 1158608) running campaigns across emergency relief, orphan sponsorship, Zakat, Sadaqah Jariyah and clean water projects. The existing site was built on WordPress and Elementor and was hitting a structural ceiling — page templates repeated across campaigns, visual identity blended into the category, and the conversion engineering was constrained by what the page builder allowed. With Ramadan 2026 — the highest-demand month for Islamic charity giving — approaching fast, the choice was either rebuild the whole site (impossible in the timeframe) or ship targeted V1 landing pages on the existing platform to capture the ad spend window, then rebuild properly afterwards.

### 3c. The Two-Phase Approach

**Heading:** A Two-Phase Build

**Body:**

**Phase 1 (pre-Ramadan 2026)** — I built two new high-conversion landing pages for the highest-traffic campaigns (Palestine and Zakat) on the existing WordPress stack. Custom HTML and CSS injected into Elementor, working within the platform's limits to ship before the giving window opened. These two pages absorbed the bulk of paid Google Ads traffic during the Ramadan campaign.

**Phase 2 (post-Ramadan 2026)** — With the immediate revenue window covered and clear evidence that the WordPress build was capping conversion, I made the case to the Director for a full rebuild on Next.js. The new build is currently in development, taking the design language and conversion patterns from the V1 pages and rebuilding them on a proper modern stack — with the design system, custom Stripe donation platform, and technical SEO foundation that the WordPress version couldn't support.

The case study below shows V1 → V2 for the homepage and the two campaigns, then walks through the broader scope of the V2 rebuild.

### 3d. Design System

**Heading:** Design System

**Intro line:**

A custom system, built on Tailwind tokens — no UI library.

**3-column visual grid:**

**Column 1: Typography**
Source Serif 4 (display) + DM Sans (body). Editorial weight paired with functional clarity.

**Column 2: Palette**
Cream base, charcoal text, green emphasis, amber accent, dark-green deep states.

**Column 3: Photography Discipline**
Field photography with location and date overlay tags applied to every image — a visual discipline that separates the brand from the templated charity convention.

### 3e. V1 → V2: Homepage

**Heading:** V1 → V2: Homepage

**Image pair caption:**

deenrelief.org homepage — V1 on WordPress (left) vs V2 on Next.js (right)

**Body (rationale, ~140 words):**

The V1 homepage is descriptive — paragraphs about the charity's mission, six service blocks, a long campaigns grid, partner logos. It tells visitors what the charity does. The V2 homepage is decisional — an immediate hero with a single primary action, the Palestine appeal elevated as the most urgent decision (with a donation form embedded on the homepage itself), the cancer care centres surfaced as the charity's signature programme, and the campaigns grid sequenced by giving urgency rather than chronology. The structural shift: same content, restructured around the question *"what does a first-time visitor need to do in the next 30 seconds?"* rather than *"what should a visitor learn about us?"* The donation moment is no longer a destination at the end of a scroll — it's available immediately, with the deeper context still there for visitors who want it.

### 3f. V1 → V2: Palestine Campaign

**Heading:** V1 → V2: Palestine Emergency Relief

**Image pair caption:**

/palestine-emergency-relief-campaign (V1) → /palestine (V2)

**Body (rationale, ~160 words):**

The Palestine page is one of the highest-traffic landing pages on the site — it's where the bulk of paid social and paid-search traffic converts during emergency appeals. The V1 build, shipped pre-Ramadan, established the conversion architecture: emergency framing, three-step delivery assurance, partner network, FAQ, donation form. It worked — well enough to absorb significant ad spend during the Ramadan campaign. But the WordPress + Elementor stack capped what could be tightened.

The V2 rebuild lifts those caps. Headline shifts from *"Emergency Aid for Families in Gaza Today"* to *"Donate to Gaza Emergency Relief"* — same intent, sharper paid-search match. The donation form is now hero-adjacent on desktop and integrated into the hero on mobile, with a frequency toggle, outcome-anchored amount tiers (*"Feeds a displaced family of five in Gaza for one month"*), live Gift Aid math (*"With Gift Aid: £63 at no extra cost"*), and social-proof framing (*"Trusted by 3,200+ donors since 2013"*) all visible at the decision moment. The form is placed twice on the page — once at the top, once at the bottom — so visitors who scroll for context don't have to scroll back.

### 3g. V1 → V2: Zakat Page

**Heading:** V1 → V2: Zakat

**Image pair caption:**

/fulfill-your-duty-contribute-zakat-today (V1) → /zakat (V2)

**Body (rationale, ~150 words):**

Zakat is the highest-intent campaign page on the site. Visitors arriving here typically already know what they want to do — they're calculating an obligation and looking for somewhere trustworthy to fulfil it. The conversion task isn't *persuasion*, it's *frictionless completion*.

The V1 page has the right elements (100% Zakat policy, calculator, FAQ) but spreads them across a long scroll that dilutes the donate moment with educational content the visitor doesn't need. V2 leads with the donation form — frequency toggle, amount tiers anchored by outcomes (*"Covers medical supplies for a child's treatment"*), live Gift Aid uplift inline (*"With Gift Aid: £125 at no extra cost"*), and a clean cross-sell to Sadaqah for visitors who arrived on the wrong page. The Zakat calculator stays — but moves below the form, framed as a tool for visitors who need to calculate, not a precondition for everyone. Education stays available. The decision moment isn't buried under it.

### 3h. Page Architecture

**Heading:** Page Architecture (V2)

**Body intro:**

26 distinct pages plus 96 dynamically-rendered city-specific pages, each engineered for a specific moment in the donor journey.

**3-block visual grid:**

**Block 1: Campaign Pages**
*Palestine, Cancer Care, Orphan Sponsorship, Build a School, Clean Water, UK Homeless, Zakat, Sadaqah*

Each campaign page follows the same conversion structure: keyword-matched H1, field-evidence photography, donation form with frequency toggle, outcome-anchored amount tiers, live Gift Aid math, three-step delivery assurance, FAQ with structured data, final CTA. Designed so a paid-traffic visitor can reach the donate button within a single thumb scroll on mobile.

**Block 2: Donation Flow**
*Stripe Elements checkout — campaign and amount seeded via URL*

Custom Stripe-powered donation flow handling one-time donations, monthly recurring subscriptions, Gift Aid declarations with live tax-uplift calculation, and a self-service donor portal via signed magic-link URLs. Apple Pay, Google Pay, and card supported in a single payment element.

**Block 3: Content & SEO Pages**
*MDX-driven blog · 96 SSR prayer-times pages · structured-data foundation*

A blog system on MDX with FAQ schema per article. A prayer-times directory generating 96 city-specific pages server-side, each with its own structured data — capturing high-intent organic traffic outside the donation funnel. NGO, FundraisingEvent, DonateAction, FAQPage, BreadcrumbList and Article schema across the site.

### 3i. Conversion Engineering

**Heading:** Conversion Engineering

**Intro line:**

The decisions designed to lift donation completion rate, not just traffic.

**Vertical list (4 items, each ~40 words):**

**1. Hero-integrated donation form on mobile**
On mobile, the donation form lives inside the hero section. Desktop reverts to a more traditional hero-then-form layout where the photography earns the space. Mobile traffic — the majority of charity donation traffic — collapses the visit-to-donate distance.

**2. Live Gift Aid math**
The donation amount and Gift Aid uplift recalculate inline as the donor types — turning a static checkbox into a tangible *"your £100 becomes £125"* moment at the exact second the decision is being made.

**3. Outcome-anchored amount tiers**
Donation amounts pair each tier with its specific real-world outcome (*"£50 — feeds a displaced family for a month"*) rather than abstract numbers. The decision becomes choosing an outcome, not a price point. One tier flagged "Popular" anchors the choice.

**4. Social proof at the decision moment**
*"Trusted by 3,200+ donors since 2013"* sits next to the donation form. Trust signals live where the friction is — at the conversion event — rather than buried in the footer or on a separate trust page that nobody visits.

### 3j. Technical SEO Foundation

**Heading:** Technical SEO Foundation

**Body:**

The V2 ships with the structured-data and performance fundamentals most charity sites skip. NGO schema sitewide; FundraisingEvent and DonateAction schema on every campaign page; FAQPage schema on campaign pages and blog posts; BreadcrumbList for navigation; per-city schema on the prayer-times directory. Sitemap and robots routes generated programmatically from live content. `next/font` with `display: swap`, `next/image` with explicit responsive sizes, partial database indexes for hot queries — performance optimisation built in from the first commit rather than retrofitted.

### 3k. The Build (visible scope)

**Heading:** The Build

**Stat grid (5 stats, large numbers):**

- **26** distinct pages
- **96** dynamic city pages
- **24** custom components
- **4** Supabase migrations
- **9** planning & design-system documents authored

### 3l. Status

**Heading:** Status

**Body:**

V2 currently in active development. Launching 2026. This case study will be updated with live performance metrics, accessibility scores and conversion data once the new site replaces the V1 build in production.

---

## SECTION 4 — Process

**Section heading:** How I work

**Intro line:**

Every project, four steps in order. No skipping.

**4-block grid (~40 words each):**

**01 — Strategy before pixels**
I start with a positioning brief — competitor teardowns, white-space analysis, the specific feeling the brand should leave the visitor with. Visual decisions get easier when the strategic decision is already made.

**02 — Design system, then pages**
I build the design system first — typography pairings, colour tokens, spacing rhythm, the photographic and component vocabulary that gives the brand its visual differentiation — then compose pages from it. Pages built without a system look stitched together.

**03 — Conversion-led page architecture**
Every page gets a single primary action. Layout, hierarchy, CTA placement, mobile-first form integration, and copy all bend toward making that action obvious and easy. Decoration that doesn't serve the action gets cut.

**04 — Ship the technical foundation**
Performance (Core Web Vitals), structured data (the right schema for the page type), accessibility (WCAG-compliant by default), analytics and consent (UK GDPR / PECR / ICO-compliant). The unsexy work that decides whether the site ranks and converts six months later.

---

## SECTION 5 — Skills & Toolkit

**Section heading:** Toolkit

**4 category blocks:**

**Design**
Figma · Adobe Creative Cloud · design systems · typography pairings · brand strategy · editorial layout · responsive composition

**Development**
Next.js · React · TypeScript · Tailwind CSS · WordPress · Webflow · Shopify · Git · Vercel · MDX

**CRO & Conversion**
Landing-page architecture · A/B testing · form optimisation · checkout flow design · mobile-first conversion patterns · trust-signal placement

**SEO & Performance**
Technical SEO · structured data (Schema.org) · Core Web Vitals · `next/font` & `next/image` · sitemaps · canonical discipline · meta architecture

---

## SECTION 6 — Contact

**Section heading:** Get in touch

**Body (Option B — employment-focused, per your earlier choice):**

I'm currently looking for full-time roles in web design, front-end development or CRO — ideally at agencies or product teams shipping ambitious work. If you're hiring, I'd like to hear from you.

**Primary contact link (large):**

rakin.rifat.miah@gmail.com

**Secondary links (smaller, below):**

LinkedIn · linkedin.com/in/rakinrifatmiah

---

## FOOTER

**Left side:**

© 2026 Rakin Miah · Brighton, UK

**Right side:**

Built with Next.js · Hosted on Vercel
