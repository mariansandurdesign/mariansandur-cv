import { notFound } from "next/navigation";
import { legalCopy } from "../legal";
import { isLocale, profile, type Locale } from "../seo";

type LegalKind = "privacy" | "cookies";

export async function LegalPage({
  params,
  kind
}: {
  params: Promise<{ locale: string }>;
  kind: LegalKind;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const alternateLocale: Locale = locale === "it" ? "en" : "it";
  const pageCopy = legalCopy[locale][kind];
  const sharedCopy = legalCopy[locale];

  return (
    <>
      <header className="top-nav legal-top-nav">
        <a className="brand-mark" href={`/${locale}`}>
          <img src="/icons/icon-180.png" alt="" width="34" height="34" />
          <span className="brand-label">
            M. Sandur<span>.</span>
          </span>
        </a>
        <nav aria-label="Legal navigation">
          <a href={`/${locale}`}>{sharedCopy.backLabel}</a>
          <a className="language-switcher" href={`/${alternateLocale}/${kind}`}>
            {alternateLocale.toUpperCase()}
          </a>
        </nav>
      </header>

      <main className="site-frame legal-page">
        <p className="mono hero-kicker">{pageCopy.eyebrow}</p>
        <h1>{pageCopy.title}</h1>
        <p className="mono legal-updated">{pageCopy.updatedLabel}</p>
        <p className="legal-intro">{pageCopy.intro}</p>

        <div className="legal-stack">
          {pageCopy.sections.map((section) => (
            <section className="legal-section" key={section.title}>
              <h2>{section.title}</h2>
              {section.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>
          ))}
        </div>

        <section className="legal-section legal-contact">
          <h2>{pageCopy.contactLabel}</h2>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </section>

        <p className="legal-disclaimer">{pageCopy.disclaimer}</p>
      </main>
    </>
  );
}
