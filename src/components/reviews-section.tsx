"use client";

import Image from "next/image";
import { useId, useRef, useState, type KeyboardEvent } from "react";
import { testimonials } from "@/data/properties";
import { cn } from "@/lib/utils";

/**
 * One large client quote at a time, picked by tabs that show the home each client sold.
 * Every quote sits in the same grid cell, so the section never changes height.
 */
export function ReviewsSection() {
  const [active, setActive] = useState(0);
  const uid = useId();
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const last = testimonials.length - 1;
    const next =
      e.key === "ArrowRight" ? (active === last ? 0 : active + 1)
      : e.key === "ArrowLeft" ? (active === 0 ? last : active - 1)
      : e.key === "Home" ? 0
      : e.key === "End" ? last
      : null;
    if (next === null) return;
    e.preventDefault();
    setActive(next);
    tabs.current[next]?.focus();
  };

  return (
    <section
      id="reviews"
      aria-labelledby={`${uid}-title`}
      className="scroll-mt-20 border-y border-line bg-paper-deep"
    >
      <div className="mx-auto max-w-[1320px] px-5 py-20 sm:px-8 lg:py-28">
        <h2 id={`${uid}-title`} className="text-lg text-muted">
          What my clients say
        </h2>

        <div className="mt-8 grid">
          {testimonials.map((t, i) => (
            <figure
              key={t.name}
              id={`${uid}-panel-${i}`}
              role="tabpanel"
              aria-labelledby={`${uid}-tab-${i}`}
              inert={i !== active}
              className={cn(
                "col-start-1 row-start-1 transition-[opacity,transform] duration-500 ease-out motion-reduce:transition-none",
                i === active ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0",
              )}
            >
              <blockquote className="max-w-[40ch] text-[clamp(1.9rem,4vw,3.4rem)] font-medium leading-[1.1] tracking-[-0.04em]">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-8 text-lg">
                <span className="font-medium">{t.name}</span>
                <span className="text-muted">, {t.detail}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div
          role="tablist"
          aria-label="Choose a client story"
          onKeyDown={onKeyDown}
          className="mt-12 grid gap-3 sm:grid-cols-3 lg:mt-16"
        >
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              ref={(el) => {
                tabs.current[i] = el;
              }}
              type="button"
              role="tab"
              id={`${uid}-tab-${i}`}
              aria-selected={i === active}
              aria-controls={`${uid}-panel-${i}`}
              tabIndex={i === active ? 0 : -1}
              onClick={() => setActive(i)}
              className={cn(
                "flex items-center gap-4 rounded-2xl border p-3 text-left transition-[border-color,background-color,transform] duration-300 active:scale-[0.98]",
                i === active
                  ? "border-brand bg-paper"
                  : "border-line hover:border-ink/30 hover:bg-paper/60",
              )}
            >
              <span className="relative size-14 shrink-0 overflow-hidden rounded-xl bg-paper">
                <Image src={t.image} alt="" fill sizes="56px" className="object-cover" />
              </span>
              <span className="min-w-0">
                <span className="block truncate font-medium">{t.name}</span>
                <span className="block truncate text-sm text-muted">{t.detail}</span>
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
