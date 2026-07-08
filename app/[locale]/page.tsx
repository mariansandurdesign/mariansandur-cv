import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TopNav } from "../components/TopNav";
import { absoluteUrl, isLocale, locales, profile, seoKeywords, type Locale } from "../seo";

export const dynamic = "force-static";

type WorkItem = {
  company: string;
  role: string;
  period: string;
  body: string;
  tags?: string[];
};

type Project = {
  title: string;
  body: string;
};

type SkillGroup = {
  title: string;
  icon: string;
  featured?: boolean;
  skills: string[];
};

type Copy = {
  locale: Locale;
  metaTitle: string;
  metaDescription: string;
  skip: string;
  nav: Array<{ id: string; label: string }>;
  heroKicker: string;
  intro: string;
  emailCta: string;
  aboutTitle: string;
  aboutLeadPrefix: string;
  aboutLeadAccent: string;
  aboutLeadSuffix: string;
  aboutCopy: string[];
  stats: Array<{ value: string; label: string }>;
  sectionTitles: {
    work: string;
    education: string;
    projects: string;
    skills: string;
    contact: string;
  };
  focus: {
    title: string;
    company: string;
    badge: string;
    period: string;
    body: string;
    tags: string[];
  };
  work: WorkItem[];
  education: {
    school: string;
    period: string;
    body: string;
  };
  projects: Project[];
  skillsLeadPrefix: string;
  skillsLeadAccentOne: string;
  skillsLeadMiddle: string;
  skillsLeadAccentTwo: string;
  skillsLeadSuffix: string;
  skillGroups: SkillGroup[];
  contactHeadline: React.ReactNode;
  legal: {
    notice: string;
    privacyLabel: string;
    cookiesLabel: string;
  };
  copyright: string;
};

const sharedSkillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    icon: "code",
    skills: ["React", "Next.js", "Angular", "TypeScript", "JavaScript", "HTML / CSS", "Redux", "PWA"]
  },
  {
    title: "AI / ML",
    icon: "spark",
    featured: true,
    skills: [
      "LLM Integration",
      "OpenAI / GPT",
      "LangChain",
      "RAG",
      "Vector DBs / FAISS",
      "Prompt Engineering",
      "Agents & Tools"
    ]
  },
  {
    title: "Backend",
    icon: "server",
    skills: ["Node.js", "Express", "Python", "PHP", "REST APIs"]
  },
  {
    title: "Database",
    icon: "database",
    skills: ["PostgreSQL", "MySQL", "MongoDB"]
  },
  {
    title: "Tools & Design",
    icon: "grid",
    skills: ["Git", "Figma", "MQTT", "Mantine"]
  }
];

