import {getAllPosts} from "@/app/services/api.service";
import Link from "next/link"
const PostsComponent = async () => {
    const posts =  await getAllPosts()

    return (
        <div>
            {
                posts.map((post) => <div key={post.id}>
                    <Link href={{pathname:'/posts/'+ post.id.toString(),query:{data:JSON.stringify(post)} }}>ID: {post.id} <p>{post.title}</p><p>{post.body}</p> </Link>
                    </div>
                )}
        </div>
    );
};

export default PostsComponent;