import SectionHeading from "./SectionHeading";

const items = [
  {
    n: "1",
    title: "Hero-integrated donation form on mobile",
    body: "On mobile, the donation form lives inside the hero section. Desktop reverts to a more traditional hero-then-form layout where the photography earns the space. Mobile traffic — the majority of charity donation traffic — collapses the visit-to-donate distance.",
  },
  {
    n: "2",
    title: "Live Gift Aid math",
    body: 'The donation amount and Gift Aid uplift recalculate inline as the donor types — turning a static checkbox into a tangible "your £100 becomes £125" moment at the exact second the decision is being made.',
  },
  {
    n: "3",
    title: "Outcome-anchored amount tiers",
    body: 'Donation amounts pair each tier with its specific real-world outcome ("£50 — feeds a displaced family for a month") rather than abstract numbers. The decision becomes choosing an outcome, not a price point. One tier flagged "Popular" anchors the choice.',
  },
  {
    n: "4",
    title: "Social proof at the decision moment",
    body: '"Trusted by 3,200+ donors since 2013" sits next to the donation form. Trust signals live where the friction is — at the conversion event — rather than buried in the footer or on a separate trust page that nobody visits.',
  },
];

export default function ConversionEngineering() {
  return (
    <div className="mb-16 lg:mb-24">
      <SectionHeading>
        <h3 className="font-serif font-semibold text-charcoal text-h2 leading-tight mb-3">
          Conversion Engineering
        </h3>
      </SectionHeading>
      <p className="font-sans text-lead text-ink mb-12 max-w-3xl leading-snug">
        The decisions designed to lift donation completion rate, not just
        traffic.
      </p>
      <ol className="space-y-10 max-w-3xl">
        {items.map((item) => (
          <li key={item.n} className="grid grid-cols-[auto_1fr] gap-6">
            <span
              aria-hidden="true"
              className="font-serif font-semibold text-amber text-h2 leading-none"
            >
              {item.n}
            </span>
            <div>
              <h4 className="font-sans font-medium text-charcoal text-h3 mb-2">
                {item.title}
              </h4>
              <p className="font-sans text-ink text-body leading-relaxed">
                {item.body}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
