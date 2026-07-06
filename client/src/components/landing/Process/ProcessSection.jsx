import { process } from "@/lib/content";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";

export default function ProcessSection() {
  return (
    <Section
      id="process"
      className="border-t border-[var(--color-border-subtle)] bg-[var(--color-surface)] py-24"
    >
      <SectionHeader eyebrow="How I Work" title="Why work with me?" />
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {process.map((item) => (
          <div key={item.number} className="flex flex-col gap-4">
            <span className="font-[family-name:var(--font-outfit)] text-2xl font-bold text-[var(--color-primary)]">
              {item.number}
            </span>
            <div className="h-px w-full bg-[var(--color-border-subtle)]" />
            <h3 className="font-[family-name:var(--font-outfit)] text-xl font-semibold text-[var(--color-text-primary)]">
              {item.title}
            </h3>
            <p className="font-[family-name:var(--font-plus-jakarta)] text-sm leading-[1.55] text-[var(--color-text-secondary)]">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
