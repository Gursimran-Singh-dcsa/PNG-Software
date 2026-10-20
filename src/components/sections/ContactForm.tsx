"use client";

import { useState, type FormEvent } from "react";
import { services, site } from "@/lib/site";

/** Static site, no backend: the form composes an email in the visitor's mail app. */
export function ContactForm() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = `Project enquiry — ${data.get("service") || "General"}`;
    const body = [
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `Phone: ${data.get("phone") || "-"}`,
      `Service: ${data.get("service") || "-"}`,
      "",
      String(data.get("message") ?? ""),
    ].join("\n");
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  const field =
    "mt-2 w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-ink-900 transition outline-none placeholder:text-ink-400 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/15";

  return (
    <form onSubmit={onSubmit} className="rounded-3xl border border-ink-200 bg-white p-6 shadow-xl shadow-brand-900/5 sm:p-10">
      <h2 className="text-h3 text-ink-900">Send us a message</h2>
      <p className="text-body mt-2">This opens your email app with the details filled in.</p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-medium text-ink-700">
          Name
          <input name="name" required autoComplete="name" className={field} />
        </label>
        <label className="text-sm font-medium text-ink-700">
          Email
          <input name="email" type="email" required autoComplete="email" className={field} />
        </label>
        <label className="text-sm font-medium text-ink-700">
          Phone <span className="font-normal text-ink-400">(optional)</span>
          <input name="phone" type="tel" autoComplete="tel" className={field} />
        </label>
        <label className="text-sm font-medium text-ink-700">
          Service
          <select name="service" defaultValue="" className={field}>
            <option value="">Not sure yet</option>
            {services.map((s) => (
              <option key={s.slug}>{s.title}</option>
            ))}
          </select>
        </label>
        <label className="text-sm font-medium text-ink-700 sm:col-span-2">
          Project details
          <textarea name="message" required rows={5} className={field} />
        </label>
      </div>

      <button
        type="submit"
        className="mt-8 inline-flex h-12 w-full items-center justify-center rounded-full bg-brand-600 px-8 text-sm font-semibold text-white shadow-lg shadow-brand-600/30 transition hover:bg-brand-500 sm:w-auto"
      >
        Send enquiry
      </button>
      <p role="status" className="mt-4 text-sm text-brand-700">
        {sent ? `If your email app didn't open, email us at ${site.email} or call ${site.phones.map((p) => p.display).join(" / ")}.` : ""}
      </p>
    </form>
  );
}
