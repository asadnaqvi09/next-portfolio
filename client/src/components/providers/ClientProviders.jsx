"use client";

import StoreProvider from "@/components/providers/StoreProvider";
import ThemeProvider from "@/components/providers/ThemeProvider";
import LenisProvider from "@/components/providers/LenisProvider";
import HashScrollHandler from "@/components/providers/HashScrollHandler";
import AnalyticsBeacon from "@/components/providers/AnalyticsBeacon";

export default function ClientProviders({ children }) {
  return (
    <StoreProvider>
      <ThemeProvider>
        <LenisProvider>
          <HashScrollHandler />
          {children}
          <AnalyticsBeacon />
        </LenisProvider>
      </ThemeProvider>
    </StoreProvider>
  );
}
