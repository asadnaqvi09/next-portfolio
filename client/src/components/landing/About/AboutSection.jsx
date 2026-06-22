"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/motion";
import { site } from "@/lib/content";
import Section from "@/components/ui/Section";
import ScrollRevealText from "@/components/landing/About/ScrollRevealText";
import AboutPortrait from "@/components/landing/About/AboutPortrait";
import AboutCTA from "@/components/landing/About/AboutCTA";

export default function AboutSection() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const cols = sectionRef.current?.querySelectorAll(".about-col");
      if (!cols?.length) return;
      gsap.from(cols, {
        y: 40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <Section id="about" ref={sectionRef}>
      <div className="grid gap-12 lg:grid-cols-[1fr_auto_1fr] lg:items-start lg:gap-10 xl:gap-16">
        <div className="about-col flex flex-col items-center gap-6 text-center lg:items-start lg:text-left">
          <h2 className="text-5xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50 md:text-6xl lg:text-7xl">
            Hey!
          </h2>
          <ScrollRevealText text="From idea to launch." size="md" align="start" className="w-full" />
        </div>
        <div className="about-col md:block hidden mx-auto w-full max-w-xs lg:max-w-[280px] xl:max-w-xs">
          <AboutPortrait />
        </div>
        <div className="about-col flex flex-col items-center gap-8 text-center lg:items-start lg:text-left">
          <p className="text-base leading-relaxed text-neutral-600 dark:text-neutral-300 md:text-lg">
            {site.about}
          </p>
          <AboutCTA />
        </div>
      </div>
      <div className="mt-16 md:mt-24">
        <ScrollRevealText text={site.scrollText} />
      </div>
    </Section>
  );
}
