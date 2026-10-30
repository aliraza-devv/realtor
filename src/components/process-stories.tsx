import Image from "next/image";
import { Door, Handshake, Key, PhoneCall } from "@phosphor-icons/react/ssr";
import { processSteps } from "@/data/properties";
import { StoryAvatar } from "./brand-mark";
import { Reveal } from "./reveal";

const icons = {
  call: PhoneCall,
  tour: Door,
  offer: Handshake,
  keys: Key,
} as const;

const last = processSteps.length - 1;

/**
 * The process as a numbered track: one dashed line runs through four numbered stops, and each
 * stop carries a photo of that exact moment. Horizontal on desktop, vertical on phones.
 */
export function ProcessStories() {
  return (
    <ol className="mt-12 lg:mt-14 lg:grid lg:grid-cols-4 lg:gap-x-5">
      {processSteps.map((step, i) => {
        const Icon = icons[step.icon];
        return (
          <li
            key={step.title}
            className="relative grid grid-cols-[3rem_1fr] gap-x-4 pb-10 last:pb-0 lg:block lg:pb-0"
          >
            <div className="relative lg:flex lg:items-center lg:gap-3">
              <span className="font-display relative z-10 grid size-12 shrink-0 place-items-center rounded-full bg-brand text-xl text-white">
                {i + 1}
              </span>
              {i < last && (
                <span
                  aria-hidden="true"
                  className="absolute bottom-[-2.5rem] left-1/2 top-12 w-0 -translate-x-1/2 border-l-2 border-dashed border-brand/35 lg:static lg:mr-[-0.75rem] lg:h-0 lg:flex-1 lg:translate-x-0 lg:border-l-0 lg:border-t-2"
                />
              )}
            </div>

            <Reveal delay={i * 0.08} className="lg:mt-6">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[24px] bg-paper-deep lg:aspect-[4/5]">
                <Image
                  src={step.image}
                  alt={step.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, 80vw"
                  className="object-cover"
                  style={{ objectPosition: step.focus }}
                />
                <span className="absolute inset-0 bg-[linear-gradient(to_top,rgba(5,18,17,0.55)_0%,transparent_45%)]" />
                <span className="absolute left-3 top-3 rounded-full bg-paper/90 px-3 py-1 text-sm font-semibold text-ink">
                  {step.day}
                </span>
                <StoryAvatar size={34} gap="border-white" className="absolute right-3 top-3" />
                <p className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-accent px-3 py-1.5 text-sm font-semibold text-on-accent">
                  <Icon className="size-4" weight="bold" aria-hidden="true" />
                  {step.sticker}
                </p>
              </div>

              <h3 className="mt-5 text-[clamp(1.4rem,2vw,1.75rem)] font-semibold leading-[1.1] tracking-[-0.035em]">
                {step.title}
              </h3>
              <p className="mt-2 max-w-[34ch] leading-snug text-muted">{step.line}</p>
            </Reveal>
          </li>
        );
      })}
    </ol>
  );
}
