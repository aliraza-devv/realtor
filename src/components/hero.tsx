import Link from "next/link";
import { ArrowRight, InstagramLogo, Star } from "@phosphor-icons/react/ssr";
import { agent, heroPhoto, heroPhotoMobile, proof } from "@/data/properties";
import { HeroStage } from "./hero-stage";

const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as React.CSSProperties;

export function Hero() {
  return (
    <section id="top" className="p-3">
      <HeroStage
        src={heroPhoto}
        mobileSrc={heroPhotoMobile}
        alt="Amelia standing on the flagstone path in front of an Austin ranch home, keys in hand, smiling"
      >
        <div
          className="anim-fade-up flex flex-wrap items-center gap-x-5 gap-y-2 text-[15px] text-white/90"
          style={delay(0)}
        >
          <p className="flex items-center gap-2">
            <span className="flex gap-0.5 text-accent" aria-hidden="true">
              {Array.from({ length: 5 }, (_, i) => (
                <Star key={i} weight="fill" className="size-4" />
              ))}
            </span>
            <span className="font-semibold">{proof.rating.score}</span>
            <span className="text-white/70">from {proof.rating.count} clients</span>
          </p>
          <a
            href={agent.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Follow ${agent.name} on Instagram, ${agent.followers} followers`}
            className="hidden items-center gap-2 transition-colors hover:text-white sm:inline-flex"
          >
            <InstagramLogo className="size-5" aria-hidden="true" />
            <span className="font-semibold">{agent.handle}</span>
            <span className="text-white/70">{agent.followers}</span>
          </a>
        </div>

        <h1 className="mt-3 sm:mt-5 text-[clamp(2.6rem,11.2vw,5rem)] font-semibold leading-[0.9] tracking-[-0.06em] text-white sm:text-[clamp(3.5rem,8vw,6.5rem)] lg:text-[clamp(4.25rem,6.4vw,6.75rem)]">
          <span className="block overflow-hidden pb-[0.06em] pt-[0.02em]">
            <span className="anim-rise block" style={delay(120)}>
              Sell for more.
            </span>
          </span>
          <span className="block overflow-hidden pb-[0.12em] pr-[0.08em]">
            <span className="anim-rise block italic" style={delay(240)}>
              Buy with confidence.
            </span>
          </span>
        </h1>

        <p
          className="anim-fade-up mt-5 hidden max-w-[44ch] text-lg leading-relaxed text-white/90 sm:block sm:text-xl"
          style={delay(420)}
        >
          Austin homes sell in {agent.stats[2].value} with me. Unedited tours, honest pricing, and
          one agent from first call to keys.
        </p>

        <div
          className="anim-fade-up mt-5 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center"
          style={delay(520)}
        >
          <Link
            href="/#contact"
            className="group inline-flex h-14 w-full items-center justify-between gap-6 whitespace-nowrap rounded-full bg-white pl-7 pr-2 text-[16px] font-medium text-[#0e1210] transition-transform duration-300 active:scale-[0.98] sm:w-auto"
          >
            Book my free call
            <span className="grid size-10 place-items-center rounded-full bg-accent text-on-accent transition-transform duration-300 group-hover:translate-x-0.5">
              <ArrowRight className="size-[18px]" weight="bold" aria-hidden="true" />
            </span>
          </Link>
          <Link
            href="/properties"
            className="hidden h-14 w-full items-center justify-center whitespace-nowrap rounded-full border border-white/45 px-7 sm:inline-flex text-[16px] font-medium text-white transition-colors duration-300 hover:border-white hover:bg-white/10 active:scale-[0.98] sm:w-auto"
          >
            Browse homes
          </Link>
        </div>

        <p
          className="anim-fade-up mt-3 text-sm text-white/75 sm:mt-4"
          style={delay(620)}
        >
          Free 30-minute call. No pitch, no obligation.
        </p>
      </HeroStage>
    </section>
  );
}
