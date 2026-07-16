"use client";

import { useEffect, useRef } from "react";

const HOVER_SEL =
  "a, button, .skill-card, .tech, .channel, .xp-card, .proj, .hero__photo-frame, .hero__stat, .nav__cta, .btn, .theme-toggle, .proj__metric, .info-row, .submit-btn";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const isTouch = window.matchMedia("(hover: none)").matches;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isTouch || reduceMotion) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    document.body.classList.add("has-custom-cursor");

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;
    let raf = 0;

    const onMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
      document.documentElement.style.setProperty(
        "--mx",
        `${((mx / window.innerWidth) * 100).toFixed(1)}%`
      );
      document.documentElement.style.setProperty(
        "--my",
        `${((my / window.innerHeight) * 100).toFixed(1)}%`
      );
    };

    const tick = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    };

    const onEnter = () => document.body.classList.add("cursor-hover");
    const onLeave = () => document.body.classList.remove("cursor-hover");

    const bindHover = () => {
      document.querySelectorAll(HOVER_SEL).forEach((el) => {
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
      });
    };

    const unbindHover = () => {
      document.querySelectorAll(HOVER_SEL).forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };

    // Center both at start (stealth / idle)
    dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
    ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(tick);
    bindHover();

    const mo = new MutationObserver(() => {
      unbindHover();
      bindHover();
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      unbindHover();
      mo.disconnect();
      document.body.classList.remove("has-custom-cursor", "cursor-hover");
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
    </>
  );
}
