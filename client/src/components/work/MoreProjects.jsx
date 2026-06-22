"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ImageWithSkeleton from "@/components/ui/ImageWithSkeleton";

export default function MoreProjects({ projects }) {
  if (!projects.length) return null;

  return (
    <section id="work-section" className="mt-20 border-t border-neutral-200 pt-16 dark:border-neutral-800 md:mt-28 md:pt-20">
      <h2 className="mb-8 text-2xl font-semibold text-neutral-900 dark:text-neutral-50 md:text-3xl">
        More Projects
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <Link
            key={project.id}
            href={`/work/${project.slug}`}
            className="group flex items-center gap-4 rounded-2xl border border-neutral-200 p-4 transition duration-300 ease-out will-change-transform hover:-translate-y-1 hover:border-neutral-300 hover:shadow-md dark:border-neutral-800 dark:hover:border-neutral-700 md:p-5 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
          >
            <div className="relative h-20 w-28 shrink-0 overflow-hidden rounded-xl">
              <ImageWithSkeleton
                src={project.thumbnail}
                alt={project.title}
                fill
                sizes="112px"
                containerClassName="h-full w-full"
                imageClassName="transition duration-500 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
              />
            </div>
            <div className="flex flex-1 items-center justify-between gap-3">
              <div>
                <h3 className="font-medium text-neutral-900 dark:text-neutral-50">
                  {project.title}
                </h3>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                  {project.category}
                </p>
              </div>
              <ArrowUpRight className="h-5 w-5 text-neutral-400 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-neutral-900 dark:group-hover:text-neutral-100" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
