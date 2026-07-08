export const siteUrl = "https://mariansandur.it";

export const profile = {
  name: "Marian Sandur",
  givenName: "Marian",
  familyName: "Sandur",
  email: "mariansandurdesign@protonmail.com",
  location: "Torino, IT",
  city: "Torino",
  country: "IT",
  linkedin: "https://www.linkedin.com/in/marian-sandur-74853718a",
  image: "/icons/icon-512.png"
};

export const seoKeywords = [
  "Marian Sandur",
  "Frontend Engineer",
  "Frontend Developer",
  "React Developer",
  "Next.js Developer",
  "TypeScript Developer",
  "AI Engineer",
  "LLM Engineer",
  "RAG",
  "LangChain",
  "Torino",
  "Italy"
];

export function absoluteUrl(path: string) {
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}
