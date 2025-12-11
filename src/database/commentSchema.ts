import mongoose, {Schema} from "mongoose"
export type IComment = {
		user: string;
		comment: string;
		time: Date;
}

export const commentSchema = new Schema<IComment>({
    user: {type: String},
    comment: {type:String},
    time: {type: Date}
})

