"use client";

import ImageWithSkeleton from "@/components/ui/ImageWithSkeleton";

export default function AboutPortrait() {
  return (
    <div className="relative mx-auto aspect-[4/5] w-full overflow-hidden rounded-3xl border border-neutral-200 dark:border-neutral-800">
      <ImageWithSkeleton
        src="/assets/Hero-Image.jpg"
        alt="Asad Abbas"
        fill
        sizes="(max-width: 1024px) 80vw, 360px"
        containerClassName="h-full w-full"
      />
    </div>
  );
}
