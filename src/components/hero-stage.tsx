import Image from "next/image";
import type { ReactNode } from "react";

/**
 * Full-bleed photograph with the copy laid over it. She stands on the right so the headline
 * sits over the lawn, and the scrim is light so the whole house stays clearly visible.
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
          className="object-cover object-[78%_50%] sm:object-[70%_50%] lg:object-center"
        />
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(to_top,rgba(5,18,17,0.72)_0%,rgba(5,18,17,0.38)_32%,transparent_58%),linear-gradient(to_right,rgba(5,18,17,0.38)_0%,rgba(5,18,17,0.12)_40%,transparent_58%)]"
      />

      <div className="absolute inset-x-0 bottom-0 z-[3] px-6 pb-8 sm:px-10 sm:pb-12 lg:pb-14">
        <div className="mx-auto max-w-[1256px] lg:pl-3">{children}</div>
      </div>
    </div>
  );
}
