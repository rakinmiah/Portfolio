import SectionHeading from "./SectionHeading";

export default function Contact() {
  return (
    <section className="px-6 sm:px-12 lg:px-16 py-20 lg:py-28">
      <div className="max-w-3xl mx-auto text-center">
        <SectionHeading>
          <p className="text-small text-muted uppercase tracking-widest font-sans">
            Get in touch
          </p>
          <h2 className="font-serif font-semibold text-charcoal text-h1 leading-tight mt-6">
            Let&apos;s talk.
          </h2>
        </SectionHeading>
        <p className="font-sans text-ink text-body max-w-2xl mx-auto mt-8 leading-relaxed">
          I&apos;m currently looking for full-time roles in web design,
          front-end development or CRO — ideally at agencies or product teams
          shipping ambitious work. If you&apos;re hiring, I&apos;d like to hear
          from you.
        </p>
        <div className="mt-12 flex flex-col items-center gap-4">
          <a
            href="mailto:rakin.rifat.miah@gmail.com"
            className="font-serif font-semibold text-charcoal hover:text-green transition-colors duration-200 text-h3"
          >
            rakin.rifat.miah@gmail.com
          </a>
          <p className="font-sans text-small text-muted">
            LinkedIn ·{" "}
            <a
              href="https://linkedin.com/in/rakinrifatmiah"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green transition-colors duration-200 underline-offset-4 hover:underline"
            >
              linkedin.com/in/rakinrifatmiah
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
