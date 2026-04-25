# Claude Code Prompt — Portfolio Site Build

**How to use this:**

1. Create a new empty folder on your machine for the portfolio project
2. Open Claude Code in that folder
3. Paste **everything below the `---START PROMPT---` line** as a single message
4. Let Claude Code work through it — likely 30–60 minutes of agentic build
5. Run `npm run dev` locally to verify, then deploy to Vercel

The prompt is structured so Claude Code can read it linearly and build the site without back-and-forth questions. It includes design tokens, component specs, full content, image placements, and acceptance criteria.

---

---START PROMPT---

# Build: Personal Portfolio Site for Rakin Miah

You are building a single-page personal portfolio website for a designer/developer applying to UK web design, front-end and CRO roles. The site is a focused case study of one project (DeenRelief charity website rebuild) presented across one continuous scrolling page.

This prompt contains every piece of content, every design token, every component decision needed. Read it completely before starting. Do not ask clarifying questions — interpret defaults and ship.

---

## 1. Project Setup

Initialise a fresh Next.js 15+ project with the App Router and TypeScript:

```bash
npx create-next-app@latest . --typescript --tailwind --app --no-src-dir --import-alias "@/*"
```

After init, install one additional dependency for smooth animations on scroll:

```bash
npm install motion
```

(`motion` is the new v11+ name for Framer Motion — use motion/react imports.)

**Folder structure to create:**

```
app/
  layout.tsx
  page.tsx
  globals.css
  fonts.ts
components/
  Hero.tsx
  About.tsx
  CaseStudy.tsx
  BeforeAfterPair.tsx
  DesignSystem.tsx
  PageArchitecture.tsx
  ConversionEngineering.tsx
  TechSEO.tsx
  BuildStats.tsx
  Process.tsx
  Toolkit.tsx
  Contact.tsx
  Footer.tsx
public/
  images/
    [placeholder PNG files matching the names in section 7]
```

---

## 2. Design Tokens — The "Proof & Proximity" Aesthetic

This portfolio uses the same design language as the DeenRelief V2 build it's documenting — deliberate, because consistency across the designer's own work and their case study reinforces visual credibility.

### Typography

Load via `next/font` in `app/fonts.ts`:

- **Source Serif 4** (Google Fonts) — display/headings — weights 400, 600, 700
- **DM Sans** (Google Fonts) — body/UI — weights 400, 500, 700

Use `display: "swap"` and assign CSS variables `--font-serif` and `--font-sans`.

### Colour palette (Tailwind config extend)

```
colors: {
  cream: "#F7F4ED",        // page background
  charcoal: "#1F1F1F",     // primary text
  ink: "#2A2A2A",          // body text
  muted: "#6B6660",        // secondary text / metadata
  green: "#2F5D3A",        // emphasis / primary actions
  greenDeep: "#1E3D26",    // hover / dark accent
  amber: "#C8842D",        // accent / secondary highlight
  rule: "#E5DFD3",         // dividers / faint borders
  card: "#FFFFFF",         // raised surface backgrounds
}
```

Background of the page is `cream`. All text defaults to `charcoal`. Body copy is `ink`. Section meta-labels (eyebrows, captions) use `muted`.

### Typographic scale

```
display: 4.5rem (72px) — hero name only
h1: 3rem (48px) — section headings
h2: 2.25rem (36px) — sub-section headings within case study
h3: 1.5rem (24px) — block headings (e.g. "Block 1: Campaign Pages")
lead: 1.375rem (22px) — hero subhead, section intro lines
body: 1.0625rem (17px) — paragraph default
small: 0.9375rem (15px) — captions, eyebrows, metadata
```

Display + H1 + H2 use Source Serif 4 (700 weight for display, 600 for headings). H3 and below use DM Sans (500 for headings, 400 for body).

Line-height: 1.15 on display/H1, 1.25 on H2/H3, 1.6 on body, 1.4 on small.

### Spacing & rhythm

Generous vertical rhythm — this is editorial, not dashboard. Section vertical padding: `py-32` desktop / `py-20` mobile. Sub-section gap: `mb-16` desktop / `mb-12` mobile. Paragraph max-width: `max-w-2xl` (around 65 characters per line).

### Layout

