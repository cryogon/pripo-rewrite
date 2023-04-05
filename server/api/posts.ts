import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (e)=>{
    const body = await readBody(e);
    const user = await prisma.users.create({
        data:{
            username:body.username,
            email:body.email,
            name:body.name,
            profile_picture:body.avatar,
        }
    })
    return user;
})