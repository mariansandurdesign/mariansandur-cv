import type { Locale } from "./seo";

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

export const legalCopy: Record<
  Locale,
  {
    backLabel: string;
    privacy: LegalPageCopy;
    cookies: LegalPageCopy;
  }
> = {
  it: {
    backLabel: "Torna al CV",
    privacy: {
      title: "Privacy Policy",
      description:
        "Privacy policy del CV di Marian Sandur: nessun analytics, nessun advertising tracking e nessuna profilazione.",
      eyebrow: "// PRIVACY",
      updatedLabel: "Ultimo aggiornamento: 8 luglio 2026",
      intro:
        "Questo sito e un CV/portfolio personale. La sua impostazione e minimale: non usa analytics, advertising pixel, newsletter, moduli di contatto o sistemi di profilazione.",
      sections: [
        {
          title: "Dati trattati direttamente",
          body: [
            "Il sito non raccoglie dati personali tramite form. Se scegli di contattarmi via email, trattero i dati che mi invii, come indirizzo email, nome e contenuto del messaggio, solo per rispondere alla richiesta."
          ]
        },
        {
          title: "Dati tecnici di hosting",
          body: [
            "Il sito e pubblicato tramite Vercel. Come molti servizi di hosting, Vercel puo trattare log tecnici essenziali, come indirizzo IP, user agent, timestamp e richieste HTTP, per consegnare il sito, mantenerlo sicuro e prevenire abusi.",
            "Non uso questi dati per analytics personali, marketing o profilazione."
          ]
        },
        {
          title: "Link esterni",
          body: [
            "Il sito contiene un link a LinkedIn e link mailto. Quando apri servizi di terze parti, si applicano le rispettive policy e impostazioni privacy."
          ]
        },
        {
          title: "Diritti e contatti",
          body: [
            "Puoi scrivermi per chiedere accesso, correzione o cancellazione dei dati eventualmente condivisi via email, nei limiti applicabili."
          ]
        },
        {
          title: "Aggiornamenti",
          body: [
            "Se in futuro aggiungero analytics, moduli, newsletter o strumenti simili, aggiornero questa policy e la cookie policy prima di attivarli."
          ]
        }
      ],
      contactLabel: "Contatto privacy",
      disclaimer:
        "Questa pagina ha scopo informativo e descrive in modo trasparente come funziona questo sito. Non sostituisce consulenza legale professionale."
    },
    cookies: {
      title: "Cookie Policy",
      description:
        "Cookie policy del CV di Marian Sandur: il sito non usa cookie di tracking, analytics o marketing.",
      eyebrow: "// COOKIE",
      updatedLabel: "Ultimo aggiornamento: 8 luglio 2026",
      intro:
        "Questo sito non usa cookie di profilazione, analytics, advertising, pixel, beacon o strumenti simili per tracciare i visitatori.",
      sections: [
        {
          title: "Cookie usati dal sito",
          body: [
            "Il sito non imposta cookie propri per analytics, marketing o profilazione.",
            "Non viene usato localStorage o sessionStorage per tracciare preferenze o comportamento degli utenti."
          ]
        },
        {
          title: "Perche non c'e un banner di consenso",
          body: [
            "Poiche non sono attivi cookie o strumenti non essenziali, non viene mostrato un banner di consenso. Il sito informa comunque in modo esplicito della scelta no-tracking."
          ]
        },
        {
          title: "Cache e log tecnici",
          body: [
            "Il browser puo memorizzare file statici in cache per rendere piu veloce il caricamento. Questa cache non e un cookie di tracking.",
            "Il provider di hosting puo trattare log tecnici necessari alla sicurezza e alla consegna del sito, come indicato nella privacy policy."
          ]
        },
        {
          title: "Servizi esterni",
          body: [
            "Se apri LinkedIn o il tuo client email, quei servizi possono usare cookie o tecnologie proprie secondo le rispettive policy."
          ]
        },
        {
          title: "Modifiche future",
          body: [
            "Se in futuro il sito usera cookie non essenziali o strumenti di analytics, questa pagina verra aggiornata e sara richiesto il consenso quando necessario."
          ]
        }
      ],
      contactLabel: "Contatto cookie",
      disclaimer:
        "Questa pagina e una comunicazione trasparente sull'assenza di tracking. Non sostituisce consulenza legale professionale."
    }
  },
  en: {
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
  }
};
