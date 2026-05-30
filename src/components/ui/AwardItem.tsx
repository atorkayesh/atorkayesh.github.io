import type { Award } from "@/types/award";

type AwardItemProps = {
  award: Award;
};

export function AwardItem({ award }: AwardItemProps) {
  return (
    <article className="grid grid-cols-[4.5rem_1fr] gap-x-5 border-b border-border/40 py-5 last:border-0 sm:grid-cols-[6rem_1fr]">
      <div className="pt-0.5 font-mono text-xs leading-6 tabular-nums text-muted/80">
        {award.displayYear ?? award.year}
      </div>
      <div className="min-w-0">
        <h3 className="text-[0.9375rem] font-semibold leading-6 text-foreground">
          {award.title}
        </h3>
        {(award.awardedBy ?? award.description) ? (
          <p className="mt-1 text-[0.8125rem] leading-6 text-muted">
            {award.awardedBy ? (
              <span className="font-medium text-foreground/80">{award.awardedBy}</span>
            ) : null}
            {award.awardedBy && award.description ? <> &middot; </> : null}
            {award.description ? <span>{award.description}</span> : null}
          </p>
        ) : null}
      </div>
    </article>
  );
}
