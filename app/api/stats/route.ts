import { NextRequest, NextResponse } from "next/server";
import { getDbConnection } from "@/lib/db";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET() {
  try {
    const conn = await getDbConnection();
    const [rows] = await conn.execute(
      `SELECT
        COUNT(*) AS total_news,
        SUM(CASE WHEN isPublished = 1 THEN 1 ELSE 0 END) AS total_published,
        SUM(CASE WHEN isPublished = 0 THEN 1 ELSE 0 END) AS total_draft
      FROM News`
    );

    // rows akan berupa array dengan satu object
    const result =
      Array.isArray(rows) && rows.length > 0
        ? rows[0]
        : {
            total_news: 0,
            total_published: 0,
            total_draft: 0,
          };

    return NextResponse.json(result);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
