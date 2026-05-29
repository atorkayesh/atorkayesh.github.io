import { PageWrapper } from "@/components/layout/PageWrapper";
import { AboutSection } from "@/components/sections/AboutSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ResearchSection } from "@/components/sections/ResearchSection";

export default function Home() {
  return (
    <main className="flex-1">
      <HeroSection />
      <PageWrapper className="space-y-24 py-24">
        <AboutSection />
        <ResearchSection />
        <section className="scroll-mt-24" id="publications" />
        <section className="scroll-mt-24" id="teaching" />
        <section className="scroll-mt-24" id="contact" />
      </PageWrapper>
    </main>
  );
}
