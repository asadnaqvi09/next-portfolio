import { cn } from "@/lib/utils";

export default function Skeleton({ className }) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-[var(--radius-sm)] bg-[var(--color-surface-alt)]",
        className
      )}
    />
  );
}
