import React from 'react' 
import style from "./textBox.module.css"

type TextBoxProps = {
    children: React.ReactNode;
    classNamed?: string
}
 
export default function TextBox
( {children,classNamed}: TextBoxProps )

{
    const realClass = classNamed ? classNamed: "box" ;
  
    return(
        <div className = {style[realClass]}>
            <div className = {style.inside}>
                 {children}
            </div>
           
        </div>
    )
}