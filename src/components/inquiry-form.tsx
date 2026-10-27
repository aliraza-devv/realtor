"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle, CircleNotch } from "@phosphor-icons/react/ssr";
import { cn } from "@/lib/utils";

type Status = "idle" | "sending" | "sent" | "error";

const field =
  "mt-1.5 w-full rounded-xl border border-line bg-paper px-3.5 py-3 text-sm text-ink outline-none transition-colors placeholder:text-muted/60 focus:border-ink";
const label = "text-sm font-medium";

export function InquiryForm({
  property,
  className,
}: {
  property?: string;
  className?: string;
}) {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setStatus("sending");

    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, property }),
      });
      if (!res.ok) throw new Error("Request failed");
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className={cn("rounded-2xl border border-line bg-paper p-8 text-center", className)}>
        <CheckCircle className="mx-auto size-10 text-accent-ink" aria-hidden="true" />
        <h3 className="mt-4 font-display text-2xl">Thank you, message received.</h3>
        <p className="mt-2 text-sm text-muted">
          I&rsquo;ll reply personally within one business day.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-5 text-sm font-medium text-accent-ink underline underline-offset-4"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className={cn("space-y-4 rounded-2xl border border-line bg-paper p-6 sm:p-8", className)}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={label}>Name</label>
          <input id="name" name="name" required autoComplete="name" className={field} placeholder="Jane Smith" />
        </div>
        <div>
          <label htmlFor="email" className={label}>Email</label>
          <input id="email" name="email" type="email" required autoComplete="email" className={field} placeholder="jane@email.com" />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className={label}>Phone <span className="text-muted">(optional)</span></label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" className={field} placeholder="(512) 555-0100" />
        </div>
        {!property && (
          <div>
            <label htmlFor="interest" className={label}>I&rsquo;m looking to</label>
            <select id="interest" name="interest" defaultValue="buy" className={field}>
              <option value="buy">Buy a home</option>
              <option value="sell">Sell a home</option>
              <option value="both">Buy and sell</option>
              <option value="explore">Just exploring</option>
            </select>
          </div>
        )}
      </div>

      <div>
        <label htmlFor="message" className={label}>Message</label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className={field}
          defaultValue={property ? `I'd like to tour ${property}.` : ""}
          placeholder="Tell me a little about what you're looking for."
        />
      </div>

      {status === "error" && (
        <p role="alert" className="text-sm text-danger">
          Something went wrong sending your message. Please try again.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="flex w-full items-center justify-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-accent hover:text-on-accent disabled:opacity-60"
      >
        {status === "sending" && <CircleNotch className="size-4 animate-spin" aria-hidden="true" />}
        {property ? "Request a tour" : "Book a free consultation"}
      </button>
    </form>
  );
}
