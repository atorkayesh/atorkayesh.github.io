import { person } from "@/data/person";
import { Avatar } from "@/components/ui/Avatar";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";

const initials = person.name
  .split(" ")
  .map((part) => part[0])
  .join("")
  .slice(0, 2);

export function AboutSection() {
  return (
    <section className="scroll-mt-24" id="research">
      <div className="grid gap-10 md:grid-cols-[1fr_16rem] md:items-start">
        <div className="order-2 md:order-1">
          <SectionHeading subtitle="Research profile">About</SectionHeading>
          <p className="mt-6 max-w-3xl text-base leading-8 text-muted">{person.bio}</p>
          <div className="mt-8 flex flex-wrap gap-2" aria-label="Research interests">
            {person.researchInterests.map((interest) => (
              <a
                className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                href={`#${interest.toLowerCase().replaceAll(" ", "-")}`}
                key={interest}
              >
                <Tag>{interest}</Tag>
              </a>
            ))}
          </div>
        </div>
        <div className="order-1 flex justify-center md:order-2 md:justify-end">
          <Avatar
            alt={person.name}
            className="text-4xl shadow-sm ring-8 ring-background"
            initials={initials}
            size={220}
          />
        </div>
      </div>
    </section>
  );
}
