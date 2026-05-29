import { BadgeCheck, GraduationCap, Link, Mail } from "lucide-react";
import { person } from "@/data/person";
import { PageWrapper } from "./PageWrapper";

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
  {
    href: `mailto:${person.email}`,
    icon: Mail,
    label: "Email",
  },
].filter((link): link is typeof link & { href: string } => Boolean(link.href));

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <PageWrapper className="grid gap-6 py-8 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <p className="font-semibold text-foreground">{person.name}</p>
          <p className="mt-1 text-sm text-muted">{person.affiliations.join(" + ")}</p>
          <p className="mt-3 text-xs text-muted">Last updated: May 2026</p>
        </div>
        <div className="space-y-4 md:text-right">
          <div className="flex flex-wrap gap-2 md:justify-end">
            {socialLinks.map((link) => {
              const Icon = link.icon;

              return (
                <a
                  aria-label={link.label}
                  className="inline-flex size-10 items-center justify-center rounded-md border border-border text-muted transition-colors hover:bg-foreground/10 hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  href={link.href}
                  key={link.label}
                  rel={link.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                  target={link.href?.startsWith("http") ? "_blank" : undefined}
                >
                  <Icon aria-hidden="true" className="size-4" />
                </a>
              );
            })}
          </div>
          <p className="text-xs text-muted">
            © 2026 {person.name}. All rights reserved.
          </p>
        </div>
      </PageWrapper>
    </footer>
  );
}
