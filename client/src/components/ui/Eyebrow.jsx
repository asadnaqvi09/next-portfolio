import { cn } from "@/lib/utils";

export default function Eyebrow({ children, className }) {
  return <span className={cn("eyebrow", className)}>{children}</span>;
}
