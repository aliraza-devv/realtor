"use client";

import Lenis from "lenis";
import { useEffect } from "react";

// The navbar floats over the page, so in-page jumps stop a little short of the section top.
const NAV_OFFSET = -88;

/**
 * Inertial page scrolling. Lenis eases the wheel, so scroll position glides instead of
 * stepping; touch scrolling stays native. It is skipped entirely for visitors who ask
 * for reduced motion. Links to sections on the home page are glided to as well.
 */
export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({ autoRaf: true, lerp: 0.085, wheelMultiplier: 0.95 });

    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) {
        return;
      }
      const href = (e.target as Element).closest("a")?.getAttribute("href");
      if (!href || window.location.pathname !== "/") return;

      const hash = href.startsWith("/#") ? href.slice(1) : href.startsWith("#") ? href : null;
      const target = hash ? document.querySelector<HTMLElement>(hash) : null;
      if (!hash || !target) return;

      e.preventDefault();
      e.stopPropagation();
      lenis.scrollTo(target, { offset: NAV_OFFSET, duration: 1.4 });
      window.history.pushState(null, "", hash);
    };

    document.addEventListener("click", onClick, true);
    return () => {
      document.removeEventListener("click", onClick, true);
      lenis.destroy();
    };
  }, []);

  return null;
}
