"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useRef } from "react";
import Lenis from "lenis";
import { prefersReducedMotion, SCROLL_OFFSET } from "@/lib/motion";

const LenisContext = createContext(null);

export function useLenis() {
  return useContext(LenisContext);
}

export default function LenisProvider({ children }) {
  const lenisRef = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    lenisRef.current = lenis;
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  const scrollTo = useCallback((target, options = {}) => {
    const offset = options.offset ?? SCROLL_OFFSET;
    const lenis = lenisRef.current;
    if (lenis) {
      lenis.scrollTo(target, { offset, ...options });
      return;
    }
    const el =
      typeof target === "string"
        ? document.querySelector(target.startsWith("#") ? target : `#${target}`)
        : target;
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY + offset;
    window.scrollTo({ top, behavior: prefersReducedMotion() ? "auto" : "smooth" });
  }, []);

  const value = useMemo(() => ({ scrollTo, lenisRef }), [scrollTo]);

  return <LenisContext.Provider value={value}>{children}</LenisContext.Provider>;
}
