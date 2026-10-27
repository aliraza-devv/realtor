"use client";

import { useSyncExternalStore } from "react";
import { ArrowUp } from "@phosphor-icons/react/ssr";
import { cn } from "@/lib/utils";

const timeZone = "America/Chicago";

/** "3:42 PM|1": Austin time, then 1 when it is call hours (Mon to Sat, 9 AM to 7 PM). */
function austinNow() {
  const now = new Date();
  const time = new Intl.DateTimeFormat("en-US", {
    timeZone,
    hour: "numeric",
    minute: "2-digit",
  }).format(now);
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone,
    weekday: "short",
    hour: "numeric",
    hourCycle: "h23",
  }).formatToParts(now);
  const day = parts.find((p) => p.type === "weekday")?.value;
  const hour = Number(parts.find((p) => p.type === "hour")?.value);
  const open = day !== "Sun" && hour >= 9 && hour < 19;
  return `${time}|${open ? 1 : 0}`;
}

const subscribe = (notify: () => void) => {
  const id = window.setInterval(notify, 15_000);
  return () => window.clearInterval(id);
};

/** Live Austin time with a pulsing dot. Renders the static label until it mounts. */
export function LocalTime() {
  const stamp = useSyncExternalStore(subscribe, austinNow, () => "");
  const [time, flag] = stamp.split("|");
  const open = flag === "1";

  return (
    <p className="flex items-center gap-3 text-[15px]">
      <span className="relative flex size-2.5">
        <span
          className={cn(
            "absolute inline-flex size-full rounded-full opacity-60 motion-safe:animate-ping",
            open ? "bg-accent" : "bg-paper/40",
          )}
        />
        <span
          className={cn("relative inline-flex size-2.5 rounded-full", open ? "bg-accent" : "bg-paper/40")}
        />
      </span>
      <span>
        Austin, TX
        {time && (
          <>
            <span className="text-paper/50"> · </span>
            {time}
            <span className="text-paper/50"> · </span>
            <span className="text-paper/70">{open ? "Taking calls now" : "Back at 9 AM"}</span>
          </>
        )}
      </span>
    </p>
  );
}

export function BackToTop() {
  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="group inline-flex items-center gap-3 text-[15px] transition-colors hover:text-accent"
    >
      Back to top
      <span className="grid size-10 place-items-center rounded-full border border-white/25 transition-[transform,background-color,border-color] duration-300 group-hover:-translate-y-0.5 group-hover:border-accent group-hover:bg-accent group-hover:text-on-accent">
        <ArrowUp className="size-[18px]" weight="bold" aria-hidden="true" />
      </span>
    </button>
  );
}
