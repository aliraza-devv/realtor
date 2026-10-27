import { Camera, PhoneSlash, Tag, Warning } from "@phosphor-icons/react/ssr";
import { problems } from "@/data/properties";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

const icons = {
  camera: Camera,
  tag: Tag,
  warning: Warning,
  phone: PhoneSlash,
} as const;

/**
 * The four ways Austin deals go wrong, as short cards: the thing buyers and sellers actually
 * say, then what it costs them in a line. All four are visible at once.
 */
export function ProblemSection() {
  return (
    <section
      aria-labelledby="problem-title"
      className="mx-auto max-w-[1320px] px-5 py-16 sm:px-8 lg:py-12"
    >
      <Reveal>
        <h2
          id="problem-title"
          className="max-w-[30ch] text-[clamp(2.4rem,4.2vw,3.9rem)] font-semibold leading-[0.97] tracking-[-0.055em]"
        >
          Most Austin home deals go wrong in the same four ways.
        </h2>
      </Reveal>

      <ul className="mt-9 grid gap-4 sm:grid-cols-2 lg:mt-10 lg:grid-cols-4">
        {problems.map((item, i) => {
          const Icon = icons[item.icon];
          const dark = i % 2 === 1;

          return (
            <li key={item.topic} className="flex">
              <Reveal delay={i * 0.08} className="flex w-full">
                <article
                  className={cn(
                    "relative flex w-full flex-col overflow-hidden rounded-[28px] p-6 lg:p-7",
                    dark ? "bg-brand text-white" : "border border-line bg-paper-deep text-ink",
                  )}
                >
                  <Icon
                    className="pointer-events-none absolute -bottom-6 -right-6 size-40 opacity-[0.07]"
                    weight="fill"
                    aria-hidden="true"
                  />

                  <div className="relative flex items-center gap-3">
                    <span
                      className={cn(
                        "grid size-11 shrink-0 place-items-center rounded-full",
                        dark ? "bg-accent text-on-accent" : "bg-brand text-white",
                      )}
                    >
                      <Icon className="size-5" weight="bold" aria-hidden="true" />
                    </span>
                    <p className="text-[15px] font-semibold leading-tight">{item.topic}</p>
                  </div>

                  <h3 className="relative mt-8 flex-1 text-[clamp(1.5rem,2vw,1.85rem)] font-semibold leading-[1.1] tracking-[-0.035em]">
                    &ldquo;{item.pain}&rdquo;
                  </h3>

                  <div
                    className={cn(
                      "relative mt-8 border-t pt-4",
                      dark ? "border-white/20" : "border-ink/10",
                    )}
                  >
                    <p className={cn("text-sm", dark ? "text-white/70" : "text-muted")}>
                      It costs you
                    </p>
                    <p
                      className={cn(
                        "mt-1 text-[clamp(1.15rem,1.5vw,1.35rem)] font-semibold leading-tight tracking-[-0.03em]",
                        dark ? "text-accent" : "text-brand",
                      )}
                    >
                      {item.cost}
                    </p>
                  </div>
                </article>
              </Reveal>
            </li>
          );
        })}
      </ul>

      <Reveal className="mt-10 lg:mt-9">
        <p className="max-w-[40ch] text-[clamp(1.5rem,2.4vw,2.25rem)] font-semibold leading-[1.08] tracking-[-0.05em]">
          So I film tours unedited, price to real sales,{" "}
          <span className="text-brand">and answer my own phone.</span>
        </p>
      </Reveal>
    </section>
  );
}
