import Link from "next/link";
import { ArrowUpRight, InstagramLogo } from "@phosphor-icons/react/ssr";
import { agent } from "@/data/properties";
import { BackToTop, LocalTime } from "./footer-bits";
import { StoryAvatar } from "./brand-mark";

type FooterLink = { label: string; href: string; external?: boolean };

const columns: { title: string; links: FooterLink[] }[] = [
  {
    title: "Explore",
    links: [
      { label: "Homes", href: "/properties" },
      { label: "About", href: "/#about" },
      { label: "Process", href: "/#process" },
      { label: "FAQ", href: "/#faq" },
    ],
  },
  {
    title: "Work with me",
    links: [
      { label: "Buy a home", href: "/properties" },
      { label: "Sell my home", href: "/#contact" },
      { label: "Book a free call", href: "/#contact" },
    ],
  },
  {
    title: "Say hello",
    links: [
      { label: agent.phone, href: `tel:+1${agent.phone.replace(/\D/g, "")}` },
      { label: agent.email, href: `mailto:${agent.email}` },
      { label: "Instagram", href: agent.instagramUrl, external: true },
    ],
  },
];

/** Link label that rolls up and swaps to the accent colour on hover. Needs a `group` parent. */
function Roll({ children }: { children: string }) {
  return (
    <span className="relative inline-flex overflow-hidden align-bottom leading-[1.35]">
      <span className="block transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-full motion-reduce:transition-none">
        {children}
      </span>
      <span
        aria-hidden="true"
        className="absolute inset-0 block translate-y-full text-accent transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0 motion-reduce:transition-none"
      >
        {children}
      </span>
    </span>
  );
}

export function Footer() {
  return (
    <footer className="p-3 pt-0">
      <div className="overflow-hidden rounded-[36px] bg-ink text-paper">
        <div className="mx-auto max-w-[1256px] px-6 pt-14 sm:px-10 lg:pt-20">
          <div className="grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-[1.5fr_repeat(3,1fr)] lg:gap-x-10">
            <div className="col-span-2 lg:col-span-1">
              <p className="max-w-[16ch] text-[clamp(1.9rem,3vw,2.6rem)] font-semibold leading-[1.02] tracking-[-0.05em]">
                Austin homes, with <span className="text-accent">straight answers.</span>
              </p>
              <a
                href={agent.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/20 py-2 pl-2 pr-5 transition-colors duration-300 hover:bg-white/10"
              >
                <StoryAvatar size={40} gap="border-ink" />
                <span className="flex flex-col leading-tight">
                  <span className="flex items-center gap-1.5 text-[15px] font-semibold">
                    <InstagramLogo className="size-4" aria-hidden="true" />
                    {agent.handle}
                  </span>
                  <span className="text-sm text-paper/60">{agent.followers} follow along</span>
                </span>
              </a>
            </div>

            {columns.map((col) => (
              <nav key={col.title} aria-label={col.title}>
                <h2 className="text-sm text-paper/50">{col.title}</h2>
                <ul className="mt-5 space-y-3 text-[17px]">
                  {col.links.map((link) => (
                    <li key={link.label} className="break-words">
                      {link.external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex items-center gap-1.5"
                        >
                          <Roll>{link.label}</Roll>
                          <ArrowUpRight className="size-4 text-paper/50" weight="bold" aria-hidden="true" />
                        </a>
                      ) : link.href.startsWith("/") ? (
                        <Link href={link.href} className="group inline-flex">
                          <Roll>{link.label}</Roll>
                        </Link>
                      ) : (
                        <a href={link.href} className="group inline-flex">
                          <Roll>{link.label}</Roll>
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>

          <div className="mt-14 flex flex-wrap items-center justify-between gap-x-8 gap-y-5 border-t border-white/10 pt-6">
            <LocalTime />
            <BackToTop />
          </div>

          <div className="mt-6 flex flex-col gap-1.5 text-sm text-paper/50 sm:flex-row sm:justify-between">
            <p>© 2026 {agent.name}, {agent.brand}. {agent.office}.</p>
            <p>Equal Housing Opportunity. Listing details are sample content.</p>
          </div>
        </div>

        <p
          aria-hidden="true"
          className="font-display mt-8 translate-y-[9%] select-none whitespace-nowrap text-center text-[16vw] leading-[0.8] tracking-[-0.06em] text-brand"
        >
          {agent.name}
        </p>
      </div>
    </footer>
  );
}
