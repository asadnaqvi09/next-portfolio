"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/lib/constants";
import { site } from "@/lib/content";
import { useLenis } from "@/components/providers/LenisProvider";
import { SCROLL_OFFSET } from "@/lib/motion";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { toggleTheme } from "@/store/features/uiSlice";
import { useActiveSection } from "@/components/providers/ActiveSectionProvider";

export default function TopNavbar() {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((s) => s.ui.theme);
  const pathname = usePathname();
  const lenis = useLenis();
  const isHome = pathname === "/";
  const activeId = useActiveSection();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (id) => {
    if (!isHome) return;
    if (!lenis) {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      lenis.scrollTo(`#${id}`, { offset: SCROLL_OFFSET });
    }
    window.history.replaceState(null, "", `#${id}`);
  };

  const brand = (
    <>
      <span className="dot" aria-hidden />
      <span>{site.shortName || site.name.split(" ")[0]}</span>
    </>
  );

  return (
    <header className={`nav${scrolled ? " scrolled" : ""}`} role="banner">
      {isHome ? (
        <button type="button" className="nav__brand" onClick={() => handleNav("top")} aria-label="Home">
          {brand}
        </button>
      ) : (
        <Link href="/" className="nav__brand" aria-label="Home">
          {brand}
        </Link>
      )}

      <nav className="nav__links" aria-label="Primary">
        {NAV_ITEMS.map((item) =>
          isHome ? (
            <button
              key={item.key}
              type="button"
              className={activeId === item.id ? "active" : undefined}
              onClick={() => handleNav(item.id)}
            >
              <span className="num">{item.num}</span>
              <span>{item.label}</span>
            </button>
          ) : (
            <Link key={item.key} href={`/#${item.id}`} className={activeId === item.id ? "active" : undefined}>
              <span className="num">{item.num}</span>
              <span>{item.label}</span>
            </Link>
          )
        )}
      </nav>

      <div className="nav__right">
        <button
          type="button"
          className="theme-toggle"
          aria-label="Toggle theme"
          onClick={() => dispatch(toggleTheme())}
        >
          <svg className="moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
            <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
          </svg>
          <svg className="sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
          </svg>
          <span className="sr-only">{theme === "light" ? "Dark" : "Light"}</span>
        </button>
        {isHome ? (
          <button type="button" className="nav__cta" onClick={() => handleNav("contact")}>
            <span>Get in touch</span>
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden>
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </button>
        ) : (
          <Link href="/#contact" className="nav__cta">
            <span>Get in touch</span>
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden>
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
        )}
      </div>
    </header>
  );
}
