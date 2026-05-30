import type { Metadata } from "next";
import { publications } from "@/data/publications";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { PublicationEntry } from "@/components/ui/PublicationEntry";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function generateMetadata(): Metadata {
  return {
    title: "Publications",
    description:
      "Journal articles and conference papers by Ali E. Torkayesh on sustainable transport, renewable fuels, energy policy, and decision analytics.",
    alternates: {
      canonical: "/publications",
    },
  };
}

const sortedPublications = [...publications].sort((a, b) => b.year - a.year);

export default function PublicationsPage() {
  return (
    <PageWrapper className="px-0 sm:px-0 lg:px-0">
      <SectionHeading subtitle="Full publication list sorted by year.">
        Publications
      </SectionHeading>
      <div className="mt-8 space-y-8">
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
