import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type TagProps = HTMLAttributes<HTMLSpanElement>;

export function Tag({ className, ...props }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex max-w-full items-center rounded-full border border-accent/20 bg-accent/10 px-2.5 py-1 text-xs font-medium leading-5 text-accent",
        className,
      )}
      {...props}
    />
  );
}
