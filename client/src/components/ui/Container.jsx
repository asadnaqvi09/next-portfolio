import { cn } from "@/lib/utils";

export default function Container({ className, children, as: Tag = "div" }) {
  return (
    <Tag className={cn("mx-auto w-full max-w-[1280px] px-8", className)}>
      {children}
    </Tag>
  );
}
