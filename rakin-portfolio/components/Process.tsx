import SectionHeading from "./SectionHeading";

const steps = [
  {
    n: "01",
    title: "Strategy before pixels",
    body: "I start with a positioning brief — competitor teardowns, white-space analysis, the specific feeling the brand should leave the visitor with. Visual decisions get easier when the strategic decision is already made.",
  },
  {
    n: "02",
    title: "Design system, then pages",
    body: "I build the design system first — typography pairings, colour tokens, spacing rhythm, the photographic and component vocabulary that gives the brand its visual differentiation — then compose pages from it. Pages built without a system look stitched together.",
  },
  {
    n: "03",
    title: "Conversion-led page architecture",
    body: "Every page gets a single primary action. Layout, hierarchy, CTA placement, mobile-first form integration, and copy all bend toward making that action obvious and easy. Decoration that doesn't serve the action gets cut.",
  },
  {
    n: "04",
    title: "Ship the technical foundation",
    body: "Performance (Core Web Vitals), structured data (the right schema for the page type), accessibility (WCAG-compliant by default), analytics and consent (UK GDPR / PECR / ICO-compliant). The unsexy work that decides whether the site ranks and converts six months later.",
  },
];

export default function Process() {
  return (
    <section className="px-6 sm:px-12 lg:px-16 py-16 lg:py-24">
      <div className="max-w-5xl mx-auto">
        <SectionHeading>
          <p className="text-small text-muted uppercase tracking-widest font-sans">
            Process
          </p>
          <hr className="border-0 border-t border-rule mt-4 mb-10" />
          <h2 className="font-serif font-semibold text-charcoal text-h1 leading-tight">
            How I work
          </h2>
        </SectionHeading>
        <p className="font-sans text-lead text-ink mt-6 mb-16 max-w-2xl leading-snug">
          Every project, four steps in order. No skipping.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
          {steps.map((s) => (
            <div key={s.n}>
              <p className="font-serif font-semibold text-amber text-h2 leading-none mb-4">
                {s.n}
              </p>
              <h3 className="font-sans font-medium text-charcoal text-h3 mb-3">
                {s.title}
              </h3>
              <p className="font-sans text-ink text-body leading-relaxed">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
