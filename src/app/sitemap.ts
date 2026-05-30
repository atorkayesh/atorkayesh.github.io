import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";

const routes = ["", "/publications", "/awards", "/research", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    changeFrequency: "monthly",
    lastModified: new Date(),
    priority: route === "" ? 1 : 0.8,
    url: `${siteUrl}${route}`,
  }));
}
