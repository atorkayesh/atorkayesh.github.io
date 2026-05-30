import { AboutSection } from "@/components/sections/AboutSection";
import { AwardsSection } from "@/components/sections/AwardsSection";
import { ConferencesSection } from "@/components/sections/ConferencesSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ExperiencesSection } from "@/components/sections/ExperiencesSection";
import { GrantsSection } from "@/components/sections/GrantsSection";
import { IndustrySection } from "@/components/sections/IndustrySection";
import { PositionsSection } from "@/components/sections/PositionsSection";
import { PublicationsPreviewSection } from "@/components/sections/PublicationsPreviewSection";
import { ResearchSection } from "@/components/sections/ResearchSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { SoftwareSection } from "@/components/sections/SoftwareSection";
import { SupervisionSection } from "@/components/sections/SupervisionSection";
import { TeachingSection } from "@/components/sections/TeachingSection";
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
      <AwardsSection />
      <TeachingSection />
      <ConferencesSection />
      <ExperiencesSection />
      <SupervisionSection />
      <ServicesSection />
      <SoftwareSection />
      <IndustrySection />
      <SkillsSection />
      <section className="scroll-mt-8" id="contact" />
    </PageWrapper>
  );
}
