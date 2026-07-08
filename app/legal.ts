type LegalSection = {
  title: string;
  body: string[];
};

type LegalPageCopy = {
  title: string;
  description: string;
  eyebrow: string;
  updatedLabel: string;
  intro: string;
  sections: LegalSection[];
  contactLabel: string;
  disclaimer: string;
};

export const legalCopy: {
  backLabel: string;
  privacy: LegalPageCopy;
  cookies: LegalPageCopy;
} = {
  backLabel: "Back to CV",
  privacy: {
    title: "Privacy Policy",
    description:
      "Privacy policy for Marian Sandur's CV: no analytics, no advertising tracking and no profiling.",
    eyebrow: "// PRIVACY",
    updatedLabel: "Last updated: July 8, 2026",
    intro:
      "This website is a personal CV/portfolio. It is intentionally minimal: it does not use analytics, advertising pixels, newsletters, contact forms or profiling systems.",
    sections: [
      {
        title: "Data handled directly",
        body: [
          "The site does not collect personal data through forms. If you choose to contact me by email, I will process the details you send, such as your email address, name and message content, only to reply to your request."
        ]
      },
      {
        title: "Technical hosting data",
        body: [
          "The site is hosted on Vercel. Like many hosting providers, Vercel may process essential technical logs, such as IP address, user agent, timestamp and HTTP requests, to deliver the site, keep it secure and prevent abuse.",
          "I do not use this data for personal analytics, marketing or profiling."
        ]
      },
      {
        title: "External links",
        body: [
          "The site links to LinkedIn and uses mailto links. When you open third-party services, their own privacy policies and settings apply."
        ]
      },
      {
        title: "Rights and contact",
        body: [
          "You can email me to request access, correction or deletion of data you may have shared by email, within applicable limits."
        ]
      },
      {
        title: "Updates",
        body: [
          "If I add analytics, forms, newsletters or similar tools in the future, I will update this policy and the cookie policy before enabling them."
        ]
      }
    ],
    contactLabel: "Privacy contact",
    disclaimer:
      "This page is informational and transparently describes how this site works. It is not a substitute for professional legal advice."
  },
  cookies: {
    title: "Cookie Policy",
    description:
      "Cookie policy for Marian Sandur's CV: the site does not use tracking, analytics or marketing cookies.",
    eyebrow: "// COOKIES",
    updatedLabel: "Last updated: July 8, 2026",
    intro:
      "This site does not use profiling cookies, analytics cookies, advertising cookies, pixels, beacons or similar tools to track visitors.",
    sections: [
      {
        title: "Cookies used by this site",
        body: [
          "The site does not set first-party cookies for analytics, marketing or profiling.",
          "It does not use localStorage or sessionStorage to track preferences or user behavior."
        ]
      },
      {
        title: "Why there is no consent banner",
        body: [
          "Because no non-essential cookies or tools are active, there is no consent banner. The site still clearly states its no-tracking approach."
        ]
      },
      {
        title: "Cache and technical logs",
        body: [
          "Your browser may cache static files to make loading faster. This cache is not a tracking cookie.",
          "The hosting provider may process technical logs needed for security and site delivery, as described in the privacy policy."
        ]
      },
      {
        title: "External services",
        body: [
          "If you open LinkedIn or your email client, those services may use their own cookies or technologies under their own policies."
        ]
      },
      {
        title: "Future changes",
        body: [
          "If the site uses non-essential cookies or analytics tools in the future, this page will be updated and consent will be requested where needed."
        ]
      }
    ],
    contactLabel: "Cookie contact",
    disclaimer:
      "This page is a transparent notice about the absence of tracking. It is not a substitute for professional legal advice."
  }
};
