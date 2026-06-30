import {FC} from "react";
import {kernel} from "sharp";

type Props = {
searchParams:Promise<{
[key: string]: string | string[] | undefined
}>
}
const SubmitPage:FC<Props> = async ({searchParams}) => {

 const awaitedSP =   await searchParams;
    return (
        <div>
            this is page after submit {awaitedSP.name}
        </div>
    );
};

export default SubmitPage;