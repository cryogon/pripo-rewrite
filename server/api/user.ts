import { PrismaClient, type users } from "@prisma/client";
const prisma = new PrismaClient();
const cache: users[] = [];
export default defineEventHandler(async (e) => {
    console.time("spend");
    const { body } = e.node.req as any;
    console.timeEnd("spend")
    for (let u of cache) {
        if (u.username === body.username) {
            return u;
        }
    }
    const user = await prisma.users.findFirst();
    user && cache.push(user);
    return user;
})
