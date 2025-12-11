import {NextResponse} from "next/server";
import Blog from "@/src/database/blogSchema"
import connectDB from "@/src/database/db";

export async function POST(
    req: Request, {params}: {params: Promise<{ slug: string }>}
) {


    try{
        await connectDB();


        const {slug} = await params;
     
        

        const body = await req.json();
        const {user, comment} = body;

        if( !user || !comment){
            return NextResponse.json(
                {message: "user and comment are required"},
                {status: 400}
            )
        }

        const newComment = {
            user,
            comment,
            time: new Date()
        };

        const blogs = await Blog.find({}, "slug").lean();
        console.log("🔎 All slugs in DB =", blogs);

        const updatedBlog = await Blog.findOneAndUpdate(
            {slug},
            {$push: {comments: newComment}},
            {new: true}
        ).lean();

        if(!updatedBlog) {
            return NextResponse.json(
                {message: "Blog not found"},
                {status: 404}
            );
        }

        return NextResponse.json(updatedBlog);


          } catch (err) {
    console.error("Error in POST /api/blogs/[slug]/comments:", err);
    return NextResponse.json(
      { message: "Server error" },
      { status: 500 }
    );
  }

}
