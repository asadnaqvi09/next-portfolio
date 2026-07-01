import { ArrowUpRight } from "lucide-react";
import ImageWithSkeleton from "@/components/ui/ImageWithSkeleton";

export default function WorkCard({ project }) {
  const liveLabel = project.liveLabel || "Live Link";

  return (
    <article className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900">
      <div className="relative aspect-[16/10] overflow-hidden">
        <ImageWithSkeleton
          src={project.thumbnail}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          containerClassName="h-full w-full"
          imageClassName="transition-transform duration-500 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        />
      </div>
      <div className="flex items-start justify-between gap-4 p-5 md:p-6">
        <div>
          <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50 md:text-xl">
            {project.title}
          </h3>
          <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
            {project.category} · {project.year}
          </p>
        </div>
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${liveLabel} — ${project.title}`}
          className="group/link mt-1 flex shrink-0 items-center gap-2 text-neutral-400 transition-colors duration-300 hover:text-neutral-900 dark:hover:text-neutral-100"
        >
          <span className="pointer-events-none hidden overflow-hidden text-sm font-medium whitespace-nowrap opacity-0 transition-all duration-300 group-hover/link:opacity-100 md:inline-block md:max-w-0 md:group-hover/link:max-w-24">
            {liveLabel}
          </span>
          <ArrowUpRight className="h-5 w-5 shrink-0" />
        </a>
      </div>
    </article>
  );
}
