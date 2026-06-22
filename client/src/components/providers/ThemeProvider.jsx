"use client";

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setTheme } from "@/store/features/uiSlice";

export default function ThemeProvider({ children }) {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((s) => s.ui.theme);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored) dispatch(setTheme(stored));
  }, [dispatch]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return <>{children}</>;
}