const copy: Record<Locale, Copy> = {
  it: {
    locale: "it",
    metaTitle: `${profile.name} - Frontend Engineer`,
    metaDescription:
      "CV di Marian Sandur, frontend engineer specializzato in esperienze web veloci, accessibili e interfacce AI.",
    skip: "Vai al contenuto",
    nav: [
      { id: "n-about", label: "profilo" },
      { id: "n-work", label: "lavoro" },
      { id: "n-education", label: "formazione" },
      { id: "n-projects", label: "progetti" },
      { id: "n-skills", label: "skill" },
      { id: "n-contact", label: "contatti" }
    ],
    heroKicker: `// FRONTEND ENGINEER - ${profile.location.toUpperCase()}`,
    intro:
      "Costruisco esperienze web veloci, accessibili e centrate sulle persone con framework moderni - dalle interfacce AI alle architetture offline-first.",
    emailCta: "Scrivimi",
    aboutTitle: "ABOUT",
    aboutLeadPrefix:
      "Frontend Engineer con passione per lo sviluppo e grande attenzione al design centrato sull'utente. Lavoro su tutto lo stack - ",
    aboutLeadAccent: "React, Next.js, Angular, TypeScript",
    aboutLeadSuffix: " sul frontend, Node.js, Python e PHP con database SQL/NoSQL sul backend.",
    aboutCopy: [
      "Integro API e servizi di terze parti, gestisco stato e performance su applicazioni complesse e applico buone pratiche di sicurezza per proteggere prodotti e dati degli utenti.",
      "Negli ultimi progetti mi sono concentrato sull'AI engineering: interfacce conversazionali basate su large language model, pipeline RAG con vector store, agenti e tool-calling per rendere le funzionalita intelligenti rapide, affidabili e davvero utili. Mi interessa tutto il percorso: dal prompt al pixel."
    ],
    stats: [
      { value: "7+", label: "ANNI DI SVILUPPO" },
      { value: "20+", label: "TECNOLOGIE" },
      { value: "3", label: "RUOLI ATTUALI" }
    ],
    sectionTitles: {
      work: "LAVORO",
      education: "FORMAZIONE",
      projects: "PROGETTI",
      skills: "SKILL",
      contact: "CONTATTI"
    },
    focus: {
      title: "AI Engineer",
      company: "Blu Pantheon",
      badge: "FOCUS ATTUALE",
      period: "gen 2026 -> OGGI / Lecco / Remote",
      body:
        "Realizzo funzionalita AI in produzione end to end: progetto interfacce conversazionali basate su LLM e i sistemi che le supportano. Architetto pipeline RAG con vector search, lavoro su prompt e guardrail robusti, orchestration di agenti multi-step e tool-calling, poi porto tutto in esperienze React rapide e accessibili.",
      tags: ["LLMs / GPT", "RAG", "LangChain", "Vector DBs / FAISS", "Agents & Tools"]
    },
    work: [
      {
        company: "Blu Pantheon",
        role: "Frontend Engineer",
        period: "feb 2025 -> OGGI",
        body:
          "Progetto e sviluppo interfacce dinamiche per chatbot AI-driven con React, TypeScript e Next.js. Integro API OpenAI/GPT e modelli custom per interazioni real-time, gestione stato Redux, animazioni e layout adattivi.",
        tags: ["React", "Next.js", "TypeScript", "OpenAI / LangChain"]
      },
      {
        company: "Surge-X",
        role: "Frontend Engineer",
        period: "giu 2024 -> OGGI",
        body:
          "Redesign della UI principale con componenti riutilizzabili e interattivi. Ridefinizione dell'architettura applicativa intorno a gestione dati offline e sincronizzazione, con forte attenzione alla user experience."
      },
      {
        company: "Blu.it Srl",
        role: "Lead Frontend Engineer",
        period: "apr 2024 -> OGGI",
        body:
          "Lead frontend su progetti nuovi e rebuild. Integrazione di API RESTful e gestione dello stato con React e Next.js, ottimizzando efficienza del codice e tempi di caricamento."
      },
      {
        company: "RPCTech s.r.l.",
        role: "Frontend Engineer",
        period: "ott 2022 -> ott 2023",
        body:
          "Frontend Engineer per Autorita di Bacino Fiume Po: traduzione del design in codice elegante, compatibilita cross-browser e interfacce funzionali e curate."
      },
      {
        company: "Certimeter Group",
        role: "React / Angular Developer",
        period: "mag 2021 -> ott 2022",
        body:
          "Sviluppo React e consulenza presso GATELAB / Euronext. Inizio come Angular Developer lavorando con Angular e Spring."
      },
      {
        company: "CDC / Gruppo Affidea",
        role: "IT Consultant",
        period: "mag 2019 -> dic 2019",
        body:
          "Consulenza infrastrutturale con il reparto IT: definizione del perimetro dispositivi, identificazione di minacce cybersecurity, configurazione e manutenzione dei device di lavoro."
      }
    ],
    education: {
      school: "Universita di Torino",
      period: "2017 -> 2022",
      body: "Dipartimento di Informatica - Laurea Triennale in Informatica."
    },
    projects: [
      {
        title: "AI Conversational UI",
        body: "Chatbot real-time con React + OpenAI/LangChain e retrieval FAISS."
      },
      {
        title: "Offline-First Sync",
        body: "Ri-architettura di una product app per gestione dati offline e sincronizzazione robusta."
      },
      {
        title: "Autorita Fiume Po",
        body: "Applicazione web public-sector focalizzata su UI accessibile e funzionale."
      },
      {
        title: "GATELAB / Euronext",
        body: "Consulenza React / Angular per tooling legato a piattaforme di trading."
      }
    ],
    skillsLeadPrefix: "Toolkit full-stack orientato a ",
    skillsLeadAccentOne: "frontend moderno",
    skillsLeadMiddle: " e ",
    skillsLeadAccentTwo: "AI applicata",
    skillsLeadSuffix: " - con basi backend e data per spedire prodotti completi.",
    skillGroups: sharedSkillGroups,
    contactHeadline: (
      <>
        Costruiamo
        <br />
        qualcosa.
      </>
    ),
    legal: {
      notice: "Nessun tracking: questo sito non usa analytics, advertising cookie o profilazione.",
      privacyLabel: "Privacy Policy",
      cookiesLabel: "Cookie Policy"
    },
    copyright: "© 2026 Marian Sandur - Torino, IT"
  },
  en: {
    locale: "en",
    metaTitle: `${profile.name} - Frontend Engineer`,
    metaDescription:
      "Marian Sandur's CV - frontend engineer building fast, accessible web experiences and AI-powered interfaces.",
    skip: "Skip to content",
    nav: [
      { id: "n-about", label: "about" },
      { id: "n-work", label: "work" },
      { id: "n-education", label: "education" },
      { id: "n-projects", label: "projects" },
      { id: "n-skills", label: "skills" },
      { id: "n-contact", label: "contact" }
    ],
    heroKicker: `// FRONTEND ENGINEER - ${profile.location.toUpperCase()}`,
    intro:
      "Building fast, accessible, user-centric web experiences with modern frameworks - from AI-driven interfaces to offline-first architectures.",
    emailCta: "Email me",
    aboutTitle: "ABOUT",
    aboutLeadPrefix: "A Frontend Engineer with a passion for development and a keen eye for user-centric design. Proficient across the stack - ",
    aboutLeadAccent: "React, Next.js, Angular, TypeScript",
    aboutLeadSuffix: " on the front, Node.js, Python and PHP with SQL/NoSQL databases on the back.",
    aboutCopy: [
      "Comfortable integrating APIs and third-party services, managing state and performance at scale, and applying security best practices to keep applications and user data safe.",
      "Most recently focused on AI engineering - designing conversational interfaces powered by large language models, wiring up retrieval-augmented generation with vector stores, and orchestrating agents and tool-calling so intelligent features feel fast, reliable and genuinely useful. I care about the whole path from prompt to pixel."
    ],
    stats: [
      { value: "7+", label: "YEARS BUILDING" },
      { value: "20+", label: "TECHNOLOGIES" },
      { value: "3", label: "CURRENT ROLES" }
    ],
    sectionTitles: {
      work: "WORK",
      education: "EDUCATION",
      projects: "PROJECTS",
      skills: "SKILLS",
      contact: "CONTACT"
    },
    focus: {
      title: "AI Engineer",
      company: "Blu Pantheon",
      badge: "CURRENT FOCUS",
      period: "gen 2026 -> NOW / Lecco / Remote",
      body:
        "Building production AI features end to end: designing conversational, LLM-powered interfaces and the systems behind them. I architect retrieval-augmented generation pipelines with vector search, engineer robust prompts and guardrails, and orchestrate multi-step agents and tool-calling - then ship them as fast, accessible React experiences.",
      tags: ["LLMs / GPT", "RAG", "LangChain", "Vector DBs / FAISS", "Agents & Tools"]
    },
    work: [
      {
        company: "Blu Pantheon",
        role: "Frontend Engineer",
        period: "feb 2025 -> NOW",
        body:
          "Designing and building dynamic interfaces for AI-driven chatbots with React, TypeScript and Next.js. Integrated OpenAI/GPT APIs and custom models for real-time interactions; Redux state, animations and adaptive layouts.",
        tags: ["React", "Next.js", "TypeScript", "OpenAI / LangChain"]
      },
      {
        company: "Surge-X",
        role: "Frontend Engineer",
        period: "giu 2024 -> NOW",
        body:
          "Redesigning the main product UI with reusable, interactive components. Redefining the app architecture around offline data handling and syncing while improving the overall user experience. London-based."
      },
      {
        company: "Blu.it Srl",
        role: "Lead Frontend Engineer",
        period: "apr 2024 -> NOW",
        body:
          "Lead on a series of projects - new builds and rebuilds. Integrated RESTful APIs and managed state with React and Next.js, optimizing code efficiency and load times."
      },
      {
        company: "RPCTech s.r.l.",
        role: "Frontend Engineer",
        period: "ott 2022 -> ott 2023",
        body:
          "Frontend Engineer for Autorita di Bacino Fiume Po - translating design into elegant code, ensuring cross-browser compatibility and delivering functional, appealing interfaces."
      },
      {
        company: "Certimeter Group",
        role: "React / Angular Developer",
        period: "mag 2021 -> ott 2022",
        body:
          "React development including consultancy at GATELAB / Euronext. Started as an Angular Developer working with the Angular framework and Spring."
      },
      {
        company: "CDC / Gruppo Affidea",
        role: "IT Consultant",
        period: "mag 2019 -> dic 2019",
        body:
          "Infrastructure consultancy with the IT department: defined the device perimeter, identified cybersecurity threats, and set up and maintained working devices."
      }
    ],
    education: {
      school: "Universita di Torino",
      period: "2017 -> 2022",
      body: "Dipartimento di Informatica - Laurea Triennale in Informatica (Bachelor's in Computer Science)."
    },
    projects: [
      {
        title: "AI Conversational UI",
        body: "Real-time chatbot on React + OpenAI/LangChain with FAISS retrieval."
      },
      {
        title: "Offline-First Sync",
        body: "Re-architected a product app for robust offline data handling and sync."
      },
      {
        title: "Autorita Fiume Po",
        body: "Public-sector web app focused on accessible, functional UI."
      },
      {
        title: "GATELAB / Euronext",
        body: "React / Angular consultancy for trading-platform tooling."
      }
    ],
    skillsLeadPrefix: "A full-stack toolkit weighted toward ",
    skillsLeadAccentOne: "modern frontend",
    skillsLeadMiddle: " and ",
    skillsLeadAccentTwo: "applied AI",
    skillsLeadSuffix: " - with the backend and data foundations to ship complete products.",
    skillGroups: sharedSkillGroups,
    contactHeadline: (
      <>
        Let&apos;s build
        <br />
        something.
      </>
    ),
    legal: {
      notice: "No tracking: this site does not use analytics, advertising cookies or profiling.",
      privacyLabel: "Privacy Policy",
      cookiesLabel: "Cookie Policy"
    },
    copyright: "© 2026 Marian Sandur - Torino, IT"
  }
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const pageCopy = isLocale(locale) ? copy[locale] : copy.it;
  const canonical = `/${pageCopy.locale}`;
  const image = {
    url: profile.image,
    width: 512,
    height: 512,
    alt: `${profile.name} logo`
  };

  return {
    title: pageCopy.metaTitle,
    description: pageCopy.metaDescription,
    applicationName: "Marian Sandur CV",
    authors: [{ name: profile.name, url: profile.linkedin }],
    creator: profile.name,
    publisher: profile.name,
    category: "portfolio",
    keywords: seoKeywords,
    alternates: {
      canonical,
      languages: {
        it: "/it",
        en: "/en",
        "x-default": "/it"
      }
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1
      }
    },
    openGraph: {
      title: pageCopy.metaTitle,
      description: pageCopy.metaDescription,
      type: "profile",
      locale: pageCopy.locale === "it" ? "it_IT" : "en_US",
      alternateLocale: pageCopy.locale === "it" ? "en_US" : "it_IT",
      url: canonical,
      siteName: "Marian Sandur CV",
      images: [image],
      firstName: profile.givenName,
      lastName: profile.familyName
    },
    twitter: {
      card: "summary_large_image",
      title: pageCopy.metaTitle,
      description: pageCopy.metaDescription,
      images: [profile.image]
    }
  };
}

