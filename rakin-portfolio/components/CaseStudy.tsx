import SectionHeading from "./SectionHeading";
import BeforeAfterPair from "./BeforeAfterPair";
import DesignSystem from "./DesignSystem";
import PageArchitecture from "./PageArchitecture";
import ConversionEngineering from "./ConversionEngineering";
import TechSEO from "./TechSEO";
import BuildStats from "./BuildStats";

export default function CaseStudy() {
  return (
    <section
      id="case-study"
      className="px-6 sm:px-12 lg:px-16 py-20 lg:py-32 scroll-mt-12"
    >
      <div className="max-w-7xl mx-auto">
        <div className="max-w-5xl mx-auto">
          {/* 6a. Project Header */}
          <SectionHeading>
            <p className="text-small text-muted uppercase tracking-widest font-sans">
              Featured Project · 2025–2026
            </p>
            <h2 className="font-serif font-semibold text-charcoal text-h1 leading-tight mt-4">
              DeenRelief
            </h2>
            <p className="font-sans text-lead text-muted mt-3 leading-snug">
              Charity donation platform — design, development and full rebuild
            </p>
            <span className="inline-block mt-6 px-3 py-1 rounded-full bg-amber/10 text-amber border border-amber/30 text-small font-sans">
              Currently in development · Launching 2026
            </span>
          </SectionHeading>

          {/* 6b. The Brief */}
          <div className="mt-16 lg:mt-24">
            <SectionHeading>
              <h3 className="font-serif font-semibold text-charcoal text-h2 leading-tight mb-6">
                The Brief
              </h3>
            </SectionHeading>
            <p className="font-sans text-ink text-body max-w-3xl leading-relaxed">
              DeenRelief is a UK Islamic humanitarian charity (Charity No.
              1158608) running campaigns across emergency relief, orphan
              sponsorship, Zakat, Sadaqah Jariyah and clean water projects. The
              existing site was built on WordPress and Elementor and was
              hitting a structural ceiling — page templates repeated across
              campaigns, visual identity blended into the category, and the
              conversion engineering was constrained by what the page builder
              allowed. With Ramadan 2026 — the highest-demand month for Islamic
              charity giving — approaching fast, the choice was either rebuild
              the whole site (impossible in the timeframe) or ship targeted V1
              landing pages on the existing platform to capture the ad spend
              window, then rebuild properly afterwards.
            </p>
          </div>

          {/* 6c. Two-Phase Approach */}
          <div className="mt-16 lg:mt-24">
            <SectionHeading>
              <h3 className="font-serif font-semibold text-charcoal text-h2 leading-tight mb-10">
                A Two-Phase Build
              </h3>
            </SectionHeading>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12 max-w-4xl">
              <div>
                <p className="font-sans text-small text-amber font-medium uppercase tracking-widest mb-3">
                  Phase 1 — pre-Ramadan 2026
                </p>
                <p className="font-sans text-ink text-body leading-relaxed">
                  I built two new high-conversion landing pages for the
                  highest-traffic campaigns (Palestine and Zakat) on the
                  existing WordPress stack. Custom HTML and CSS injected into
                  Elementor, working within the platform&apos;s limits to ship
                  before the giving window opened. These two pages absorbed
                  the bulk of paid Google Ads traffic during the Ramadan
                  campaign.
                </p>
              </div>
              <div>
                <p className="font-sans text-small text-amber font-medium uppercase tracking-widest mb-3">
                  Phase 2 — post-Ramadan 2026
                </p>
                <p className="font-sans text-ink text-body leading-relaxed">
                  With the immediate revenue window covered and clear evidence
                  that the WordPress build was capping conversion, I made the
                  case to the Director for a full rebuild on Next.js. The new
                  build is currently in development, taking the design language
                  and conversion patterns from the V1 pages and rebuilding them
                  on a proper modern stack — with the design system, custom
                  Stripe donation platform, and technical SEO foundation that
                  the WordPress version couldn&apos;t support.
                </p>
              </div>
            </div>
            <p className="mt-10 font-sans text-body text-muted italic max-w-4xl leading-relaxed">
              The case study below shows V1 → V2 for the homepage and the two
              campaigns, then walks through the broader scope of the V2
              rebuild.
            </p>
          </div>

          {/* 6d. Design System */}
          <div className="mt-20 lg:mt-32">
            <DesignSystem />
          </div>
        </div>

        {/* 6e. Before/After Pairs — wider container */}
        <div className="mt-20 lg:mt-32">
          <BeforeAfterPair
            heading="V1 → V2: Homepage"
            imageCaption="deenrelief.org homepage — V1 on WordPress (left) vs V2 on Next.js (right)"
            beforeSrc="/images/01a-homepage-old-desktop.png"
            afterSrc="/images/01b-homepage-new-desktop.png"
            beforeAlt="DeenRelief homepage V1 on WordPress, showing the long descriptive scroll layout"
            afterAlt="DeenRelief homepage V2 on Next.js, showing the decisional hero with single primary action"
            beforeLabel="V1 — WordPress"
            afterLabel="V2 — Next.js"
            rationale={
              <>
                The V1 homepage is descriptive — paragraphs about the
                charity&apos;s mission, six service blocks, a long campaigns
                grid, partner logos. It tells visitors what the charity does.
                The V2 homepage is decisional — an immediate hero with a single
                primary action, the Palestine appeal elevated as the most
                urgent decision (with a donation form embedded on the homepage
                itself), the cancer care centres surfaced as the charity&apos;s
                signature programme, and the campaigns grid sequenced by giving
                urgency rather than chronology. The structural shift: same
                content, restructured around the question{" "}
                <em>
                  &ldquo;what does a first-time visitor need to do in the next
                  30 seconds?&rdquo;
                </em>{" "}
                rather than{" "}
                <em>&ldquo;what should a visitor learn about us?&rdquo;</em> The
                donation moment is no longer a destination at the end of a
                scroll — it&apos;s available immediately, with the deeper
                context still there for visitors who want it.
              </>
            }
          />

          <BeforeAfterPair
            heading="V1 → V2: Palestine Emergency Relief"
            imageCaption="/palestine-emergency-relief-campaign (V1) → /palestine (V2)"
            beforeSrc="/images/02a-palestine-old-desktop.png"
            afterSrc="/images/02b-palestine-new-desktop.png"
            beforeAlt="DeenRelief Palestine emergency relief campaign page V1 on WordPress"
            afterAlt="DeenRelief Palestine campaign page V2 on Next.js with hero-adjacent donation form"
            beforeLabel="V1 — WordPress"
            afterLabel="V2 — Next.js"
            rationale={
              <>
                The Palestine page is one of the highest-traffic landing pages
                on the site — it&apos;s where the bulk of paid social and
                paid-search traffic converts during emergency appeals. The V1
                build, shipped pre-Ramadan, established the conversion
                architecture: emergency framing, three-step delivery
                assurance, partner network, FAQ, donation form. It worked —
                well enough to absorb significant ad spend during the Ramadan
                campaign. But the WordPress + Elementor stack capped what
                could be tightened. The V2 rebuild lifts those caps. Headline
                shifts from{" "}
                <em>&ldquo;Emergency Aid for Families in Gaza Today&rdquo;</em>{" "}
                to <em>&ldquo;Donate to Gaza Emergency Relief&rdquo;</em> —
                same intent, sharper paid-search match. The donation form is
                now hero-adjacent on desktop and integrated into the hero on
                mobile, with a frequency toggle, outcome-anchored amount tiers
                (
                <em>
                  &ldquo;Feeds a displaced family of five in Gaza for one
                  month&rdquo;
                </em>
                ), live Gift Aid math (
                <em>&ldquo;With Gift Aid: £63 at no extra cost&rdquo;</em>),
                and social-proof framing (
                <em>&ldquo;Trusted by 3,200+ donors since 2013&rdquo;</em>) all
                visible at the decision moment. The form is placed twice on
                the page — once at the top, once at the bottom — so visitors
                who scroll for context don&apos;t have to scroll back.
              </>
            }
          />

          <BeforeAfterPair
            heading="V1 → V2: Zakat"
            imageCaption="/fulfill-your-duty-contribute-zakat-today (V1) → /zakat (V2)"
            beforeSrc="/images/03a-zakat-old-desktop.png"
            afterSrc="/images/03b-zakat-new-desktop.png"
            beforeAlt="DeenRelief Zakat page V1 on WordPress"
            afterAlt="DeenRelief Zakat page V2 on Next.js with form-led layout"
            beforeLabel="V1 — WordPress"
            afterLabel="V2 — Next.js"
            rationale={
              <>
                Zakat is the highest-intent campaign page on the site. Visitors
                arriving here typically already know what they want to do —
                they&apos;re calculating an obligation and looking for
                somewhere trustworthy to fulfil it. The conversion task
                isn&apos;t <em>persuasion</em>, it&apos;s{" "}
                <em>frictionless completion</em>. The V1 page has the right
                elements (100% Zakat policy, calculator, FAQ) but spreads them
                across a long scroll that dilutes the donate moment with
                educational content the visitor doesn&apos;t need. V2 leads
                with the donation form — frequency toggle, amount tiers
                anchored by outcomes (
                <em>
                  &ldquo;Covers medical supplies for a child&apos;s
                  treatment&rdquo;
                </em>
                ), live Gift Aid uplift inline (
                <em>&ldquo;With Gift Aid: £125 at no extra cost&rdquo;</em>),
                and a clean cross-sell to Sadaqah for visitors who arrived on
                the wrong page. The Zakat calculator stays — but moves below
                the form, framed as a tool for visitors who need to calculate,
                not a precondition for everyone. Education stays available.
                The decision moment isn&apos;t buried under it.
              </>
            }
          />

          <BeforeAfterPair
            heading="V1 → V2: The Donation Form"
            imageCaption="GiveWP plugin (V1) → custom Stripe Elements checkout (V2)"
            beforeSrc="/images/04a-donation-old-desktop.png"
            afterSrc="/images/04b-donation-new-desktop.png"
            beforeAlt="DeenRelief V1 donation form rendered by the GiveWP WordPress plugin, showing fixed amount tiers and a Reclaim Gift Aid section"
            afterAlt="DeenRelief V2 donation form built on Stripe Elements, with frequency toggle, outcome-anchored amount tiers, and live Gift Aid uplift"
            beforeLabel="V1 — GiveWP on WordPress"
            afterLabel="V2 — Stripe Elements on Next.js"
            rationale={
              <>
                The V1 donation form is a third-party WordPress plugin
                (GiveWP) bolted into the page — it works, but every decision
                inside the form is constrained by what the plugin exposes. No
                frequency toggle on the same screen as the amounts, no live
                Gift Aid math (it&apos;s an explanatory paragraph instead),
                fixed amount tiers with no outcome anchoring, and the form
                visually drifts from the rest of the page because it ships
                with its own typography and spacing. The V2 form is built on
                Stripe Elements directly, designed as a first-class component
                of the page rather than an embed. Frequency toggle
                (one-time / monthly), outcome-anchored amount tiers (
                <em>
                  &ldquo;Feeds a displaced family of five in Gaza for one
                  month&rdquo;
                </em>
                ), the trust line (
                <em>&ldquo;Trusted by 3,200+ donors since 2013&rdquo;</em>),
                and live Gift Aid uplift (
                <em>&ldquo;Your £50 becomes £62.50 with Gift Aid&rdquo;</em>)
                all sit on the same screen as the amount selection. Apple
                Pay, Google Pay, and card live in a single Stripe payment
                element on the next step. Same conversion goal — the V2
                version puts every decision-relevant signal at the decision
                moment.
              </>
            }
          />
        </div>

        <div className="max-w-5xl mx-auto mt-12 lg:mt-20">
          <PageArchitecture />
          <ConversionEngineering />
          <TechSEO />
          <BuildStats />

          {/* 6j. Status */}
          <div>
            <SectionHeading>
              <h3 className="font-serif font-semibold text-charcoal text-h2 leading-tight mb-6">
                Status
              </h3>
            </SectionHeading>
            <p className="font-sans text-ink text-body max-w-3xl leading-relaxed">
              V2 currently in active development. Launching 2026. This case
              study will be updated with live performance metrics, accessibility
              scores and conversion data once the new site replaces the V1
              build in production.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
