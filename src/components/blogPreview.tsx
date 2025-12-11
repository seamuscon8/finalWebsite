import React from 'react';
import Image from "next/image";
import Link from "next/link";
import style from './blogPreview.module.css';
import Blog from '../database/blogSchema';



export default function BlogPreview(props: Blog) {
  return (
		// replace everything between the <div> & </div> tags
		// with your code from earlier milestones
    // props.date is a string before it's passed in 
    <div className={style.blogpost}>
        <h3>{props.title}</h3>
        <h4>
        {new Date(props.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
        </h4>


        <Image  
            src={`/images/${props.image}`} 
            alt = {props.imageAlt} 
            width = {500}
            height = {250}
            className = {style.image}
            
            ></Image>
        <p>{props.description}</p>
        <Link href = {`/blogs/${props.slug}`}>Read More</Link>

	</div>
  );
}