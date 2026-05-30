import type { Publication } from "@/types/publication";
import { ExternalLink as ExternalLinkIcon } from "lucide-react";

type PublicationEntryProps = {
  highlightName?: string;
  index: number;
  publication: Publication;
};

function isHighlightedAuthor(author: string) {
  return author.toLowerCase().includes("torkayesh");
}

export function PublicationEntry({
  index,
  publication,
}: PublicationEntryProps) {
  return (
    <article className="relative pl-9 border-b border-border/40 pb-6 last:border-0 last:pb-0">
      <span className="absolute left-0 top-0 text-xs font-mono text-muted/50 pt-px select-none">
        {index}.
      </span>
      <div>
        {/* Authors */}
        <p className="text-[0.8125rem] leading-6 text-muted">
          {publication.authors.map((author, i) => (
            <span key={`${publication.id}-${author}`}>
              {i > 0 && <span className="select-none">, </span>}
              {isHighlightedAuthor(author) ? (
                <strong className="font-semibold text-foreground">{author}</strong>
              ) : (
                author
              )}
            </span>
          ))}{" "}
          ({publication.year}).
        </p>

        {/* Title */}
        <p className="mt-0.5 text-sm font-medium leading-6 text-foreground">
          {publication.title}.
        </p>

        {/* Journal + DOI */}
        <p className="mt-0.5 text-[0.8125rem] leading-6 text-muted">
          <em>{publication.journal}</em>
          {publication.doi && (
            <>
              {" · "}
              <a
                href={publication.doi}
                target="_blank"
                rel="noopener noreferrer"
                className="not-italic inline-flex items-center gap-0.5 text-accent hover:underline underline-offset-2"
              >
                DOI
                <ExternalLinkIcon className="size-3" aria-hidden="true" />
              </a>
            </>
          )}
          {!publication.doi && publication.url && (
            <>
              {" · "}
              <a
                href={publication.url}
                target="_blank"
                rel="noopener noreferrer"
                className="not-italic inline-flex items-center gap-0.5 text-accent hover:underline underline-offset-2"
              >
                Link
                <ExternalLinkIcon className="size-3" aria-hidden="true" />
              </a>
            </>
          )}
        </p>
      </div>
    </article>
  );
}
