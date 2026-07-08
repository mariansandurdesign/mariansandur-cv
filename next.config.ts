import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingRoot: process.cwd(),
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/it",
        destination: "/",
        permanent: true
      },
      {
        source: "/en",
        destination: "/",
        permanent: true
      },
      {
        source: "/it/privacy",
        destination: "/privacy",
        permanent: true
      },
      {
        source: "/en/privacy",
        destination: "/privacy",
        permanent: true
      },
      {
        source: "/it/cookies",
        destination: "/cookies",
        permanent: true
      },
      {
        source: "/en/cookies",
        destination: "/cookies",
        permanent: true
      }
    ];
  }
};

export default nextConfig;
