import mongoose, {Schema} from "mongoose"

type Project = {
    title: string;
    info: string;
    date: string;
}

export const projectSchema = new Schema<Project>({
    title: {type: String, required: true},
    info: {type:String,required:true},
    date: {type:String,required:true}
})


const Project = mongoose.models['projects'] || mongoose.model('projects',projectSchema);

export default Project;