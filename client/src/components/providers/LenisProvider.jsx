"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useRef } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger } from "@/lib/gsap";
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

    lenis.on("scroll", ScrollTrigger.update);

    const update = (time) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    ScrollTrigger.refresh();

    return () => {
      gsap.ticker.remove(update);
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
