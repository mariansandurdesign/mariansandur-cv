import type { MetadataRoute } from "next";
import { absoluteUrl, locales } from "./seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = {
    it: absoluteUrl("/it"),
    en: absoluteUrl("/en"),
    "x-default": absoluteUrl("/it")
  };

  return locales.map((locale) => ({
    url: absoluteUrl(`/${locale}`),
    lastModified: new Date("2026-07-08"),
    changeFrequency: "monthly",
    priority: locale === "it" ? 1 : 0.9,
    alternates: {
      languages
    }
  }));
}
