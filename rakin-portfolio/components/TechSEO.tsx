import SectionHeading from "./SectionHeading";

export default function TechSEO() {
  return (
    <div className="mb-16 lg:mb-24">
      <SectionHeading>
        <h3 className="font-serif font-semibold text-charcoal text-h2 leading-tight mb-8">
          Technical SEO Foundation
        </h3>
      </SectionHeading>
      <p className="font-sans text-ink text-body max-w-3xl leading-relaxed">
        The V2 ships with the structured-data and performance fundamentals most
        charity sites skip. NGO schema sitewide; FundraisingEvent and
        DonateAction schema on every campaign page; FAQPage schema on campaign
        pages and blog posts; BreadcrumbList for navigation; per-city schema on
        the prayer-times directory. Sitemap and robots routes generated
        programmatically from live content.{" "}
        <code className="font-mono text-small bg-rule/40 px-1.5 py-0.5 rounded">
          next/font
        </code>{" "}
        with{" "}
        <code className="font-mono text-small bg-rule/40 px-1.5 py-0.5 rounded">
          display: swap
        </code>
        ,{" "}
        <code className="font-mono text-small bg-rule/40 px-1.5 py-0.5 rounded">
          next/image
        </code>{" "}
        with explicit responsive sizes, partial database indexes for hot queries
        — performance optimisation built in from the first commit rather than
        retrofitted.
      </p>
    </div>
  );
}
