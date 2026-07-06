import { Cpu, Monitor, PanelRightOpen, PanelsTopLeft } from "lucide-react";
import { capabilities } from "@/lib/content";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";

const ICONS = {
  "panels-top-left": PanelsTopLeft,
  monitor: Monitor,
  "panel-right-open": PanelRightOpen,
  cpu: Cpu,
};

const ACCENT_STYLES = {
  primary: {
    bg: "var(--color-primary-light)",
    color: "var(--color-primary)",
  },
  teal: {
    bg: "var(--color-teal-light)",
    color: "var(--color-teal)",
  },
  muted: {
    bg: "var(--color-surface-alt)",
    color: "var(--color-text-primary)",
  },
};

export default function CapabilitiesSection() {
  return (
    <Section id="capabilities" className="border-t border-[var(--color-border-subtle)] py-24">
      <SectionHeader eyebrow="What I Build" title="Services crafted for speed and quality" />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {capabilities.map((item) => {
          const Icon = ICONS[item.icon];
          const accent = ACCENT_STYLES[item.accent];
          return (
            <div
              key={item.id}
              className="flex flex-col gap-4 rounded-[var(--radius-lg)] border border-[var(--color-border-subtle)] bg-[var(--color-surface)] p-8 transition-all duration-[var(--duration-fast)] ease-[var(--ease-spring)] hover:-translate-y-1 hover:shadow-[var(--shadow-sm)]"
            >
              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[var(--radius-sm)]"
                style={{ background: accent.bg }}
              >
                <Icon className="h-[18px] w-[18px]" style={{ color: accent.color }} />
              </div>
              <h3 className="font-[family-name:var(--font-outfit)] text-xl font-semibold text-[var(--color-text-primary)]">
                {item.title}
              </h3>
              <p className="font-[family-name:var(--font-plus-jakarta)] text-sm leading-[1.55] text-[var(--color-text-secondary)]">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
