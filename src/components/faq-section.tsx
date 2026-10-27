import Link from "next/link";
import { ArrowRight, Phone } from "@phosphor-icons/react/ssr";
import { agent, faqGroups } from "@/data/properties";
import { cn } from "@/lib/utils";
import { StoryAvatar } from "./brand-mark";
import { FaqList } from "./faq-list";
import { Reveal } from "./reveal";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqGroups
    .flatMap((g) => g.items)
    .map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: `${f.lead} ${f.a}` },
    })),
};

function ContactCard({ className }: { className?: string }) {
  const tel = `tel:+1${agent.phone.replace(/\D/g, "")}`;
  return (
    <div className={cn("rounded-[28px] bg-brand p-6 text-white sm:p-7", className)}>
      <div className="flex items-center gap-3.5">
        <StoryAvatar size={48} gap="border-brand" />
        <div className="leading-tight">
          <p className="text-lg font-semibold">Still have a question?</p>
          <p className="mt-0.5 text-[15px] text-white/80">I answer my own calls and texts.</p>
        </div>
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href="/#contact"
          className="group inline-flex h-12 items-center gap-4 whitespace-nowrap rounded-full bg-accent pl-5 pr-1.5 text-[15px] font-semibold text-on-accent transition-transform duration-300 active:scale-[0.98]"
        >
          Book a free call
          <span className="grid size-9 place-items-center rounded-full bg-brand text-white transition-transform duration-300 group-hover:translate-x-0.5">
            <ArrowRight className="size-4" weight="bold" aria-hidden="true" />
          </span>
        </Link>
        <a
          href={tel}
          className="inline-flex h-12 items-center gap-2.5 whitespace-nowrap rounded-full border border-white/30 px-5 text-[15px] font-medium transition-colors duration-300 hover:bg-white/10"
        >
          <Phone className="size-[18px]" weight="bold" aria-hidden="true" />
          {agent.phone}
        </a>
      </div>
    </div>
  );
}

export function FaqSection() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="scroll-mt-20 border-y border-line bg-paper-deep"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <div className="mx-auto grid max-w-[1320px] grid-cols-[minmax(0,1fr)] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:py-28">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <h2
              id="faq-title"
              className="max-w-[13ch] text-[clamp(2.75rem,6vw,5rem)] font-semibold leading-[0.95] tracking-[-0.055em]"
            >
              Straight answers to what <span className="text-brand">holds people back.</span>
            </h2>
            <p className="mt-5 max-w-[40ch] text-lg leading-relaxed text-muted">
              The questions I hear most before a first call, answered without the sales pitch.
            </p>
          </Reveal>
          <ContactCard className="mt-10 hidden lg:block" />
        </div>

        <div>
          <Reveal delay={0.1}>
            <FaqList groups={faqGroups} />
          </Reveal>
          <ContactCard className="mt-10 lg:hidden" />
        </div>
      </div>
    </section>
  );
}
