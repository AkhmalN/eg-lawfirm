import { NextRequest, NextResponse } from "next/server";
import { getDbConnection } from "@/lib/db";
import { cloudinaryUploader } from "@/lib/cloudinary";
import { TNewsDTO } from "@/types/news";

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const page = parseInt(url.searchParams.get("page") || "1", 10);
    const limit = parseInt(url.searchParams.get("limit") || "10", 10);
    const offset = (page - 1) * limit;

    const conn = await getDbConnection();

    const [countResult] = await conn.execute(
      "SELECT COUNT(*) as total FROM News"
    );
    const total = (countResult as any)[0].total;

    const [rows] = await conn.execute(
      `SELECT * FROM News ORDER BY createdAt DESC LIMIT ${limit} OFFSET ${offset}`
    );

    return NextResponse.json({
      data: rows,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.formData();
    const title = data.get("title");
    const description = data.get("description");
    const content = data.get("content");
    const image = data.get("image") as File;
    const category = data.get("category");
    const isPublishedString = data.get("isPublished");
    const boolPublished: boolean = isPublishedString === "true";
    const optionalLink = data.get("optional_link");

    console.log({
      title,
      description,
      content,
      image,
      category,
      boolPublished,
      optionalLink,
    });

    if (!title || !description || !content || !image || !category) {
      return NextResponse.json({
        message: "Form tidak lengkap, pastikan semua field wajib diisi.",
        statusCode: 400,
      });
    }

    const conn = await getDbConnection();

    const imageUrl = await cloudinaryUploader(image);

    if (!imageUrl) {
      return NextResponse.json(
        { error: "Gagal mengunggah gambar ke Cloudinary." },
        { status: 500 }
      );
    }

    const newNews: TNewsDTO = {
      title: title as string,
      description: description as string,
      content: content as string,
      category: category as string,
      image: imageUrl as string,
      isPublished: boolPublished,
      optional_link: optionalLink ? (optionalLink as string) : undefined,
    };

    const [result] = await conn.execute(
      `INSERT INTO News
      (title, description, content, image, category, isPublished, optional_link)
      VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [
        newNews.title,
        newNews.description || null,
        newNews.content || null,
        imageUrl,
        newNews.category || null,
        newNews.isPublished ? 1 : 0,
        newNews.optional_link || null,
      ]
    );

    return NextResponse.json({
      message: "News created",
      id: (result as any).insertId,
      status: 201,
    });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ error: "Internal server error", status: 500 });
  }
}
