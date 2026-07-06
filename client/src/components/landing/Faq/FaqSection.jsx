"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { faq } from "@/lib/content";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <Section
      id="faq"
      className="border-t border-[var(--color-border-subtle)] bg-[var(--color-surface-alt)] py-24"
    >
      <SectionHeader eyebrow="Common Questions" title="Clear insights on working together" />
      <div className="mx-auto flex max-w-3xl flex-col">
        {faq.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={item.question} className="border-b border-[var(--color-border-subtle)] py-6">
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
                className="flex w-full cursor-pointer items-center justify-between border-none bg-transparent p-0 text-left"
              >
                <span className="pr-4 font-[family-name:var(--font-plus-jakarta)] text-base font-semibold text-[var(--color-text-primary)]">
                  {item.question}
                </span>
                <Plus
                  className={cn(
                    "h-[18px] w-[18px] shrink-0 text-[var(--color-text-muted)] transition-transform duration-[var(--duration-fast)]",
                    isOpen && "rotate-45"
                  )}
                />
              </button>
              {isOpen ? (
                <p className="mt-4 font-[family-name:var(--font-plus-jakarta)] text-sm leading-[1.7] text-[var(--color-text-secondary)]">
                  {item.answer}
                </p>
              ) : null}
            </div>
          );
        })}
      </div>
    </Section>
  );
}
