"use client";

import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function ShellMain({ children }) {
  const pathname = usePathname();
  const isWorkPage = pathname.startsWith("/work");

  return (
    <main
      className={cn("min-h-screen pt-16", isWorkPage ? "pb-12 md:pb-16" : "pb-28")}
    >
      {children}
    </main>
  );
}
