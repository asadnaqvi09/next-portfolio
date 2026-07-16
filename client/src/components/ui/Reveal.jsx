"use client";

import { forwardRef, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

const Reveal = forwardRef(function Reveal(
  { children, className, delay = 0, as: Tag = "div", dangerouslySetInnerHTML, ...rest },
  forwardedRef
) {
  const localRef = useRef(null);

  useEffect(() => {
    const el = localRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "-6% 0px -8% 0px", threshold: 0.04 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const setRefs = (node) => {
    localRef.current = node;
    if (typeof forwardedRef === "function") forwardedRef(node);
    else if (forwardedRef) forwardedRef.current = node;
  };

  const delayClass = delay === 1 ? "d1" : delay === 2 ? "d2" : delay === 3 ? "d3" : "";

  return (
    <Tag
      ref={setRefs}
      className={cn("reveal", delayClass, className)}
      dangerouslySetInnerHTML={dangerouslySetInnerHTML}
      {...rest}
    >
      {dangerouslySetInnerHTML ? undefined : children}
    </Tag>
  );
});

export default Reveal;
