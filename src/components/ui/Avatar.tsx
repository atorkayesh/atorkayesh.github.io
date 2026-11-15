import Image from "next/image";
import { cn, withBasePath } from "@/lib/utils";

type AvatarProps = {
  alt?: string;
  className?: string;
  initials: string;
  size?: number;
  width?: number;
  height?: number;
  src?: string;
};

export function Avatar({ alt = "", className, initials, size = 64, width, height, src }: AvatarProps) {
  const w = width ?? size;
  const h = height ?? size;
  return (
    <span
      className={cn(
        "relative inline-flex shrink-0 items-center justify-center overflow-hidden border border-border font-medium text-foreground",
        !src && "bg-foreground/10",
        className,
      )}
      style={{ height: h, width: w }}
    >
      {src ? (
        <Image
          alt={alt}
          className="object-contain"
          fill
          sizes={`${w}px`}
          src={withBasePath(src)}
        />
      ) : (
        <span aria-hidden={alt ? "true" : undefined}>{initials}</span>
      )}
      {alt && !src ? <span className="sr-only">{alt}</span> : null}
    </span>
  );
}
