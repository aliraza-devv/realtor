import type { Metadata } from "next";
import { Suspense } from "react";
import { ListingsExplorer } from "@/components/listings-explorer";
import { priceSteps, propertyTypes } from "@/data/properties";

export const metadata: Metadata = {
  title: "Listings",
  description: "Browse current homes for sale in Austin, Texas.",
};

type SearchParams = PageProps<"/properties">["searchParams"];

function first(value: string | string[] | undefined) {
  return (Array.isArray(value) ? value[0] : value) ?? "";
}

async function Explorer({ searchParams }: { searchParams: SearchParams }) {
  const params = await searchParams;
  const type = first(params.type);
  const max = Number(first(params.max));

  return (
    <ListingsExplorer
      initial={{
        q: first(params.q),
        type: (propertyTypes as string[]).includes(type) ? type : "",
        max: priceSteps.some((s) => s.value === max) ? max : 0,
      }}
    />
  );
}

export default function PropertiesPage(props: PageProps<"/properties">) {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-20 pt-32 sm:px-8">
      <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent-ink">Listings</p>
      <h1 className="mt-4 font-display text-5xl leading-[1.02] tracking-tight sm:text-6xl">
        Homes for sale in Austin
      </h1>
      <p className="mt-4 max-w-xl text-lg text-muted">
        Hand-picked homes across the city&rsquo;s best neighborhoods. Filter by
        what matters to you, then book a tour.
      </p>

      <div className="mt-10">
        <Suspense
          fallback={<div className="h-20 animate-pulse rounded-2xl bg-paper-deep" aria-hidden="true" />}
        >
          <Explorer searchParams={props.searchParams} />
        </Suspense>
      </div>
    </section>
  );
}
