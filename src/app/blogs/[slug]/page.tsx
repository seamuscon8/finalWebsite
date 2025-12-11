
import {use} from "react"
import { notFound } from "next/navigation";
import BlogRead from "@/src/components/blogRead";
import { headers } from "next/headers";




export default async function Blog({ params }: { params:Promise<{ slug: string }> }) {
  const { slug } = await params;
  const base = process.env.NEXT_PUBLIC_BASE_URL!;
 
  const res = await fetch(`${base}/api/blogs/${slug}`);

  if (res.status === 404) notFound();
  if (!res.ok) throw new Error("Failed to load blog");

  
  
  const blog = await res.json();
  return (
    
    <main style={{ padding: 24 }}>

      <BlogRead {...blog}/>
     
    </main>
  );
}
