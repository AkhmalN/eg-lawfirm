import { NextResponse } from "next/server";
import { getDbConnection } from "@/lib/db";

// GET: Fetch all users
export async function GET() {
  try {
    const db = await getDbConnection();
    const [users] = await db.query(
      "SELECT user_id, username, email, created_at FROM users"
    );
    return NextResponse.json({ success: true, data: users });
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json({
      success: false,
      error: "Failed to fetch users",
    });
  }
}

// POST: Create a new user
export async function POST(request: Request) {
  try {
    const db = await getDbConnection();
    const { username, email, password } = await request.json();

    if (!username || !email || !password) {
      return NextResponse.json({
        success: false,
        error: "Missing required fields",
      });
    }

    await db.query(
      "INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
      [username, email, password]
    );

    return NextResponse.json({
      success: true,
      message: "User created successfully",
    });
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json({
      success: false,
      error: "Failed to create user",
    });
  }
}
