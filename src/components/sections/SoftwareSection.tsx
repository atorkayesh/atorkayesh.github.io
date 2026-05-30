import { software } from "@/data/software";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SoftwareEntry } from "@/components/ui/SoftwareEntry";

export function SoftwareSection() {
  return (
    <section className="scroll-mt-24" id="software">
      <SectionHeading subtitle="Research tools and analysis packages.">
        Software
      </SectionHeading>
      <div className="mt-8">
        {software.map((item) => (
          <SoftwareEntry key={item.name} software={item} />
        ))}
      </div>
    </section>
  );
}