Single column, max-width `max-w-5xl` for content blocks, `max-w-4xl` for prose-heavy sections, `max-w-7xl` for the before/after comparison pairs (so images get more width). Horizontal padding: `px-6` mobile / `px-12` tablet / `px-16` desktop.

### Component conventions

- No box shadows. Use thin 1px borders in `rule` colour for separation when needed.
- No rounded buttons over `rounded-md` (6px) — slight rounding only.
- No gradients anywhere.
- Hover states: `green` text → `greenDeep`, with a 200ms transition.
- Image rounding: `rounded-lg` (8px).
- Page rule lines (between sections): a 1px horizontal rule in `rule` colour, no other decoration.

---

## 3. Page Structure — Single Long-Scroll Layout

Compose `app/page.tsx` as a single component that imports and stacks all section components in this exact order:

```tsx
<main>
  <Hero />
  <About />
  <CaseStudy />     {/* this is the largest component, contains all DeenRelief sub-blocks */}
  <Process />
  <Toolkit />
  <Contact />
</main>
<Footer />
```

No fixed nav header. No sticky elements. Page is read top-to-bottom in one continuous scroll.

The Hero CTA "See the case study →" is an anchor link to `#case-study` which scrolls to the start of the CaseStudy component. Use `scroll-behavior: smooth` in globals.css.

---

## 4. Hero Section (`components/Hero.tsx`)

Full viewport height (`min-h-screen`), content vertically centred. Cream background.

**Layout:**

- Eyebrow: small text `Portfolio · 2026` in muted, uppercase, letter-spacing `tracking-widest`
- Display text: `Rakin Miah` in Source Serif 4, 4.5rem desktop / 3rem mobile, charcoal
- Lead subhead (1.375rem, ink): `I design and build high-converting websites and landing pages.`
- Supporting paragraph (body, ink, max-w-xl): `Currently rebuilding deenrelief.org — a charity donation platform with a custom Stripe checkout, full design system and technical SEO foundation.`
- Primary CTA — text-only link, no button styling: `See the case study →` linking to `#case-study`. DM Sans, green, hover greenDeep, with the arrow having a 300ms `translate-x-1` hover animation.
- Secondary CTA below — `rakin.rifat.miah@gmail.com` in muted, smaller text, `mailto:` link

Stack vertically left-aligned. Generous breathing room between elements.

Add a subtle scroll cue at bottom of viewport — small text `Scroll` in muted with a thin 1px vertical line below it (40px tall), opacity 60%. No bouncy animation — just static.

---

## 5. About Section (`components/About.tsx`)

Generous vertical padding above and below.

**Content:**

- Section eyebrow: `About` (small, muted, uppercase, tracking-widest)
- A horizontal 1px rule in `rule` colour after the eyebrow, full content-width
- Body paragraph (body size, ink, max-w-2xl):

> I'm a designer and developer focused on the work that turns visitors into customers — page architecture, design systems, conversion-led layout decisions, and the technical groundwork (performance, structured data, accessibility) that lets a site rank and convert at the same time.

- Second paragraph (body size, ink, max-w-2xl, mt-6):

> I build in Next.js and WordPress depending on the project, design in Figma, and ship to Vercel. Recent University of Sussex graduate, based in Brighton, working with UK clients.

---

## 6. CaseStudy Section (`components/CaseStudy.tsx`)

This is the largest component. Anchor id `case-study`. Import and compose the sub-components:

```tsx
<section id="case-study">
  <ProjectHeader />
  <Brief />
  <TwoPhaseApproach />
  <DesignSystem />
  <BeforeAfterPair {/* homepage */} />
  <BeforeAfterPair {/* palestine */} />
  <BeforeAfterPair {/* zakat */} />
  <PageArchitecture />
  <ConversionEngineering />
  <TechSEO />
  <BuildStats />
  <Status />
</section>
```

You can keep these inline as JSX blocks within CaseStudy.tsx if creating separate sub-components is excessive — judgement call.

### 6a. Project Header

- Eyebrow: `Featured Project · 2025–2026`
- H1 (Source Serif 4, 600, 3rem): `DeenRelief`
- Subhead (lead size, muted): `Charity donation platform — design, development and full rebuild`
- Status pill: small inline-block with `bg-amber/10 text-amber border border-amber/30`, padding `px-3 py-1`, rounded-full, text `Currently in development · Launching 2026`

