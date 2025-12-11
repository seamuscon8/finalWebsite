import "./globals.css";
import Image from "next/image";
import TextBox from "../components/textBox"
// You can name the function within page.tsx anything you want.
export default function Home() {
  return (
		<>
			<TextBox classNamed="firstBox"> 
				<b>Hi, My Name Is Seamus Connolly</b>
				<hr></hr>
				<Image src= {"/images/me.jpg"} alt = {"Me"}width = {400} height = {300} > 

				</Image>
			</TextBox>
			<TextBox>
				 I am an freshmen computer science student. I'm from Alameda, California which is in the Bay Area. Some of my hobbies include reading, playing soccer, learning new skills, and going to the gym. 
				 I enjoy coding and want to join Hack4Impact to gain further experience and be able to actually help people with my code.


			</TextBox>
		</>
		) 
}