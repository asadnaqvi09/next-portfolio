import Container from "@/components/ui/Container";
import HeroCTA from "@/components/landing/Hero/HeroCTA";
import { site } from "@/lib/content";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden pt-32 pb-24 md:pt-36 md:pb-32"
    >
      <Container className="text-center">
        <div
          className="animate-fade-up mb-8 inline-flex items-center gap-2 rounded-full border border-[rgba(230,95,43,0.25)] bg-[var(--color-primary-light)] px-4 py-1 font-[family-name:var(--font-plus-jakarta)] text-xs font-semibold tracking-widest text-[var(--color-primary)] uppercase"
          style={{ animationDelay: "0.1s" }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-primary)] animate-pulse-dot" />
          {site.hero.eyebrow}
        </div>
        <h1 className="mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          {site.hero.headline.map((line) => (
            <span
              key={line}
              className="block font-[family-name:var(--font-outfit)] text-[clamp(2.8rem,5.5vw,5rem)] leading-[1.15] font-bold tracking-[-0.03em] text-[var(--color-text-primary)]"
            >
              {line}
            </span>
          ))}
        </h1>
        <p
          className="mx-auto mb-10 max-w-[560px] animate-fade-up font-[family-name:var(--font-plus-jakarta)] text-base leading-[1.55] font-normal text-[var(--color-text-secondary)]"
          style={{ animationDelay: "0.34s" }}
        >
          {site.hero.subtext}
        </p>
        <div className="mb-16 animate-fade-up" style={{ animationDelay: "0.48s" }}>
          <HeroCTA />
        </div>
        <div
          className="flex animate-fade-up flex-wrap items-center justify-center gap-2"
          style={{ animationDelay: "0.6s" }}
        >
          {site.techPills.map((pill) => (
            <span
              key={pill.label}
              className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border-subtle)] bg-[var(--color-surface)] px-3 py-1 font-[family-name:var(--font-plus-jakarta)] text-xs font-medium text-[var(--color-text-secondary)] transition-[border-color,box-shadow] duration-[var(--duration-fast)] ease-[var(--ease-smooth)] hover:border-[var(--color-primary)] hover:shadow-[var(--shadow-glow)]"
            >
              <span
                className="h-1.5 w-1.5 shrink-0 rounded-full"
                style={{ background: pill.color }}
              />
              {pill.label}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
