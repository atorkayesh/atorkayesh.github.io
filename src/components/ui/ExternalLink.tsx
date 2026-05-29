import type { AnchorHTMLAttributes } from "react";
import { ExternalLink as ExternalLinkIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type ExternalLinkProps = AnchorHTMLAttributes<HTMLAnchorElement>;

export function ExternalLink({ children, className, ...props }: ExternalLinkProps) {
  return (
    <a
      className={cn(
        "inline-flex items-center gap-1.5 text-accent underline-offset-4 transition-colors hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
        className,
      )}
      rel="noopener noreferrer"
      target="_blank"
      {...props}
    >
      <span>{children}</span>
      <ExternalLinkIcon aria-hidden="true" className="size-3.5 shrink-0" />
      <span className="sr-only">(opens in a new tab)</span>
    </a>
  );
}
