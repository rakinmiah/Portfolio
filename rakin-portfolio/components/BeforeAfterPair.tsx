"use client";

import Image from "next/image";
import { motion } from "motion/react";

export type BeforeAfterPairProps = {
  heading: string;
  imageCaption: string;
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  beforeLabel: string;
  afterLabel: string;
  rationale: React.ReactNode;
};

export default function BeforeAfterPair({
  heading,
  imageCaption,
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  beforeLabel,
  afterLabel,
  rationale,
}: BeforeAfterPairProps) {
  return (
    <div className="mb-16 lg:mb-24">
      <motion.h3
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="font-serif font-semibold text-charcoal text-h2 leading-tight mb-3"
      >
        {heading}
      </motion.h3>
      <p className="font-sans text-small text-muted italic mb-8 max-w-3xl">
        {imageCaption}
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 mb-8">
        <motion.figure
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0 }}
          className="flex flex-col gap-3"
        >
          <div className="relative w-full aspect-[1440/900] overflow-hidden rounded-lg border border-rule bg-card">
            <Image
              src={beforeSrc}
              alt={beforeAlt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-top"
            />
          </div>
          <figcaption className="font-sans text-small text-muted">
            {beforeLabel}
          </figcaption>
        </motion.figure>
        <motion.figure
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
          className="flex flex-col gap-3"
        >
          <div className="relative w-full aspect-[1440/900] overflow-hidden rounded-lg border border-rule bg-card">
            <Image
              src={afterSrc}
              alt={afterAlt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-top"
            />
          </div>
          <figcaption className="font-sans text-small text-muted">
            {afterLabel}
          </figcaption>
        </motion.figure>
      </div>
      <div className="font-sans text-ink text-body leading-relaxed">
        {rationale}
      </div>
    </div>
  );
}
