import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const session = request.cookies.get("session")?.value;

  // Protected routes
  if (request.nextUrl.pathname.startsWith("/dashboard") || request.nextUrl.pathname.startsWith("/admin")) {
    if (!session) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
    // Note: We cannot verify Firebase session cookies in Edge Middleware (Node.js only).
    // Verification will happen in API routes or Server Components.
    // Ideally we should use a separate "edge-compatible" JWT for middleware if we strictly need role checks here.
    // For now, we allow access if session cookie exists, and let the page/API handle 401/403.
  }

  // Redirect if authenticated
  if (session && (request.nextUrl.pathname === "/login" || request.nextUrl.pathname === "/register")) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/admin/:path*", "/login", "/register", "/api/projects/:path*"],
};
