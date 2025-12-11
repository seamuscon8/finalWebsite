import React from 'react'
import TextBox from "../../components/textBox"
import { notFound } from "next/navigation";
import ProjectRead from '@/src/components/projectRead';

export default async function Portfolio() {
     
    const base = process.env.NEXT_PUBLIC_BASE_URL!;
     
    const res = await fetch(`${base}/api/portfolio`);
    
    if (res.status === 404) notFound();
    if (!res.ok) throw new Error("Failed to load blog");
    
      
      
    const project: any[] = await res.json();
    if(!project || project.length === 0)
    {
        return <TextBox classNamed = "firstBox">hi</TextBox>
    }
    
    
    return (
        <>
            <TextBox classNamed = "firstBox"><h2>Projects I've done</h2></TextBox>
            {project.map(proj=> 
                    <ProjectRead key = {proj.title} {...proj} />
                    
                    
            )}	
            
        </>
    )
}