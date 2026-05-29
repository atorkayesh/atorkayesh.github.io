import type { ConferencePresentation } from "@/types/conference";
import { Badge } from "./Badge";

type ConferenceEntryProps = {
  conference: ConferencePresentation;
};

export function ConferenceEntry({ conference }: ConferenceEntryProps) {
  return (
    <article className="space-y-2">
      <h3 className="font-semibold leading-6 text-foreground">{conference.title}</h3>
      <p className="text-sm leading-6 text-muted">{conference.conference}</p>
      <div className="flex flex-wrap items-center gap-2">
        <Badge variant="location">{conference.location}</Badge>
        <Badge variant="year">{conference.date}</Badge>
        <Badge variant="tag">{conference.type}</Badge>
      </div>
    </article>
  );
}
