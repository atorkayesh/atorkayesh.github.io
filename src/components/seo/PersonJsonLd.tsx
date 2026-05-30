import { person } from "@/data/person";
import { siteUrl } from "@/lib/seo";

const sameAs = [
  person.socialLinks.linkedin,
  person.socialLinks.googleScholar,
  person.socialLinks.orcid,
].filter((url): url is string => Boolean(url));

export function PersonJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    affiliation: person.affiliations.map((name) => ({
      "@type": "Organization",
      name,
    })),
    jobTitle: person.title,
    name: person.name,
    sameAs,
    url: siteUrl,
  };

  return (
    <script
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      type="application/ld+json"
    />
  );
}
