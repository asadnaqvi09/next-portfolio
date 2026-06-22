"use client";

import ImageWithSkeleton from "@/components/ui/ImageWithSkeleton";

export default function HeroPortrait() {
  return (
    <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl border border-neutral-200 dark:border-neutral-800 md:max-w-md">
      <ImageWithSkeleton
        src="/assets/Hero-Image.jpg"
        alt="Asad Abbas"
        fill
        priority
        sizes="(max-width: 768px) 100vw, 400px"
        containerClassName="h-full w-full"
      />
    </div>
  );
}
