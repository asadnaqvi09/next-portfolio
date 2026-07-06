import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

function GitHubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="15"
      height="15"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

export default function WorkCard({ project }) {
  return (
    <article className="group flex h-[580px] w-full flex-col overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border-subtle)] bg-[var(--color-surface)] transition-all duration-[var(--duration-slow)] ease-[var(--ease-smooth)] hover:border-[var(--color-primary)] hover:shadow-[var(--shadow-sm)] md:h-[420px] md:flex-row">
      <a
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative h-[240px] w-full shrink-0 cursor-pointer overflow-hidden bg-[var(--color-surface-alt)] select-none md:h-full md:w-[40%]"
      >
        <Image
          src={project.thumbnail}
          alt={`${project.title} preview`}
          fill
          sizes="(max-width: 768px) 100vw, 40vw"
          className="object-contain transition-transform duration-[var(--duration-slow)] ease-[var(--ease-smooth)] group-hover:scale-[1.03]"
        />
        <div className="absolute top-4 left-4 z-10 flex flex-wrap gap-1.5">
          {project.filters.map((filter) => (
            <span
              key={filter}
              className="rounded-full border border-[var(--color-border-subtle)] bg-[var(--color-surface)]/85 px-3 py-1 font-[family-name:var(--font-plus-jakarta)] text-[10px] font-semibold tracking-wider text-[var(--color-text-secondary)] uppercase backdrop-blur-[6px]"
            >
              {filter}
            </span>
          ))}
        </div>
      </a>
      <div className="flex min-h-0 flex-1 flex-col p-8 md:w-[60%] md:p-10">
        <div className="shrink-0">
          <h3 className="font-[family-name:var(--font-outfit)] text-2xl font-bold text-[var(--color-text-primary)] transition-colors duration-[var(--duration-fast)] group-hover:text-[var(--color-primary)] md:text-3xl">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-inherit no-underline hover:underline"
            >
              {project.title}
            </a>
          </h3>
          <p className="mt-1.5 font-[family-name:var(--font-plus-jakarta)] text-xs font-semibold tracking-widest text-[var(--color-text-muted)] uppercase">
            {project.subtitle}
          </p>
        </div>
        <p className="mt-5 line-clamp-3 flex-1 font-[family-name:var(--font-plus-jakarta)] text-base leading-[1.7] text-[var(--color-text-secondary)] md:line-clamp-4">
          {project.description}
        </p>
        <div className="mt-5 shrink-0 border-t border-[var(--color-border-subtle)] pt-4">
          <div className="flex min-h-[2rem] flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full border border-[rgba(230,95,43,0.1)] bg-[var(--color-primary-light)] px-3 py-1 font-[family-name:var(--font-plus-jakarta)] text-[10px] font-medium tracking-wide text-[var(--color-primary)]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-4 flex shrink-0 items-center justify-end gap-2">
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--color-border-subtle)] bg-[var(--color-surface)] text-[var(--color-text-secondary)] transition-all duration-[var(--duration-fast)] hover:-translate-y-0.5 hover:border-transparent hover:bg-[var(--color-text-primary)] hover:text-[var(--color-surface)]"
              title="View GitHub Repository"
              aria-label="View GitHub Repository"
            >
              <GitHubIcon />
            </a>
          ) : null}
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--color-border-subtle)] bg-[var(--color-surface)] text-[var(--color-text-secondary)] transition-all duration-[var(--duration-fast)] hover:-translate-y-0.5 hover:border-transparent hover:bg-[var(--color-primary)] hover:text-[var(--color-text-inverse)]"
            title="View Live Demo"
            aria-label="View Live Demo"
          >
            <ArrowUpRight className="h-[15px] w-[15px]" />
          </a>
        </div>
      </div>
    </article>
  );
}
