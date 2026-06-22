"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useLenis } from "@/components/providers/LenisProvider";
import { SCROLL_OFFSET } from "@/lib/motion";

export default function HashScrollHandler() {
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    if (pathname !== "/" || !lenis) return;
    const hash = window.location.hash;
    if (!hash) return;
    const id = hash.slice(1);
    requestAnimationFrame(() => {
      lenis.scrollTo(`#${id}`, { offset: SCROLL_OFFSET });
    });
  }, [pathname, lenis]);

  useEffect(() => {
    if (!lenis) return;
    const onHashChange = () => {
      const id = window.location.hash.slice(1);
      if (id) lenis.scrollTo(`#${id}`, { offset: SCROLL_OFFSET });
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, [lenis]);

  return null;
}
