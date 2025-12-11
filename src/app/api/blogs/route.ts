import { NextResponse } from "next/server";
import connectDB from "@/src/database/db";
import Blog from "@/src/database/blogSchema";

export async function GET() {
  try {
    await connectDB();

    // empty filter + projection to keep only what you need
    const docs = await Blog.find(
      {},
      { title: 1, slug: 1, date: 1, description: 1, image: 1, imageAlt: 1, image_alt: 1 }
    )
      .sort({ date: -1 })
      .lean(); // no .orFail() needed for find()

    const blogs = docs.map((d: any) => ({
      _id: d._id?.toString?.() ?? "", // keep _id since we didn't exclude it
      title: String(d.title ?? ""),
      slug: String(d.slug ?? ""),
      description: d.description ?? "",
      image: d.image ?? "",
      // support either imageAlt or image_alt in DB
      imageAlt: d.imageAlt ?? d.image_alt ?? "",
      date: d.date
        ? new Date(d.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })
        : "",
    }));

    return NextResponse.json(blogs, { status: 200 });
  } catch (err) {
    console.error("GET /api/blogs error:", err);
    return NextResponse.json({ message: "Failed" }, { status: 500 });
  }
}


    