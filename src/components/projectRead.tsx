import React from 'react';
import Image from "next/image";
import Link from "next/link";
import Blog from '../database/blogSchema';
import TextBox from './textBox';
import Project from '../database/projectSchema';


export default function ProjectRead(props: Project) {
    
    return(
      
        
                
        <TextBox>
               <h2>{props.title}</h2>
               <h3>{props.date}</h3>
               <p>{props.info }</p>
        </TextBox>
          
     
     
    )
}