import { NextRequest, NextResponse } from "next/server";
import { getDbConnection } from "@/lib/db";
import { TNewsDTO } from "@/types/news";
import { cloudinaryUploader } from "@/lib/cloudinary";
import { RowDataPacket } from "mysql2";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const conn = await getDbConnection();
    const [rows] = await conn.execute("SELECT * FROM News WHERE id = ?", [
      params.id,
    ]);
    if ((rows as any).length === 0) {
      return NextResponse.json({ error: "News not found" }, { status: 404 });
    }
    return NextResponse.json((rows as any)[0]);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const data = await req.formData();
    const title = data.get("title");
    const description = data.get("description");
    const content = data.get("content");
    const image = data.get("image") as File | null;
    const category = data.get("category");
    const isPublishedString = data.get("isPublished");
    const boolPublished: boolean = isPublishedString === "true";

    // Validasi field wajib (kecuali image)
    if (!title || !description || !content || !category) {
      return NextResponse.json({
        message: "Form tidak lengkap, pastikan semua field wajib diisi.",
        statusCode: 400,
      });
    }

    const conn = await getDbConnection();

    // console.log({
    //   title,
    //   description,
    //   content,
    //   image,
    //   category,
    //   boolPublished,
    // });

    let imageUrl;
    if (image && image.size > 0 && image.type.startsWith("image/")) {
      // Upload baru ke Cloudinary
      // imageUrl = hasil dari Cloudinary
      const imageUploaded = await cloudinaryUploader(image);
      imageUrl = imageUploaded;
      if (!imageUploaded) {
        return NextResponse.json(
          { error: "Gagal mengunggah gambar ke Cloudinary." },
          { status: 500 }
        );
      }
    } else {
      // Tidak ada file baru, pakai image lama
      // imageUrl = existingNews.image;
      const [rows] = await conn.execute<RowDataPacket[]>(
        "SELECT image FROM News WHERE id = ?",
        [params.id]
      );
      console.log("rows", rows);
      // get news
      const existingNews =
        Array.isArray(rows) && rows.length > 0 ? rows[0] : null;

      console.log("existingNews", existingNews);
      if (!existingNews) {
        return NextResponse.json({
          message: "News not found",
          statusCode: 404,
        });
      }
      imageUrl = existingNews.image;
    }

    const updateNews: TNewsDTO = {
      title: title as string,
      description: description as string,
      content: content as string,
      category: category as string,
      image: imageUrl as string,
      isPublished: boolPublished,
    };

    const [result] = await conn.execute(
      `UPDATE News SET title=?, description=?, content=?, category=?, image=?, isPublished=?, updatedAt=NOW() WHERE id=?`,
      [
        updateNews.title,
        updateNews.description || null,
        updateNews.content || null,
        updateNews.category || null,
        updateNews.image || null,
        updateNews.isPublished ? 1 : 0,
        params.id,
      ]
    );

    return NextResponse.json({ message: "News updated", statusCode: 200 });
  } catch (error: any) {
    // console.log(error);
    return NextResponse.json({
      error: "Internal server error",
      statusCode: 500,
    });
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const conn = await getDbConnection();
    await conn.execute("DELETE FROM News WHERE id = ?", [params.id]);
    return NextResponse.json({ message: "News deleted" });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
