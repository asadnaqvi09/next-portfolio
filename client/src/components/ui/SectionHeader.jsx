import { cn } from "@/lib/utils";
import Eyebrow from "@/components/ui/Eyebrow";

export default function SectionHeader({ eyebrow, title, className, children }) {
  return (
    <div className={cn("mb-16 text-center", className)}>
      {eyebrow ? <Eyebrow className="mb-6">{eyebrow}</Eyebrow> : null}
      <h2 className="font-[family-name:var(--font-outfit)] text-[clamp(2rem,3.8vw,3.5rem)] leading-[1.15] font-semibold tracking-tight text-[var(--color-text-primary)]">
        {title}
      </h2>
      {children}
    </div>
  );
}
