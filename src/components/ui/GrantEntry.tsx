import type { Grant } from "@/types/grant";
import { ExternalLink as ExternalLinkIcon } from "lucide-react";

type GrantEntryProps = {
  grant: Grant;
};

export function GrantEntry({ grant }: GrantEntryProps) {
  return (
    <article className="grid grid-cols-[4.5rem_1fr] gap-x-5 border-b border-border/40 py-5 last:border-0 sm:grid-cols-[6rem_1fr]">
      <div className="pt-0.5 font-mono text-xs leading-6 tabular-nums text-muted/80">
        {grant.yearStart}&ndash;{grant.yearEnd}
      </div>
      <div className="min-w-0">
        <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
          <h3 className="text-[0.9375rem] font-semibold leading-6 text-foreground">
            {grant.title}
          </h3>
          {grant.url ? (
            <a
              className="inline-flex items-center gap-0.5 text-[0.6875rem] font-medium uppercase tracking-wide text-accent underline-offset-2 hover:underline"
              href={grant.url}
              rel="noopener noreferrer"
              target="_blank"
            >
              Website
              <ExternalLinkIcon aria-hidden="true" className="size-3" />
            </a>
          ) : null}
        </div>
        <p className="mt-1 text-[0.8125rem] leading-6 text-muted">
          <span className="font-medium text-foreground/80">{grant.institution}</span>
          {" "}&middot;{" "}
          <span className="font-medium text-foreground/80">{grant.funder}</span>
          {grant.amount ? <> &middot; {grant.amount}</> : null}
        </p>
        <p className="mt-0.5 text-[0.8125rem] leading-6 text-muted">
          {grant.role} &middot; PI: <span className="text-foreground/80">{grant.pi}</span>
        </p>
        {grant.topics && grant.topics.length > 0 ? (
          <ul className="mt-2 space-y-0.5">
            {grant.topics.map((topic) => (
              <li key={topic} className="flex items-start gap-2 text-[0.8125rem] leading-6 text-muted">
                <span className="mt-2.5 size-1 shrink-0 rounded-full bg-muted/50" aria-hidden="true" />
                {topic}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </article>
  );
}
