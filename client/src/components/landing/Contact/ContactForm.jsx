"use client";

import { useState } from "react";
import { useSubmitContactMutation } from "@/store/api/contactApi";

export default function ContactForm() {
  const [submitContact, { isLoading }] = useSubmitContactMutation();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("idle");
    setErrorMessage("");
    try {
      const result = await submitContact(form).unwrap();
      if (result.success) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
      setErrorMessage(err?.data?.error || "Something went wrong. Please try again.");
    }
  };

  const inputClass =
    "w-full rounded-xl border border-neutral-700 bg-neutral-900 px-4 py-3.5 text-sm text-neutral-100 outline-none transition placeholder:text-neutral-500 focus:border-neutral-500 dark:border-neutral-600 dark:bg-neutral-950 dark:focus:border-neutral-400";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm text-neutral-300 dark:text-neutral-200">
            Name
          </label>
          <input
            id="name"
            type="text"
            required
            placeholder="Enter your name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm text-neutral-300 dark:text-neutral-200">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            placeholder="Enter your email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className={inputClass}
          />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block text-sm text-neutral-300 dark:text-neutral-200">
          Your Project
        </label>
        <textarea
          id="message"
          required
          rows={6}
          placeholder="Tell me about your project"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className={`${inputClass} resize-none`}
        />
      </div>
      <button
        type="submit"
        disabled={isLoading}
        className="w-full rounded-xl bg-white px-8 py-3.5 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-100 disabled:opacity-60 dark:bg-neutral-100 dark:hover:bg-white"
      >
        {isLoading ? "Sending..." : "Submit"}
      </button>
      {status === "success" && (
        <p className="text-sm text-emerald-400">
          Message sent successfully.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-400">
          {errorMessage}
        </p>
      )}
    </form>
  );
}
