import Link from "next/link";
import { agent } from "@/data/properties";
import { BrandMark } from "./brand-mark";

export function Footer() {
  return (
    <footer className="border-t border-line bg-paper-deep">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <BrandMark gap="border-paper-deep" />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">
            Boutique residential brokerage serving Austin and the surrounding
            hill country. Local knowledge, straight answers.
          </p>
        </div>

        <div>
          <h2 className="text-xs uppercase tracking-[0.16em] text-muted">Explore</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link href="/properties" className="hover:text-accent-ink">All homes</Link></li>
            <li><Link href="/#about" className="hover:text-accent-ink">About {agent.name.split(" ")[0]}</Link></li>
            <li><Link href="/#process" className="hover:text-accent-ink">How it works</Link></li>
            <li><Link href="/#contact" className="hover:text-accent-ink">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="text-xs uppercase tracking-[0.16em] text-muted">Contact</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <a href={`tel:${agent.phone.replace(/\D/g, "")}`} className="hover:text-accent-ink">
                {agent.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${agent.email}`} className="hover:text-accent-ink">
                {agent.email}
              </a>
            </li>
            <li className="text-muted">{agent.office}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-xs text-muted sm:flex-row sm:justify-between sm:px-8">
          <p>© 2026 {agent.name}. All rights reserved.</p>
          <p>Equal Housing Opportunity. Listing details are sample content.</p>
        </div>
      </div>
    </footer>
  );
}
