import {userSchema} from "@/app/lib/schema";
import {NextRequest, NextResponse} from "next/server";

export async function POST(req: Request) {

    const body = await req.json();
    let result = userSchema.safeParse(body)

    if(!result.success) {
        return NextResponse.json({errors: result.error.flatten()})
    }

    return NextResponse.json({
        massage: 'OK',
        data: result.data
    })
}