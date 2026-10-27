import Image from "next/image";
import type { ReactNode } from "react";

/**
 * Full-bleed, unedited photograph with the copy laid over it. The photo is mirrored
 * so the person heads toward the headline, and the scrim only protects legibility.
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
    <div className="relative isolate h-[calc(100dvh-1.5rem)] max-h-[1100px] min-h-[660px] overflow-hidden rounded-[28px] bg-[#0a1514]">
      <div className="anim-settle absolute inset-0">
        <Image
          src={src}
          alt={alt}
          fill
          priority
          sizes="100vw"
          className="-scale-x-100 object-cover object-[24%_50%] sm:object-center"
        />
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(to_top,rgba(5,18,17,0.8)_0%,rgba(5,18,17,0.5)_36%,rgba(5,18,17,0.12)_60%,transparent_80%),linear-gradient(to_right,rgba(5,18,17,0.55)_0%,rgba(5,18,17,0.2)_45%,transparent_65%)]"
      />

      <div className="absolute inset-x-0 bottom-0 z-[3] px-6 pb-8 sm:px-10 sm:pb-12 lg:pb-14">
        <div className="mx-auto max-w-[1256px] lg:pl-3">{children}</div>
      </div>
    </div>
  );
}
