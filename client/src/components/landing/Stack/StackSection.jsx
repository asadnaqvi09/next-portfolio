import { stack } from "@/lib/content";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";

function StackGroup({ label, items }) {
  return (
    <div>
      <h3 className="mb-3 font-[family-name:var(--font-plus-jakarta)] text-xs font-semibold tracking-widest text-[var(--color-text-muted)] uppercase">
        {label}
      </h3>
      <div className="flex flex-wrap items-center gap-2">
        {items.map((item) => (
          <span
            key={item.label}
            className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border-subtle)] bg-[var(--color-surface)] px-4 py-2 font-[family-name:var(--font-plus-jakarta)] text-xs font-medium text-[var(--color-text-secondary)] transition-[border-color,box-shadow] duration-[var(--duration-fast)] ease-[var(--ease-smooth)] hover:shadow-[var(--shadow-glow)]"
          >
            <span
              className="h-1.5 w-1.5 shrink-0 rounded-full"
              style={{ background: item.color }}
            />
            {item.label}
          </span>
        ))}
      </div>
    </div>
  );
}

function StackBlock({ title, groups }) {
  return (
    <div>
      <h3 className="mb-6 font-[family-name:var(--font-outfit)] text-lg font-semibold text-[var(--color-text-primary)]">
        {title}
      </h3>
      <div className="flex flex-col gap-8">
        {groups.map((group) => (
          <StackGroup key={group.label} label={group.label} items={group.items} />
        ))}
      </div>
    </div>
  );
}

export default function StackSection() {
  return (
    <Section
      id="stack"
      className="border-t border-[var(--color-border-subtle)] bg-[var(--color-surface-alt)] py-24"
    >
      <SectionHeader eyebrow="Technical Stack" title="Tools I use to ship fast" />
      <div className="mx-auto flex max-w-3xl flex-col gap-16">
        <StackBlock title={stack.primary.title} groups={stack.primary.groups} />
        <StackBlock title={stack.other.title} groups={stack.other.groups} />
      </div>
    </Section>
  );
}
