import { AboutSection } from "@/components/sections/AboutSection";
import { ResearchSection } from "@/components/sections/ResearchSection";

export default function Home() {
  return (
    <div className="flex flex-col gap-28">
      <AboutSection />
      <ResearchSection />
      <section className="scroll-mt-8" id="publications" />
      <section className="scroll-mt-8" id="teaching" />
      <section className="scroll-mt-8" id="contact" />
    </div>
  );
}
