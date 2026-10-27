import Image from "next/image";
import { InstagramLogo, Play } from "@phosphor-icons/react/ssr";
import { agent, reels } from "@/data/properties";
import { cn } from "@/lib/utils";
import { StoryAvatar } from "./brand-mark";
import { Reveal } from "./reveal";

function ReelList({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul
      aria-hidden={hidden || undefined}
      aria-label={hidden ? undefined : "Instagram reels"}
      className={cn("flex shrink-0 items-start gap-5 pb-4 pr-5 pt-4", hidden && "marquee-dup")}
    >
      {reels.map((reel) => (
        <li key={reel.title} className="w-[250px] shrink-0">
          <a
            href={agent.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={hidden ? -1 : undefined}
            aria-label={`${reel.title}, ${reel.views}. Opens Instagram.`}
            className="group block"
          >
            <div className="relative aspect-[9/16] overflow-hidden rounded-[28px] bg-paper-deep shadow-[0_30px_50px_-30px_color-mix(in_srgb,var(--ink)_55%,transparent)]">
              <Image
                src={reel.image}
                alt=""
                fill
                sizes="250px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
              />
              <span className="absolute inset-0 grid place-items-center">
                <span className="grid size-14 place-items-center rounded-full bg-white/85 text-[#0b1f1e] backdrop-blur-md transition-transform duration-300 group-hover:scale-110">
                  <Play weight="fill" className="size-5 translate-x-px" aria-hidden="true" />
                </span>
              </span>
            </div>
            <div className="mt-4 h-[4.5rem] px-1">
              <p className="line-clamp-2 text-[17px] font-medium leading-snug tracking-[-0.02em]">
                {reel.title}
              </p>
              <p className="mt-1 text-sm text-muted">{reel.views}</p>
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
}

/**
 * Reels drift past on their own and pause under the pointer. It is a plain overflow-clipped
 * track, not a scroll container, so it never captures the mouse wheel.
 */
export function ReelsSection() {
  return (
    <section
      id="reels"
      aria-labelledby="reels-title"
      className="border-y border-line bg-paper-deep py-20 lg:py-28"
    >
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
        <Reveal className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2
              id="reels-title"
              className="text-[clamp(2.75rem,6vw,5rem)] font-semibold leading-[0.95] tracking-[-0.055em]"
            >
              Tour it on camera first.
            </h2>
            <p className="mt-5 max-w-[46ch] text-lg leading-relaxed text-muted">
              New walkthroughs every Tuesday and Friday: the price, the quirks and the
              neighborhood, all on camera.
            </p>
          </div>

          <a
            href={agent.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex shrink-0 items-center gap-4 rounded-full border border-line bg-paper py-2 pl-2 pr-6 transition-colors duration-300 hover:border-ink/30"
          >
            <StoryAvatar size={52} gap="border-paper" />
            <span className="flex flex-col leading-tight">
              <span className="flex items-center gap-2 font-semibold">
                <InstagramLogo className="size-[18px]" aria-hidden="true" />
                {agent.handle}
              </span>
              <span className="text-sm text-muted">{agent.followers} followers</span>
            </span>
          </a>
        </Reveal>
      </div>

      <div
        className="marquee mt-12 overflow-x-clip [mask-image:linear-gradient(to_right,transparent,#000_7%,#000_93%,transparent)] motion-reduce:[mask-image:none] lg:mt-14"
        style={{ "--marquee-duration": "75s" } as React.CSSProperties}
      >
        <div className="marquee-track">
          <ReelList />
          <ReelList hidden />
        </div>
      </div>
    </section>
  );
}
