import SectionHeading from "./SectionHeading";

const swatches = [
  { name: "Cream", hex: "#F7F4ED", bg: "bg-cream", border: "border-rule" },
  { name: "Charcoal", hex: "#1F1F1F", bg: "bg-charcoal", border: "border-charcoal" },
  { name: "Green", hex: "#2F5D3A", bg: "bg-green", border: "border-green" },
  { name: "Amber", hex: "#C8842D", bg: "bg-amber", border: "border-amber" },
  { name: "Deep", hex: "#1E3D26", bg: "bg-greenDeep", border: "border-greenDeep" },
];

export default function DesignSystem() {
  return (
    <div className="mb-16 lg:mb-24">
      <SectionHeading>
        <h3 className="font-serif font-semibold text-charcoal text-h2 leading-tight mb-3">
          Design System
        </h3>
      </SectionHeading>
      <p className="font-sans text-lead text-ink mb-12 max-w-3xl leading-snug">
        A custom system, built on Tailwind tokens — no UI library.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
        <div>
          <h4 className="font-sans font-medium text-charcoal text-h3 mb-3">
            Typography
          </h4>
          <p className="font-sans text-ink text-body leading-relaxed">
            Source Serif 4 (display) + DM Sans (body). Editorial weight paired
            with functional clarity.
          </p>
        </div>
        <div>
          <h4 className="font-sans font-medium text-charcoal text-h3 mb-3">
            Palette
          </h4>
          <div className="flex gap-2 mb-4">
            {swatches.map((s) => (
              <div
                key={s.name}
                className={`w-8 h-8 rounded-md ${s.bg} ${s.bg === "bg-cream" ? "border border-rule" : ""}`}
                title={`${s.name} ${s.hex}`}
                aria-label={`${s.name} ${s.hex}`}
              />
            ))}
          </div>
          <p className="font-sans text-small text-muted leading-relaxed">
            Cream base, charcoal text, green emphasis, amber accent, dark-green
            deep states.
          </p>
        </div>
        <div>
          <h4 className="font-sans font-medium text-charcoal text-h3 mb-3">
            Photography Discipline
          </h4>
          <p className="font-sans text-ink text-body leading-relaxed">
            Field photography with location and date overlay tags applied to
            every image — a visual discipline that separates the brand from the
            templated charity convention.
          </p>
        </div>
      </div>
    </div>
  );
}
