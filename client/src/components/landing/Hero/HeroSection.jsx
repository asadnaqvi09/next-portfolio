"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/motion";
import { site } from "@/lib/content";
import Container from "@/components/ui/Container";
import HeroPortrait from "@/components/landing/Hero/HeroPortrait";
import HeroCTA from "@/components/landing/Hero/HeroCTA";

export default function HeroSection() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".hero-label", { y: 30, opacity: 0, duration: 0.8 })
        .from(".hero-name", { y: 40, opacity: 0, duration: 0.9 }, "-=0.5")
        .from(".hero-title", { y: 30, opacity: 0, duration: 0.8 }, "-=0.5")
        .from(".hero-tagline", { y: 20, opacity: 0, duration: 0.7 }, "-=0.4")
        .from(".hero-cta", { y: 20, opacity: 0, duration: 0.7 }, "-=0.3")
        .from(".hero-portrait", { scale: 0.95, opacity: 0, duration: 1 }, "-=0.8");
    },
    { scope: sectionRef }
  );

  return (
    <section id="hero" ref={sectionRef} className="scroll-mt-24 py-8">
      <Container className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
        <div className="flex-1 space-y-6">
          <p className="hero-label text-xs font-medium uppercase tracking-[0.25em] text-neutral-500 dark:text-neutral-400">
            / Creating since 2020
          </p>
          <h1 className="hero-name text-5xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50 md:text-6xl lg:text-7xl">
            {site.name}
          </h1>
          <p className="hero-title text-sm font-medium uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400 md:text-base">
            {site.title}
          </p>
          <p className="hero-tagline max-w-[60ch] text-lg leading-relaxed text-neutral-600 dark:text-neutral-300 md:text-xl">
            {site.tagline}
          </p>
          <div className="hero-cta">
            <HeroCTA />
          </div>
        </div>
        <div className="hero-portrait flex-1">
          <HeroPortrait />
        </div>
      </Container>
    </section>
  );
}
