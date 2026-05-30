import { software } from "@/data/software";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SoftwareCard } from "@/components/ui/SoftwareCard";

export function SoftwareSection() {
  return (
    <section className="scroll-mt-24" id="software">
      <SectionHeading subtitle="Research tools and analysis packages.">
        Software
      </SectionHeading>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {software.map((item) => (
          <SoftwareCard key={item.name} software={item} />
        ))}
      </div>
    </section>
  );
}
