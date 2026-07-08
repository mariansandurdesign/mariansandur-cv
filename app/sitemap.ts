import type { MetadataRoute } from "next";
import { absoluteUrl } from "./seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const legalPages = ["privacy", "cookies"];
  const lastModified = new Date("2026-07-08");

  return [
    {
      url: absoluteUrl("/"),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 1
    },
    ...legalPages.map((page) => ({
      url: absoluteUrl(`/${page}`),
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.4
    }))
  ];
}
