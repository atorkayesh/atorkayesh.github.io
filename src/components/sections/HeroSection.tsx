"use client";

import { BadgeCheck, Download, GraduationCap, Link, Mail } from "lucide-react";
import { person } from "@/data/person";
import { Button } from "@/components/ui/Button";
import { CountUpStatCard } from "@/components/ui/CountUpStatCard";
import { PageWrapper } from "@/components/layout/PageWrapper";

const stats = [
  { label: "Publications", value: person.heroStats.publications },
  { label: "Grants", value: person.heroStats.grants },
  { label: "Awards", value: person.heroStats.awards },
  { label: "Countries", value: person.heroStats.countries },
];

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

export function HeroSection() {
  return (
    <section className="relative isolate max-w-[100vw] overflow-hidden bg-background" id="home">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,rgba(37,99,235,0.05),transparent_38%),linear-gradient(rgba(23,32,51,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(23,32,51,0.035)_1px,transparent_1px)] bg-[size:auto,48px_48px,48px_48px] dark:bg-[linear-gradient(135deg,rgba(96,165,250,0.07),transparent_38%),linear-gradient(rgba(248,250,252,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(248,250,252,0.03)_1px,transparent_1px)]"
      />
      <PageWrapper className="grid min-h-[calc(100svh-4rem)] grid-cols-1 content-center gap-12 py-20 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-center">
        <div className="min-w-0 max-w-[calc(100vw-2.5rem)] sm:max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-normal text-accent">
            {person.title}
          </p>
          <h1 className="mt-4 break-words font-serif text-4xl font-semibold leading-tight text-foreground sm:text-6xl lg:text-7xl">
            {person.name}
          </h1>
          <p className="mt-5 max-w-3xl break-words text-lg leading-8 text-muted">
            {person.affiliations.join(" · ")} · {person.location}
          </p>
          <p className="mt-6 max-w-3xl break-words text-xl leading-9 text-foreground">
            I study how renewable fuels, hydrogen, and Power-to-X technologies move through
            markets, policies, and transport systems.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              className="w-full sm:w-auto"
              onClick={() => document.getElementById("research")?.scrollIntoView({ behavior: "smooth" })}
              size="lg"
            >
              View Research
            </Button>
            <a
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-md border border-border bg-background px-5 text-base font-medium text-foreground transition-colors hover:bg-foreground/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:w-auto"
              href="/documents/ali-torkayesh-cv.pdf"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Download aria-hidden="true" className="size-4" />
              Download CV
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-2" aria-label="Social links">
            {socialLinks.map((link) => {
              const Icon = link.icon;

              return (
                <a
                  aria-label={link.label}
                  className="inline-flex size-10 items-center justify-center rounded-md border border-border bg-background/80 text-muted transition-colors hover:bg-background hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  href={link.href}
                  key={link.label}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                >
                  <Icon aria-hidden="true" className="size-4" />
                </a>
              );
            })}
          </div>
        </div>
        <aside className="max-w-[calc(100vw-2.5rem)] space-y-4 lg:max-w-none">
          <div className="grid grid-cols-2 gap-5 rounded-lg border border-border/60 bg-background/70 p-5 shadow-sm backdrop-blur">
            {stats.map((stat) => (
              <CountUpStatCard key={stat.label} label={stat.label} value={stat.value} />
            ))}
          </div>
          <div
            aria-label="Affiliations"
            className="flex items-stretch divide-x divide-border/50 overflow-hidden rounded-lg border border-border/50 bg-background/70 backdrop-blur"
          >
            <div className="flex flex-1 flex-col justify-center px-5 py-4">
              <span className="font-serif text-base font-semibold leading-none text-foreground">RWTH</span>
              <span className="mt-1.5 text-[11px] font-medium uppercase tracking-wider text-muted">Aachen University</span>
            </div>
            <div className="flex flex-1 flex-col justify-center px-5 py-4">
              <span className="font-serif text-base font-semibold leading-none text-foreground">FZJ</span>
              <span className="mt-1.5 text-[11px] font-medium uppercase tracking-wider text-muted">Forschungszentrum Jülich</span>
            </div>
          </div>
        </aside>
      </PageWrapper>
    </section>
  );
}
