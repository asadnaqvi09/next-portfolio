"use client";

import { cn } from "@/lib/utils";

export default function SectionHeading({ label, title, className }) {
  return (
    <div className={cn("mb-10 md:mb-14", className)}>
      <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
        {label}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50 md:text-4xl lg:text-5xl">
        {title}
      </h2>
    </div>
  );
}
