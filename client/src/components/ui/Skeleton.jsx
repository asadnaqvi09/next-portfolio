import { cn } from "@/lib/utils";

export default function Skeleton({ className }) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-lg bg-neutral-200 dark:bg-neutral-800",
        className
      )}
    />
  );
}
