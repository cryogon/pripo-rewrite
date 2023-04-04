import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();


export default defineEventHandler(async (e) => {
    const user = await prisma.users.findFirst();
    return user;

})