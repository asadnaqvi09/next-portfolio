"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useGetMeQuery } from "@/store/api/authApi";
import { useAppSelector } from "@/store/hooks";
import AnalyticsDashboard from "@/components/admin/AnalyticsDashboard";
import { LoginFormSkeleton } from "@/components/admin/LoginForm";

export default function AdminDashboardPage() {
  const router = useRouter();
  const token = useAppSelector((s) => s.auth.token);
  const { isLoading, isError } = useGetMeQuery(undefined, { skip: !token });

  useEffect(() => {
    if (!token) router.replace("/admin/login");
  }, [token, router]);

  useEffect(() => {
    if (isError) router.replace("/admin/login");
  }, [isError, router]);

  if (!token || isLoading) {
    return (
      <div className="flex min-h-[70vh] flex-col items-center justify-center px-4">
        <LoginFormSkeleton />
      </div>
    );
  }

  return <AnalyticsDashboard />;
}