### 6b. The Brief

- H2 (Source Serif 4, 600): `The Brief`
- Body paragraph (max-w-3xl):

> DeenRelief is a UK Islamic humanitarian charity (Charity No. 1158608) running campaigns across emergency relief, orphan sponsorship, Zakat, Sadaqah Jariyah and clean water projects. The existing site was built on WordPress and Elementor and was hitting a structural ceiling — page templates repeated across campaigns, visual identity blended into the category, and the conversion engineering was constrained by what the page builder allowed. With Ramadan 2026 — the highest-demand month for Islamic charity giving — approaching fast, the choice was either rebuild the whole site (impossible in the timeframe) or ship targeted V1 landing pages on the existing platform to capture the ad spend window, then rebuild properly afterwards.

### 6c. A Two-Phase Build

- H2: `A Two-Phase Build`
- Two-column layout on desktop (stacked on mobile), with each column having a small label "Phase 1" or "Phase 2" in amber + body paragraph:

**Phase 1** — pre-Ramadan 2026

> I built two new high-conversion landing pages for the highest-traffic campaigns (Palestine and Zakat) on the existing WordPress stack. Custom HTML and CSS injected into Elementor, working within the platform's limits to ship before the giving window opened. These two pages absorbed the bulk of paid Google Ads traffic during the Ramadan campaign.

**Phase 2** — post-Ramadan 2026

> With the immediate revenue window covered and clear evidence that the WordPress build was capping conversion, I made the case to the Director for a full rebuild on Next.js. The new build is currently in development, taking the design language and conversion patterns from the V1 pages and rebuilding them on a proper modern stack — with the design system, custom Stripe donation platform, and technical SEO foundation that the WordPress version couldn't support.

Below the two columns, a single full-width line (body size, muted, italic):

> The case study below shows V1 → V2 for the homepage and the two campaigns, then walks through the broader scope of the V2 rebuild.

### 6d. Design System (`components/DesignSystem.tsx`)

- H2: `Design System`
- Lead intro line: `A custom system, built on Tailwind tokens — no UI library.`
- 3-column grid (stacked on mobile), each column with H3 + content:

**Column 1: Typography**
> Source Serif 4 (display) + DM Sans (body). Editorial weight paired with functional clarity.

**Column 2: Palette**
Visual: 5 colour swatches inline (small rounded squares, ~32px each, in cream/charcoal/green/amber/greenDeep). Below: small caption: `Cream base, charcoal text, green emphasis, amber accent, dark-green deep states.`

**Column 3: Photography Discipline**
> Field photography with location and date overlay tags applied to every image — a visual discipline that separates the brand from the templated charity convention.

### 6e. Before/After Pairs (`components/BeforeAfterPair.tsx`)

This component is reused three times. Props:

```tsx
type BeforeAfterPairProps = {
  heading: string;
  imageCaption: string;
  beforeSrc: string;
  afterSrc: string;
  beforeLabel: string;     // "V1 — WordPress"
  afterLabel: string;      // "V2 — Next.js"
  rationale: string;       // the body paragraph
}
```

**Layout:**

- H2 heading
- Small caption above the image pair (muted, italic): the `imageCaption` prop
- Image pair: 2-column grid on desktop with `gap-4`, stacked vertically on mobile. Each image has a small label below it (`beforeLabel` / `afterLabel` in muted, small text). Use `next/image` with `priority={false}`, `sizes="(min-width: 1024px) 50vw, 100vw"`. Image rounded-lg.
- Body rationale paragraph below (max-w-3xl)

Three usages:

**Pair 1 — Homepage:**
- heading: `V1 → V2: Homepage`
- imageCaption: `deenrelief.org homepage — V1 on WordPress (left) vs V2 on Next.js (right)`
- beforeSrc: `/images/01a-homepage-old-desktop.png`
- afterSrc: `/images/01b-homepage-new-desktop.png`
- beforeLabel: `V1 — WordPress`
- afterLabel: `V2 — Next.js`
- rationale:

