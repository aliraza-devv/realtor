import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/ssr";
import { ProcessStories } from "./process-stories";
import { Reveal } from "./reveal";

export function ProcessSection() {
  return (
    <section
      id="process"
      aria-labelledby="process-title"
      className="mx-auto max-w-[1320px] scroll-mt-20 px-5 py-20 sm:px-8 lg:py-28"
    >
      <Reveal>
        <h2
          id="process-title"
          className="max-w-[16ch] text-[clamp(2.75rem,6vw,5rem)] font-semibold leading-[0.95] tracking-[-0.055em]"
        >
          Four steps from hello to <span className="text-brand">keys.</span>
        </h2>
        <p className="mt-5 max-w-[48ch] text-lg leading-relaxed text-muted">
          No jargon, no surprises. This is exactly what happens when you work with me.
        </p>
      </Reveal>

      <ProcessStories />

      <Reveal className="mt-12 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between lg:mt-14">
        <p className="max-w-[26ch] text-[clamp(1.5rem,2.4vw,2.25rem)] font-semibold leading-[1.05] tracking-[-0.05em]">
          Step one takes 30 minutes and costs nothing.
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
      </Reveal>
    </section>
  );
}
