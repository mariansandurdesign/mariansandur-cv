import { NextRequest, NextResponse } from "next/server";

const locales = ["it", "en"] as const;

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/icons") ||
    pathname === "/manifest.webmanifest" ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  const firstSegment = pathname.split("/")[1];

  if (locales.includes(firstSegment as (typeof locales)[number])) {
    return NextResponse.next();
  }

  const locale = detectLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;

  return NextResponse.redirect(url);
}

function detectLocale(request: NextRequest) {
  const country = request.headers.get("x-vercel-ip-country")?.toUpperCase();
  const acceptLanguage = request.headers.get("accept-language")?.toLowerCase() ?? "";

  if (country === "IT" || acceptLanguage.startsWith("it") || acceptLanguage.includes(",it")) {
    return "it";
  }

  if (country && country !== "IT") {
    return "en";
  }

  return "it";
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"]
};