> The V1 homepage is descriptive — paragraphs about the charity's mission, six service blocks, a long campaigns grid, partner logos. It tells visitors what the charity does. The V2 homepage is decisional — an immediate hero with a single primary action, the Palestine appeal elevated as the most urgent decision (with a donation form embedded on the homepage itself), the cancer care centres surfaced as the charity's signature programme, and the campaigns grid sequenced by giving urgency rather than chronology. The structural shift: same content, restructured around the question *"what does a first-time visitor need to do in the next 30 seconds?"* rather than *"what should a visitor learn about us?"* The donation moment is no longer a destination at the end of a scroll — it's available immediately, with the deeper context still there for visitors who want it.

**Pair 2 — Palestine:**
- heading: `V1 → V2: Palestine Emergency Relief`
- imageCaption: `/palestine-emergency-relief-campaign (V1) → /palestine (V2)`
- beforeSrc: `/images/02a-palestine-old-desktop.png`
- afterSrc: `/images/02b-palestine-new-desktop.png`
- beforeLabel: `V1 — WordPress`
- afterLabel: `V2 — Next.js`
- rationale:

> The Palestine page is one of the highest-traffic landing pages on the site — it's where the bulk of paid social and paid-search traffic converts during emergency appeals. The V1 build, shipped pre-Ramadan, established the conversion architecture: emergency framing, three-step delivery assurance, partner network, FAQ, donation form. It worked — well enough to absorb significant ad spend during the Ramadan campaign. But the WordPress + Elementor stack capped what could be tightened. The V2 rebuild lifts those caps. Headline shifts from *"Emergency Aid for Families in Gaza Today"* to *"Donate to Gaza Emergency Relief"* — same intent, sharper paid-search match. The donation form is now hero-adjacent on desktop and integrated into the hero on mobile, with a frequency toggle, outcome-anchored amount tiers (*"Feeds a displaced family of five in Gaza for one month"*), live Gift Aid math (*"With Gift Aid: £63 at no extra cost"*), and social-proof framing (*"Trusted by 3,200+ donors since 2013"*) all visible at the decision moment. The form is placed twice on the page — once at the top, once at the bottom — so visitors who scroll for context don't have to scroll back.

**Pair 3 — Zakat:**
- heading: `V1 → V2: Zakat`
- imageCaption: `/fulfill-your-duty-contribute-zakat-today (V1) → /zakat (V2)`
- beforeSrc: `/images/03a-zakat-old-desktop.png`
- afterSrc: `/images/03b-zakat-new-desktop.png`
- beforeLabel: `V1 — WordPress`
- afterLabel: `V2 — Next.js`
- rationale:

> Zakat is the highest-intent campaign page on the site. Visitors arriving here typically already know what they want to do — they're calculating an obligation and looking for somewhere trustworthy to fulfil it. The conversion task isn't *persuasion*, it's *frictionless completion*. The V1 page has the right elements (100% Zakat policy, calculator, FAQ) but spreads them across a long scroll that dilutes the donate moment with educational content the visitor doesn't need. V2 leads with the donation form — frequency toggle, amount tiers anchored by outcomes (*"Covers medical supplies for a child's treatment"*), live Gift Aid uplift inline (*"With Gift Aid: £125 at no extra cost"*), and a clean cross-sell to Sadaqah for visitors who arrived on the wrong page. The Zakat calculator stays — but moves below the form, framed as a tool for visitors who need to calculate, not a precondition for everyone. Education stays available. The decision moment isn't buried under it.

### 6f. Page Architecture (`components/PageArchitecture.tsx`)

- H2: `Page Architecture (V2)`
- Lead intro: `26 distinct pages plus 96 dynamically-rendered city-specific pages, each engineered for a specific moment in the donor journey.`
- 3-column grid (stacked mobile), each block with H3 + small italic page-list line + body paragraph:

**Block 1: Campaign Pages**
*Palestine, Cancer Care, Orphan Sponsorship, Build a School, Clean Water, UK Homeless, Zakat, Sadaqah*
> Each campaign page follows the same conversion structure: keyword-matched H1, field-evidence photography, donation form with frequency toggle, outcome-anchored amount tiers, live Gift Aid math, three-step delivery assurance, FAQ with structured data, final CTA. Designed so a paid-traffic visitor can reach the donate button within a single thumb scroll on mobile.

**Block 2: Donation Flow**
*Stripe Elements checkout — campaign and amount seeded via URL*
> Custom Stripe-powered donation flow handling one-time donations, monthly recurring subscriptions, Gift Aid declarations with live tax-uplift calculation, and a self-service donor portal via signed magic-link URLs. Apple Pay, Google Pay, and card supported in a single payment element.

