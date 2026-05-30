import { person } from "@/data/person";
import { Avatar } from "@/components/ui/Avatar";
import { Tag } from "@/components/ui/Tag";

const initials = person.name
  .split(" ")
  .filter((part) => part.length > 1)
  .map((part) => part[0])
  .join("")
  .slice(0, 2);

export function AboutSection() {
  return (
    <section className="scroll-mt-8" id="about">
      <div className="flex gap-8">
        <div className="min-w-0 flex-1">
          <p className="text-sm leading-7 text-muted">{person.bio}</p>
          <div className="mt-6 flex flex-wrap gap-2" aria-label="Research interests">
            {person.researchInterests.map((interest) => (
              <Tag key={interest}>{interest}</Tag>
            ))}
          </div>
        </div>
        <div className="shrink-0">
          {/* Replace src with "/photo.jpg" when available */}
          <Avatar
            alt={person.name}
            className="text-2xl font-semibold ring-4 ring-border/20 shadow-sm"
            initials={initials}
            size={120}
            src={person.avatar}
          />
        </div>
      </div>
    </section>
  );
}
