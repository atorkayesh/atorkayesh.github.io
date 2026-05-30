import type { Metadata } from "next";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { ResearchSection } from "@/components/sections/ResearchSection";

export function generateMetadata(): Metadata {
  return {
    title: "Research",
    description:
      "Research areas covering sustainable transport, Power-to-X, hydrogen, policy analysis, market dynamics, and agent-based modeling.",
    alternates: {
      canonical: "/research",
    },
  };
}

export default function ResearchPage() {
  return (
    <PageWrapper className="px-0 sm:px-0 lg:px-0">
      <ResearchSection />
    </PageWrapper>
  );
}
