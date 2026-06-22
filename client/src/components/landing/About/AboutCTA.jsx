"use client";

import { ArrowUpRight } from "lucide-react";
import { useLenis } from "@/components/providers/LenisProvider";
import { SCROLL_OFFSET } from "@/lib/motion";

export default function AboutCTA() {
  const lenis = useLenis();

  const scrollToContact = () => {
    if (!lenis) return;
    lenis.scrollTo("#contact", { offset: SCROLL_OFFSET });
    window.history.replaceState(null, "", "#contact");
  };

  return (
    <div className="flex items-center gap-4">
      <button
        type="button"
        onClick={scrollToContact}
        className="text-base font-medium text-neutral-900 transition hover:text-neutral-600 dark:text-neutral-50 dark:hover:text-neutral-300 md:text-lg"
      >
        Get Started
      </button>
      <button
        type="button"
        onClick={scrollToContact}
        aria-label="Get started"
        className="flex h-12 w-12 items-center justify-center rounded-xl border border-neutral-200 bg-neutral-100 text-neutral-900 transition hover:bg-neutral-200 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100 dark:hover:bg-neutral-700"
      >
        <ArrowUpRight className="h-5 w-5" />
      </button>
    </div>
  );
}
