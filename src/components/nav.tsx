"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  AnimatePresence,
  LayoutGroup,
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { ArrowRight, InstagramLogo, List, X } from "@phosphor-icons/react/ssr";
import { agent } from "@/data/properties";
import { BrandMark } from "./brand-mark";

const links = [
  { href: "/properties", label: "Homes" },
  { href: "/#about", label: "About" },
  { href: "/#process", label: "Process" },
  { href: "/#faq", label: "FAQ" },
];

const cta = "Book a free call";

export function Nav() {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);

  // The frosted bar gets more opaque once content starts passing under it.
  const { scrollY } = useScroll();
  const fillOpacity = useTransform(scrollY, [0, 140], [0.82, 0.92]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-3 z-50 px-3 sm:px-5">
      <div className="relative mx-auto max-w-[1256px]">
        <nav
          aria-label="Primary"
          className="glass-nav relative isolate flex h-16 items-center justify-between rounded-full pl-3 pr-2.5 backdrop-blur-[22px] backdrop-saturate-[1.65] reduced-transparency:backdrop-filter-none"
        >
          <motion.span
            aria-hidden="true"
            style={{ opacity: fillOpacity }}
            className="glass-nav-fill absolute inset-0 -z-10 rounded-full bg-paper"
          />

          <Link
            href="/"
            aria-label={`${agent.name}, home`}
            className="rounded-full"
            onClick={() => setOpen(false)}
          >
            <BrandMark />
          </Link>

          <LayoutGroup id="nav-links">
            <ul
              className="absolute left-1/2 hidden -translate-x-1/2 items-center lg:flex"
              onMouseLeave={() => setHovered(null)}
            >
              {links.map((link) => {
                const active = link.href === "/properties" && pathname.startsWith("/properties");
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onMouseEnter={() => setHovered(link.href)}
                      onFocus={() => setHovered(link.href)}
                      onBlur={() => setHovered(null)}
                      aria-current={active ? "page" : undefined}
                      className={`relative block rounded-full px-4 py-2.5 text-[15px] transition-colors duration-200 ${
                        active || hovered === link.href ? "text-ink" : "text-muted"
                      }`}
                    >
                      {hovered === link.href && (
                        <motion.span
                          layoutId="nav-hover"
                          aria-hidden="true"
                          className="absolute inset-0 -z-10 rounded-full bg-ink/[0.07]"
                          transition={
                            reduce ? { duration: 0 } : { type: "spring", stiffness: 500, damping: 38 }
                          }
                        />
                      )}
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </LayoutGroup>

          <div className="flex items-center gap-1.5">
            <a
              href={agent.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${agent.name} on Instagram`}
              className="hidden size-11 place-items-center rounded-full text-ink transition-colors hover:bg-ink/[0.07] lg:grid"
            >
              <InstagramLogo className="size-[22px]" aria-hidden="true" />
            </a>

            <Link
              href="/#contact"
              className="group hidden h-11 items-center gap-2 whitespace-nowrap rounded-full bg-brand pl-5 pr-4 text-[15px] font-medium text-white transition-[background-color,color,transform] duration-300 hover:bg-accent hover:text-on-accent active:scale-[0.97] lg:inline-flex"
            >
              {cta}
              <ArrowRight
                className="size-4 transition-transform duration-300 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>

            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
              className="grid size-11 place-items-center rounded-full transition-colors hover:bg-ink/[0.07] active:scale-[0.96] lg:hidden"
            >
              {open ? (
                <X className="size-[22px]" aria-hidden="true" />
              ) : (
                <List className="size-[22px]" aria-hidden="true" />
              )}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              id="mobile-menu"
              initial={reduce ? false : { opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, y: -10, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 420, damping: 34 }}
              className="glass-nav absolute inset-x-0 top-[calc(100%+8px)] origin-top rounded-[28px] bg-paper/[0.94] p-3 backdrop-blur-[22px] backdrop-saturate-[1.65] reduced-transparency:bg-paper reduced-transparency:backdrop-filter-none lg:hidden"
            >
              <ul className="flex flex-col">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-2xl px-4 py-3.5 text-[28px] font-semibold tracking-[-0.03em] transition-colors hover:bg-ink/[0.05]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-2 grid gap-2 border-t border-line p-1 pt-3">
                <Link
                  href="/#contact"
                  onClick={() => setOpen(false)}
                  className="flex h-14 items-center justify-center rounded-full bg-brand text-[15px] font-medium text-white transition-transform active:scale-[0.98]"
                >
                  {cta}
                </Link>
                <a
                  href={agent.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 items-center justify-center gap-2 rounded-full text-[15px] text-muted transition-colors hover:text-ink"
                >
                  <InstagramLogo className="size-5" aria-hidden="true" />
                  {agent.handle}
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
