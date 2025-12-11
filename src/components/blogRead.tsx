import React from 'react';
import Image from "next/image";
import Link from "next/link";
import style from "./blogRead.module.css"
import Blog from '../database/blogSchema';
import TextBox from './textBox';
import Comment from './comment';
import CommentForm from './commentForm';


export default function BlogRead(props: Blog) {
    const date = new Date(props.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    });
    
    //sort the comments based on date
    const sortedComments = props.comments && props.comments.length > 0
  ? [...props.comments].sort(
      (a, b) => new Date(b.time).getTime() - new Date(a.time).getTime()
    )
  : [];

    return(
      <>
            <div className = {style.blog} >
                    <Link href = "/blogs">Back</Link>
                    <h2> {props.title}</h2>
                    <h3>  {date}</h3>
                    <Image 
                        src={`/images/${props.image}`} 
                        alt = {props.imageAlt} 
                        width = {500}
                        height = {250}
                        className = {style.image}
                
                    ></Image>
                    <p> {props.finalScore}</p>
                    <ul>
                        {props.scorers.map((scorer,i) => (
                            <li key={i}>{scorer}</li>
                        ))}
                    </ul>
                    <Link href = {props.videoLink}>Click to Watch Extended Highlights</Link>
                    
                   

                    
                
            </div>
         
            {props.comments && props.comments.length > 0 ? (
            <TextBox>
                    <h2>Comments</h2>
                    <hr></hr>
                    {sortedComments.map((comment, index) => (
                     <Comment key={index} comment={comment} />
                    ))}
                  
                    <CommentForm slug={props.slug} />


            </TextBox>
            ) : null}
        </>
     
     
    )
}