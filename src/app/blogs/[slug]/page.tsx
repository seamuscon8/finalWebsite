
import {use} from "react"
import { notFound } from "next/navigation";
import BlogRead from "@/src/components/blogRead";
import { headers } from "next/headers";
export const dynamic = "force-dynamic";





export default async function Blog({ params }: { params:Promise<{ slug: string }> }) {
  const { slug } = await params;
 
    const res = await fetch(`/api/blogs/${slug}`, {
    cache: "no-store",
  });

  if (res.status === 404) notFound();
  if (!res.ok) throw new Error("Failed to load blog");

  
  
  const blog = await res.json();
  return (
    
    <main style={{ padding: 24 }}>

      <BlogRead {...blog}/>
     
    </main>
  );
}
