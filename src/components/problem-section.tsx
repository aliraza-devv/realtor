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
 * The four ways Austin deals go wrong, as copy-led cards. Each leads with the thing
 * buyers and sellers actually say, then what it costs them. All four are visible at once.
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
        <p className="mt-5 max-w-[56ch] text-lg leading-relaxed text-muted">
          Here is what buyers and sellers tell me they wish they had known before they signed
          anything.
        </p>
      </Reveal>

      <ul className="mt-9 grid gap-4 sm:grid-cols-2 lg:mt-8 lg:grid-cols-4">
        {problems.map((item, i) => {
          const Icon = icons[item.icon];
          const dark = i % 2 === 1;

          return (
            <li key={item.topic} className="flex">
              <Reveal delay={i * 0.08} className="flex w-full">
                <article
                  className={cn(
                    "flex w-full flex-col rounded-[28px] p-6 lg:p-7",
                    dark ? "bg-brand text-white" : "border border-line bg-paper-deep text-ink",
                  )}
                >
                  <div className="flex items-center gap-3">
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

                  <h3 className="mt-6 text-[clamp(1.3rem,1.7vw,1.6rem)] font-semibold leading-[1.14] tracking-[-0.03em]">
                    &ldquo;{item.pain}&rdquo;
                  </h3>

                  <div
                    className={cn(
                      "mt-6 border-t pt-5",
                      dark ? "border-white/20" : "border-ink/10",
                    )}
                  >
                    <p className={cn("text-sm font-semibold", dark ? "text-accent" : "text-brand")}>
                      What it costs you
                    </p>
                    <p
                      className={cn(
                        "mt-2 text-[15px] leading-relaxed",
                        dark ? "text-white/85" : "text-muted",
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

      <Reveal className="mt-10 lg:mt-8">
        <p className="max-w-[48ch] text-[clamp(1.5rem,2.4vw,2.25rem)] font-semibold leading-[1.08] tracking-[-0.05em]">
          That is why I film every tour unedited, price to real sales,{" "}
          <span className="text-brand">and stay reachable until you have the keys.</span>
        </p>
      </Reveal>
    </section>
  );
}
