import SectionHeading from "./SectionHeading";

const blocks = [
  {
    title: "Design",
    body: "Figma · Adobe Creative Cloud · design systems · typography pairings · brand strategy · editorial layout · responsive composition",
  },
  {
    title: "Development",
    body: "Next.js · React · TypeScript · Tailwind CSS · WordPress · Webflow · Shopify · Git · Vercel · MDX",
  },
  {
    title: "CRO & Conversion",
    body: "Landing-page architecture · A/B testing · form optimisation · checkout flow design · mobile-first conversion patterns · trust-signal placement",
  },
  {
    title: "SEO & Performance",
    body: "Technical SEO · structured data (Schema.org) · Core Web Vitals · next/font & next/image · sitemaps · canonical discipline · meta architecture",
  },
];

export default function Toolkit() {
  return (
    <section className="px-6 sm:px-12 lg:px-16 py-20 lg:py-32">
      <div className="max-w-5xl mx-auto">
        <SectionHeading>
          <p className="text-small text-muted uppercase tracking-widest font-sans">
            Toolkit
          </p>
          <hr className="border-0 border-t border-rule mt-4 mb-10" />
          <h2 className="font-serif font-semibold text-charcoal text-h1 leading-tight mb-16">
            What I use
          </h2>
        </SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
          {blocks.map((b) => (
            <div key={b.title}>
              <h3 className="font-sans font-medium text-charcoal text-h3 mb-3">
                {b.title}
              </h3>
              <p className="font-sans text-ink text-body leading-relaxed">
                {b.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
