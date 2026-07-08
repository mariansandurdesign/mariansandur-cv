import type { MetadataRoute } from "next";
import { absoluteUrl, locales } from "./seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = {
    it: absoluteUrl("/it"),
    en: absoluteUrl("/en"),
    "x-default": absoluteUrl("/it")
  };

  const legalPages = ["privacy", "cookies"];
  const lastModified = new Date("2026-07-08");

  return [
    ...locales.map((locale) => ({
      url: absoluteUrl(`/${locale}`),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: locale === "it" ? 1 : 0.9,
      alternates: {
        languages
      }
    })),
    ...locales.flatMap((locale) =>
      legalPages.map((page) => ({
        url: absoluteUrl(`/${locale}/${page}`),
        lastModified,
        changeFrequency: "yearly" as const,
        priority: 0.4,
        alternates: {
          languages: {
            it: absoluteUrl(`/it/${page}`),
            en: absoluteUrl(`/en/${page}`),
            "x-default": absoluteUrl(`/it/${page}`)
          }
        }
      }))
    )
  ];
}
