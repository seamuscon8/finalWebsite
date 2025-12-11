import { IComment } from "../database/commentSchema";
import style from "./comment.module.css"
{/* When we pass props, the name that we use to pass values
		is the key for the type
*/}
type CommentProps = {
    comment: IComment;
}


{/* Modularizing code into seperate functions is useful.
		Makes your code look nicer and allows for better readability.
	*/}
function parseCommentTime(time: Date){
	

    return new Date(time).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric"
    });
}

function Comment({ comment }: CommentProps) {
    const newTime = parseCommentTime(comment.time)
    return (
    <div className={style.comment}>
        <div className={style.commentrow}>
            <h4 className={style.commenttext}><u>{comment.user}</u>: {comment.comment}</h4>
            <h4 className={style.date}>{newTime}</h4>
        </div>
    <hr />
    </div>

    );
}

export default Comment;