import { NextResponse } from "next/server";
import { getDbConnection } from "@/lib/db";

// GET: Fetch a user by ID
export async function GET(request: Request) {
  try {
    const db = await getDbConnection();
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("id");

    if (!userId) {
      return NextResponse.json({ success: false, error: "Missing user ID" });
    }

    const [user] = await db.query(
      "SELECT user_id, username, email, created_at FROM users WHERE user_id = ?",
      [userId]
    );

    if (!user) {
      return NextResponse.json({ success: false, error: "User not found" });
    }

    return NextResponse.json({ success: true, data: user });
  } catch (error) {
    console.error("Error fetching user:", error);
    return NextResponse.json({ success: false, error: "Failed to fetch user" });
  }
}

// PUT: Update a user by ID
export async function PUT(request: Request) {
  try {
    const db = await getDbConnection();
    const { user_id, username, email, password } = await request.json();

    if (!user_id || (!username && !email && !password)) {
      return NextResponse.json({
        success: false,
        error: "Missing required fields",
      });
    }

    const updates: string[] = [];
    const values: any[] = [];

    if (username) {
      updates.push("username = ?");
      values.push(username);
    }
    if (email) {
      updates.push("email = ?");
      values.push(email);
    }
    if (password) {
      updates.push("password = ?");
      values.push(password);
    }

    values.push(user_id);

    await db.query(
      `UPDATE users SET ${updates.join(", ")} WHERE user_id = ?`,
      values
    );

    return NextResponse.json({
      success: true,
      message: "User updated successfully",
    });
  } catch (error) {
    console.error("Error updating user:", error);
    return NextResponse.json({
      success: false,
      error: "Failed to update user",
    });
  }
}

// DELETE: Delete a user by ID
export async function DELETE(request: Request) {
  try {
    const db = await getDbConnection();
    const { user_id } = await request.json();

    if (!user_id) {
      return NextResponse.json({ success: false, error: "Missing user ID" });
    }

    await db.query("DELETE FROM users WHERE user_id = ?", [user_id]);

    return NextResponse.json({
      success: true,
      message: "User deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting user:", error);
    return NextResponse.json({
      success: false,
      error: "Failed to delete user",
    });
  }
}
