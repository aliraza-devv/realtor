import Image from "next/image";
import { agent } from "@/data/properties";
import { cn } from "@/lib/utils";

/** Avatar in an Instagram-style story ring. `gap` must match the surface behind it. */
export function StoryAvatar({
  size = 40,
  gap = "border-paper",
  className,
}: {
  size?: number;
  gap?: string;
  className?: string;
}) {
  return (
    <span
      className={cn("inline-grid shrink-0 place-items-center rounded-full bg-accent p-[2px]", className)}
      style={{ width: size, height: size }}
    >
      <span className={cn("relative block size-full overflow-hidden rounded-full border-2", gap)}>
        <Image
          src={agent.photo}
          alt=""
          fill
          sizes={`${size * 2}px`}
          className="scale-[1.7] object-cover"
          style={{ objectPosition: "50% 15%", transformOrigin: "50% 26%" }}
        />
      </span>
    </span>
  );
}

export function BrandMark({ className, gap }: { className?: string; gap?: string }) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <StoryAvatar gap={gap} />
      <span className="text-[17px] font-semibold tracking-[-0.02em]">{agent.name}</span>
    </span>
  );
}
