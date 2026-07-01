"use server"

import {userSchema} from "@/app/lib/schema";

export async function createUser(formData: FormData):Promise<void> {
    const data = {
        name:formData.get("name"),
        email:formData.get("email"),

    }
    const result = userSchema.safeParse(data);
    if (!result.success) {
        console.log("error");
        return;
    }
    console.log('success', result.data)
}