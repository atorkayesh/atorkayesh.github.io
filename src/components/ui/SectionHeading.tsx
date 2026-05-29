import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionHeadingProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  subtitle?: ReactNode;
};

export function SectionHeading({
  children,
  className,
  subtitle,
  ...props
}: SectionHeadingProps) {
  return (
    <div className={cn("space-y-3", className)} {...props}>
      <div className="flex items-center gap-3">
        <span className="h-px w-10 bg-accent" aria-hidden="true" />
        <h2 className="font-serif text-3xl font-semibold tracking-normal text-foreground">
          {children}
        </h2>
      </div>
      {subtitle ? <p className="max-w-2xl text-sm leading-6 text-muted">{subtitle}</p> : null}
    </div>
  );
}
