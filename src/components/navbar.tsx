import React from "react";
import style from "./navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    // replace everything in between the <header> & <header /> tags
    // with your navbar code from your earlier milestones
    // NOTE: we use "class" in HTML but React is quirky so we have to 
    // change all the "class" to "className"
    <header className={style.header}>
        <h1> Seamus's Personal Website </h1>
        <nav className={style.navbar}>
            <h1 className={style.logo}>Seamus Connolly's Website</h1>
            <ul className={style.navList}>
                
                <Link href="/">Home</Link>
                <hr />
                <Link href="/blogs">Blogs</Link>
                <hr />
                <Link href="/resume">Resume</Link>
                <hr />
                <Link href="/portfolio">Portfolio</Link>
                <hr />
                <Link href="/about">Contact Me</Link>
                <hr />
                
            </ul>
            


        </nav>


    </header>
  );
}

   