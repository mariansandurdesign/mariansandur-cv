import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"]
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
  weight: ["400", "500"]
});

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#0b0b0c",
  width: "device-width",
  initialScale: 1
};

export const metadata: Metadata = {
  metadataBase: new URL("https://mariansandur-cv.vercel.app"),
  title: {
    default: "Marian Sandur - Frontend Engineer",
    template: "%s"
  },
  description:
    "CV di Marian Sandur, frontend engineer specializzato in esperienze web veloci, accessibili e interfacce AI.",
  icons: {
    icon: [
      { url: "/icons/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/favicon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/icons/favicon-180.png", sizes: "180x180", type: "image/png" },
      { url: "/icons/favicon-512.png", sizes: "512x512", type: "image/png" }
    ],
    apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" }]
  },
  manifest: "/manifest.webmanifest"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={`${spaceGrotesk.variable} ${jetBrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
