"use client";

import ImageWithSkeleton from "@/components/ui/ImageWithSkeleton";

export default function WorkHero({ project }) {
  return (
    <div className="relative mb-10 aspect-[21/9] overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 md:mb-14">
      <ImageWithSkeleton
        src={project.thumbnail}
        alt={project.title}
        width={1920}
        height={1200}
        priority
        sizes="(max-width: 768px) 100vw, 1152px"
        containerClassName="h-full w-full"
        imageClassName="transition duration-500 ease-out hover:scale-105 motion-reduce:transition-none motion-reduce:hover:scale-100"
      />
    </div>
  );
}
