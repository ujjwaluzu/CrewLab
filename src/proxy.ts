import { NextResponse, type NextRequest } from "next/server";

function acceptsMarkdown(accept: string | null): boolean {
  if (!accept) return false;

  let markdownQuality = 0;
  let htmlQuality = 0;
  for (const item of accept.split(",")) {
    const [mediaType = "", ...parameters] = item.trim().toLowerCase().split(";");
    const qualityParameter = parameters.find((parameter) => parameter.trim().startsWith("q="));
    const quality = qualityParameter ? Number(qualityParameter.trim().slice(2)) : 1;
    if (!Number.isFinite(quality) || quality <= 0) continue;
    if (mediaType.trim() === "text/markdown") markdownQuality = Math.max(markdownQuality, quality);
    if (mediaType.trim() === "text/html" || mediaType.trim() === "application/xhtml+xml") {
      htmlQuality = Math.max(htmlQuality, quality);
    }
  }

  return markdownQuality > 0 && markdownQuality >= htmlQuality;
}

export function proxy(request: NextRequest) {
  if (request.method !== "GET" || !acceptsMarkdown(request.headers.get("accept"))) {
    return NextResponse.next();
  }

  const target = new URL("/agent-markdown", request.url);
  target.searchParams.set("path", request.nextUrl.pathname);
  return NextResponse.rewrite(target);
}

export const config = {
  matcher: [
    "/",
    "/about",
    "/explore",
    "/features",
    "/find-cofounder",
    "/find-developers",
    "/how-it-works",
    "/side-projects",
    "/startup-teams",
    "/student-projects",
    "/waitlist",
    "/resources/:path*",
  ],
};
