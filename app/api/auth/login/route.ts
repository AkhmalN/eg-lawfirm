import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { getDbConnection } from "@/lib/db";
import { RowDataPacket } from "mysql2";

const JWT_SECRET = process.env.JWT_SECRET || "SUPERSECRET";

export async function POST(req: Request) {
  const body = await req.json();
  const { username, password } = body;

  if (!username || !password) {
    return NextResponse.json({ error: "Missing credentials" }, { status: 400 });
  }

  try {
    const db = await getDbConnection();
    const [rows] = await db.query<RowDataPacket[]>(
      "SELECT user_id, username, password FROM users WHERE username = ?",
      [username]
    );

    const user = rows[0];

    if (!user || user.password !== password) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    const token = jwt.sign(
      { user_id: user.user_id, role: "user" },
      JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );

    const res = NextResponse.json({ message: "Login success" });

    res.cookies.set("auth_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24,
      path: "/",
    });

    return res;
  } catch (error) {
    console.error("Error during login:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
