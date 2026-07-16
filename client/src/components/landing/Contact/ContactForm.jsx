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

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <div className="form-row">
        <div className="field">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            required
            placeholder="Enter your name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            required
            placeholder="Enter your email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>
      </div>
      <div className="field">
        <label htmlFor="message">Your Project</label>
        <textarea
          id="message"
          required
          rows={6}
          placeholder="Tell me about your project"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />
      </div>
      <button type="submit" disabled={isLoading} className="submit-btn">
        {isLoading ? "Sending..." : "Submit"}
      </button>
      {status === "success" ? <p className="form-msg ok">Message sent successfully.</p> : null}
      {status === "error" ? <p className="form-msg err">{errorMessage}</p> : null}
    </form>
  );
}
