"use client";

import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";
import { useEffect, useRef } from "react";
import { ArrowRight } from "@phosphor-icons/react/ssr";
import { cases } from "@/data/properties";
import { cn } from "@/lib/utils";

type Case = (typeof cases)[number];

function CaseInfo({ item, className }: { item: Case; className?: string }) {
  return (
    <div className={className}>
      <p className="text-[15px] text-muted">{item.descriptor}</p>
      <h3 className="mt-2 text-[clamp(2.5rem,5vw,4.75rem)] font-semibold leading-[0.95] tracking-[-0.055em]">
        {item.neighborhood}
      </h3>
      <p className="mt-6 text-lg text-muted">
        Sold for{" "}
        <span className="font-display text-[clamp(1.9rem,3vw,2.9rem)] tracking-[-0.045em] text-brand">
          {item.soldPrice}
        </span>
      </p>
      <p className="mt-5 max-w-[36ch] text-[clamp(1rem,1.2vw,1.1875rem)] leading-relaxed">
        {item.story}
      </p>
      <ul className="mt-7 grid grid-cols-[1.4fr_1fr_0.7fr] gap-x-4 border-t border-line pt-6">
        {item.metrics.map((metric) => (
          <li key={metric.label} className="flex flex-col-reverse gap-1.5">
            <span className="text-[13px] leading-snug text-muted">{metric.label}</span>
            <span
              className={cn(
                "font-display text-[clamp(1.2rem,1.9vw,1.9rem)] leading-none tracking-[-0.045em]",
                "highlight" in metric && metric.highlight && "text-brand",
              )}
            >
              {metric.value}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Heading({ className, scrollHint = false }: { className?: string; scrollHint?: boolean }) {
  return (
    <div className={className}>
      <h2
        id="work-title"
        className="text-[clamp(2.75rem,5vw,5rem)] font-semibold leading-[0.95] tracking-[-0.055em]"
      >
        <span className="block">Shown honestly.</span>
        <span className="block text-brand">Sold fast.</span>
      </h2>
      <p className="mt-6 max-w-[38ch] text-lg leading-relaxed text-muted">
        Four recent Austin sales: what each one sold for, how it compared to asking, and what we
        changed to get there.
      </p>

      <ul
        aria-label="Homes in this gallery"
        className="mt-8 max-w-[420px] divide-y divide-line border-y border-line"
      >
        {cases.map((item) => (
          <li key={item.neighborhood} className="flex items-baseline justify-between gap-4 py-3">
            <span className="font-medium">{item.neighborhood}</span>
            <span className="font-display text-[1.15rem] tracking-[-0.03em] text-brand">
              {item.soldPrice}
            </span>
          </li>
        ))}
      </ul>

      {scrollHint && (
        <p className="mt-6 flex items-center gap-3 text-sm text-muted">
          <span className="grid size-8 place-items-center rounded-full bg-brand text-white">
            <ArrowRight className="size-4" weight="bold" aria-hidden="true" />
          </span>
          Keep scrolling to see each sale
        </p>
      )}
    </div>
  );
}

function ClosingCta({ className }: { className?: string }) {
  return (
    <div className={className}>
      <p className="max-w-[12ch] text-[clamp(2.5rem,4.6vw,4.5rem)] font-semibold leading-[0.96] tracking-[-0.055em]">
        Your home could be next.
      </p>
      <p className="mt-5 max-w-[34ch] text-lg leading-relaxed text-muted">
        Get an honest price range in 30 minutes. No listing agreement needed.
      </p>
      <Link
        href="/#contact"
        className="group mt-8 inline-flex h-14 items-center justify-between gap-6 whitespace-nowrap rounded-full bg-brand pl-7 pr-2 text-[16px] font-medium text-white transition-transform duration-300 active:scale-[0.98]"
      >
        Book a free call
        <span className="grid size-10 place-items-center rounded-full bg-accent text-on-accent transition-transform duration-300 group-hover:translate-x-0.5">
          <ArrowRight className="size-[18px]" weight="bold" aria-hidden="true" />
        </span>
      </Link>
    </div>
  );
}

/** A photo that drifts a little against the track, so the frame has depth as it slides past. */
function Photo({
  item,
  progress,
  center,
}: {
  item: Case;
  progress: MotionValue<number>;
  center: number;
}) {
  // Function form on purpose: a range that spills outside 0 to 1 is rejected by the browser.
  const shift = useTransform(progress, (p) => Math.max(-1, Math.min(1, (center - p) / 0.3)) * 48);
  return (
    <div className="relative h-[min(72vh,700px)] w-[min(56vw,980px)] shrink-0 overflow-hidden rounded-[28px] bg-paper">
      <motion.div style={{ x: shift }} className="absolute -inset-x-[7%] inset-y-0">
        <Image
          src={item.image}
          alt={item.alt}
          fill
          sizes="(min-width: 1024px) 62vw, 100vw"
          className="object-cover"
        />
      </motion.div>
    </div>
  );
}

function Label({
  name,
  progress,
  center,
}: {
  name: string;
  progress: MotionValue<number>;
  center: number;
}) {
  const opacity = useTransform(progress, (p) => 1 - Math.min(1, Math.abs(p - center) / 0.14) * 0.6);
  return <motion.li style={{ opacity }}>{name}</motion.li>;
}

/**
 * Featured work as a pinned, sideways-scrolling gallery. Scrolling down slides a track of
 * large photographs across the screen, each with its result beside it. Below the large
 * breakpoint, and for anyone who prefers reduced motion, it is a plain vertical list.
 */
export function FeaturedWork() {
  const reduce = useReducedMotion() ?? false;
  const section = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const distance = useMotionValue(0);

  const { scrollYProgress } = useScroll({ target: section, offset: ["start start", "end end"] });
  const x = useTransform([scrollYProgress, distance], ([p, d]: number[]) => -p * d);

  useEffect(() => {
    const el = section.current;
    const strip = track.current;
    if (!el || !strip) return;

    const large = window.matchMedia("(min-width: 1024px)");
    const measure = () => {
      if (!large.matches || reduce) {
        el.style.height = "";
        distance.set(0);
        return;
      }
      const d = Math.max(0, strip.scrollWidth - window.innerWidth);
      distance.set(d);
      // Horizontal travel runs a little faster than the vertical scroll that drives it.
      el.style.height = `${window.innerHeight + d * 0.75}px`;
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(strip);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
      el.style.height = "";
    };
  }, [distance, reduce]);

  const slideCount = cases.length + 2; // intro, cases, closing call to action
  const center = (slide: number) => slide / (slideCount - 1);

  return (
    <section
      ref={section}
      id="work"
      aria-labelledby="work-title"
      className="relative border-y border-line bg-paper-deep"
    >
      {/* Vertical layout: phones, tablets and reduced motion */}
      <div className={cn("mx-auto max-w-[1320px] px-5 py-20 sm:px-8", !reduce && "lg:hidden")}>
        <Heading />
        <ol className="mt-14 space-y-16">
          {cases.map((item) => (
            <li key={item.neighborhood}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] bg-paper sm:aspect-[4/3]">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 640px) 90vw, 100vw"
                  className="object-cover"
                />
              </div>
              <CaseInfo item={item} className="mt-7" />
            </li>
          ))}
        </ol>
        <ClosingCta className="mt-20" />
      </div>

      {/* Pinned sideways gallery: large screens */}
      <div className={cn("sticky top-0 hidden h-screen overflow-hidden", !reduce && "lg:block")}>
        <motion.div
          ref={track}
          style={{ x }}
          className="absolute inset-y-0 left-0 flex w-max items-center gap-[6vw] pl-[max(2rem,calc((100vw-1320px)/2+2rem))] pr-[10vw] will-change-transform"
        >
          <Heading className="w-[min(40vw,600px)] shrink-0" scrollHint />

          {cases.map((item, i) => (
            <article key={item.neighborhood} className="flex shrink-0 items-center gap-[3.5vw]">
              <Photo item={item} progress={scrollYProgress} center={center(i + 1)} />
              <CaseInfo item={item} className="w-[min(25vw,420px)]" />
            </article>
          ))}

          <ClosingCta className="w-[min(34vw,520px)] shrink-0" />
        </motion.div>

        <div className="absolute inset-x-0 bottom-8 mx-auto flex max-w-[1320px] items-center gap-8 px-8">
          <div className="relative h-0.5 flex-1 rounded-full bg-line">
            <motion.span
              aria-hidden="true"
              style={{ scaleX: scrollYProgress }}
              className="absolute inset-0 origin-left rounded-full bg-brand"
            />
          </div>
          <ul className="flex gap-7 text-sm font-medium" aria-hidden="true">
            {cases.map((item, i) => (
              <Label
                key={item.neighborhood}
                name={item.neighborhood}
                progress={scrollYProgress}
                center={center(i + 1)}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
