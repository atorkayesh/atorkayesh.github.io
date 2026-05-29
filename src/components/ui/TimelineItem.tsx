import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type TimelineItemProps = {
  children: ReactNode;
  className?: string;
  isLast?: boolean;
  year: number | string;
};

export function TimelineItem({ children, className, isLast = false, year }: TimelineItemProps) {
  return (
    <li className={cn("relative grid grid-cols-[5rem_1fr] gap-4 pb-8 last:pb-0", className)}>
      <div className="relative flex justify-end">
        <span className="mt-0.5 rounded-full border border-border bg-background px-2 py-1 text-xs font-semibold text-muted">
          {year}
        </span>
        <span
          aria-hidden="true"
          className="absolute -right-[1.05rem] top-2 size-3 rounded-full border-2 border-background bg-accent"
        />
        {!isLast ? (
          <span
            aria-hidden="true"
            className="absolute -right-[0.7rem] top-5 h-full w-px bg-border"
          />
        ) : null}
      </div>
      <div className="min-w-0">{children}</div>
    </li>
  );
}
