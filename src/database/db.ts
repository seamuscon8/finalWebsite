// db.ts
import mongoose from "mongoose";
import Blog from "./blogSchema";

const url: string = process.env.MONGO_URI as string;
let connection: typeof mongoose;

/**
 * Makes a connection to a MongoDB database. If a connection already exists, does nothing
 * Call this function at the start of api routes and data fetches
 * @returns {Promise<typeof mongoose>}
 */
const connectDB = async () => {
  if (!connection) {
    connection = await mongoose.connect(url);
    return connection;
  }
};

export default connectDB;

/*
export async function getBlogs(){
	await connectDB() // function from db.ts before

	try {
			// query for all blogs and sort by date
		
		const docs = await Blog.find().
		sort({ date: -1 })
     .select("-_id -__v")     
        .lean()                   
        .orFail();

		//Make it normal 
		return docs.map((b: any) => ({
      	title: b.title,
      	slug: b.slug,
      	description: b.description,
      	image: b.image,
      	imageAlt: b.imageAlt ?? `Preview image for ${b.title}`,
      	finalScore: b.finalScore,
      	scorers: b.scorers,
      	videoLink: b.videoLink,
      	date: new Date(b.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      	})


    	}));

			// send a response as the blogs as the message
	 
	} catch (err) {
	    console.error("error fetching blogs",err);
		return [];
	}
}
*/