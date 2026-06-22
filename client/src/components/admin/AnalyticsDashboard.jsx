"use client";

import { useRouter } from "next/navigation";
import { useGetDailyQuery, useGetSummaryQuery } from "@/store/api/analyticsApi";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { logout } from "@/store/features/authSlice";
import { clearStoredAuth } from "@/store/authStorage";
import Skeleton from "@/components/ui/Skeleton";

export default function AnalyticsDashboard() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const user = useAppSelector((s) => s.auth.user);
  const token = useAppSelector((s) => s.auth.token);
  const {
    data: summary,
    isLoading: summaryLoading,
    isError: summaryError,
    refetch: refetchSummary,
  } = useGetSummaryQuery(undefined, { skip: !token });
  const {
    data: daily,
    isLoading: dailyLoading,
    isError: dailyError,
    refetch: refetchDaily,
  } = useGetDailyQuery(undefined, { skip: !token });

  const loading = summaryLoading || dailyLoading;
  const hasError = summaryError || dailyError;

  const handleLogout = () => {
    clearStoredAuth();
    dispatch(logout());
    router.push("/admin/login");
  };

  const handleRetry = () => {
    refetchSummary();
    refetchDaily();
  };

  if (loading) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <DashboardHeader email={user?.email} onLogout={handleLogout} />
        <DashboardSkeleton />
      </div>
    );
  }

  if (hasError || !summary || !daily) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <DashboardHeader email={user?.email} onLogout={handleLogout} />
        <div className="rounded-2xl border border-red-200 bg-red-50 p-8 text-center dark:border-red-900 dark:bg-red-950/30">
          <p className="text-sm text-red-700 dark:text-red-300">
            Failed to load analytics data.
          </p>
          <button
            type="button"
            onClick={handleRetry}
            className="mt-4 rounded-full bg-neutral-900 px-6 py-2 text-sm text-white dark:bg-neutral-100 dark:text-neutral-900"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
      <DashboardHeader email={user?.email} onLogout={handleLogout} />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <StatCard label="Total Visitors" value={summary.totalVisitors} />
        <StatCard label="Daily Visitors" value={summary.dailyVisitors} />
        <StatCard label="Total Page Views" value={summary.totalPageViews} />
      </div>
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-neutral-200 p-6 dark:border-neutral-800">
          <h2 className="mb-6 text-lg font-medium">Daily Visitors</h2>
          {daily.length === 0 ? (
            <p className="text-sm text-neutral-500">No visitor data yet.</p>
          ) : (
            <div className="space-y-3">
              {daily.map((day) => (
                <div key={day.date} className="flex items-center gap-4">
                  <span className="w-24 shrink-0 text-sm text-neutral-500">{day.date}</span>
                  <div className="flex-1">
                    <div
                      className="h-2 rounded-full bg-neutral-900 dark:bg-neutral-100"
                      style={{ width: `${Math.min(100, (day.visitors / 50) * 100)}%` }}
                    />
                  </div>
                  <span className="w-8 text-right text-sm">{day.visitors}</span>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="rounded-2xl border border-neutral-200 p-6 dark:border-neutral-800">
          <h2 className="mb-6 text-lg font-medium">Top Referrers</h2>
          {summary.topReferrers.length === 0 ? (
            <p className="text-sm text-neutral-500">No referrer data yet.</p>
          ) : (
            <div className="space-y-4">
              {summary.topReferrers.map((ref) => (
                <div key={ref.referrer} className="flex items-center justify-between">
                  <span className="text-sm text-neutral-600 dark:text-neutral-400">
                    {ref.referrer}
                  </span>
                  <span className="text-sm font-medium">{ref.count}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function DashboardHeader({ email, onLogout }) {
  return (
    <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
      <div>
        <h1 className="text-3xl font-semibold text-neutral-900 dark:text-neutral-50">
          Analytics
        </h1>
        <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
          Signed in as {email}
        </p>
      </div>
      <button
        type="button"
        onClick={onLogout}
        className="rounded-full border border-neutral-300 px-5 py-2 text-sm transition hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-900"
      >
        Logout
      </button>
    </div>
  );
}

function StatCard({ label, value }) {
  return (
    <div className="rounded-2xl border border-neutral-200 p-6 dark:border-neutral-800">
      <p className="text-sm text-neutral-500 dark:text-neutral-400">{label}</p>
      <p className="mt-2 text-3xl font-semibold text-neutral-900 dark:text-neutral-50">
        {value.toLocaleString()}
      </p>
    </div>
  );
}

function DashboardSkeleton() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Skeleton className="h-28 rounded-2xl" />
        <Skeleton className="h-28 rounded-2xl" />
        <Skeleton className="h-28 rounded-2xl" />
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        <Skeleton className="h-64 rounded-2xl" />
        <Skeleton className="h-64 rounded-2xl" />
      </div>
    </div>
  );
}
