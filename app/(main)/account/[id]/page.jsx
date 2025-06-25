"use server"

import { auth } from "@clerk/nextjs/dist/types/server" ;

export async function  createAccount9(data) {
    try{
        const{userId}=await auth();
        if (!userId) throw new Error("Unauthorized");
    } catch(error){}
    
}
