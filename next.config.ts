import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingRoot: process.cwd(),
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/it/:path*",
        destination: "/:path*",
        permanent: true
      },
      {
        source: "/en/:path*",
        destination: "/:path*",
        permanent: true
      },
      {
        source: "/it/",
        destination: "/",
        permanent: true
      },
      {
        source: "/en/",
        destination: "/",
        permanent: true
      }
    ];
  }
};

export default nextConfig;
