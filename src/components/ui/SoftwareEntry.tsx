import type { SoftwarePackage } from "@/types/software";
import { ExternalLink as ExternalLinkIcon } from "lucide-react";

type SoftwareEntryProps = {
  software: SoftwarePackage;
};

export function SoftwareEntry({ software }: SoftwareEntryProps) {
  return (
    <article className="grid grid-cols-[4.5rem_1fr] gap-x-5 border-b border-border/40 py-5 last:border-0 sm:grid-cols-[6rem_1fr]">
      <div className="pt-0.5 font-mono text-xs leading-6 text-muted/80">{software.language}</div>
      <div className="min-w-0">
        <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
          <h3 className="text-[0.9375rem] font-semibold leading-6 text-foreground">
            {software.name}
          </h3>
          {software.githubUrl ? (
            <a
              className="inline-flex items-center gap-0.5 text-[0.6875rem] font-medium uppercase tracking-wide text-accent underline-offset-2 hover:underline"
              href={software.githubUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              GitHub
              <ExternalLinkIcon aria-hidden="true" className="size-3" />
            </a>
          ) : null}
        </div>
        <p className="mt-1 text-[0.8125rem] leading-6 text-muted">{software.description}</p>
      </div>
    </article>
  );
}
