"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useLoginMutation } from "@/store/api/authApi";
import { useAppDispatch } from "@/store/hooks";
import { setCredentials } from "@/store/features/authSlice";
import { persistAuth } from "@/store/authStorage";
import Skeleton from "@/components/ui/Skeleton";

const inputClass =
  "w-full rounded-[var(--radius-sm)] border border-[var(--color-border-subtle)] bg-[var(--color-surface)] px-4 py-3 font-[family-name:var(--font-plus-jakarta)] text-sm text-[var(--color-text-primary)] outline-none transition placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-primary)]";

export default function LoginForm() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [login, { isLoading }] = useLoginMutation();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const result = await login(form).unwrap();
      if (result.success && result.data) {
        persistAuth(result.data.token, result.data.user);
        dispatch(setCredentials(result.data));
        router.push("/admin/dashboard");
        return;
      }
      setError(result.error || "Invalid credentials");
    } catch (err) {
      setError(err?.data?.error || "Invalid credentials");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md space-y-5 rounded-[var(--radius-lg)] border border-[var(--color-border-subtle)] bg-[var(--color-surface)] p-8 shadow-[var(--shadow-sm)]"
    >
      <div>
        <label
          htmlFor="admin-email"
          className="mb-2 block font-[family-name:var(--font-plus-jakarta)] text-sm text-[var(--color-text-secondary)]"
        >
          Email
        </label>
        <input
          id="admin-email"
          type="text"
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className={inputClass}
        />
      </div>
      <div>
        <label
          htmlFor="admin-password"
          className="mb-2 block font-[family-name:var(--font-plus-jakarta)] text-sm text-[var(--color-text-secondary)]"
        >
          Password
        </label>
        <input
          id="admin-password"
          type="password"
          required
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          className={inputClass}
        />
      </div>
      {error ? (
        <p className="font-[family-name:var(--font-plus-jakarta)] text-sm text-red-500">{error}</p>
      ) : null}
      <button
        type="submit"
        disabled={isLoading}
        className="w-full cursor-pointer rounded-full bg-[var(--color-primary)] py-3 font-[family-name:var(--font-plus-jakarta)] text-sm font-semibold text-[var(--color-text-inverse)] transition hover:bg-[var(--color-primary-hover)] disabled:opacity-60"
      >
        {isLoading ? "Signing in..." : "Sign In"}
      </button>
    </form>
  );
}

export function LoginFormSkeleton() {
  return (
    <div className="w-full max-w-md space-y-5 rounded-[var(--radius-lg)] border border-[var(--color-border-subtle)] bg-[var(--color-surface)] p-8">
      <Skeleton className="h-12 w-full" />
      <Skeleton className="h-12 w-full" />
      <Skeleton className="h-12 w-full rounded-full" />
    </div>
  );
}
