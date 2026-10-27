"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Play } from "@phosphor-icons/react/ssr";
import { videoTestimonials } from "@/data/properties";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

/**
 * One large player with the clients lined up beside it. Each client leads with their
 * result, so the proof is readable before anyone presses play.
 */
export function VideoTestimonials() {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(false);
  const current = videoTestimonials[active];

  const select = (i: number) => {
    setActive(i);
    setPlaying(false);
  };

  return (
    <section
      id="videos"
      aria-labelledby="videos-title"
      className="mx-auto max-w-[1320px] scroll-mt-20 px-5 py-20 sm:px-8 lg:py-28"
    >
      <Reveal>
        <h2
          id="videos-title"
          className="max-w-[18ch] text-[clamp(2.75rem,6vw,5rem)] font-semibold leading-[0.95] tracking-[-0.055em]"
        >
          Watch what my clients say.
        </h2>
        <p className="mt-5 max-w-[48ch] text-lg leading-relaxed text-muted">
          Short, unscripted conversations with people who sold their home with me.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-6 lg:mt-14 lg:grid-cols-[1.55fr_1fr] lg:gap-8">
        <div className="relative aspect-video overflow-hidden rounded-[28px] bg-[#0a1514]">
          {playing ? (
            <video
              key={current.name}
              src={current.video}
              poster={current.poster}
              controls
              autoPlay
              playsInline
              className="absolute inset-0 size-full object-cover"
            />
          ) : (
            <>
              <Image
                key={current.name}
                src={current.poster}
                alt={`${current.name}, ${current.detail}`}
                fill
                sizes="(min-width: 1024px) 56vw, 100vw"
                className="object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[linear-gradient(to_top,rgba(5,18,17,0.88)_0%,rgba(5,18,17,0.35)_45%,rgba(5,18,17,0.1)_100%)]"
              />
              <button
                type="button"
                onClick={() => setPlaying(true)}
                aria-label={`Play ${current.name}'s story`}
                className="group absolute inset-0 z-10 grid place-items-center"
              >
                <span className="grid size-20 place-items-center rounded-full bg-accent text-on-accent shadow-[0_18px_40px_-14px_rgba(0,0,0,0.5)] transition-transform duration-300 group-hover:scale-110 group-active:scale-95 lg:size-24">
                  <Play weight="fill" className="size-8 translate-x-0.5 lg:size-9" aria-hidden="true" />
                </span>
              </button>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 p-5 text-white lg:p-8">
                <p className="max-w-[34ch] text-[clamp(1.15rem,2vw,1.85rem)] font-medium leading-[1.15] tracking-[-0.03em]">
                  &ldquo;{current.quote}&rdquo;
                </p>
                <p className="mt-3 text-[15px] text-white/80">
                  {current.name}, {current.detail}
                </p>
              </div>
            </>
          )}
        </div>

        <div className="flex flex-col gap-3">
          <ul className="flex flex-col gap-3">
            {videoTestimonials.map((t, i) => (
              <li key={t.name}>
                <button
                  type="button"
                  onClick={() => select(i)}
                  aria-pressed={i === active}
                  className={cn(
                    "flex w-full items-center gap-4 rounded-2xl border p-3 text-left transition-[border-color,background-color,transform] duration-300 active:scale-[0.99]",
                    i === active
                      ? "border-brand bg-paper-deep"
                      : "border-line hover:border-ink/30 hover:bg-paper-deep/60",
                  )}
                >
                  <span className="relative size-16 shrink-0 overflow-hidden rounded-xl bg-paper-deep">
                    <Image src={t.poster} alt="" fill sizes="64px" className="object-cover" />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-semibold">{t.name}</span>
                    <span className="block text-sm text-muted">{t.detail}</span>
                    <span className="mt-1 block text-sm font-medium text-brand">{t.result}</span>
                  </span>
                </button>
              </li>
            ))}
          </ul>

          <Link
            href="/#contact"
            className="group mt-1 flex items-center justify-between gap-4 rounded-2xl bg-brand p-5 text-white transition-transform duration-300 active:scale-[0.99]"
          >
            <span>
              <span className="block text-lg font-semibold tracking-[-0.02em]">
                Want results like these?
              </span>
              <span className="mt-0.5 block text-[15px] text-white/80">Book a free call</span>
            </span>
            <span className="grid size-11 shrink-0 place-items-center rounded-full bg-accent text-on-accent transition-transform duration-300 group-hover:translate-x-0.5">
              <ArrowRight className="size-[18px]" weight="bold" aria-hidden="true" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
