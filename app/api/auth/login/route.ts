import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const ADMIN_USER = "admin";
const ADMIN_PASS = "password123";
const JWT_SECRET = process.env.JWT_SECRET || "SUPERSECRET";

export async function POST(req: Request) {
  const body = await req.json();
  const { username, password } = body;

  if (username !== ADMIN_USER || password !== ADMIN_PASS) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  const token = jwt.sign({ role: "admin" }, JWT_SECRET, {
    expiresIn: "1d",
  });

  const res = NextResponse.json({ message: "Login success" });

  res.cookies.set("admin_token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24,
    path: "/",
  });

  return res;
}
