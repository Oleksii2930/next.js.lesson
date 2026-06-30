import {FC} from "react";
import {Metadata} from "next";
import {SearchParams} from "next/dist/server/request/search-params";
import {IComment} from "@/app/models/IComments";
type Props = {
    params:Promise<{id:string}>;
    searchParams: Promise<SearchParams>;
}
export const generateMetadata = async ({params}:Props):Promise<Metadata> => {
    const {id} = await params;
    return {
        title: 'Comment page title'+ id,
    }
}
const CommentsPage:FC<Props> = async ({ searchParams}) => {
    const {data} = await searchParams;
    let obj = null;
    if (typeof data === "string") {
        obj = JSON.parse(data) as IComment;
    }
    const params = await searchParams;

    console.log(params);
    return (
        <div>
            {

                obj &&  <>
                    <h1>Comment Page content</h1>
                    <span>ID: {obj.id}</span>
                    <p>Email: {obj.email}</p>
                    <p>{obj.body}</p>
                    </>
            }
        </div>
    );
};

export  default CommentsPage;