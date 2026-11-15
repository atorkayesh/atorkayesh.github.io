import type { Metadata } from "next";
import { GraduationCap } from "lucide-react";
import { publications } from "@/data/publications";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { PublicationEntry } from "@/components/ui/PublicationEntry";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function generateMetadata(): Metadata {
  return {
    title: "Publications",
    description:
      "Journal articles and conference papers by Ali Torkayesh on sustainable transport, renewable fuels, energy policy, and decision analytics.",
    alternates: {
      canonical: "/publications",
    },
  };
}

const sortedPublications = [...publications].sort((a, b) => b.year - a.year);

export default function PublicationsPage() {
  return (
    <PageWrapper className="px-0 sm:px-0 lg:px-0">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading subtitle="To see all publications, visit Google Scholar.">
          Publications
        </SectionHeading>
        <a
          href="https://scholar.google.com/citations?hl=en&user=-eICcigAAAAJ&view_op=list_works&sortby=pubdate"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center gap-2 rounded-md border border-border px-4 py-2 text-[11px] font-bold uppercase tracking-[0.1em] text-muted transition-colors hover:border-foreground hover:text-foreground"
        >
          <GraduationCap className="size-3.5" aria-hidden="true" />
          Google Scholar
        </a>
      </div>
      <div className="mt-10 space-y-6">
        {sortedPublications.map((publication, index) => (
          <PublicationEntry
            index={index + 1}
            key={publication.id}
            publication={publication}
          />
        ))}
      </div>
    </PageWrapper>
  );
}
