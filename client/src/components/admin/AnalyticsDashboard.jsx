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
      <div className="mx-auto w-full max-w-[1280px] px-8 py-12">
        <DashboardHeader email={user?.email} onLogout={handleLogout} />
        <DashboardSkeleton />
      </div>
    );
  }

  if (hasError || !summary || !daily) {
    return (
      <div className="mx-auto w-full max-w-[1280px] px-8 py-12">
        <DashboardHeader email={user?.email} onLogout={handleLogout} />
        <div className="rounded-[var(--radius-lg)] border border-red-200 bg-red-50 p-8 text-center dark:border-red-900/50 dark:bg-red-950/30">
          <p className="font-[family-name:var(--font-plus-jakarta)] text-sm text-red-600 dark:text-red-400">
            Failed to load analytics data.
          </p>
          <button
            type="button"
            onClick={handleRetry}
            className="mt-4 cursor-pointer rounded-full bg-[var(--color-primary)] px-6 py-2 font-[family-name:var(--font-plus-jakarta)] text-sm font-semibold text-[var(--color-text-inverse)] transition hover:bg-[var(--color-primary-hover)]"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-[1280px] px-8 py-12">
      <DashboardHeader email={user?.email} onLogout={handleLogout} />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <StatCard label="Total Visitors" value={summary.totalVisitors} />
        <StatCard label="Daily Visitors" value={summary.dailyVisitors} />
        <StatCard label="Total Page Views" value={summary.totalPageViews} />
      </div>
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <Panel title="Daily Visitors">
          {daily.length === 0 ? (
            <p className="font-[family-name:var(--font-plus-jakarta)] text-sm text-[var(--color-text-secondary)]">
              No visitor data yet.
            </p>
          ) : (
            <div className="space-y-3">
              {daily.map((day) => (
                <div key={day.date} className="flex items-center gap-4">
                  <span className="w-24 shrink-0 font-[family-name:var(--font-plus-jakarta)] text-sm text-[var(--color-text-muted)]">
                    {day.date}
                  </span>
                  <div className="flex-1">
                    <div
                      className="h-2 rounded-full bg-[var(--color-primary)]"
                      style={{ width: `${Math.min(100, (day.visitors / 50) * 100)}%` }}
                    />
                  </div>
                  <span className="w-8 text-right font-[family-name:var(--font-plus-jakarta)] text-sm text-[var(--color-text-primary)]">
                    {day.visitors}
                  </span>
                </div>
              ))}
            </div>
          )}
        </Panel>
        <Panel title="Top Referrers">
          {summary.topReferrers.length === 0 ? (
            <p className="font-[family-name:var(--font-plus-jakarta)] text-sm text-[var(--color-text-secondary)]">
              No referrer data yet.
            </p>
          ) : (
            <div className="space-y-4">
              {summary.topReferrers.map((ref) => (
                <div key={ref.referrer} className="flex items-center justify-between gap-4">
                  <span className="truncate font-[family-name:var(--font-plus-jakarta)] text-sm text-[var(--color-text-secondary)]">
                    {ref.referrer}
                  </span>
                  <span className="shrink-0 font-[family-name:var(--font-plus-jakarta)] text-sm font-semibold text-[var(--color-text-primary)]">
                    {ref.count}
                  </span>
                </div>
              ))}
            </div>
          )}
        </Panel>
      </div>
    </div>
  );
}

function DashboardHeader({ email, onLogout }) {
  return (
    <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
      <div>
        <h1 className="font-[family-name:var(--font-outfit)] text-3xl font-semibold text-[var(--color-text-primary)]">
          Analytics
        </h1>
        <p className="mt-1 font-[family-name:var(--font-plus-jakarta)] text-sm text-[var(--color-text-secondary)]">
          Signed in as {email}
        </p>
      </div>
      <button
        type="button"
        onClick={onLogout}
        className="cursor-pointer rounded-full border border-[var(--color-border-subtle)] bg-[var(--color-surface)] px-5 py-2 font-[family-name:var(--font-plus-jakarta)] text-sm font-medium text-[var(--color-text-secondary)] transition hover:border-[var(--color-text-primary)] hover:text-[var(--color-text-primary)]"
      >
        Logout
      </button>
    </div>
  );
}

function StatCard({ label, value }) {
  return (
    <div className="rounded-[var(--radius-lg)] border border-[var(--color-border-subtle)] bg-[var(--color-surface)] p-6 transition-all duration-[var(--duration-fast)] hover:shadow-[var(--shadow-sm)]">
      <p className="font-[family-name:var(--font-plus-jakarta)] text-sm text-[var(--color-text-secondary)]">
        {label}
      </p>
      <p className="mt-2 font-[family-name:var(--font-outfit)] text-3xl font-semibold text-[var(--color-text-primary)]">
        {value.toLocaleString()}
      </p>
    </div>
  );
}

function Panel({ title, children }) {
  return (
    <div className="rounded-[var(--radius-lg)] border border-[var(--color-border-subtle)] bg-[var(--color-surface)] p-6">
      <h2 className="mb-6 font-[family-name:var(--font-outfit)] text-lg font-semibold text-[var(--color-text-primary)]">
        {title}
      </h2>
      {children}
    </div>
  );
}

function DashboardSkeleton() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Skeleton className="h-28 rounded-[var(--radius-lg)]" />
        <Skeleton className="h-28 rounded-[var(--radius-lg)]" />
        <Skeleton className="h-28 rounded-[var(--radius-lg)]" />
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        <Skeleton className="h-64 rounded-[var(--radius-lg)]" />
        <Skeleton className="h-64 rounded-[var(--radius-lg)]" />
      </div>
    </div>
  );
}
