import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ImageWithSkeleton from "@/components/ui/ImageWithSkeleton";

export default function ProductCard({ project }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group block overflow-hidden rounded-2xl border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900"
    >
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
        <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-neutral-400 transition-colors duration-300 group-hover:text-neutral-900 dark:group-hover:text-neutral-100" />
      </div>
    </Link>
  );
}
