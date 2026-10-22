"use client";

import { useRef, useState, type FormEvent } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { services, site } from "@/lib/site";

type Status = "idle" | "sending" | "sent" | "error" | "captcha";

// Web3Forms' shared hCaptcha sitekey for free plans (custom keys need a paid plan).
const HCAPTCHA_SITEKEY = "50b2fe65-b00b-4b9e-ad62-3ba471098be2";

/** Static site, no backend: submissions go to Web3Forms, which emails them to us. */
export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [captchaToken, setCaptchaToken] = useState("");
  const captcha = useRef<HCaptcha>(null);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!captchaToken) return setStatus("captcha");
    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("access_key", site.web3formsKey);
    data.append("subject", `Project enquiry — ${data.get("service") || "General"}`);
    data.append("from_name", `${site.name} website`);
    data.append("h-captcha-response", captchaToken);
    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: data });
      const json = await res.json();
      if (!json.success) throw new Error(json.message);
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    } finally {
      // Tokens are single-use, so every attempt needs a fresh check.
      captcha.current?.resetCaptcha();
      setCaptchaToken("");
    }
  };

  const field =
    "mt-2 w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-ink-900 transition outline-none placeholder:text-ink-400 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/15";

  return (
    <form onSubmit={onSubmit} className="rounded-3xl border border-ink-200 bg-white p-6 shadow-xl shadow-brand-900/5 sm:p-10">
      <h2 className="text-h3 text-ink-900">Send us a message</h2>
      <p className="text-body mt-2">We usually reply within one working day.</p>

      {/* Honeypot: hidden from people, filled in by spam bots; Web3Forms drops those. */}
      <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

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
          Phone
          <input
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            pattern="[0-9\+\-\(\)\s]{7,20}"
            title="Enter a valid phone number"
            className={field}
          />
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

      <div className="mt-6">
        <HCaptcha
          ref={captcha}
          sitekey={HCAPTCHA_SITEKEY}
          reCaptchaCompat={false}
          onVerify={(token) => {
            setCaptchaToken(token);
            if (status === "captcha") setStatus("idle");
          }}
          onExpire={() => setCaptchaToken("")}
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-full bg-brand-600 px-8 text-sm font-semibold text-white shadow-lg shadow-brand-600/30 transition hover:bg-brand-500 disabled:cursor-wait disabled:opacity-70 sm:w-auto"
      >
        {status === "sending" ? "Sending…" : "Send enquiry"}
      </button>
      <p role="status" className={`mt-4 text-sm ${status === "error" || status === "captcha" ? "text-red-600" : "text-brand-700"}`}>
        {status === "captcha" && "Please complete the captcha before sending."}
        {status === "sent" && "Thanks! Your enquiry has been sent. We'll be in touch soon."}
        {status === "error" &&
          `Sorry, that didn't go through. Please email us at ${site.email} or call ${site.phones.map((p) => p.display).join(" / ")}.`}
      </p>
    </form>
  );
}
