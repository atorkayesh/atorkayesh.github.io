import { software } from "@/data/software";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SoftwareEntry } from "@/components/ui/SoftwareEntry";

export function SoftwareSection() {
  return (
    <section className="scroll-mt-24" id="software">
      <SectionHeading>
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
