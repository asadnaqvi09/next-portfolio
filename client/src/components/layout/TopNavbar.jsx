"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Moon, Sun, X } from "lucide-react";
import { NAV_ITEMS } from "@/lib/constants";
import { useLenis } from "@/components/providers/LenisProvider";
import { SCROLL_OFFSET } from "@/lib/motion";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setNavOpen, toggleTheme } from "@/store/features/uiSlice";

export default function TopNavbar() {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((s) => s.ui.theme);
  const isNavOpen = useAppSelector((s) => s.ui.isNavOpen);
  const pathname = usePathname();
  const lenis = useLenis();
  const isHome = pathname === "/";

  const handleNav = (id) => {
    dispatch(setNavOpen(false));
    if (!isHome) return;
    if (!lenis) return;
    lenis.scrollTo(`#${id}`, { offset: SCROLL_OFFSET });
    window.history.replaceState(null, "", `#${id}`);
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full animate-fade-up-header border-b border-[var(--color-border-subtle)] bg-[var(--color-bg)]/85 backdrop-blur-[16px]">
      <nav className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-8">
        {isHome ? (
          <button
            type="button"
            onClick={() => handleNav("hero")}
            className="flex cursor-pointer items-center gap-2 border-none bg-transparent p-0"
          >
            <span className="font-[family-name:var(--font-outfit)] text-lg font-bold tracking-tight text-[var(--color-text-primary)]">
              Asad <span className="text-[var(--color-primary)]">Abbas</span>
            </span>
            <span className="inline-block h-2 w-2 rounded-full bg-[var(--color-primary)] animate-pulse-dot" />
          </button>
        ) : (
          <Link href="/" className="flex items-center gap-2 no-underline">
            <span className="font-[family-name:var(--font-outfit)] text-lg font-bold tracking-tight text-[var(--color-text-primary)]">
              Asad <span className="text-[var(--color-primary)]">Abbas</span>
            </span>
            <span className="inline-block h-2 w-2 rounded-full bg-[var(--color-primary)] animate-pulse-dot" />
          </Link>
        )}
        <ul className="hidden list-none items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.key}>
              {isHome ? (
                <button
                  type="button"
                  onClick={() => handleNav(item.id)}
                  className="cursor-pointer border-none bg-transparent font-[family-name:var(--font-plus-jakarta)] text-sm font-medium text-[var(--color-text-secondary)] no-underline transition-colors duration-[var(--duration-fast)] ease-[var(--ease-smooth)] hover:text-[var(--color-text-primary)]"
                >
                  {item.label}
                </button>
              ) : (
                <Link
                  href={`/#${item.id}`}
                  className="font-[family-name:var(--font-plus-jakarta)] text-sm font-medium text-[var(--color-text-secondary)] no-underline transition-colors duration-[var(--duration-fast)] ease-[var(--ease-smooth)] hover:text-[var(--color-text-primary)]"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => dispatch(toggleTheme())}
            aria-label="Toggle theme"
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-[var(--color-border-subtle)] bg-[var(--color-surface)] text-[var(--color-text-secondary)] transition-colors duration-[var(--duration-fast)] hover:text-[var(--color-text-primary)]"
          >
            {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
          </button>
          <button
            type="button"
            onClick={() => dispatch(setNavOpen(!isNavOpen))}
            className="flex cursor-pointer flex-col gap-[5px] rounded-[var(--radius-sm)] border border-[var(--color-border-subtle)] bg-transparent p-2 md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={isNavOpen}
          >
            {isNavOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>
      {isNavOpen ? (
        <div className="border-t border-[var(--color-border-subtle)] bg-[var(--color-bg)] px-8 py-4 md:hidden">
          <ul className="flex list-none flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <li key={item.key}>
                {isHome ? (
                  <button
                    type="button"
                    onClick={() => handleNav(item.id)}
                    className="cursor-pointer border-none bg-transparent font-[family-name:var(--font-plus-jakarta)] text-sm font-medium text-[var(--color-text-secondary)]"
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    href={`/#${item.id}`}
                    onClick={() => dispatch(setNavOpen(false))}
                    className="font-[family-name:var(--font-plus-jakarta)] text-sm font-medium text-[var(--color-text-secondary)] no-underline"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  );
}
