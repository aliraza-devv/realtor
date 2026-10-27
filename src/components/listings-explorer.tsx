"use client";

import { useMemo, useState } from "react";
import { MagnifyingGlass } from "@phosphor-icons/react/ssr";
import { priceSteps, properties, propertyTypes } from "@/data/properties";
import { PropertyCard } from "./property-card";

type Sort = "newest" | "price-asc" | "price-desc" | "size";

const field =
  "w-full rounded-xl border border-line bg-paper px-3.5 py-3 text-sm text-ink outline-none transition-colors focus:border-ink";

export function ListingsExplorer({
  initial,
}: {
  initial: { q: string; type: string; max: number };
}) {
  const [q, setQ] = useState(initial.q);
  const [type, setType] = useState(initial.type);
  const [max, setMax] = useState(initial.max);
  const [beds, setBeds] = useState(0);
  const [sort, setSort] = useState<Sort>("newest");

  const results = useMemo(() => {
    const needle = q.trim().toLowerCase();
    const filtered = properties.filter((p) => {
      if (type && p.type !== type) return false;
      if (max && p.price > max) return false;
      if (beds && p.beds < beds) return false;
      if (!needle) return true;
      return [p.title, p.address, p.neighborhood, p.city]
        .join(" ")
        .toLowerCase()
        .includes(needle);
    });

    switch (sort) {
      case "price-asc":
        return filtered.toSorted((a, b) => a.price - b.price);
      case "price-desc":
        return filtered.toSorted((a, b) => b.price - a.price);
      case "size":
        return filtered.toSorted((a, b) => b.sqft - a.sqft);
      default:
        return filtered;
    }
  }, [q, type, max, beds, sort]);

  function reset() {
    setQ("");
    setType("");
    setMax(0);
    setBeds(0);
    setSort("newest");
  }

  return (
    <>
      <div className="grid gap-3 rounded-2xl border border-line bg-paper-deep/60 p-3 md:grid-cols-[1.6fr_1fr_1fr_1fr_1fr]">
        <div className="relative">
          <label htmlFor="f-q" className="sr-only">Search listings</label>
          <MagnifyingGlass className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted" aria-hidden="true" />
          <input
            id="f-q"
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Neighborhood or address"
            className={`${field} pl-10`}
          />
        </div>

        <div>
          <label htmlFor="f-type" className="sr-only">Property type</label>
          <select id="f-type" value={type} onChange={(e) => setType(e.target.value)} className={field}>
            <option value="">Any type</option>
            {propertyTypes.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="f-max" className="sr-only">Maximum price</label>
          <select id="f-max" value={max} onChange={(e) => setMax(Number(e.target.value))} className={field}>
            {priceSteps.map((s) => (
              <option key={s.value} value={s.value}>{s.label}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="f-beds" className="sr-only">Minimum bedrooms</label>
          <select id="f-beds" value={beds} onChange={(e) => setBeds(Number(e.target.value))} className={field}>
            <option value={0}>Any beds</option>
            <option value={2}>2+ beds</option>
            <option value={3}>3+ beds</option>
            <option value={4}>4+ beds</option>
          </select>
        </div>

        <div>
          <label htmlFor="f-sort" className="sr-only">Sort by</label>
          <select id="f-sort" value={sort} onChange={(e) => setSort(e.target.value as Sort)} className={field}>
            <option value="newest">Newest</option>
            <option value="price-asc">Price: low to high</option>
            <option value="price-desc">Price: high to low</option>
            <option value="size">Largest</option>
          </select>
        </div>
      </div>

      <p className="mt-6 text-sm text-muted" aria-live="polite">
        {results.length} {results.length === 1 ? "home" : "homes"} found
      </p>

      {results.length > 0 ? (
        <div className="mt-6 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((property, i) => (
            <PropertyCard key={property.slug} property={property} priority={i < 3} />
          ))}
        </div>
      ) : (
        <div className="mt-6 flex flex-col items-center rounded-2xl border border-dashed border-line px-6 py-20 text-center">
          <MagnifyingGlass className="size-10 text-muted" aria-hidden="true" />
          <h2 className="mt-4 font-display text-2xl">No homes match those filters</h2>
          <p className="mt-2 max-w-sm text-sm text-muted">
            Try widening your price range or clearing the search. New homes,
            including off-market ones, arrive weekly.
          </p>
          <button
            type="button"
            onClick={reset}
            className="mt-6 rounded-full bg-brand px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent hover:text-on-accent"
          >
            Clear filters
          </button>
        </div>
      )}
    </>
  );
}
