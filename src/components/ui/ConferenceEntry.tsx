import type { ConferencePresentation } from "@/types/conference";
import { Badge } from "./Badge";

type ConferenceEntryProps = {
  conference: ConferencePresentation;
};

const conferenceTypeLabels: Record<ConferencePresentation["type"], string> = {
  oral: "Oral",
  poster: "Poster",
  proceedings: "Proceedings",
};

function isHighlightedAuthor(author: string) {
  return author.toLowerCase().includes("torkayesh");
}

export function ConferenceEntry({ conference }: ConferenceEntryProps) {
  return (
    <article className="space-y-2">
      <p className="text-sm leading-6 text-muted">
        {conference.authors.map((author, authorIndex) => (
          <span key={`${conference.title}-${author}`}>
            {authorIndex > 0 ? ", " : null}
            {isHighlightedAuthor(author) ? (
              <strong className="font-semibold text-foreground">{author}</strong>
            ) : (
              author
            )}
          </span>
        ))}
      </p>
      <h3 className="font-semibold leading-6 text-foreground">{conference.title}</h3>
      <p className="text-sm leading-6 text-muted">{conference.conference}</p>
      <div className="flex flex-wrap items-center gap-2">
        <Badge variant="location">{conference.location}</Badge>
        <Badge variant="year">{conference.date}</Badge>
        <Badge variant="tag">{conferenceTypeLabels[conference.type]}</Badge>
      </div>
    </article>
  );
}
