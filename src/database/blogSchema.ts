import mongoose, {Schema} from "mongoose"
import { commentSchema, IComment } from "./commentSchema";

//typescript type
type Blog = {
    title:  string;
    date: Date;
    description: string;
    image: string;
    imageAlt: string;
    slug: string;
    finalScore: string;
    scorers: string[];
    videoLink: string;
    comments: IComment[];
    
}



//mongoose schema
export const blogSchema = new Schema<Blog>({
    title: {type: String, required: true},
    date: { type: Date, required: false, default: new Date()},
    description: { type: String, required: true },
    image: { type: String, required: true },
    imageAlt: { type: String, required: true, default:""},
    slug: { type: String, required: true },
    finalScore: { type: String, required: true },
    scorers: { type: [String], required: true},
    videoLink: { type: String, required: true },
    comments: [commentSchema]
})


// defining the collection and model
const Blog = mongoose.models['blogs'] ||
    mongoose.model('blogs', blogSchema);

export default Blog;