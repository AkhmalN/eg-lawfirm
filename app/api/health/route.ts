import { NextResponse } from "next/server";
import { getDbConnection } from "@/lib/db";

export async function GET() {
  try {
    const conn = await getDbConnection();
    await conn.execute("SELECT 1");
    return NextResponse.json({
      status: "ok",
      message: "Server and DB connected",
    });
  } catch (error: any) {
    return NextResponse.json(
      { status: "error", message: error.message },
      { status: 500 }
    );
  }
}
