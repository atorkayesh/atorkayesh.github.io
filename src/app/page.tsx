import { AboutSection } from "@/components/sections/AboutSection";
import { AwardsSection } from "@/components/sections/AwardsSection";
import { ConferencesSection } from "@/components/sections/ConferencesSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ExperiencesSection } from "@/components/sections/ExperiencesSection";
import { GrantsSection } from "@/components/sections/GrantsSection";
import { IndustrySection } from "@/components/sections/IndustrySection";
import { PositionsSection } from "@/components/sections/PositionsSection";
import { PublicationsPreviewSection } from "@/components/sections/PublicationsPreviewSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { SoftwareSection } from "@/components/sections/SoftwareSection";
import { SupervisionSection } from "@/components/sections/SupervisionSection";
import { TeachingSection } from "@/components/sections/TeachingSection";
import { PersonJsonLd } from "@/components/seo/PersonJsonLd";
import { PageWrapper } from "@/components/layout/PageWrapper";

export default function Home() {
  return (
    <>
      <PersonJsonLd />
      <PageWrapper className="flex flex-col gap-28 px-0 sm:px-0 lg:px-0">
        {/* Profile */}
        <AboutSection />
        {/* Research */}
        <PublicationsPreviewSection />
        <GrantsSection />
        <AwardsSection />
        {/* Activities */}
        <TeachingSection />
        <ConferencesSection />
        <SupervisionSection />
        <ServicesSection />
        {/* Background */}
        <EducationSection />
        <PositionsSection />
        <ExperiencesSection />
        <SoftwareSection />
        <IndustrySection />
        <SkillsSection />
        <ContactSection />
      </PageWrapper>
    </>
  );
}
