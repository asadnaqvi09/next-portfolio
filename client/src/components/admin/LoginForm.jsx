"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useLoginMutation } from "@/store/api/authApi";
import { useAppDispatch } from "@/store/hooks";
import { setCredentials } from "@/store/features/authSlice";
import { persistAuth } from "@/store/authStorage";
import Skeleton from "@/components/ui/Skeleton";

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
    <form onSubmit={handleSubmit} className="w-full max-w-md space-y-5">
      <div>
        <label htmlFor="admin-email" className="mb-2 block text-sm text-neutral-600 dark:text-neutral-400">
          Email
        </label>
        <input
          id="admin-email"
          type="text"
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm outline-none focus:border-neutral-400 dark:border-neutral-800 dark:bg-neutral-900 dark:focus:border-neutral-600"
        />
      </div>
      <div>
        <label htmlFor="admin-password" className="mb-2 block text-sm text-neutral-600 dark:text-neutral-400">
          Password
        </label>
        <input
          id="admin-password"
          type="password"
          required
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm outline-none focus:border-neutral-400 dark:border-neutral-800 dark:bg-neutral-900 dark:focus:border-neutral-600"
        />
      </div>
      {error && <p className="text-sm text-red-600 dark:text-red-400">{error}</p>}
      <button
        type="submit"
        disabled={isLoading}
        className="w-full rounded-full bg-neutral-900 py-3 text-sm font-medium text-white transition hover:bg-neutral-800 disabled:opacity-60 dark:bg-neutral-100 dark:text-neutral-900"
      >
        {isLoading ? "Signing in..." : "Sign In"}
      </button>
    </form>
  );
}

export function LoginFormSkeleton() {
  return (
    <div className="w-full max-w-md space-y-5">
      <Skeleton className="h-12 w-full" />
      <Skeleton className="h-12 w-full" />
      <Skeleton className="h-12 w-full rounded-full" />
    </div>
  );
}
