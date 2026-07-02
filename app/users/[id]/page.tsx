import {FC} from "react";

type Props = {
    params:Promise<{ [key:string]: string | string[] | undefined}>
}

const UserPage:FC<Props> = async ({params}) => {
    console.log((await params).id)

    return (
        <div>


        </div>
    );
};

export default UserPage;