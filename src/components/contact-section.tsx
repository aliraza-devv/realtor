import Image from "next/image";
import { EnvelopeSimple, MapPin, Phone } from "@phosphor-icons/react/ssr";
import { agent, properties } from "@/data/properties";
import { InquiryForm } from "./inquiry-form";
import { Reveal } from "./reveal";

const details = [
  { icon: Phone, label: agent.phone, href: `tel:${agent.phone.replace(/\D/g, "")}` },
  { icon: EnvelopeSimple, label: agent.email, href: `mailto:${agent.email}` },
  { icon: MapPin, label: agent.office },
] as const;

/** The page closes the way it opens: a full-bleed photo stage, now with the form. */
export function ContactSection() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="scroll-mt-20 p-3">
      <div className="relative isolate overflow-hidden rounded-[28px] bg-[#0a1514]">
        <Image
          src={properties[1].image}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(to_right,rgba(5,30,28,0.9)_0%,rgba(5,30,28,0.68)_50%,rgba(5,30,28,0.4)_100%)]"
        />

        <div className="relative mx-auto grid max-w-[1256px] gap-12 px-6 py-16 sm:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16 lg:py-24">
          <Reveal className="text-white">
            <h2
              id="contact-title"
              className="text-[clamp(2.5rem,5.4vw,4.75rem)] font-semibold leading-[0.98] tracking-[-0.055em]"
            >
              Thinking of moving? Let&rsquo;s talk it through.
            </h2>
            <p className="mt-6 max-w-[40ch] text-lg leading-relaxed text-white/85">
              A free 30-minute call. Bring your questions, your timeline and your wish list.
            </p>

            <ul className="mt-10 space-y-4">
              {details.map(({ icon: Icon, label, ...rest }) => (
                <li key={label} className="flex items-center gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-full bg-white/15 backdrop-blur-md">
                    <Icon className="size-[18px]" aria-hidden="true" />
                  </span>
                  {"href" in rest ? (
                    <a href={rest.href} className="underline-offset-4 hover:underline">
                      {label}
                    </a>
                  ) : (
                    <span>{label}</span>
                  )}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <InquiryForm className="rounded-[28px] border-0 shadow-[0_34px_70px_-34px_rgba(0,0,0,0.6)]" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
