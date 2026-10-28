"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type CSSProperties } from "react";
import { ArrowRight, Play } from "@phosphor-icons/react/ssr";
import { testimonials } from "@/data/properties";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

type Controls = { playing: string | null; setPlaying: (id: string | null) => void };

function CardList({
  list,
  playing,
  setPlaying,
  hidden = false,
}: Controls & { list: string; hidden?: boolean }) {
  return (
    <ul
      aria-hidden={hidden || undefined}
      aria-label={hidden ? undefined : "Client video testimonials"}
      className={cn("flex shrink-0 items-start gap-5 pb-4 pr-5 pt-2", hidden && "marquee-dup")}
    >
      {testimonials.map((t) => {
        const id = `${list}-${t.name}`;
        const isPlaying = playing === id;

        return (
          <li key={t.name} className="w-[250px] shrink-0 sm:w-[270px]">
            <figure className="relative aspect-[9/16] overflow-hidden rounded-[28px] bg-ink shadow-[0_30px_50px_-30px_color-mix(in_srgb,var(--ink)_55%,transparent)]">
              {isPlaying ? (
                <video
                  src={t.video}
                  poster={t.image}
                  controls
                  autoPlay
                  playsInline
                  onEnded={() => setPlaying(null)}
                  className="absolute inset-0 size-full object-cover"
                />
              ) : (
                <>
                  <Image src={t.image} alt="" fill sizes="270px" className="object-cover" />
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 bg-[linear-gradient(to_top,rgba(5,18,17,0.9)_0%,rgba(5,18,17,0.45)_38%,transparent_62%)]"
                  />
                  <span className="absolute left-3.5 top-3.5 rounded-full bg-paper/90 px-3 py-1 text-sm font-semibold text-brand">
                    {t.result}
                  </span>
                  <span className="absolute right-3.5 top-3.5 rounded-full bg-ink/60 px-2.5 py-1 text-xs font-medium text-white">
                    {t.length}
                  </span>
                  <button
                    type="button"
                    tabIndex={hidden ? -1 : undefined}
                    onClick={() => setPlaying(id)}
                    aria-label={`Play ${t.name}'s testimonial, ${t.length}`}
                    className="group absolute inset-0 z-10 grid place-items-center"
                  >
                    <span className="grid size-16 place-items-center rounded-full bg-accent text-on-accent shadow-[0_18px_40px_-14px_rgba(0,0,0,0.55)] transition-transform duration-300 group-hover:scale-110 group-active:scale-95">
                      <Play weight="fill" className="size-6 translate-x-0.5" aria-hidden="true" />
                    </span>
                  </button>
                  <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 p-4 text-white">
                    <blockquote className="line-clamp-3 text-[17px] font-medium leading-snug tracking-[-0.02em]">
                      &ldquo;{t.quote}&rdquo;
                    </blockquote>
                    <p className="mt-3 text-sm">
                      <span className="font-semibold">{t.name}</span>
                      <span className="text-white/75">, {t.detail}</span>
                    </p>
                  </figcaption>
                </>
              )}
            </figure>
          </li>
        );
      })}
    </ul>
  );
}

/**
 * 9:16 client videos drift past on their own and pause under the pointer, or while one is
 * playing. It is a plain overflow-clipped track and not a scroll container, so it never
 * captures the mouse wheel.
 */
export function TestimonialsSection() {
  const [playing, setPlaying] = useState<string | null>(null);

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-title"
      className="scroll-mt-20 py-20 lg:py-28"
    >
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
        <Reveal>
          <h2
            id="testimonials-title"
            className="max-w-[18ch] text-[clamp(2.75rem,6vw,5rem)] font-semibold leading-[0.95] tracking-[-0.055em]"
          >
            Watch what my clients say.
          </h2>
          <p className="mt-5 max-w-[48ch] text-lg leading-relaxed text-muted">
            Short, unscripted videos from people who bought or sold with me.
          </p>
        </Reveal>
      </div>

      <div
        className="marquee mt-12 overflow-x-clip [mask-image:linear-gradient(to_right,transparent,#000_7%,#000_93%,transparent)] motion-reduce:[mask-image:none] lg:mt-14"
        style={{ "--marquee-duration": "70s" } as CSSProperties}
      >
        <div
          className="marquee-track"
          style={playing ? { animationPlayState: "paused" } : undefined}
        >
          <CardList list="a" playing={playing} setPlaying={setPlaying} />
          <CardList list="b" playing={playing} setPlaying={setPlaying} hidden />
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-[1320px] flex-col gap-5 px-5 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:mt-12">
        <p className="max-w-[26ch] text-[clamp(1.5rem,2.4vw,2.25rem)] font-semibold leading-[1.05] tracking-[-0.05em]">
          Want results like these?
        </p>
        <Link
          href="/#contact"
          className="group inline-flex h-14 w-full shrink-0 items-center justify-between gap-6 whitespace-nowrap rounded-full bg-brand pl-7 pr-2 text-[16px] font-medium text-white transition-transform duration-300 active:scale-[0.98] sm:w-auto"
        >
          Book a free call
          <span className="grid size-10 place-items-center rounded-full bg-accent text-on-accent transition-transform duration-300 group-hover:translate-x-0.5">
            <ArrowRight className="size-[18px]" weight="bold" aria-hidden="true" />
          </span>
        </Link>
      </div>
    </section>
  );
}
