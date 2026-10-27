import { ArrowRight, CalendarCheck, Check, Phone } from "@phosphor-icons/react/ssr";
import { agent } from "@/data/properties";
import { StoryAvatar } from "./brand-mark";
import { Reveal } from "./reveal";

// Sample call times. Replace with live availability from the booking tool.
const slots = [
  { day: "Mon", time: "10:00 AM" },
  { day: "Tue", time: "2:30 PM" },
  { day: "Wed", time: "4:00 PM" },
  { day: "Thu", time: "9:00 AM" },
  { day: "Fri", time: "1:00 PM" },
  { day: "Sat", time: "11:00 AM" },
] as const;

const promises = ["Free", "30 minutes", "No obligation"] as const;

/** The page closes on one action: pick a time and book a call. No form to fill in. */
export function ContactSection() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="scroll-mt-20 p-3">
      <div className="relative isolate overflow-hidden rounded-[36px] bg-brand text-white">
        <span
          aria-hidden="true"
          className="absolute -right-44 -top-44 -z-10 size-[620px] rounded-full border border-white/10"
        />
        <span
          aria-hidden="true"
          className="absolute -right-28 -top-28 -z-10 size-[440px] rounded-full border border-white/10"
        />
        <span
          aria-hidden="true"
          className="absolute -right-12 -top-12 -z-10 size-[260px] rounded-full bg-white/[0.05]"
        />

        <div className="mx-auto grid max-w-[1256px] gap-12 px-6 py-16 sm:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16 lg:py-24">
          <Reveal>
            <h2
              id="contact-title"
              className="text-[clamp(2.9rem,6vw,5.25rem)] font-semibold leading-[0.94] tracking-[-0.06em]"
            >
              <span className="block">One call.</span>
              <span className="block text-accent">No pitch.</span>
              <span className="block">A clear plan.</span>
            </h2>
            <p className="mt-6 max-w-[42ch] text-lg leading-relaxed text-white/80">
              Thirty minutes about your home, your timeline and your numbers. You leave knowing
              your next step, even if that step is to wait.
            </p>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2.5 text-[15px] font-medium">
              {promises.map((p) => (
                <li key={p} className="flex items-center gap-2">
                  <span className="grid size-5 place-items-center rounded-full bg-accent text-on-accent">
                    <Check className="size-3" weight="bold" aria-hidden="true" />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-[28px] bg-paper p-5 text-ink shadow-[0_40px_80px_-40px_rgba(0,0,0,0.65)] sm:p-7">
              <div className="flex items-center gap-3.5">
                <StoryAvatar size={52} gap="border-paper" />
                <div className="leading-tight">
                  <p className="text-lg font-semibold tracking-[-0.02em]">
                    Free call with {agent.name.split(" ")[0]}
                  </p>
                  <p className="mt-0.5 text-[15px] text-muted">30 minutes, by phone or video</p>
                </div>
              </div>

              <p className="mt-7 text-sm font-medium text-muted">Next available times</p>
              <ul className="mt-3 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                {slots.map((s) => (
                  <li key={s.day}>
                    <a
                      href={agent.bookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col rounded-2xl border border-line bg-paper-deep/60 px-4 py-3 transition-[border-color,background-color,transform] duration-300 hover:border-brand hover:bg-paper active:scale-[0.97]"
                    >
                      <span className="text-xs text-muted">{s.day}</span>
                      <span className="text-[17px] font-semibold tracking-[-0.02em]">{s.time}</span>
                    </a>
                  </li>
                ))}
              </ul>

              <a
                href={agent.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-5 flex h-14 w-full items-center justify-between gap-4 rounded-full bg-brand pl-6 pr-2 text-[16px] font-medium text-white transition-transform duration-300 active:scale-[0.98]"
              >
                <span className="flex items-center gap-2.5">
                  <CalendarCheck className="size-5" weight="bold" aria-hidden="true" />
                  Book my free call
                </span>
                <span className="grid size-10 place-items-center rounded-full bg-accent text-on-accent transition-transform duration-300 group-hover:translate-x-0.5">
                  <ArrowRight className="size-[18px]" weight="bold" aria-hidden="true" />
                </span>
              </a>

              <a
                href={`tel:+1${agent.phone.replace(/\D/g, "")}`}
                className="mt-4 flex items-center justify-center gap-2 text-[15px] text-muted transition-colors hover:text-ink"
              >
                <Phone className="size-4" weight="bold" aria-hidden="true" />
                Prefer to talk now? Call {agent.phone}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
