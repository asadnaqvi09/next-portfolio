import { cn } from "@/lib/utils";

export default function Container({ className, children, as: Tag = "div" }) {
  return (
    <Tag className={cn("mx-auto max-w-6xl px-4 md:px-6", className)}>
      {children}
    </Tag>
  );
}
