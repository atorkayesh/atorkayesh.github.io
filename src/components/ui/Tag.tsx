import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type TagProps = HTMLAttributes<HTMLSpanElement>;

export function Tag({ className, ...props }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex max-w-full items-center gap-1.5 rounded border-l-2 border-l-accent border border-accent/15 bg-accent/5 px-3 py-1.5 text-[11px] font-semibold tracking-wide text-foreground/70 transition-colors hover:bg-accent/10 hover:text-accent",
        className,
      )}
      {...props}
    />
  );
}
