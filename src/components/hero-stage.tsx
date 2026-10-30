import { getImageProps } from "next/image";
import type { ReactNode } from "react";

/**
 * Full-bleed photograph with the copy laid over it. Large screens get the wide photo, with her on
 * the right so the headline sits over the lawn. Phones and tablets get a portrait photo of the
 * same scene, framed so she and the house sit in the upper two thirds and the copy lands on the
 * quiet path below her feet.
 */
export function HeroStage({
  src,
  mobileSrc,
  alt,
  children,
}: {
  src: string;
  mobileSrc: string;
  alt: string;
  children: ReactNode;
}) {
  const common = { alt, fill: true, sizes: "100vw", priority: true };
  const {
    props: { srcSet: wideSrcSet },
  } = getImageProps({ ...common, src });
  const { props: tall } = getImageProps({
    ...common,
    src: mobileSrc,
    className: "object-cover object-[58%_0%] lg:object-center",
  });

  return (
    <div className="relative isolate min-h-[max(900px,calc(100svh-1.5rem))] overflow-hidden rounded-[28px] bg-[#0a1514] sm:min-h-[1180px] lg:h-[calc(100dvh-1.5rem)] lg:max-h-[1100px] lg:min-h-[660px]">
      {/* The portrait box is taller than the stage so the photo can sit a little higher in it */}
      <div className="anim-settle absolute inset-x-0 -top-[11%] h-[111%] lg:top-0 lg:h-full">
        <picture>
          <source media="(min-width: 1024px)" srcSet={wideSrcSet} sizes="100vw" />
          <img {...tall} alt={alt} />
        </picture>
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(to_top,rgba(5,18,17,0.9)_0%,rgba(5,18,17,0.72)_22%,rgba(5,18,17,0)_46%)] lg:bg-[linear-gradient(to_top,rgba(5,18,17,0.72)_0%,rgba(5,18,17,0.38)_32%,transparent_58%),linear-gradient(to_right,rgba(5,18,17,0.38)_0%,rgba(5,18,17,0.12)_40%,transparent_58%)]"
      />

      <div className="absolute inset-x-0 bottom-0 z-[3] px-6 pb-6 sm:px-10 sm:pb-12 lg:pb-14">
        <div className="mx-auto max-w-[1256px] lg:pl-3">{children}</div>
      </div>
    </div>
  );
}
