import { BadgeCheck, GraduationCap, Link, Mail, MapPin } from "lucide-react";
import { person } from "@/data/person";
import { SectionHeading } from "@/components/ui/SectionHeading";

const emailLinks = [person.email, person.email2].filter((email): email is string => Boolean(email));

const socialLinks = [
  {
    href: person.socialLinks.linkedin,
    icon: Link,
    label: "LinkedIn",
  },
  {
    href: person.socialLinks.googleScholar,
    icon: GraduationCap,
    label: "Google Scholar",
  },
  {
    href: person.socialLinks.orcid,
    icon: BadgeCheck,
    label: "ORCID",
  },
].filter((link): link is typeof link & { href: string } => Boolean(link.href));

export function ContactSection() {
  return (
    <section className="scroll-mt-24" id="contact">
      <SectionHeading subtitle="Open to collaborations and academic inquiries.">
        Contact
      </SectionHeading>
      <div className="mt-8 grid gap-6 rounded-lg border border-border bg-background p-5 md:grid-cols-[1fr_auto] md:items-end">
        <div className="space-y-5">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-normal text-muted">
              Email
            </h3>
            <div className="mt-3 flex flex-col gap-2">
              {emailLinks.map((email) => (
                <a
                  className="inline-flex items-center gap-2 text-sm font-medium text-foreground underline-offset-4 hover:text-accent hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  href={`mailto:${email}`}
                  key={email}
                >
                  <Mail aria-hidden="true" className="size-4 text-accent" />
                  {email}
                </a>
              ))}
            </div>
          </div>
          <address className="not-italic">
            <h3 className="text-sm font-semibold uppercase tracking-normal text-muted">
              Address
            </h3>
            <p className="mt-3 inline-flex items-start gap-2 text-sm leading-6 text-foreground">
              <MapPin aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-accent" />
              <span>Kackertstraße 7, 52072 Aachen, Germany</span>
            </p>
          </address>
        </div>
        <div className="flex flex-wrap gap-2" aria-label="Social links">
          {socialLinks.map((link) => {
            const Icon = link.icon;

            return (
              <a
                aria-label={link.label}
                className="inline-flex size-10 items-center justify-center rounded-md border border-border bg-background text-muted transition-colors hover:bg-foreground/5 hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                href={link.href}
                key={link.label}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Icon aria-hidden="true" className="size-4" />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
