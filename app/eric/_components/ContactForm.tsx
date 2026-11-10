"use client";

import { useCallback, useId, useState } from "react";
import { Toast, type ToastVariant } from "@/components/ui/Toast";

type Labels = {
  heading: string;
  name: string;
  email: string;
  message: string;
  messagePlaceholder: string;
  submit: string;
  sending: string;
  successTitle: string;
  successBody: string;
  errorTitle: string;
  sourceLabel: string;
};

const SOURCE = "eric-portfolio";

// Short form that posts to the site's existing /api/leads route. `source`
// marks where the lead came from; the route ignores unknown fields today, so
// the source is also sent as `serviceInterest`, which the lead email shows.
export function ContactForm({ labels }: { labels: Labels }) {
  const fid = useId();
  const [form, setForm] = useState({ name: "", email: "", message: "", website: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [toast, setToast] = useState<{ variant: ToastVariant; title: string; message?: string } | null>(null);
  const closeToast = useCallback(() => setToast(null), []);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setToast(null);
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, source: SOURCE, serviceInterest: labels.sourceLabel }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        const fieldErrors =
          data.errors && typeof data.errors === "object" ? Object.values(data.errors as Record<string, string>).join(" ") : "";
        throw new Error(fieldErrors || data.message || "Please try again.");
      }
      setStatus("success");
      setForm({ name: "", email: "", message: "", website: "" });
      setToast({ variant: "success", title: labels.successTitle, message: labels.successBody });
    } catch (err) {
      setStatus("idle");
      setToast({
        variant: "error",
        title: labels.errorTitle,
        message: err instanceof TypeError ? "Check your connection and try again." : err instanceof Error ? err.message : "Please try again.",
      });
    }
  }

  const field =
    "glass-input-dark w-full rounded-lg px-4 py-3 text-base sm:text-sm";
  const label = "mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-300";

  return (
    <div className="eric-card rounded-2xl p-6 sm:p-8">
      <h3 className="mb-6 text-lg font-semibold text-white">{status === "success" ? labels.successTitle : labels.heading}</h3>
      {status === "success" ? (
        <div className="space-y-4">
          <p className="text-slate-300">{labels.successBody}</p>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="rounded text-sm font-semibold text-ssl-gold transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ssl-gold"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form className="space-y-5" onSubmit={onSubmit}>
          {/* Honeypot: hidden from people, filled by bots. */}
          <input
            type="text"
            name="website"
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            value={form.website}
            onChange={(e) => setForm({ ...form, website: e.target.value })}
          />
          <input type="hidden" name="source" value={SOURCE} />
          <div>
            <label htmlFor={`${fid}-name`} className={label}>
              {labels.name}
            </label>
            <input
              id={`${fid}-name`}
              name="name"
              type="text"
              autoComplete="name"
              required
              maxLength={100}
              className={field}
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor={`${fid}-email`} className={label}>
              {labels.email}
            </label>
            <input
              id={`${fid}-email`}
              name="email"
              type="email"
              autoComplete="email"
              required
              className={field}
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor={`${fid}-message`} className={label}>
              {labels.message}
            </label>
            <textarea
              id={`${fid}-message`}
              name="message"
              rows={4}
              required
              maxLength={2000}
              placeholder={labels.messagePlaceholder}
              className={`${field} resize-y`}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
          </div>
          <button
            type="submit"
            disabled={status === "submitting"}
            className="min-h-12 w-full rounded-lg bg-ssl-blue px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#2266e0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ssl-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ssl-bg disabled:opacity-60"
          >
            {status === "submitting" ? labels.sending : labels.submit}
          </button>
        </form>
      )}
      {toast && <Toast variant={toast.variant} title={toast.title} message={toast.message} onClose={closeToast} />}
    </div>
  );
}
