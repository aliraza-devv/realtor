"use client";

import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "motion/react";
import { useRef } from "react";
import { Check } from "@phosphor-icons/react/ssr";

type Step = { readonly title: string; readonly body: string; readonly detail: string };

function Node({
  progress,
  at,
  reduce,
  className,
}: {
  progress: MotionValue<number>;
  at: number;
  reduce: boolean;
  className?: string;
}) {
  const fill = useTransform(progress, [at - 0.05, at + 0.02], [0, 1]);
  return (
    <span
      className={`absolute left-0 z-[1] size-5 -translate-y-1/2 rounded-full border-2 border-line bg-paper ${className ?? ""}`}
    >
      <motion.span
        aria-hidden="true"
        style={{ opacity: reduce ? 1 : fill }}
        className="absolute -inset-[2px] rounded-full bg-brand"
      />
    </span>
  );
}

/**
 * A vertical line that fills as you scroll, with a node lighting up at each step. The
 * line carries the progress, so the steps themselves need no numbering.
 */
export function ProcessTimeline({ steps }: { steps: readonly Step[] }) {
  const reduce = useReducedMotion() ?? false;
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 62%", "end 55%"] });
  const fill = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <ol ref={ref} className="relative mt-12 lg:mt-16">
      <span
        aria-hidden="true"
        className="absolute bottom-0 left-[9px] top-0 w-0.5 rounded-full bg-line"
      />
      <motion.span
        aria-hidden="true"
        style={{ scaleY: reduce ? 1 : fill }}
        className="absolute bottom-0 left-[9px] top-0 w-0.5 origin-top rounded-full bg-brand"
      />

      {steps.map((step, i) => (
        <li key={step.title} className="relative py-10 pl-12 lg:py-14 lg:pl-20">
          <Node
            progress={scrollYProgress}
            at={(i + 0.5) / steps.length}
            reduce={reduce}
            className="top-[calc(2.5rem+1.4rem)] lg:top-[calc(3.5rem+clamp(1.4rem,2.7vw,2.6rem))]"
          />
          <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-16">
            <h3 className="text-[clamp(2.5rem,6vw,5.5rem)] font-semibold leading-[0.95] tracking-[-0.055em]">
              {step.title}
            </h3>
            <div>
              <p className="max-w-[40ch] text-lg leading-relaxed text-muted">{step.body}</p>
              <p className="mt-4 inline-flex items-center gap-2 text-[15px] font-medium text-brand">
                <Check className="size-4" weight="bold" aria-hidden="true" />
                {step.detail}
              </p>
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}
