import { person } from "@/data/person";
import { SectionHeading } from "@/components/ui/SectionHeading";

const emailLinks = [person.email, person.email2].filter((email): email is string => Boolean(email));

const profileLinks = [
  { href: person.socialLinks.linkedin, label: "LinkedIn" },
  { href: person.socialLinks.googleScholar, label: "Google Scholar" },
  { href: person.socialLinks.orcid, label: "ORCID" },
].filter((link): link is typeof link & { href: string } => Boolean(link.href));

const address = "Kackertstraße 7, 52072 Aachen, Germany";

const rowClass =
  "grid gap-x-5 gap-y-1 border-b border-border/40 py-5 last:border-0 sm:grid-cols-[10rem_1fr]";
const labelClass = "pt-0.5 text-[0.6875rem] font-semibold uppercase tracking-wider text-muted";
const linkClass = "text-accent underline-offset-2 hover:underline";

export function ContactSection() {
  return (
    <section className="scroll-mt-24" id="contact">
      <SectionHeading subtitle="Open to collaborations and academic inquiries.">
        Contact
      </SectionHeading>
      <div className="mt-8">
        <div className={rowClass}>
          <h3 className={labelClass}>Email</h3>
          <div className="flex flex-col gap-1 text-[0.8125rem] leading-6">
            {emailLinks.map((email) => (
              <a className={`w-fit ${linkClass}`} href={`mailto:${email}`} key={email}>
                {email}
              </a>
            ))}
          </div>
        </div>
        <address className={`not-italic ${rowClass}`}>
          <h3 className={labelClass}>Address</h3>
          <p className="text-[0.8125rem] leading-6 text-foreground/90">{address}</p>
        </address>
        <div className={rowClass}>
          <h3 className={labelClass}>Profiles</h3>
          <p className="text-[0.8125rem] leading-6 text-muted">
            {profileLinks.map((link, index) => (
              <span key={link.label}>
                {index > 0 ? <span className="select-none text-muted/50"> · </span> : null}
                <a className={linkClass} href={link.href} rel="noopener noreferrer" target="_blank">
                  {link.label}
                </a>
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}
