import { processSteps } from "@/data/properties";
import { ProcessTimeline } from "./process-timeline";
import { Reveal } from "./reveal";

export function ProcessSection() {
  return (
    <section
      id="process"
      aria-labelledby="process-title"
      className="mx-auto max-w-[1320px] scroll-mt-20 px-5 py-20 sm:px-8 lg:py-28"
    >
      <Reveal>
        <h2
          id="process-title"
          className="text-[clamp(2.75rem,6vw,5rem)] font-semibold leading-[0.95] tracking-[-0.055em]"
        >
          Three steps, no surprises.
        </h2>
        <p className="mt-5 max-w-[46ch] text-lg leading-relaxed text-muted">
          From the first call to the keys, this is how it goes.
        </p>
      </Reveal>

      <ProcessTimeline steps={processSteps} />
    </section>
  );
}
