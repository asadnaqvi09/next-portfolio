"use client";

import { usePathname } from "next/navigation";
import TopNavbar from "@/components/layout/TopNavbar";
import BottomNav from "@/components/layout/BottomNav";
import SiteFooter from "@/components/layout/SiteFooter";
import ShellMain from "@/components/layout/ShellMain";
import ActiveSectionProvider from "@/components/providers/ActiveSectionProvider";
import CustomCursor from "@/components/providers/CustomCursor";

export default function AppShell({ children }) {
  const pathname = usePathname();
  const isLanding = pathname === "/";

  return (
    <ActiveSectionProvider>
      {isLanding ? <div className="grid-bg" aria-hidden /> : null}
      {isLanding ? <CustomCursor /> : null}
      <TopNavbar />
      <ShellMain>{children}</ShellMain>
      {isLanding ? <SiteFooter /> : null}
      {isLanding ? <BottomNav /> : null}
    </ActiveSectionProvider>
  );
}
