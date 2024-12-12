import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";
import { env } from "~/env";
import { Paths } from "./lib/constants";

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("jwt")?.value;

  if (!token) {
    return NextResponse.redirect(new URL(Paths.login, req.url));
  }

  try {
    await jwtVerify(token, new TextEncoder().encode(env.JWT_SECRET));
    return NextResponse.next();
  } catch (error) {
    return NextResponse.redirect(new URL(Paths.login, req.url));
  }
}

export const config = {
  matcher: "/dashboard/:path*",
};
