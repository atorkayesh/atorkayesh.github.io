import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type SpinnerProps = HTMLAttributes<HTMLSpanElement> & {
  label?: string;
};

export function Spinner({ className, label = "Loading", ...props }: SpinnerProps) {
  return (
    <span
      aria-label={label}
      className={cn(
        "inline-block size-4 animate-spin rounded-full border-2 border-current border-r-transparent",
        className,
      )}
      role="status"
      {...props}
    />
  );
}
