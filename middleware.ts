import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

type RateData = {
  count: number;
  timestamp: number;
};

const RATE_LIMIT = 5; // max request
const WINDOW_MS = 60_000; // 1 menit

const ipStore = new Map<string, RateData>();

export async function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;

  if (pathname.startsWith("/admin") && !pathname.startsWith("/admin/login")) {
    const token = req.cookies.get("auth_token")?.value;

    if (!token) {
      return NextResponse.redirect(new URL("/admin/login", req.url));
    }

    try {
      const secret = new TextEncoder().encode(
        process.env.JWT_SECRET || "SUPERSECRET"
      );
      await jwtVerify(token, secret);
      return NextResponse.next();
    } catch (err) {
      console.log("JWT verify failed:", err);
      return NextResponse.redirect(new URL("/admin/login", req.url));
    }
  }

  if (!req.nextUrl.pathname.startsWith("/api/contact")) {
    return NextResponse.next();
  }
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0] ||
    req.headers.get("x-real-ip") ||
    req.ip ||
    "127.0.0.1";

  const now = Date.now();
  const data = ipStore.get(ip);

  if (!data) {
    ipStore.set(ip, { count: 1, timestamp: now });
    return NextResponse.next();
  }
  if (now - data.timestamp > WINDOW_MS) {
    ipStore.set(ip, { count: 1, timestamp: now });
    return NextResponse.next();
  }

  if (data.count >= RATE_LIMIT) {
    return new NextResponse(JSON.stringify({ error: "Too many requests" }), {
      status: 429,
    });
  }

  data.count++;
  ipStore.set(ip, data);

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/api/contact"],
};
