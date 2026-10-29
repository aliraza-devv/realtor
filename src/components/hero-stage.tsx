import Image from "next/image";
import type { ReactNode } from "react";

/**
 * Photograph with the copy beside it. From the large breakpoint up it is full-bleed with the copy
 * laid over the lawn (she stands on the right, and the scrim is light so the whole house stays
 * clear). Below that the photo is too narrow to hold text without covering her, so the photo sits
 * on top and the copy gets its own dark panel underneath.
 */
export function HeroStage({
  src,
  alt,
  children,
}: {
  src: string;
  alt: string;
  children: ReactNode;
}) {
  return (
    <div className="relative isolate flex flex-col overflow-hidden rounded-[28px] bg-[#0a1514] lg:block lg:h-[calc(100dvh-1.5rem)] lg:max-h-[1100px] lg:min-h-[660px]">
      <div className="relative aspect-[5/4] w-full overflow-hidden sm:aspect-[16/9] lg:absolute lg:inset-0 lg:aspect-auto">
        <div className="anim-settle absolute inset-0">
          <Image
            src={src}
            alt={alt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-[85%_50%] sm:object-center"
          />
        </div>
        {/* Melts the photo into the copy panel below it */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(to_top,#0a1514_0%,transparent_14%)] lg:hidden"
        />
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-0 hidden bg-[linear-gradient(to_top,rgba(5,18,17,0.72)_0%,rgba(5,18,17,0.38)_32%,transparent_58%),linear-gradient(to_right,rgba(5,18,17,0.38)_0%,rgba(5,18,17,0.12)_40%,transparent_58%)] lg:block"
      />

      <div className="relative z-[3] px-6 pb-8 pt-2 sm:px-10 sm:pb-12 lg:absolute lg:inset-x-0 lg:bottom-0 lg:pb-14 lg:pt-0">
        <div className="mx-auto max-w-[1256px] lg:pl-3">{children}</div>
      </div>
    </div>
  );
}
