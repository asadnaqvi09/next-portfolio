"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { NAV_ITEMS } from "@/lib/constants";

const ActiveSectionContext = createContext("about");

export function useActiveSection() {
  return useContext(ActiveSectionContext);
}

export default function ActiveSectionProvider({ children }) {
  const [activeId, setActiveId] = useState("about");

  useEffect(() => {
    const ids = NAV_ITEMS.map((n) => n.id);
    const observers = [];

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveId(e.target.id);
        });
      },
      { rootMargin: "-42% 0px -55% 0px" }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        io.observe(el);
        observers.push(el);
      }
    });

    return () => io.disconnect();
  }, []);

  return (
    <ActiveSectionContext.Provider value={activeId}>{children}</ActiveSectionContext.Provider>
  );
}
