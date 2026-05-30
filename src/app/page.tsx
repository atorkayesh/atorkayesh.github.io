import { AboutSection } from "@/components/sections/AboutSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { GrantsSection } from "@/components/sections/GrantsSection";
import { PositionsSection } from "@/components/sections/PositionsSection";
import { PublicationsPreviewSection } from "@/components/sections/PublicationsPreviewSection";
import { ResearchSection } from "@/components/sections/ResearchSection";
import { PageWrapper } from "@/components/layout/PageWrapper";

export default function Home() {
  return (
    <PageWrapper className="flex flex-col gap-28 px-0 sm:px-0 lg:px-0">
      <AboutSection />
      <ResearchSection />
      <EducationSection />
      <PositionsSection />
      <PublicationsPreviewSection />
      <GrantsSection />
      <section className="scroll-mt-8" id="teaching" />
      <section className="scroll-mt-8" id="contact" />
    </PageWrapper>
  );
}
