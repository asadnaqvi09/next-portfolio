"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/motion";

export default function WorkContent({ summary, sections }) {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const blocks = containerRef.current?.querySelectorAll(".work-block");
      if (!blocks?.length) return;
      ScrollTrigger.batch(blocks, {
        start: "top 85%",
        onEnter: (batch) =>
          gsap.from(batch, {
            y: 40,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
            overwrite: true,
          }),
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="max-w-3xl">
      <p className="work-block mb-12 text-lg leading-relaxed text-neutral-600 dark:text-neutral-300 md:text-xl">
        {summary}
      </p>
      <div className="space-y-12 md:space-y-16">
        {sections.map((section) => (
          <article key={section.heading} className="work-block">
            <h2 className="mb-4 text-2xl font-semibold text-neutral-900 dark:text-neutral-50 md:text-3xl">
              {section.heading}
            </h2>
            <div className="space-y-4">
              {section.paragraphs.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-base leading-relaxed text-neutral-600 dark:text-neutral-400 md:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
