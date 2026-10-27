import { Star } from "@phosphor-icons/react/ssr";
import { siGoogle, siZillow, type SimpleIcon } from "simple-icons";
import { proof } from "@/data/properties";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

type Press = (typeof proof.press)[number];

const markStyle: Record<Press["mark"], string> = {
  disc: "rounded-full bg-ink/75 text-paper",
  ring: "rounded-[8px] border-2 border-ink/75 text-ink/75",
  arch: "rounded-t-full rounded-b-[4px] bg-ink/75 text-paper",
};

const toneStyle: Record<Press["tone"], string> = {
  bold: "font-bold tracking-[-0.03em]",
  italic: "font-medium italic tracking-[-0.02em]",
  regular: "font-normal tracking-[-0.01em]",
};

function BrandGlyph({ icon, className }: { icon: SimpleIcon; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={cn("shrink-0", className)}
    >
      <path d={icon.path} />
    </svg>
  );
}

function PressList({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul
      aria-hidden={hidden || undefined}
      aria-label={hidden ? undefined : "Publications that have featured Amelia"}
      className={cn("flex shrink-0 items-center gap-14 pr-14", hidden && "marquee-dup")}
    >
      {proof.press.map((outlet) => (
        <li key={outlet.name} className="flex items-center gap-3 whitespace-nowrap text-ink/75">
          <span
            aria-hidden="true"
            className={cn(
              "grid size-9 shrink-0 place-items-center text-[15px] font-bold",
              markStyle[outlet.mark],
            )}
          >
            {outlet.initial}
          </span>
          <span className={cn("text-[19px]", toneStyle[outlet.tone])}>{outlet.name}</span>
        </li>
      ))}
    </ul>
  );
}

export function ProofStrip() {
  const { rating, stats } = proof;

  return (
    <section aria-label="Reviews, results and press" className="border-y border-line bg-paper-deep">
      <div className="mx-auto max-w-[1320px] px-5 py-14 sm:px-8 lg:py-20">
        <ul className="grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-[1.35fr_1fr_1fr_1fr] lg:gap-x-0">
          <li className="col-span-2 lg:col-span-1 lg:pr-8">
            <Reveal>
              <p className="flex items-end gap-5">
                <span className="font-display text-[clamp(3.5rem,8vw,5.5rem)] leading-[0.85] tracking-[-0.06em]">
                  {rating.score}
                </span>
                <span className="flex gap-0.5 pb-1 text-accent" aria-hidden="true">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star key={i} weight="fill" className="size-5" />
                  ))}
                </span>
                <span className="sr-only">Rated {rating.score} out of 5</span>
              </p>
              <p className="mt-4 flex max-w-[34ch] flex-wrap items-center gap-x-1.5 gap-y-1 text-[15px] leading-snug text-muted">
                {rating.count} reviews on
                <span className="inline-flex items-center gap-1.5 text-ink">
                  <BrandGlyph icon={siGoogle} className="size-4" />
                  Google
                </span>
                and
                <span className="inline-flex items-center gap-1.5 text-ink">
                  <BrandGlyph icon={siZillow} className="size-4" />
                  Zillow
                </span>
              </p>
            </Reveal>
          </li>

          {stats.map((stat, i) => (
            <li
              key={stat.value}
              className={cn(
                "lg:border-l lg:border-line lg:pl-8",
                i === stats.length - 1 && "col-span-2 lg:col-span-1",
              )}
            >
              <Reveal delay={(i + 1) * 0.08}>
                <p className="font-display text-[clamp(2.5rem,4.6vw,3.75rem)] leading-[0.95] tracking-[-0.05em]">
                  {stat.value}
                </p>
                <p className="mt-4 max-w-[28ch] text-[15px] leading-snug text-muted">{stat.label}</p>
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal
          delay={0.1}
          className="mt-14 flex flex-col gap-5 border-t border-line pt-8 lg:mt-16 lg:flex-row lg:items-center lg:gap-10"
        >
          <p className="shrink-0 text-[15px] text-muted">As featured in</p>
          <div className="marquee min-w-0 flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_9%,#000_91%,transparent)] motion-reduce:[mask-image:none]">
            <div className="marquee-track">
              <PressList />
              <PressList hidden />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
