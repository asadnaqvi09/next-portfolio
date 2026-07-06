"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { FolderOpen } from "lucide-react";
import { getFeaturedProjects } from "@/lib/content";
import { WORK_FILTERS } from "@/lib/constants";
import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import WorkCard from "@/components/landing/Work/WorkCard";
import { cn } from "@/lib/utils";

export default function WorkSection() {
  const projects = useMemo(() => getFeaturedProjects(), []);
  const [activeFilter, setActiveFilter] = useState("All");
  const filtered = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((p) => p.filters.includes(activeFilter));
  }, [projects, activeFilter]);
  const hasProjects = filtered.length > 0;
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", loop: false, containScroll: "trimSnaps" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi || !hasProjects) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect, hasProjects]);

  useEffect(() => {
    if (!emblaApi || !hasProjects) {
      setSelectedIndex(0);
      return;
    }
    emblaApi.reInit();
    emblaApi.scrollTo(0);
    setSelectedIndex(0);
  }, [emblaApi, filtered, hasProjects]);

  const scrollTo = useCallback(
    (index) => {
      emblaApi?.scrollTo(index);
    },
    [emblaApi]
  );

  return (
    <Section id="work" className="border-t border-[var(--color-border-subtle)] py-24">
      <div className="mb-12 text-center">
        <Eyebrow className="mb-6">Recent Projects</Eyebrow>
        <h2 className="mb-8 font-[family-name:var(--font-outfit)] text-[clamp(2rem,3.8vw,3.5rem)] leading-[1.15] font-semibold tracking-tight text-[var(--color-text-primary)]">
          Shipped and live
        </h2>
        <div className="mx-auto flex max-w-2xl flex-wrap items-center justify-center gap-3">
          {WORK_FILTERS.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              aria-pressed={activeFilter === filter}
              className={cn(
                "cursor-pointer rounded-full px-5 py-2 font-[family-name:var(--font-plus-jakarta)] text-xs font-semibold tracking-wide transition-all duration-[var(--duration-fast)] ease-[var(--ease-smooth)]",
                activeFilter === filter
                  ? "border border-transparent bg-[var(--color-primary)] text-[var(--color-text-inverse)] shadow-[var(--shadow-sm)]"
                  : "border border-[var(--color-border-subtle)] bg-[var(--color-surface)] text-[var(--color-text-secondary)] hover:border-[var(--color-text-primary)] hover:text-[var(--color-text-primary)]"
              )}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
      {!hasProjects ? (
        <div className="flex flex-col items-center justify-center gap-4 rounded-[var(--radius-lg)] border border-dashed border-[var(--color-border-subtle)] bg-[var(--color-surface)] px-8 py-20 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--color-border-subtle)] bg-[var(--color-surface-alt)] text-[var(--color-text-muted)]">
            <FolderOpen className="h-5 w-5" />
          </div>
          <p className="font-[family-name:var(--font-plus-jakarta)] text-base font-medium text-[var(--color-text-primary)]">
            No projects currently available
          </p>
          <p className="max-w-sm font-[family-name:var(--font-plus-jakarta)] text-sm text-[var(--color-text-secondary)]">
            There are no projects in the {activeFilter} category right now. Try another filter.
          </p>
        </div>
      ) : (
        <div className="w-full overflow-hidden rounded-[var(--radius-lg)]">
          <div ref={emblaRef} className="w-full overflow-hidden">
            <div className="flex w-full">
              {filtered.map((project) => (
                <div
                  key={project.id}
                  className="min-w-0 shrink-0 grow-0 basis-full px-3"
                >
                  <WorkCard project={project} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {hasProjects ? (
        <div className="mt-12 flex items-center justify-center gap-2">
          {filtered.map((project, index) => (
            <button
              key={project.id}
              type="button"
              onClick={() => scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={selectedIndex === index}
              className={cn(
                "h-2 cursor-pointer rounded-full transition-all duration-[var(--duration-fast)]",
                selectedIndex === index
                  ? "w-6 bg-[var(--color-primary)]"
                  : "w-2 bg-[var(--color-border-subtle)] hover:bg-[var(--color-text-muted)]"
              )}
            />
          ))}
        </div>
      ) : null}
    </Section>
  );
}
