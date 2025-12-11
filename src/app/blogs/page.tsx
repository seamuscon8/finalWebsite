import BlogPreview from "@/src/components/blogPreview"
import "../globals.css"
import { notFound } from "next/navigation"
import { getBaseUrl } from "@/src/lib/getBaseUrl";
export const dynamic = "force-dynamic";




import Blog from "@/src/database/blogSchema"
import connectDB from "@/src/database/db"
export default async function Home() {
	
	const base = getBaseUrl();
	
	const res = await fetch(`${base}/api/blogs`, {
    cache: "no-store",
  });
		
	if (res.status === 404) notFound();
	if (!res.ok) throw new Error("Failed to load blog");
	
	const blogs: any[] = await res.json();
    return (
		<div className = "blog-container">
		   {blogs.map((b: any) => (
        <BlogPreview key={b.slug} {...b} />
      		))}
			
		
		</div>
		) 
}
