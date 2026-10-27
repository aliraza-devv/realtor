import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { ArrowLeft, Bathtub, Bed, Calendar, Check, Phone, Ruler } from "@phosphor-icons/react/ssr";
import { InquiryForm } from "@/components/inquiry-form";
import { agent, getProperty, properties } from "@/data/properties";
import { formatPrice } from "@/lib/utils";

export function generateStaticParams() {
  return properties.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(
  props: PageProps<"/properties/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const property = getProperty(slug);
  if (!property) return {};

  return {
    title: `${property.title} · ${property.address}`,
    description: `${property.beds} bed, ${property.baths} bath ${property.type.toLowerCase()} in ${property.neighborhood}, ${property.city}. ${formatPrice(property.price)}.`,
  };
}

export default function PropertyPage(props: PageProps<"/properties/[slug]">) {
  return (
    <Suspense fallback={<PropertySkeleton />}>
      <PropertyDetail params={props.params} />
    </Suspense>
  );
}

function PropertySkeleton() {
  return (
    <div className="mx-auto max-w-7xl px-5 pb-20 pt-28 sm:px-8" aria-hidden="true">
      <div className="h-4 w-24 animate-pulse rounded bg-paper-deep" />
      <div className="mt-6 h-14 w-2/3 animate-pulse rounded bg-paper-deep" />
      <div className="mt-8 aspect-[16/9] animate-pulse rounded-2xl bg-paper-deep" />
    </div>
  );
}

async function PropertyDetail({
  params,
}: {
  params: PageProps<"/properties/[slug]">["params"];
}) {
  const { slug } = await params;
  const property = getProperty(slug);
  if (!property) notFound();

  const [main, ...rest] = property.gallery;
  const facts = [
    { icon: Bed, label: "Bedrooms", value: property.beds },
    { icon: Bathtub, label: "Bathrooms", value: property.baths },
    { icon: Ruler, label: "Square feet", value: property.sqft.toLocaleString("en-US") },
    { icon: Calendar, label: "Year built", value: property.year },
  ];

  return (
    <div className="mx-auto max-w-7xl px-5 pb-20 pt-28 sm:px-8">
      <Link
        href="/properties"
        className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-ink"
      >
        <ArrowLeft className="size-4" aria-hidden="true" />
        All listings
      </Link>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          {property.status && (
            <span className="mb-3 inline-block rounded-full bg-paper-deep px-3 py-1 text-xs font-medium">
              {property.status}
            </span>
          )}
          <h1 className="font-display text-4xl leading-[1.05] tracking-tight sm:text-6xl">
            {property.title}
          </h1>
          <p className="mt-3 text-muted">
            {property.address} · {property.neighborhood}, {property.city}
          </p>
        </div>
        <p className="font-display text-4xl text-accent-ink sm:text-5xl">{formatPrice(property.price)}</p>
      </div>

      <div className="mt-8 grid gap-3 md:grid-cols-[2fr_1fr] md:grid-rows-3">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-paper-deep md:row-span-3 md:aspect-auto md:min-h-[32rem]">
          <Image
            src={main}
            alt={`${property.title} exterior`}
            fill
            priority
            sizes="(min-width: 768px) 66vw, 100vw"
            className="object-cover"
          />
        </div>
        {rest.map((src, i) => (
          <div key={src + i} className="relative hidden aspect-[16/10] overflow-hidden rounded-2xl bg-paper-deep md:block md:aspect-auto">
            <Image
              src={src}
              alt={`${property.title} interior ${i + 1}`}
              fill
              sizes="33vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>

      <div className="mt-12 grid gap-12 lg:grid-cols-[1.6fr_1fr] lg:gap-16">
        <div>
          <dl className="grid grid-cols-2 gap-6 border-y border-line py-6 sm:grid-cols-4">
            {facts.map(({ icon: Icon, label, value }) => (
              <div key={label}>
                <dt className="flex items-center gap-2 text-sm text-muted">
                  <Icon className="size-4" aria-hidden="true" />
                  {label}
                </dt>
                <dd className="mt-1 font-display text-3xl">{value}</dd>
              </div>
            ))}
          </dl>

          <h2 className="mt-10 font-display text-3xl">About this home</h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">{property.description}</p>

          <h2 className="mt-10 font-display text-3xl">Highlights</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {property.features.map((f) => (
              <li key={f} className="flex items-start gap-3 text-sm leading-relaxed">
                <Check className="mt-0.5 size-4 shrink-0 text-accent-ink" aria-hidden="true" />
                {f}
              </li>
            ))}
          </ul>
        </div>

        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="mb-4 flex items-center gap-4">
            <div className="relative size-14 overflow-hidden rounded-full bg-line">
              <Image src={agent.photo} alt="" fill sizes="56px" className="object-cover" />
            </div>
            <div>
              <p className="font-display text-lg leading-tight">{agent.name}</p>
              <a
                href={`tel:${agent.phone.replace(/\D/g, "")}`}
                className="mt-0.5 flex items-center gap-1.5 text-sm text-muted hover:text-accent-ink"
              >
                <Phone className="size-3.5" aria-hidden="true" />
                {agent.phone}
              </a>
            </div>
          </div>
          <InquiryForm property={`${property.title} (${property.address})`} />
        </aside>
      </div>
    </div>
  );
}
