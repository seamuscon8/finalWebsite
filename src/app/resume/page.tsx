import React from 'react'
import TextBox from "../../components/textBox"
export default function Resume() {
    return (
        <>
            <TextBox classNamed='firstBox'>
                <h2>Resume </h2>
                <a href="Resume.docx" download>Download Resume</a>
            </TextBox>
            <TextBox>
                <h3>Education</h3>
                <h4> Alameda High School</h4>
                <p>Graduated High School with a 4.3 GPA</p>
            </TextBox>
             <TextBox>
                <h3>Experience</h3>
                <h4> Soccer Coach</h4>
                <p>May 2023 - June 2025: 
                    I worked for Sofive as a soccer coach for young kids. There I developed strong interpersonal
                    skills for working with coworkers, clients and I learned how to work on a team.
                </p>
            </TextBox>
            <TextBox>
                <h3>Projects</h3>
                <h4> Personal Website</h4>
                <p> Designed and built a personal website using HTML and css </p>
                <h4>2-D Mario Kart Game</h4>
                <p>Designed and built a Mario Kart game where you race against bots and try to win
                    Included car physics, projectiles, graphics, and object orientated programming </p>
            </TextBox>
            <TextBox>
                <h3>Skills</h3>
                <ul>
                    <li>Java</li>
                    <li>Python</li>
                    <li>Some HTML and CSS</li> 
                    <li>Git Version Control</li>
                    <li> Photoshop and Illustator</li>
                </ul>
            </TextBox>
            <TextBox>
                <h3>Coursework</h3>
                <ul>
                    <li>Hack4Impact Starter Pack</li>
                    <li>AP Comp Sci A, 5 on the test</li>
                    <li>Half of Harvards CS50 Course</li>
                    <li>In Data Structures currently</li>

                </ul>
            </TextBox>
        </>
    )
}