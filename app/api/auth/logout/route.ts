import { NextResponse } from "next/server";

export async function POST() {
  const res = NextResponse.redirect(new URL("/admin/login"));
  // Replace localhost:3000 with your domain if in production

  // Clear the admin_token cookie
  res.cookies.set("admin_token", "", {
    httpOnly: true,
    expires: new Date(0),
  });

  return res;
}
