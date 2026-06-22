"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Skeleton from "@/components/ui/Skeleton";

export default function ImageWithSkeleton({
  containerClassName,
  imageClassName,
  alt,
  fill,
  ...props
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={cn("relative overflow-hidden", containerClassName)}>
      {!loaded && <Skeleton className="absolute inset-0 h-full w-full" />}
      <Image
        {...props}
        fill={fill}
        alt={alt}
        onLoad={() => setLoaded(true)}
        className={cn(
          "object-cover transition-opacity duration-500",
          loaded ? "opacity-100" : "opacity-0",
          imageClassName
        )}
      />
    </div>
  );
}
