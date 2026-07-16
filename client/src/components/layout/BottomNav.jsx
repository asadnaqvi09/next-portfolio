"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/lib/constants";
import { useLenis } from "@/components/providers/LenisProvider";
import { SCROLL_OFFSET } from "@/lib/motion";
import { useActiveSection } from "@/components/providers/ActiveSectionProvider";

const ICONS = {
  about: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21a8 8 0 0 1 16 0" />
    </svg>
  ),
  skills: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <path d="m12 3 9 5-9 5-9-5 9-5Z" />
      <path d="m3 13 9 5 9-5" />
    </svg>
  ),
  experience: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    </svg>
  ),
  work: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <path d="m8 9-4 3 4 3M16 9l4 3-4 3M14 5l-4 14" />
    </svg>
  ),
  contact: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  ),
};

const LABELS = {
  about: "About",
  skills: "Skills",
  experience: "Work",
  work: "Projects",
  contact: "Contact",
};

export default function BottomNav() {
  const pathname = usePathname();
  const lenis = useLenis();
  const isHome = pathname === "/";
  const activeId = useActiveSection();

  const handleNav = (id) => {
    if (!isHome) return;
    if (!lenis) {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      lenis.scrollTo(`#${id}`, { offset: SCROLL_OFFSET });
    }
    window.history.replaceState(null, "", `#${id}`);
  };

  return (
    <nav className="botnav" aria-label="Mobile">
      {NAV_ITEMS.map((item) =>
        isHome ? (
          <button
            key={item.key}
            type="button"
            data-sec={item.id}
            className={activeId === item.id ? "active" : undefined}
            onClick={() => handleNav(item.id)}
          >
            {ICONS[item.id]}
            <span>{LABELS[item.id]}</span>
          </button>
        ) : (
          <Link
            key={item.key}
            href={`/#${item.id}`}
            data-sec={item.id}
            className={activeId === item.id ? "active" : undefined}
          >
            {ICONS[item.id]}
            <span>{LABELS[item.id]}</span>
          </Link>
        )
      )}
    </nav>
  );
}
