import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const REALM = "HydraTag Admin";

export function middleware(request: NextRequest) {
  const requiresAuth = request.nextUrl.pathname.startsWith("/admin");
  if (!requiresAuth) return NextResponse.next();

  const user = process.env.ADMIN_DASHBOARD_USER;
  const pass = process.env.ADMIN_DASHBOARD_PASSWORD;
  if (!user || !pass) return NextResponse.next();

  const authorization = request.headers.get("authorization");
  if (!authorization?.startsWith("Basic ")) {
    return new NextResponse("Authentication required", {
      status: 401,
      headers: { "WWW-Authenticate": `Basic realm=\"${REALM}\"` }
    });
  }

  const base64 = authorization.split(" ")[1];
  const decoded = atob(base64);
  const [providedUser, providedPass] = decoded.split(":");

  if (providedUser === user && providedPass === pass) {
    return NextResponse.next();
  }

  return new NextResponse("Unauthorized", {
    status: 401,
    headers: { "WWW-Authenticate": `Basic realm=\"${REALM}\"` }
  });
}

export const config = {
  matcher: ["/admin/:path*"]
};
