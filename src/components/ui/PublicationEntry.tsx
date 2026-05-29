import type { Publication } from "@/types/publication";
import { Badge } from "./Badge";
import { ExternalLink } from "./ExternalLink";

type PublicationEntryProps = {
  highlightName?: string;
  index: number;
  publication: Publication;
};

function isHighlightedAuthor(author: string, highlightName: string) {
  const normalizedAuthor = author.toLowerCase();
  const normalizedName = highlightName.toLowerCase();

  return normalizedAuthor.includes(normalizedName) || normalizedAuthor.includes("torkayesh");
}

export function PublicationEntry({
  highlightName = "Ali",
  index,
  publication,
}: PublicationEntryProps) {
  return (
    <article className="grid gap-3 sm:grid-cols-[3rem_1fr]">
      <div className="text-sm font-semibold text-muted">{index}.</div>
      <div className="min-w-0 space-y-2">
        <p className="text-sm leading-6 text-muted">
          {publication.authors.map((author, authorIndex) => (
            <span key={`${publication.id}-${author}`}>
              {authorIndex > 0 ? ", " : null}
              {isHighlightedAuthor(author, highlightName) ? (
                <strong className="font-semibold text-foreground">{author}</strong>
              ) : (
                author
              )}
            </span>
          ))}
        </p>
        <h3 className="text-base font-semibold leading-7 text-foreground">{publication.title}</h3>
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="journal">{publication.journal}</Badge>
          <Badge variant="year">{publication.year}</Badge>
          {publication.doi ? <ExternalLink href={publication.doi}>DOI</ExternalLink> : null}
        </div>
      </div>
    </article>
  );
}
