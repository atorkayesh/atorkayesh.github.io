import { PageWrapper } from "@/components/layout/PageWrapper";
import { HeroSection } from "@/components/sections/HeroSection";

export default function Home() {
  return (
    <main className="flex-1">
      <HeroSection />
      <PageWrapper className="space-y-24 py-24">
        <section className="scroll-mt-24" id="research" />
        <section className="scroll-mt-24" id="publications" />
        <section className="scroll-mt-24" id="teaching" />
        <section className="scroll-mt-24" id="contact" />
      </PageWrapper>
    </main>
  );
}
