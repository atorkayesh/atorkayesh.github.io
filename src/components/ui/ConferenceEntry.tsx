import type { ConferencePresentation } from "@/types/conference";

type ConferenceEntryProps = {
  conference: ConferencePresentation;
};

const conferenceTypeLabels: Record<ConferencePresentation["type"], string> = {
  oral: "Oral presentation",
  poster: "Poster",
  proceedings: "Proceedings",
};

function isHighlightedAuthor(author: string) {
  return author.toLowerCase().includes("torkayesh");
}

export function ConferenceEntry({ conference }: ConferenceEntryProps) {
  const hasLocation = conference.location && conference.location !== "TBD";

  return (
    <article className="py-4 first:pt-0 last:pb-0">
      <p className="text-[0.8125rem] leading-6 text-muted">
        {conference.authors.map((author, authorIndex) => (
          <span key={`${conference.title}-${author}`}>
            {authorIndex > 0 ? <span className="select-none">, </span> : null}
            {isHighlightedAuthor(author) ? (
              <strong className="font-semibold text-foreground">{author}</strong>
            ) : (
              <span className="font-normal text-muted">{author}</span>
            )}
          </span>
        ))}
      </p>
      <p className="mt-0.5 text-sm font-medium leading-6 text-foreground">{conference.title}</p>
      <p className="mt-0.5 text-[0.8125rem] leading-6 text-muted">
        <em>{conference.conference}</em>
        {hasLocation ? <> &middot; {conference.location}</> : null}
        {" "}&middot; {conferenceTypeLabels[conference.type]}
      </p>
    </article>
  );
}