**Block 3: Content & SEO Pages**
*MDX-driven blog · 96 SSR prayer-times pages · structured-data foundation*
> A blog system on MDX with FAQ schema per article. A prayer-times directory generating 96 city-specific pages server-side, each with its own structured data — capturing high-intent organic traffic outside the donation funnel. NGO, FundraisingEvent, DonateAction, FAQPage, BreadcrumbList and Article schema across the site.

### 6g. Conversion Engineering (`components/ConversionEngineering.tsx`)

- H2: `Conversion Engineering`
- Lead intro: `The decisions designed to lift donation completion rate, not just traffic.`
- Vertical numbered list, max-w-3xl, each item with a numeric label (large amber, Source Serif), title (H3), and body paragraph:

**1. Hero-integrated donation form on mobile**
> On mobile, the donation form lives inside the hero section. Desktop reverts to a more traditional hero-then-form layout where the photography earns the space. Mobile traffic — the majority of charity donation traffic — collapses the visit-to-donate distance.

**2. Live Gift Aid math**
> The donation amount and Gift Aid uplift recalculate inline as the donor types — turning a static checkbox into a tangible *"your £100 becomes £125"* moment at the exact second the decision is being made.

**3. Outcome-anchored amount tiers**
> Donation amounts pair each tier with its specific real-world outcome (*"£50 — feeds a displaced family for a month"*) rather than abstract numbers. The decision becomes choosing an outcome, not a price point. One tier flagged "Popular" anchors the choice.

**4. Social proof at the decision moment**
> *"Trusted by 3,200+ donors since 2013"* sits next to the donation form. Trust signals live where the friction is — at the conversion event — rather than buried in the footer or on a separate trust page that nobody visits.

### 6h. Technical SEO Foundation (`components/TechSEO.tsx`)

- H2: `Technical SEO Foundation`
- Body paragraph (max-w-3xl):

> The V2 ships with the structured-data and performance fundamentals most charity sites skip. NGO schema sitewide; FundraisingEvent and DonateAction schema on every campaign page; FAQPage schema on campaign pages and blog posts; BreadcrumbList for navigation; per-city schema on the prayer-times directory. Sitemap and robots routes generated programmatically from live content. `next/font` with `display: swap`, `next/image` with explicit responsive sizes, partial database indexes for hot queries — performance optimisation built in from the first commit rather than retrofitted.

### 6i. Build Stats (`components/BuildStats.tsx`)

- H2: `The Build`
- 5-column grid on desktop (3+2 on tablet, stacked on mobile), each cell:
  - Large number in Source Serif 4, 600, 3rem, charcoal
  - Small label below (DM Sans, muted, small)

Stats:
- **26** distinct pages
- **96** dynamic city pages
- **24** custom components
- **4** Supabase migrations
- **9** planning & design-system documents authored

### 6j. Status

- H2: `Status`
- Body paragraph (max-w-3xl):

> V2 currently in active development. Launching 2026. This case study will be updated with live performance metrics, accessibility scores and conversion data once the new site replaces the V1 build in production.

---

## 7. Process Section (`components/Process.tsx`)

- Eyebrow: `Process`, horizontal rule below
- H2: `How I work`
- Lead: `Every project, four steps in order. No skipping.`
- 4-block grid (2x2 desktop, stacked mobile), each block with:
  - Number in Source Serif, 600, 2.25rem, amber: `01`, `02`, `03`, `04`
  - H3 title
  - Body paragraph

**01 — Strategy before pixels**
> I start with a positioning brief — competitor teardowns, white-space analysis, the specific feeling the brand should leave the visitor with. Visual decisions get easier when the strategic decision is already made.

**02 — Design system, then pages**
> I build the design system first — typography pairings, colour tokens, spacing rhythm, the photographic and component vocabulary that gives the brand its visual differentiation — then compose pages from it. Pages built without a system look stitched together.

**03 — Conversion-led page architecture**
> Every page gets a single primary action. Layout, hierarchy, CTA placement, mobile-first form integration, and copy all bend toward making that action obvious and easy. Decoration that doesn't serve the action gets cut.

