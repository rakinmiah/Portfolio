import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section className="px-6 sm:px-12 lg:px-16 py-16 lg:py-24">
      <div className="w-full max-w-5xl mx-auto">
        <SectionHeading>
          <p className="text-small text-muted uppercase tracking-widest font-sans">
            About
          </p>
          <hr className="border-0 border-t border-rule mt-4 mb-12" />
        </SectionHeading>
        <div className="space-y-6">
          <p className="font-sans text-ink text-body max-w-2xl leading-relaxed">
            I&apos;m a designer and developer focused on the work that turns
            visitors into customers — page architecture, design systems,
            conversion-led layout decisions, and the technical groundwork
            (performance, structured data, accessibility) that lets a site rank
            and convert at the same time.
          </p>
          <p className="font-sans text-ink text-body max-w-2xl leading-relaxed">
            I build in Next.js and WordPress depending on the project, design in
            Figma, and ship to Vercel. Recent University of Sussex graduate,
            based in Brighton, working with UK clients.
          </p>
        </div>
      </div>
    </section>
  );
}
