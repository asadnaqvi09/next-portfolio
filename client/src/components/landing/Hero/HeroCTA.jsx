"use client";

import { Download } from "lucide-react";
import { site } from "@/lib/content";
import { useLenis } from "@/components/providers/LenisProvider";
import { SCROLL_OFFSET } from "@/lib/motion";

export default function HeroCTA() {
  const lenis = useLenis();

  const scrollToContact = () => {
    if (!lenis) return;
    lenis.scrollTo("#contact", { offset: SCROLL_OFFSET });
    window.history.replaceState(null, "", "#contact");
  };

  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      <button
        type="button"
        onClick={scrollToContact}
        className="inline-flex cursor-pointer items-center gap-2 rounded-full border-none bg-[var(--color-primary)] px-8 py-3 font-[family-name:var(--font-plus-jakarta)] text-sm font-semibold tracking-wide text-[var(--color-text-inverse)] no-underline transition-[background,transform,box-shadow] duration-[var(--duration-fast)] ease-[var(--ease-smooth)] hover:-translate-y-0.5 hover:bg-[var(--color-primary-hover)] hover:shadow-[var(--shadow-md)]"
      >
        Get Started
      </button>
      <a
        href={site.resumePath}
        download
        className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border-subtle)] bg-transparent px-8 py-3 font-[family-name:var(--font-plus-jakarta)] text-sm font-semibold tracking-wide text-[var(--color-text-primary)] no-underline transition-[border-color,background,transform] duration-[var(--duration-fast)] ease-[var(--ease-smooth)] hover:-translate-y-0.5 hover:border-[var(--color-text-primary)] hover:bg-[rgba(14,16,19,0.03)] dark:hover:bg-[rgba(250,249,246,0.05)]"
      >
        <Download className="h-4 w-4" />
        Download CV
      </a>
    </div>
  );
}
