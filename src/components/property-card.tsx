import Image from "next/image";
import Link from "next/link";
import { Bathtub, Bed, Ruler } from "@phosphor-icons/react/ssr";
import type { Property } from "@/data/properties";
import { formatPrice } from "@/lib/utils";

export function PropertyCard({
  property,
  priority = false,
}: {
  property: Property;
  priority?: boolean;
}) {
  return (
    <Link
      href={`/properties/${property.slug}`}
      className="group block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-paper-deep">
        <Image
          src={property.image}
          alt={`${property.title}, ${property.neighborhood}`}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        {property.status && (
          <span className="absolute left-3 top-3 rounded-full bg-paper px-3 py-1 text-xs font-medium text-ink">
            {property.status}
          </span>
        )}
      </div>

      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-xl leading-tight">{property.title}</h3>
          <p className="mt-1 text-sm text-muted">
            {property.address} · {property.neighborhood}
          </p>
        </div>
        <p className="shrink-0 font-display text-xl text-accent-ink">
          {formatPrice(property.price)}
        </p>
      </div>

      <ul className="mt-3 flex gap-5 border-t border-line pt-3 text-sm text-muted">
        <li className="flex items-center gap-1.5">
          <Bed className="size-4" aria-hidden="true" />
          {property.beds} bd
        </li>
        <li className="flex items-center gap-1.5">
          <Bathtub className="size-4" aria-hidden="true" />
          {property.baths} ba
        </li>
        <li className="flex items-center gap-1.5">
          <Ruler className="size-4" aria-hidden="true" />
          {property.sqft.toLocaleString("en-US")} sq ft
        </li>
      </ul>
    </Link>
  );
}
