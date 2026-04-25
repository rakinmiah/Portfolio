import SectionHeading from "./SectionHeading";

const stats = [
  { number: "26", label: "Distinct pages" },
  { number: "96", label: "Dynamic city pages" },
  { number: "24", label: "Custom components" },
  { number: "4", label: "Supabase migrations" },
  { number: "9", label: "Planning & design-system documents" },
];

export default function BuildStats() {
  return (
    <div className="mb-16 lg:mb-24">
      <SectionHeading>
        <h3 className="font-serif font-semibold text-charcoal text-h2 leading-tight mb-12">
          The Build
        </h3>
      </SectionHeading>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-10 gap-x-6">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col gap-2">
            <span className="font-serif font-semibold text-charcoal text-[3rem] leading-none">
              {s.number}
            </span>
            <span className="font-sans text-small text-muted leading-snug">
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
