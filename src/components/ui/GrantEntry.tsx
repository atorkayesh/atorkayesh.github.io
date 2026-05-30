import type { Grant } from "@/types/grant";

type GrantEntryProps = {
  grant: Grant;
  ongoing?: boolean;
};

export function GrantEntry({ grant, ongoing }: GrantEntryProps) {
  const showProgram = grant.program && grant.program !== grant.title;

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
          {ongoing ? (
            <span className="inline-flex items-center gap-1.5 text-[0.6875rem] font-medium uppercase tracking-wide text-accent">
              <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
              Ongoing
            </span>
          ) : null}
        </div>
        <p className="mt-1 text-[0.8125rem] leading-6 text-muted">
          <span className="font-medium text-foreground/80">{grant.funder}</span>
          {showProgram ? <> &middot; {grant.program}</> : null}
        </p>
        <p className="mt-0.5 text-[0.8125rem] leading-6 text-muted">
          PI: <span className="text-foreground/80">{grant.pi}</span>
          {grant.amount ? <> &middot; {grant.amount}</> : null}
        </p>
      </div>
    </article>
  );
}
