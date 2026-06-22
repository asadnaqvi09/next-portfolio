"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useTrackVisitMutation } from "@/store/api/analyticsApi";

export default function AnalyticsBeacon() {
  const pathname = usePathname();
  const [trackVisit] = useTrackVisitMutation();

  useEffect(() => {
    if (pathname.startsWith("/admin")) return;
    trackVisit({
      path: pathname,
      referrer: document.referrer || undefined,
    }).catch(() => {});
  }, [pathname, trackVisit]);

  return null;
}