export default async function LocalizedHome({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const pageCopy = copy[locale];
  const alternateLocale = locale === "it" ? "en" : "it";
  const structuredData = createStructuredData(locale, pageCopy);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c")
        }}
      />
      <a className="skip-link" href="#n-about">
        {pageCopy.skip}
      </a>
      <TopNav
        items={pageCopy.nav}
        locale={locale}
        alternateLocale={alternateLocale}
        alternateLabel={alternateLocale.toUpperCase()}
      />

      <main className="site-frame">
        <section className="hero-section" id="n-top">
          <p className="mono hero-kicker">{pageCopy.heroKicker}</p>
          <h1 className="hero-title">
            Marian
            <br />
            Sandur
          </h1>
          <p className="hero-copy">{pageCopy.intro}</p>
          <div className="hero-actions">
            <a className="button button-primary" href={`mailto:${profile.email}`}>
              {pageCopy.emailCta} <span aria-hidden="true">-&gt;</span>
            </a>
            <a className="button button-secondary" href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </section>

        <SectionShell id="n-about" number="01" title={pageCopy.aboutTitle} wide>
          <p className="about-lede">
            {pageCopy.aboutLeadPrefix}
            <span>{pageCopy.aboutLeadAccent}</span>
            {pageCopy.aboutLeadSuffix}
          </p>
          {pageCopy.aboutCopy.map((paragraph) => (
            <p className="muted-copy" key={paragraph}>
              {paragraph}
            </p>
          ))}
          <div className="stats-row">
            {pageCopy.stats.map((stat) => (
              <Stat value={stat.value} label={stat.label} key={stat.label} />
            ))}
          </div>
        </SectionShell>

        <section className="section-block" id="n-work">
          <SectionMarker number="02" title={pageCopy.sectionTitles.work} />
          <div className="work-stack">
            <article className="focus-card">
              <span className="focus-icon" aria-hidden="true">
                <SparkIcon />
              </span>
              <div>
                <div className="entry-head">
                  <h3>
                    {pageCopy.focus.title} <span>- {pageCopy.focus.company}</span>
                  </h3>
                  <strong className="focus-badge">{pageCopy.focus.badge}</strong>
                </div>
                <p className="mono entry-period">{pageCopy.focus.period}</p>
                <p className="entry-copy">{pageCopy.focus.body}</p>
                <TagList tags={pageCopy.focus.tags} featured />
              </div>
            </article>

            {pageCopy.work.map((item, index) => (
              <article className="work-row" key={item.company}>
                <span className="mono row-number">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <div className="entry-head">
                    <h3>
                      {item.company} <span>- {item.role}</span>
                    </h3>
                    <p className="mono entry-date">{item.period}</p>
                  </div>
                  <p className="entry-copy dim">{item.body}</p>
                  {item.tags ? <TagList tags={item.tags} /> : null}
                </div>
              </article>
            ))}
          </div>
        </section>

        <SectionShell id="n-education" number="03" title={pageCopy.sectionTitles.education} wide>
          <div className="education-head">
            <h3>{pageCopy.education.school}</h3>
            <p className="mono entry-date">{pageCopy.education.period}</p>
          </div>
          <p className="muted-copy">{pageCopy.education.body}</p>
        </SectionShell>

        <section className="section-block" id="n-projects">
          <SectionMarker number="04" title={pageCopy.sectionTitles.projects} />
          <div className="project-grid">
            {pageCopy.projects.map((project, index) => (
              <article className="project-card" key={project.title}>
                <span className="mono project-number">{String(index + 1).padStart(2, "0")}</span>
                <h3>{project.title}</h3>
                <p>{project.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-block" id="n-skills">
          <SectionMarker number="05" title={pageCopy.sectionTitles.skills} />
          <p className="skills-lede">
            {pageCopy.skillsLeadPrefix}
            <span>{pageCopy.skillsLeadAccentOne}</span>
            {pageCopy.skillsLeadMiddle}
            <span>{pageCopy.skillsLeadAccentTwo}</span>
            {pageCopy.skillsLeadSuffix}
          </p>
          <div className="skills-grid">
            {pageCopy.skillGroups.map((group) => (
              <article className={group.featured ? "skill-card is-featured" : "skill-card"} key={group.title}>
                <div className="skill-title">
                  <SkillIcon name={group.icon} />
                  <h3>{group.title}</h3>
                </div>
                <TagList tags={group.skills} featured={group.featured} pill />
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section" id="n-contact">
          <SectionMarker number="06" title={pageCopy.sectionTitles.contact} />
          <h2>{pageCopy.contactHeadline}</h2>
          <a className="contact-email" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <div className="social-row">
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <LinkedInIcon />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email">
              <MailIcon />
            </a>
          </div>
          <div className="privacy-note">
            <p>{pageCopy.legal.notice}</p>
            <div className="legal-links">
              <a href={`/${locale}/privacy`}>{pageCopy.legal.privacyLabel}</a>
              <a href={`/${locale}/cookies`}>{pageCopy.legal.cookiesLabel}</a>
            </div>
          </div>
          <p className="mono copyright">{pageCopy.copyright}</p>
        </section>
      </main>
    </>
  );
}

function createStructuredData(locale: Locale, pageCopy: Copy) {
  const pageUrl = absoluteUrl(`/${locale}`);
  const allSkills = Array.from(new Set(sharedSkillGroups.flatMap((group) => group.skills)));
  const currentWorksFor = [
    {
      "@type": "Organization",
      name: "Blu Pantheon"
    },
    {
      "@type": "Organization",
      name: "Surge-X"
    },
    {
      "@type": "Organization",
      name: "Blu.it Srl"
    }
  ];

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${pageUrl}#person`,
        name: profile.name,
        givenName: profile.givenName,
        familyName: profile.familyName,
        email: `mailto:${profile.email}`,
        image: absoluteUrl(profile.image),
        url: pageUrl,
        sameAs: [profile.linkedin],
        jobTitle: ["Frontend Engineer", "AI Engineer"],
        worksFor: currentWorksFor,
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: pageCopy.education.school
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: profile.city,
          addressCountry: profile.country
        },
        knowsAbout: allSkills
      },
      {
        "@type": "ProfilePage",
        "@id": `${pageUrl}#profile-page`,
        url: pageUrl,
        name: pageCopy.metaTitle,
        description: pageCopy.metaDescription,
        inLanguage: locale,
        dateModified: "2026-07-08",
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: absoluteUrl(profile.image),
          width: 512,
          height: 512
        },
        mainEntity: {
          "@id": `${pageUrl}#person`
        }
      },
      {
        "@type": "WebSite",
        "@id": `${absoluteUrl("/")}#website`,
        url: absoluteUrl("/"),
        name: "Marian Sandur CV",
        inLanguage: ["it", "en"],
        publisher: {
          "@id": `${pageUrl}#person`
        }
      }
    ]
  };
}

