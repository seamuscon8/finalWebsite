"use client";
import { useState } from "react";
import TextBox from "@/src/components/textBox";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement | null>(null);

  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  async function sendEmail(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!formRef.current) {
      console.error("Form reference is null");
      return;
    }

    const formData = new FormData(formRef.current);

    const templateParams = {
      title: formData.get("title"),
      name: formData.get("name"),
      time: new Date().toString(),
     
      message: formData.get("message"),
      email: formData.get("email")
      
    };

    try {
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,       
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,      
        templateParams,          
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY   
      );
      setStatus("success");
      console.log("SUCCESS", result.status, result.text);

      setTimeout(() => setStatus("idle"), 3000);
      formRef.current.reset();
    } catch (error) {
        setStatus("error")
      console.error("FAILED", error);
      setTimeout(() => setStatus("idle"), 3000);
    }
  }

  return (
    <TextBox classNamed="firstBox">
      <h2>Contact Me</h2>
      <hr></hr>
      <form ref={formRef} onSubmit={sendEmail}>
       
        <p>Name</p>
        <input type="text" name="name" required />
        <p>Email</p>
        <input type="email" name="email" required />
        <p>Title</p>
        <input type="text" name="title" required />
        <p>Your Message</p>
        <textarea name="message" required />
        <br></br>
        <input type="submit" value="Send" />
      </form>
        {status === "success" && (
        <p style={{ color: "green", marginTop: "10px" }}>
            Your message has been sent!
        </p>
        )}
        {status === "error" && (
        <p style={{ color: "red", marginTop: "10px" }}>
            Something went wrong. Please try again.
         </p>
        )}

    </TextBox>
  );
}
