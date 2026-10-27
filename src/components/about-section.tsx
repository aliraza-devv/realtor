import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, InstagramLogo } from "@phosphor-icons/react/ssr";
import { agent } from "@/data/properties";
import { StoryAvatar } from "./brand-mark";
import { Reveal } from "./reveal";

const principles = [
  "You reach me, not an assistant. I answer my own calls and texts.",
  "Honest prices from real comparable sales, even when it isn't what you hoped to hear.",
  "Every home toured on camera first, so surprises show up before you do.",
];

export function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="scroll-mt-20 border-y border-line bg-paper-deep"
    >
      <div className="mx-auto grid max-w-[1320px] items-center gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:py-28">
        <Reveal className="relative mx-auto w-full max-w-[520px] lg:max-w-none">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] bg-paper">
            <Image
              src={agent.portrait}
              alt={`Portrait of ${agent.name}`}
              fill
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover"
            />
          </div>

          <a
            href={agent.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute -bottom-5 left-4 flex items-center gap-3 rounded-full border border-line bg-paper py-2 pl-2 pr-5 shadow-[0_24px_44px_-26px_color-mix(in_srgb,var(--ink)_50%,transparent)] transition-transform duration-300 hover:-translate-y-0.5 sm:-left-5"
          >
            <StoryAvatar size={44} gap="border-paper" />
            <span className="flex flex-col leading-tight">
              <span className="flex items-center gap-1.5 text-[15px] font-semibold">
                <InstagramLogo className="size-4" aria-hidden="true" />
                {agent.handle}
              </span>
              <span className="text-sm text-muted">{agent.followers} follow along</span>
            </span>
          </a>
        </Reveal>

        <Reveal delay={0.1}>
          <h2
            id="about-title"
            className="text-[clamp(2.75rem,6vw,5rem)] font-semibold leading-[0.95] tracking-[-0.055em]"
          >
            Meet <span className="text-brand">Amelia.</span>
          </h2>
          <p className="mt-6 max-w-[46ch] text-[clamp(1.1rem,1.5vw,1.3rem)] leading-relaxed">
            I grew up in Austin and have spent twelve years negotiating for buyers and sellers. I
            film every tour unedited so you can see the house before you drive over, and I tell you
            when a price doesn&rsquo;t make sense.
          </p>

          <ul className="mt-8 space-y-4">
            {principles.map((item) => (
              <li key={item} className="flex items-start gap-3.5">
                <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-brand text-white">
                  <Check className="size-3.5" weight="bold" aria-hidden="true" />
                </span>
                <span className="max-w-[44ch] leading-relaxed text-muted">{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5">
            <Link
              href="/#contact"
              className="group inline-flex h-14 items-center justify-between gap-6 whitespace-nowrap rounded-full bg-brand pl-7 pr-2 text-[16px] font-medium text-white transition-transform duration-300 active:scale-[0.98]"
            >
              Book a free call
              <span className="grid size-10 place-items-center rounded-full bg-accent text-on-accent transition-transform duration-300 group-hover:translate-x-0.5">
                <ArrowRight className="size-[18px]" weight="bold" aria-hidden="true" />
              </span>
            </Link>
            <div>
              <p className="font-display text-xl">{agent.name}</p>
              <p className="text-sm text-muted">
                {agent.title}, licensed in Texas since 2014
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
