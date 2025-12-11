"use client"
import React from "react";
import {useState} from "react";
import { useRouter } from "next/navigation";
type CommentFormProps = {
    slug: string;
};

export default function CommentForm({slug}: CommentFormProps){
    const router = useRouter();
    
    const [user,setUser] = useState("");
    const [text, setText] = useState("");
    const [loading, setLoading] = useState(false);
    const [error,setError] = useState<string |null>(null);


    async function handleSubmit(e: React.FormEvent){
        e.preventDefault();
        setError(null);
        setLoading(true);
        



        try {
      

		 

            const res = await fetch(`/api/blogs/${slug}/comments`, {
                method: "POST",
                headers: {
                     "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    user,
                    comment: text,
                }),
             });
            
            
            if (!res.ok) {
                const data = await res.json().catch(() => ({}));
                throw new Error(data.message || "Failed to post comment");
            }


            setUser("");
            setText("");
            router.refresh();
        } catch (err: any) {
        console.error(err);
        setError(err.message || "Something went wrong");
        } finally {
        setLoading(false);
        }

     }


    return (
    <form onSubmit={handleSubmit} style={{ marginTop: "1rem" }}>
      {error && <p style={{ color: "red" }}>{error}</p>}

      <div>
        <label>
          Name:
          <input
            value={user}
            onChange={(e) => setUser(e.target.value)}
            required
          />
        </label>
      </div>

      <div>
        <label>
          Comment:
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
          />
        </label>
      </div>

      <button type="submit" disabled={loading}>
        {loading ? "Posting..." : "Post Comment"}
      </button>
    </form>
  );


}