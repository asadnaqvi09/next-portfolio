"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/motion";
import { useAppSelector } from "@/store/hooks";
import { cn } from "@/lib/utils";

const SIZE_CLASSES = {
  md: "text-xl font-medium leading-snug tracking-tight md:text-2xl lg:text-3xl",
  lg: "text-2xl font-medium leading-snug tracking-tight md:text-3xl lg:text-4xl xl:text-5xl",
};

const ALIGN_CLASSES = {
  center: "items-center justify-center text-center",
  start: "items-center justify-center text-center lg:items-start lg:justify-start lg:text-left",
};

export default function ScrollRevealText({ text, size = "lg", align = "center", className }) {
  const containerRef = useRef(null);
  const theme = useAppSelector((s) => s.ui.theme);

  useGSAP(
    () => {
      const container = containerRef.current;
      if (!container) return;
      const words = container.querySelectorAll(".scroll-word");
      if (!words.length) return;
      const fromColor = theme === "dark" ? "rgb(115, 115, 115)" : "rgb(163, 163, 163)";
      const toColor = theme === "dark" ? "rgb(250, 250, 250)" : "rgb(23, 23, 23)";
      if (prefersReducedMotion()) {
        words.forEach((word) => {
          word.style.color = toColor;
        });
        return;
      }
      const total = words.length;
      words.forEach((word) => {
        word.style.color = fromColor;
      });
      return ScrollTrigger.create({
        trigger: container,
        start: "top 80%",
        end: "bottom 45%",
        scrub: 0.5,
        onUpdate: (self) => {
          const active = Math.floor(self.progress * total);
          words.forEach((word, i) => {
            word.style.color = i <= active ? toColor : fromColor;
          });
        },
      });
    },
    { scope: containerRef, dependencies: [text, theme] }
  );

  const words = text.split(" ");
  const initialColor = theme === "dark" ? "rgb(115, 115, 115)" : "rgb(163, 163, 163)";

  return (
    <div ref={containerRef} className={cn(className)}>
      <p
        className={cn(
          "flex flex-wrap gap-x-[0.35em] gap-y-2",
          SIZE_CLASSES[size],
          ALIGN_CLASSES[align]
        )}
      >
        {words.map((word, i) => (
          <span key={`${word}-${i}`} className="scroll-word" style={{ color: initialColor }}>
            {word}
          </span>
        ))}
      </p>
    </div>
  );
}
