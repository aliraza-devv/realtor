"use client";

import { useId, useRef, useState, type KeyboardEvent } from "react";
import { Plus } from "@phosphor-icons/react/ssr";
import { type Faq } from "@/data/properties";
import { cn } from "@/lib/utils";

type Group = { label: string; items: readonly Faq[] };

/**
 * Topic tabs (selling, buying, working with me) over an accordion of objections.
 * The first answer of each topic starts open, so the answer to the top objection is
 * already on screen without a click.
 */
export function FaqList({ groups }: { groups: readonly Group[] }) {
  const uid = useId();
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const [group, setGroup] = useState(0);
  const [open, setOpen] = useState<number | null>(0);

  const choose = (next: number) => {
    setGroup(next);
    setOpen(0);
  };

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const last = groups.length - 1;
    const next =
      e.key === "ArrowRight" ? (group === last ? 0 : group + 1)
      : e.key === "ArrowLeft" ? (group === 0 ? last : group - 1)
      : e.key === "Home" ? 0
      : e.key === "End" ? last
      : null;
    if (next === null) return;
    e.preventDefault();
    choose(next);
    tabs.current[next]?.focus();
  };

  const items = groups[group].items;

  return (
    <div>
      <div
        role="tablist"
        aria-label="Question topics"
        onKeyDown={onKeyDown}
        className="flex flex-wrap gap-2"
      >
        {groups.map((g, i) => (
          <button
            key={g.label}
            ref={(el) => {
              tabs.current[i] = el;
            }}
            type="button"
            role="tab"
            id={`${uid}-tab-${i}`}
            aria-selected={i === group}
            aria-controls={`${uid}-panel`}
            tabIndex={i === group ? 0 : -1}
            onClick={() => choose(i)}
            className={cn(
              "rounded-full border px-4 py-2 text-[15px] font-medium transition-[background-color,border-color,color,transform] duration-300 active:scale-[0.97]",
              i === group
                ? "border-brand bg-brand text-white"
                : "border-line bg-paper text-ink hover:border-ink/30",
            )}
          >
            {g.label}
          </button>
        ))}
      </div>

      <div
        key={group}
        role="tabpanel"
        id={`${uid}-panel`}
        aria-labelledby={`${uid}-tab-${group}`}
        className="anim-fade-up mt-5 overflow-hidden rounded-[24px] border border-line bg-paper"
      >
        <ul className="divide-y divide-line">
          {items.map((f, i) => {
            const isOpen = open === i;
            return (
              <li key={f.q}>
                <h3>
                  <button
                    type="button"
                    id={`${uid}-q-${group}-${i}`}
                    aria-expanded={isOpen}
                    aria-controls={`${uid}-a-${group}-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="group flex w-full items-center justify-between gap-6 px-5 py-5 text-left sm:px-7"
                  >
                    <span
                      className={cn(
                        "text-[clamp(1.1rem,1.5vw,1.3rem)] font-semibold leading-snug tracking-[-0.025em] transition-colors duration-300",
                        isOpen && "text-brand",
                      )}
                    >
                      {f.q}
                    </span>
                    <span
                      className={cn(
                        "grid size-10 shrink-0 place-items-center rounded-full transition-[background-color,color,transform] duration-300",
                        isOpen
                          ? "rotate-45 bg-brand text-white"
                          : "bg-paper-deep text-brand group-hover:bg-line",
                      )}
                    >
                      <Plus className="size-[18px]" weight="bold" aria-hidden="true" />
                    </span>
                  </button>
                </h3>
                <div
                  id={`${uid}-a-${group}-${i}`}
                  role="region"
                  aria-labelledby={`${uid}-q-${group}-${i}`}
                  inert={!isOpen}
                  className={cn(
                    "grid transition-[grid-template-rows,opacity] duration-300 ease-out motion-reduce:transition-none",
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-[60ch] px-5 pb-6 leading-relaxed text-muted sm:px-7">
                      <span className="font-semibold text-ink">{f.lead}</span> {f.a}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
