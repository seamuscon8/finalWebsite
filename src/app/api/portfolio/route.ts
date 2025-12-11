import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/src/database/db";
import Project from "@/src/database/projectSchema";

export async function GET() {
  try {
    await connectDB();
    const projects = await Project.find().sort({ date: -1 }).lean();
    return NextResponse.json(projects);
  } catch (err) {
    console.error("GET /api/projects error:", err);
    return NextResponse.json({ message: "Failed" }, { status: 500 });
  }
}