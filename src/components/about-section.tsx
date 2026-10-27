import Image from "next/image";
import { agent, reels } from "@/data/properties";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

/** A photo set inline with the type, sized in em so it scales with the headline. */
function Pill({ src, className }: { src: string; className?: string }) {
  return (
    <span
      className={cn(
        "relative mx-[0.1em] inline-block h-[0.8em] w-[1.7em] overflow-hidden rounded-full bg-paper align-[-0.06em]",
        className,
      )}
    >
      <Image src={src} alt="" fill sizes="160px" className="object-cover" />
    </span>
  );
}

const hi = "text-brand";

export function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="scroll-mt-20 border-y border-line bg-paper-deep"
    >
      <div className="mx-auto max-w-[1320px] px-5 py-20 sm:px-8 lg:py-32">
        <Reveal>
          <h2 id="about-title" className="sr-only">
            About {agent.name}
          </h2>
          <p className="max-w-[1120px] text-[clamp(1.9rem,4.6vw,4.25rem)] font-medium leading-[1.14] tracking-[-0.04em] text-muted">
            <span className={hi}>I&rsquo;m Amelia</span>, an <span className={hi}>Austin broker</span>
            <Pill src={agent.photo} /> who has spent <span className={hi}>twelve years</span>{" "}
            negotiating for buyers and sellers. I film every tour{" "}
            <span className={hi}>unedited</span>
            <Pill src={reels[0].image} /> so you can see the house before you drive over. And when a
            price <Pill src={reels[1].image} /> doesn&rsquo;t make sense, you&rsquo;ll hear it{" "}
            <span className={hi}>from me first</span>.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-12 lg:mt-16">
          <p className="font-display text-2xl">{agent.name}</p>
          <p className="mt-1 text-muted">{agent.title}, licensed in Texas since 2014</p>
        </Reveal>
      </div>
    </section>
  );
}
