import type { Award } from "@/types/award";
import { Badge } from "./Badge";

type AwardItemProps = {
  award: Award;
};

export function AwardItem({ award }: AwardItemProps) {
  return (
    <article className="flex gap-4">
      <Badge className="mt-0.5 shrink-0" variant="year">
        {award.year}
      </Badge>
      <div className="min-w-0">
        <h3 className="font-semibold leading-6 text-foreground">{award.title}</h3>
        <p className="text-sm leading-6 text-muted">{award.awardedBy}</p>
      </div>
    </article>
  );
}
