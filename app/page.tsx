import type { Metadata } from "next";
import { TopNav } from "./components/TopNav";

export const dynamic = "force-static";

const profile = {
  name: "Marian Sandur",
  email: "mariansandur11@gmail.com",
  location: "Torino, IT",
  linkedin: "https://www.linkedin.com/in/marian-sandur-74853718a",
  website: "https://mariansandurdesign.com",
  intro:
    "Building fast, accessible, user-centric web experiences with modern frameworks - from AI-driven interfaces to offline-first architectures."
};

const navItems = [
  { id: "n-about", label: "about" },
  { id: "n-work", label: "work" },
  { id: "n-education", label: "education" },
  { id: "n-projects", label: "projects" },
  { id: "n-skills", label: "skills" },
  { id: "n-contact", label: "contact" }
];

const focusTags = ["LLMs / GPT", "RAG", "LangChain", "Vector DBs / FAISS", "Agents & Tools"];

const work = [
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
];

const projects = [
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
];

const skillGroups = [
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
    title: "Databases",
    icon: "database",
    skills: ["PostgreSQL", "MySQL", "MongoDB"]
  },
  {
    title: "Tools & Design",
    icon: "grid",
    skills: ["Git", "Figma", "MQTT", "Mantine"]
  }
];

export function generateMetadata(): Metadata {
  return {
    title: `${profile.name} - Frontend Engineer`,
    description: profile.intro,
    openGraph: {
      title: `${profile.name} - Frontend Engineer`,
      description: profile.intro,
      type: "profile"
    }
  };
}

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#n-about">
        Skip to content
      </a>
      <TopNav items={navItems} />

      <main className="site-frame">
        <section className="hero-section" id="n-top">
          <p className="mono hero-kicker">// FRONTEND ENGINEER - {profile.location.toUpperCase()}</p>
          <h1 className="hero-title">
            Marian
            <br />
            Sandur
          </h1>
          <p className="hero-copy">{profile.intro}</p>
          <div className="hero-actions">
            <a className="button button-primary" href={`mailto:${profile.email}`}>
              Email me <span aria-hidden="true">-&gt;</span>
            </a>
            <a className="button button-secondary" href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a className="button button-secondary" href={profile.website} target="_blank" rel="noreferrer">
              Website
            </a>
          </div>
        </section>

        <SectionShell id="n-about" number="01" title="ABOUT" wide>
          <p className="about-lede">
            A Frontend Engineer with a passion for development and a keen eye for user-centric design. Proficient
            across the stack - <span>React, Next.js, Angular, TypeScript</span> on the front, Node.js, Python and PHP
            with SQL/NoSQL databases on the back.
          </p>
          <p className="muted-copy">
            Comfortable integrating APIs and third-party services, managing state and performance at scale, and
            applying security best practices to keep applications and user data safe.
          </p>
          <p className="muted-copy">
            Most recently focused on <span className="accent-text">AI engineering</span> - designing conversational
            interfaces powered by large language models, wiring up retrieval-augmented generation with vector stores,
            and orchestrating agents and tool-calling so intelligent features feel fast, reliable and genuinely useful.
            I care about the whole path from prompt to pixel.
          </p>
          <div className="stats-row">
            <Stat value="7+" label="YEARS BUILDING" />
            <Stat value="20+" label="TECHNOLOGIES" />
            <Stat value="3" label="CURRENT ROLES" />
          </div>
        </SectionShell>

        <section className="section-block" id="n-work">
          <SectionMarker number="02" title="WORK" />
          <div className="work-stack">
            <article className="focus-card">
              <span className="focus-icon" aria-hidden="true">
                <SparkIcon />
              </span>
              <div>
                <div className="entry-head">
                  <h3>
                    AI Engineer <span>- Blu Pantheon</span>
                  </h3>
                  <strong className="focus-badge">CURRENT FOCUS</strong>
                </div>
                <p className="mono entry-period">gen 2026 -&gt; NOW / Lecco / Remote</p>
                <p className="entry-copy">
                  Building production AI features end to end: designing conversational, LLM-powered interfaces and the
                  systems behind them. I architect retrieval-augmented generation pipelines with vector search, engineer
                  robust prompts and guardrails, and orchestrate multi-step agents and tool-calling - then ship them as
                  fast, accessible React experiences.
                </p>
                <TagList tags={focusTags} featured />
              </div>
            </article>

            {work.map((item, index) => (
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

        <SectionShell id="n-education" number="03" title="EDUCATION" wide>
          <div className="education-head">
            <h3>Universita di Torino</h3>
            <p className="mono entry-date">2017 -&gt; 2022</p>
          </div>
          <p className="muted-copy">
            Dipartimento di Informatica - Laurea Triennale in Informatica (Bachelor&apos;s in Computer Science).
          </p>
        </SectionShell>

        <section className="section-block" id="n-projects">
          <SectionMarker number="04" title="PROJECTS" />
          <div className="project-grid">
            {projects.map((project, index) => (
              <a className="project-card" href="#" key={project.title}>
                <span className="mono project-number">{String(index + 1).padStart(2, "0")}</span>
                <h3>{project.title}</h3>
                <p>{project.body}</p>
              </a>
            ))}
          </div>
        </section>

        <section className="section-block" id="n-skills">
          <SectionMarker number="05" title="SKILLS" />
          <p className="skills-lede">
            A full-stack toolkit weighted toward <span>modern frontend</span> and <span>applied AI</span> - with the
            backend and data foundations to ship complete products.
          </p>
          <div className="skills-grid">
            {skillGroups.map((group) => (
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
          <SectionMarker number="06" title="CONTACT" />
          <h2>
            Let&apos;s build
            <br />
            something.
          </h2>
          <a className="contact-email" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <div className="social-row">
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <LinkedInIcon />
            </a>
            <a href={profile.website} target="_blank" rel="noreferrer" aria-label="Website">
              <GlobeIcon />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email">
              <MailIcon />
            </a>
          </div>
          <p className="mono copyright">© 2026 Marian Sandur - Torino, IT</p>
        </section>
      </main>
    </>
  );
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
  return <span className="mono section-marker">{number} / {title}</span>;
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

function GlobeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" />
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
