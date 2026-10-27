"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import { ArrowRight, Bathtub, Bed, Ruler } from "@phosphor-icons/react/ssr";
import { properties, propertyTypes } from "@/data/properties";
import { cn, formatPrice } from "@/lib/utils";
import { Reveal } from "./reveal";

const types = [{ label: "All", value: "" }, ...propertyTypes.map((t) => ({ label: t, value: t }))];

const budgets = [
  { label: "Any", min: 0, max: Infinity },
  { label: "Under $750K", min: 0, max: 750000 },
  { label: "$750K-$1.5M", min: 750000, max: 1500000 },
  { label: "$1.5M+", min: 1500000, max: Infinity },
];

const bedrooms = [
  { label: "Any", value: 0 },
  { label: "2+", value: 2 },
  { label: "3+", value: 3 },
  { label: "4+", value: 4 },
];

const MAX_SHOWN = 6;

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={cn(
        "rounded-full border px-3.5 py-1.5 text-sm transition-[background-color,border-color,color,transform] duration-200 active:scale-[0.96]",
        active
          ? "border-brand bg-brand text-white"
          : "border-line bg-paper text-ink hover:border-ink/30",
      )}
    >
      {children}
    </button>
  );
}

/**
 * Homes for sale as cards, with filters that are chips rather than dropdowns, so a visitor
 * can narrow the list in two or three taps. Cards reflow with a short animation.
 */
export function ListingsSection() {
  const reduce = useReducedMotion();
  const [type, setType] = useState("");
  const [budget, setBudget] = useState(0);
  const [beds, setBeds] = useState(0);

  const range = budgets[budget];
  const results = properties.filter(
    (p) =>
      (!type || p.type === type) &&
      p.price >= range.min &&
      p.price < range.max &&
      p.beds >= beds,
  );
  const shown = results.slice(0, MAX_SHOWN);
  const filtered = type !== "" || budget !== 0 || beds !== 0;

  const reset = () => {
    setType("");
    setBudget(0);
    setBeds(0);
  };

  return (
    <section
      id="homes"
      aria-labelledby="homes-title"
      className="mx-auto max-w-[1320px] scroll-mt-20 px-5 py-20 sm:px-8 lg:py-28"
    >
      <Reveal>
        <h2
          id="homes-title"
          className="max-w-[18ch] text-[clamp(2.75rem,6vw,5rem)] font-semibold leading-[0.95] tracking-[-0.055em]"
        >
          Find a home that fits.
        </h2>
        <p className="mt-5 max-w-[48ch] text-lg leading-relaxed text-muted">
          Narrow it down in a couple of taps. Every home here is one I have walked through myself.
        </p>
      </Reveal>

      <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 rounded-2xl border border-line bg-paper-deep px-4 py-3 sm:px-5 lg:mt-10">
        <div role="group" aria-label="Home type" className="flex flex-wrap items-center gap-2.5">
          <span className="text-sm text-muted">Type</span>
          <div className="flex flex-wrap gap-1.5">
            {types.map((t) => (
              <Chip key={t.label} active={type === t.value} onClick={() => setType(t.value)}>
                {t.label}
              </Chip>
            ))}
          </div>
        </div>

        <div role="group" aria-label="Budget" className="flex flex-wrap items-center gap-2.5">
          <span className="text-sm text-muted">Budget</span>
          <div className="flex flex-wrap gap-1.5">
            {budgets.map((b, i) => (
              <Chip key={b.label} active={budget === i} onClick={() => setBudget(i)}>
                {b.label}
              </Chip>
            ))}
          </div>
        </div>

        <div role="group" aria-label="Bedrooms" className="flex flex-wrap items-center gap-2.5">
          <span className="text-sm text-muted">Beds</span>
          <div className="flex flex-wrap gap-1.5">
            {bedrooms.map((b) => (
              <Chip key={b.label} active={beds === b.value} onClick={() => setBeds(b.value)}>
                {b.label}
              </Chip>
            ))}
          </div>
        </div>

        <div className="ml-auto flex items-center gap-4">
          <p aria-live="polite" className="text-sm font-medium">
            {results.length} {results.length === 1 ? "home matches" : "homes match"}
          </p>
          {filtered && (
            <button
              type="button"
              onClick={reset}
              className="text-sm font-medium text-brand underline underline-offset-4"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {shown.length > 0 ? (
        <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {shown.map((p) => (
              <motion.li
                key={p.slug}
                layout={!reduce}
                initial={reduce ? false : { opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link
                  href={`/properties/${p.slug}`}
                  className="group block overflow-hidden rounded-[28px] border border-line bg-paper transition-shadow duration-300 hover:shadow-[0_30px_60px_-34px_color-mix(in_srgb,var(--ink)_45%,transparent)]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-paper-deep">
                    <Image
                      src={p.image}
                      alt={`${p.title}, ${p.neighborhood}`}
                      fill
                      sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                    />
                  </div>

                  <div className="p-5 lg:p-6">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      <p className="text-sm text-muted">{p.neighborhood}</p>
                      {p.status && (
                        <span className="rounded-full bg-accent/25 px-2.5 py-0.5 text-xs font-semibold text-ink">
                          {p.status}
                        </span>
                      )}
                    </div>

                    <div className="mt-2 flex items-start justify-between gap-4">
                      <h3 className="font-display text-[1.4rem] leading-tight">{p.title}</h3>
                      <p className="shrink-0 font-display text-[1.4rem] leading-tight text-brand">
                        {formatPrice(p.price)}
                      </p>
                    </div>

                    <ul className="mt-4 flex gap-5 text-sm text-muted">
                      <li className="flex items-center gap-1.5">
                        <Bed className="size-4" aria-hidden="true" />
                        {p.beds} bd
                      </li>
                      <li className="flex items-center gap-1.5">
                        <Bathtub className="size-4" aria-hidden="true" />
                        {p.baths} ba
                      </li>
                      <li className="flex items-center gap-1.5">
                        <Ruler className="size-4" aria-hidden="true" />
                        {p.sqft.toLocaleString("en-US")} sq ft
                      </li>
                    </ul>

                    <p className="mt-5 flex items-center justify-between border-t border-line pt-4 text-[15px] font-medium text-brand">
                      Tour this home
                      <ArrowRight
                        className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </p>
                  </div>
                </Link>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      ) : (
        <div className="mt-8 rounded-[28px] border border-dashed border-line px-6 py-16 text-center">
          <h3 className="font-display text-3xl">Nothing matches that mix yet.</h3>
          <p className="mx-auto mt-3 max-w-[46ch] text-muted">
            Tell me what you need and I will check off-market homes before they list.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <button
              type="button"
              onClick={reset}
              className="rounded-full border border-ink/20 px-6 py-3 text-[15px] font-medium transition-colors hover:border-ink"
            >
              Clear filters
            </button>
            <Link
              href="/#contact"
              className="rounded-full bg-brand px-6 py-3 text-[15px] font-medium text-white transition-colors hover:bg-accent hover:text-on-accent"
            >
              Book a free call
            </Link>
          </div>
        </div>
      )}

      <Link
        href="/properties"
        className="group mt-8 inline-flex items-center gap-2 text-[15px] font-medium"
      >
        Browse all {properties.length} homes
        <ArrowRight
          className="size-4 transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden="true"
        />
      </Link>
    </section>
  );
}
