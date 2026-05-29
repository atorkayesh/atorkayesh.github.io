import type { Grant } from "@/types/grant";
import { Badge } from "./Badge";
import { cn } from "@/lib/utils";

type GrantCardProps = {
  className?: string;
  grant: Grant;
};

export function GrantCard({ className, grant }: GrantCardProps) {
  return (
    <article className={cn("rounded-lg border border-border bg-background p-5", className)}>
      <div className="flex flex-wrap items-center gap-2">
        <Badge variant="funder">{grant.funder}</Badge>
        <Badge variant="year">
          {grant.yearStart}-{grant.yearEnd}
        </Badge>
      </div>
      <h3 className="mt-4 text-lg font-semibold leading-7 text-foreground">{grant.title}</h3>
      <p className="mt-1 text-sm text-muted">{grant.program}</p>
      <dl className="mt-4 grid gap-2 text-sm">
        <div className="flex gap-2">
          <dt className="font-medium text-foreground">PI:</dt>
          <dd className="text-muted">{grant.pi}</dd>
        </div>
        {grant.amount ? (
          <div className="flex gap-2">
            <dt className="font-medium text-foreground">Amount:</dt>
            <dd className="text-muted">{grant.amount}</dd>
          </div>
        ) : null}
      </dl>
    </article>
  );
}