**04 — Ship the technical foundation**
> Performance (Core Web Vitals), structured data (the right schema for the page type), accessibility (WCAG-compliant by default), analytics and consent (UK GDPR / PECR / ICO-compliant). The unsexy work that decides whether the site ranks and converts six months later.

---

## 8. Toolkit Section (`components/Toolkit.tsx`)

- Eyebrow: `Toolkit`, horizontal rule below
- H2: `What I use`
- 4-block grid (2x2 desktop, stacked mobile), each block with H3 + descriptor line of items separated by ` · `:

**Design**
> Figma · Adobe Creative Cloud · design systems · typography pairings · brand strategy · editorial layout · responsive composition

**Development**
> Next.js · React · TypeScript · Tailwind CSS · WordPress · Webflow · Shopify · Git · Vercel · MDX

**CRO & Conversion**
> Landing-page architecture · A/B testing · form optimisation · checkout flow design · mobile-first conversion patterns · trust-signal placement

**SEO & Performance**
> Technical SEO · structured data (Schema.org) · Core Web Vitals · `next/font` & `next/image` · sitemaps · canonical discipline · meta architecture

---

## 9. Contact Section (`components/Contact.tsx`)

Centred content, generous padding, slight visual emphasis (this is the conversion moment of the portfolio).

- Eyebrow: `Get in touch`
- H1 (Source Serif, 600): `Let's talk.`
- Body paragraph (max-w-2xl, centred):

> I'm currently looking for full-time roles in web design, front-end development or CRO — ideally at agencies or product teams shipping ambitious work. If you're hiring, I'd like to hear from you.

