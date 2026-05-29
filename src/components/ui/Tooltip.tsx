"use client";

import type { ReactNode } from "react";
import { useId } from "react";
import { cn } from "@/lib/utils";

type TooltipProps = {
  children: ReactNode;
  className?: string;
  label: ReactNode;
};

export function Tooltip({ children, className, label }: TooltipProps) {
  const id = useId();

  return (
    <span className="group relative inline-flex">
      <span aria-describedby={id}>{children}</span>
      <span
        className={cn(
          "pointer-events-none absolute bottom-full left-1/2 z-50 mb-2 w-max max-w-56 -translate-x-1/2 rounded-md bg-slate-950 px-2.5 py-1.5 text-xs leading-5 text-white opacity-0 shadow-lg transition-opacity group-focus-within:opacity-100 group-hover:opacity-100 dark:bg-white dark:text-slate-950",
          className,
        )}
        id={id}
        role="tooltip"
      >
        {label}
      </span>
    </span>
  );
}
