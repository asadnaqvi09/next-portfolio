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
    <div className="flex flex-wrap items-center gap-3">
      <button
        type="button"
        onClick={scrollToContact}
        className="inline-flex items-center justify-center rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200"
      >
        Get Started
      </button>
      <a
        href={site.resumePath}
        download
        className="inline-flex items-center justify-center gap-2 rounded-full border border-neutral-300 px-6 py-3 text-sm font-medium text-neutral-900 transition hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-100 dark:hover:bg-neutral-900"
      >
        <Download className="h-4 w-4" />
        Download CV
      </a>
    </div>
  );
}
