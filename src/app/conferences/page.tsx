import type { Metadata } from "next";
import { conferences } from "@/data/conferences";
import { ConferenceList } from "@/components/ui/ConferenceList";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function generateMetadata(): Metadata {
  return {
    title: "Conferences",
    description:
      "Conference talks, posters, and proceedings presented by Ali E. Torkayesh on sustainable transport, renewable fuels, and energy policy.",
    alternates: {
      canonical: "/conferences",
    },
  };
}

export default function ConferencesPage() {
  return (
    <PageWrapper className="px-0 sm:px-0 lg:px-0">
      <SectionHeading subtitle="Conference Presentations, Posters &amp; Proceedings">
        Conferences
      </SectionHeading>
      <ConferenceList className="mt-10" conferences={conferences} />
    </PageWrapper>
  );
}
