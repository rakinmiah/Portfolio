import SectionHeading from "./SectionHeading";

export default function PageArchitecture() {
  return (
    <div className="mb-16 lg:mb-24">
      <SectionHeading>
        <h3 className="font-serif font-semibold text-charcoal text-h2 leading-tight mb-3">
          Page Architecture (V2)
        </h3>
      </SectionHeading>
      <p className="font-sans text-lead text-ink mb-12 max-w-3xl leading-snug">
        26 distinct pages plus 96 dynamically-rendered city-specific pages, each
        engineered for a specific moment in the donor journey.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
        <div>
          <h4 className="font-sans font-medium text-charcoal text-h3 mb-2">
            Block 1: Campaign Pages
          </h4>
          <p className="font-sans text-small text-muted italic mb-4">
            Palestine, Cancer Care, Orphan Sponsorship, Build a School, Clean
            Water, UK Homeless, Zakat, Sadaqah
          </p>
          <p className="font-sans text-ink text-body leading-relaxed">
            Each campaign page follows the same conversion structure:
            keyword-matched H1, field-evidence photography, donation form with
            frequency toggle, outcome-anchored amount tiers, live Gift Aid
            math, three-step delivery assurance, FAQ with structured data,
            final CTA. Designed so a paid-traffic visitor can reach the donate
            button within a single thumb scroll on mobile.
          </p>
        </div>
        <div>
          <h4 className="font-sans font-medium text-charcoal text-h3 mb-2">
            Block 2: Donation Flow
          </h4>
          <p className="font-sans text-small text-muted italic mb-4">
            Stripe Elements checkout — campaign and amount seeded via URL
          </p>
          <p className="font-sans text-ink text-body leading-relaxed">
            Custom Stripe-powered donation flow handling one-time donations,
            monthly recurring subscriptions, Gift Aid declarations with live
            tax-uplift calculation, and a self-service donor portal via signed
            magic-link URLs. Apple Pay, Google Pay, and card supported in a
            single payment element.
          </p>
        </div>
        <div>
          <h4 className="font-sans font-medium text-charcoal text-h3 mb-2">
            Block 3: Content & SEO Pages
          </h4>
          <p className="font-sans text-small text-muted italic mb-4">
            MDX-driven blog · 96 SSR prayer-times pages · structured-data
            foundation
          </p>
          <p className="font-sans text-ink text-body leading-relaxed">
            A blog system on MDX with FAQ schema per article. A prayer-times
            directory generating 96 city-specific pages server-side, each with
            its own structured data — capturing high-intent organic traffic
            outside the donation funnel. NGO, FundraisingEvent, DonateAction,
            FAQPage, BreadcrumbList and Article schema across the site.
          </p>
        </div>
      </div>
    </div>
  );
}
