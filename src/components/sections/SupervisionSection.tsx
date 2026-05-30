import { supervision } from "@/data/supervision";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SupervisionTable } from "@/components/ui/SupervisionTable";

export function SupervisionSection() {
  return (
    <section className="scroll-mt-24" id="supervision">
      <SectionHeading subtitle="Supervised doctoral, master's, bachelor's, and internship work.">
        Supervision
      </SectionHeading>
      <SupervisionTable className="mt-8" items={supervision} />
    </section>
  );
}