function SectionShell({
  id,
  number,
  title,
  wide,
  children
}: {
  id: string;
  number: string;
  title: string;
  wide?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section className={wide ? "section-block section-grid" : "section-block"} id={id}>
      <div>
        <SectionMarker number={number} title={title} />
      </div>
      <div className="section-content">{children}</div>
    </section>
  );
}

function SectionMarker({ number, title }: { number: string; title: string }) {
  return (
    <span className="mono section-marker">
      {number} / {title}
    </span>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <strong>{value}</strong>
      <span className="mono">{label}</span>
    </div>
  );
}

function TagList({ tags, featured, pill }: { tags: string[]; featured?: boolean; pill?: boolean }) {
  return (
    <div className={pill ? "tag-list pill-tags" : "tag-list"}>
      {tags.map((tag) => (
        <span className={featured ? "tag is-featured" : "tag"} key={tag}>
          {tag}
        </span>
      ))}
    </div>
  );
}

function SkillIcon({ name }: { name: string }) {
  if (name === "spark") {
    return <SparkIcon />;
  }

  if (name === "server") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="4" width="18" height="6" rx="1.5" />
        <rect x="3" y="14" width="18" height="6" rx="1.5" />
        <path d="M7 7h.01M7 17h.01" />
      </svg>
    );
  }

  if (name === "database") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <ellipse cx="12" cy="5" rx="8" ry="3" />
        <path d="M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5" />
        <path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" />
      </svg>
    );
  }

  if (name === "grid") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m8 6-5 6 5 6M16 6l5 6-5 6" />
    </svg>
  );
}

function SparkIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m12 2 1.9 6.1L20 10l-6.1 1.9L12 18l-1.9-6.1L4 10l6.1-1.9z" />
      <path d="m19 14 .8 2.4L22 17l-2.2.6L19 20l-.8-2.4L16 17l2.2-.6z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0zM8 8h4.78v2.19h.07c.67-1.2 2.3-2.46 4.73-2.46C22.4 7.73 24 10.28 24 14.4V24h-5v-8.5c0-2.03-.04-4.64-2.83-4.64s-3.26 2.21-3.26 4.5V24H8z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m2 7 10 6 10-6" />
    </svg>
  );
}