- Primary contact link, large (1.5rem, Source Serif 600, charcoal, hover green): `rakin.rifat.miah@gmail.com` as `mailto:` link
- Secondary line below, small/muted: `LinkedIn · linkedin.com/in/rakinrifatmiah` (link to https://linkedin.com/in/rakinrifatmiah)

---

## 10. Footer (`components/Footer.tsx`)

Thin top border (1px rule colour), small text (small size, muted), generous vertical padding.

Two-column flex layout (stacked on mobile):

**Left:** `© 2026 Rakin Miah · Brighton, UK`
**Right:** `Built with Next.js · Hosted on Vercel`

---

## 11. Animations

Use `motion` from `motion/react` sparingly. Three places only:

1. **Hero name** — fade in + 8px Y translate on mount, 600ms duration, ease-out
2. **Each section heading** — `whileInView` fade-in + 12px Y translate, 600ms duration, `viewport={{ once: true, margin: "-80px" }}`
3. **Before/after image pairs** — same `whileInView` fade-in pattern, with the two images animating in sequence (50ms stagger) so the eye registers them as a pair

No hover animations beyond the existing CTA arrow translation. No scroll-driven parallax. No loading spinners.

---

## 12. Metadata & SEO

In `app/layout.tsx`:

```tsx
export const metadata = {
  title: "Rakin Miah — Web Designer & Developer · Portfolio",
  description: "I design and build high-converting websites and landing pages. Currently rebuilding deenrelief.org — a charity donation platform with a custom Stripe checkout, full design system and technical SEO foundation.",
  openGraph: {
    title: "Rakin Miah — Web Designer & Developer",
    description: "Portfolio: DeenRelief charity donation platform rebuild.",
    url: "https://[your-vercel-url].vercel.app",
    siteName: "Rakin Miah",
    type: "website",
  },
  robots: { index: true, follow: true },
};
```

Add a JSON-LD `Person` schema in `app/layout.tsx` head section:

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Rakin Miah",
  "jobTitle": "Web Designer & Developer",
  "url": "https://[your-vercel-url].vercel.app",
  "email": "rakin.rifat.miah@gmail.com",
  "address": { "@type": "PostalAddress", "addressLocality": "Brighton", "addressCountry": "GB" },
  "sameAs": ["https://linkedin.com/in/rakinrifatmiah"]
}
```

---

## 13. Image Placeholders

Create 6 placeholder PNG files in `public/images/` so the build doesn't error before real screenshots are added. Each placeholder should be a 1440x900 transparent PNG with the filename as visible text in the centre — easy to spot which slot is which while developing:

- `01a-homepage-old-desktop.png`
- `01b-homepage-new-desktop.png`
- `02a-palestine-old-desktop.png`
- `02b-palestine-new-desktop.png`
- `03a-zakat-old-desktop.png`
- `03b-zakat-new-desktop.png`

The user will replace these with real screenshots before deploying. Do not block the build on missing images.

---

## 14. Accessibility

- Semantic HTML throughout (`<main>`, `<section>`, `<header>`, `<footer>`, `<nav>` if needed)
- All images have descriptive `alt` text — for the before/after screenshots, alts should be e.g. "DeenRelief homepage V1 on WordPress, showing the long descriptive scroll layout"
- Headings in correct hierarchy (one H1 in hero, H2s for sections, H3s within sections)
- Colour contrast: charcoal on cream, green on cream, amber on cream all clear AA at body sizes
- All interactive elements have visible focus states (use Tailwind `focus-visible:ring-2 ring-green ring-offset-2`)
- `<html lang="en-GB">` in the root layout

---

## 15. Responsive Breakpoints

Tailwind defaults are fine. Key behaviours:

- Mobile (`<sm`, <640px): all multi-column grids stack to single column, font sizes step down per the typographic scale already specified
- Tablet (`sm` to `lg`, 640–1024px): 2-column grids work, before/after pairs stack vertically (the comparison still reads top-to-bottom)
- Desktop (`lg+`, 1024px+): full 3- and 4-column grids active, before/after pairs side-by-side

Test the before/after pairs specifically on tablet — that's the breakpoint where they're visually weakest.

---

## 16. Acceptance criteria (verify before deploying)

- [ ] `npm run dev` runs cleanly with zero TypeScript errors and zero warnings
- [ ] All sections render in the order specified, with content matching this prompt verbatim
- [ ] Hero CTA scrolls smoothly to `#case-study`
- [ ] Mobile (393px viewport) is fully readable with no horizontal scroll
- [ ] Before/after image pairs are side-by-side on desktop, stacked on mobile
- [ ] All `mailto:` and `https://` links open correctly
- [ ] Lighthouse on the deployed Vercel URL hits 95+ on all four metrics (Performance / Accessibility / Best Practices / SEO)
- [ ] No console errors or warnings on the deployed page
- [ ] Image placeholders render without 404s
- [ ] Page renders correctly in dark-mode-set browser (since we're not implementing dark mode, the cream/charcoal palette should remain — set `color-scheme: light only` in `:root`)

---

## 17. After build complete

Output to the user:

1. The `npm run dev` URL to verify locally
2. A short list of next steps:
   - Add the 6 real screenshot images to `public/images/` (filenames listed in section 13)
   - Run `npx vercel` to deploy
   - Update the Open Graph URL in metadata once the Vercel URL is known
   - Add the Vercel URL to LinkedIn profile and CV

---END PROMPT---

---

## Notes for Rakin (not part of the prompt)

**What this prompt produces:** A complete, deployable Next.js portfolio site with all your content baked in, design tokens matching your DeenRelief work, all six screenshot slots ready to be filled, and all metadata in place. Claude Code should be able to build this in 30–60 minutes of agentic work without back-and-forth.

**What you do after Claude Code finishes:**

1. **Capture the 6 screenshots** following the image specs document (`02-image-specs-v2.md`) — homepage old/new, Palestine old/new, Zakat old/new
2. **Drop them into `public/images/`** with the exact filenames specified
3. **Verify locally** with `npm run dev`
4. **Deploy to Vercel** with `npx vercel` (or push to GitHub and connect the repo via the Vercel dashboard)
5. **Update LinkedIn** with the live URL — replace the `[add URL]` placeholder on your CV too
6. **Tell the Director** the portfolio is live (courtesy follow-up to the heads-up conversation)

**If anything goes wrong:** the most likely failure points are the font loading (Google Fonts can be flaky), the Tailwind config extension (paste into the right place in `tailwind.config.ts`), and the image alt text on screenshots before you've added the real images. All recoverable.

**One genuine warning:** the Lighthouse Performance target of 95+ is achievable but requires the screenshots to be properly compressed before adding them to `public/images/`. PNG screenshots from Chrome are typically 1-3MB each — for production, run them through `tinypng.com` or similar before deploying. Otherwise Performance drops to 70-80 and Lighthouse audits flag image weight.
