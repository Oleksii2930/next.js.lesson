import {FC} from "react";
import {Metadata} from "next";
import {SearchParams} from "next/dist/server/request/search-params";
import {ICar} from "@/app/models/ICar";
type Props = {
    params:Promise<{id:string}>;
    searchParams: Promise<SearchParams>;
}

export const generateMetadata = async ({params}:Props):Promise<Metadata> => {
    const {id} = await params;

    return {
        title: 'User page title'+ id,
    }
}
const CarsPage:FC<Props> = async ({ searchParams}) => {
const {data} = await searchParams;
let obj = null;
if (typeof data === "string") {
    obj = JSON.parse(data) as ICar;
}
    return (
        <div>
            {

              obj &&  <>Users Page content {obj.id} {obj.brand}</>
            }
        </div>
    );
};

export  default CarsPage;