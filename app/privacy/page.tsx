import type { Metadata } from "next";
import { legalCopy } from "../legal";
import { absoluteUrl } from "../seo";
import { LegalPage } from "../legal-page";

export const dynamic = "force-static";

export function generateMetadata(): Metadata {
  const pageCopy = legalCopy.privacy;

  return {
    title: `${pageCopy.title} - Marian Sandur`,
    description: pageCopy.description,
    alternates: {
      canonical: "/privacy"
    },
    openGraph: {
      title: `${pageCopy.title} - Marian Sandur`,
      description: pageCopy.description,
      url: "/privacy",
      type: "website",
      images: [{ url: absoluteUrl("/icons/icon-512.png"), width: 512, height: 512, alt: "Marian Sandur logo" }]
    }
  };
}

export default function PrivacyPage() {
  return <LegalPage kind="privacy" />;
}
