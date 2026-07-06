import { cn } from "@/lib/utils";

export default function Eyebrow({ children, className }) {
  return (
    <span
      className={cn(
        "mb-6 inline-flex items-center gap-2 rounded-full border border-[rgba(230,95,43,0.25)] bg-[var(--color-primary-light)] px-4 py-1 font-[family-name:var(--font-plus-jakarta)] text-xs font-semibold tracking-widest text-[var(--color-primary)] uppercase",
        className
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-primary)] animate-pulse-dot" />
      {children}
    </span>
  );
}
