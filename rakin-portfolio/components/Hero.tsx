"use client";

import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="relative flex items-center px-6 sm:px-12 lg:px-16 pt-32 pb-16">
      <div className="w-full max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-8"
        >
          <p className="text-small text-muted uppercase tracking-widest font-sans">
            Portfolio · 2026
          </p>
          <h1 className="font-serif font-bold text-charcoal text-[3rem] sm:text-[4rem] lg:text-display leading-[1.05] tracking-tight">
            Rakin Miah
          </h1>
          <p className="font-sans text-ink text-lead max-w-2xl leading-snug">
            I design and build high-converting websites and landing pages.
          </p>
          <p className="font-sans text-ink text-body max-w-xl leading-relaxed">
            Currently rebuilding deenrelief.org — a charity donation platform
            with a custom Stripe checkout, full design system and technical SEO
            foundation.
          </p>
          <div className="flex flex-col gap-4 mt-4">
            <a
              href="#case-study"
              className="group inline-flex items-center gap-2 font-sans text-green hover:text-greenDeep transition-colors duration-200 w-fit text-body"
            >
              <span>See the case study</span>
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href="mailto:rakin.rifat.miah@gmail.com"
              className="font-sans text-muted hover:text-ink transition-colors duration-200 text-small w-fit"
            >
              rakin.rifat.miah@gmail.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
