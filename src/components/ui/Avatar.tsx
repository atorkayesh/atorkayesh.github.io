import Image from "next/image";
import { cn } from "@/lib/utils";

type AvatarProps = {
  alt?: string;
  className?: string;
  initials: string;
  size?: number;
  src?: string;
};

export function Avatar({ alt = "", className, initials, size = 64, src }: AvatarProps) {
  return (
    <span
      className={cn(
        "relative inline-flex shrink-0 items-center justify-center overflow-hidden border border-border bg-foreground/10 font-medium text-foreground",
        className,
      )}
      style={{ height: size, width: size }}
    >
      {src ? (
        <Image
          alt={alt}
          className="object-cover"
          fill
          sizes={`${size}px`}
          src={src}
        />
      ) : (
        <span aria-hidden={alt ? "true" : undefined}>{initials}</span>
      )}
      {alt && !src ? <span className="sr-only">{alt}</span> : null}
    </span>
  );
}
