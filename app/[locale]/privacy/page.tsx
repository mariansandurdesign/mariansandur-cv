import type { Metadata } from "next";
import { legalCopy } from "../../legal";
import { absoluteUrl, isLocale, locales } from "../../seo";
import { LegalPage } from "../legal-page";

export const dynamic = "force-static";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const currentLocale = isLocale(locale) ? locale : "it";
  const pageCopy = legalCopy[currentLocale].privacy;

  return {
    title: `${pageCopy.title} - Marian Sandur`,
    description: pageCopy.description,
    alternates: {
      canonical: `/${currentLocale}/privacy`,
      languages: {
        it: "/it/privacy",
        en: "/en/privacy",
        "x-default": "/it/privacy"
      }
    },
    openGraph: {
      title: `${pageCopy.title} - Marian Sandur`,
      description: pageCopy.description,
      url: `/${currentLocale}/privacy`,
      type: "website",
      images: [{ url: absoluteUrl("/icons/icon-512.png"), width: 512, height: 512, alt: "Marian Sandur logo" }]
    }
  };
}

export default function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
  return <LegalPage params={params} kind="privacy" />;
}
