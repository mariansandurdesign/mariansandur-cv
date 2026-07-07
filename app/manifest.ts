import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Marian Sandur CV",
    short_name: "MS CV",
    description:
      "Marian Sandur's CV - frontend engineer building fast, accessible web experiences and AI-powered interfaces.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#0b0b0c",
    theme_color: "#0b0b0c",
    icons: [
      {
        src: "/icons/icon-180.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "any"
      },
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable"
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable"
      }
    ]
  };
}
