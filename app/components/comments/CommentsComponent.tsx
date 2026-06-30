import {getAllComments} from "@/app/services/api.service";
import Link from "next/link"
const CommentsComponent = async () => {
    const comments =  await getAllComments()

    return (
        <div>
            {
                comments.map((comment) => <div key={comment.id}>
                        <Link href={{pathname:'/comments/'+ comment.id.toString(),query:{data:JSON.stringify(comment)} }}>{comment.id} {comment.email}{comment.body}</Link>
                    </div>
                )}
        </div>
    );
};

export default CommentsComponent;