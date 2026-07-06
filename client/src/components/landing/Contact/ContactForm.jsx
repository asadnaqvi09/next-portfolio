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
    "w-full rounded-[var(--radius-sm)] border border-[var(--panel-input-border)] bg-[var(--panel-input-bg)] px-4 py-3.5 font-[family-name:var(--font-plus-jakarta)] text-sm text-[var(--panel-input-text)] outline-none transition placeholder:text-[var(--panel-input-placeholder)] focus:border-[var(--color-primary)]";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-2 block font-[family-name:var(--font-plus-jakarta)] text-sm text-[var(--panel-label)]"
          >
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
          <label
            htmlFor="email"
            className="mb-2 block font-[family-name:var(--font-plus-jakarta)] text-sm text-[var(--panel-label)]"
          >
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
        <label
          htmlFor="message"
          className="mb-2 block font-[family-name:var(--font-plus-jakarta)] text-sm text-[var(--panel-label)]"
        >
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
        className="w-full cursor-pointer rounded-[var(--radius-sm)] bg-[var(--color-primary)] px-8 py-3.5 font-[family-name:var(--font-plus-jakarta)] text-sm font-semibold text-[var(--color-text-inverse)] transition hover:bg-[var(--color-primary-hover)] disabled:opacity-60"
      >
        {isLoading ? "Sending..." : "Submit"}
      </button>
      {status === "success" ? (
        <p className="font-[family-name:var(--font-plus-jakarta)] text-sm text-[var(--color-teal)]">
          Message sent successfully.
        </p>
      ) : null}
      {status === "error" ? (
        <p className="font-[family-name:var(--font-plus-jakarta)] text-sm text-red-500">
          {errorMessage}
        </p>
      ) : null}
    </form>
  );
}
