import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function main () {
    try {
        const getAll = await prisma.user.findMany();
        if (getAll.length > 0) {
            await prisma.user.deleteMany();
        }
        return
    } catch (error) {
        console.log(error)
        return error
    } finally {
        await prisma.$disconnect();
    }
}

main()
.then(() => {
    prisma.$disconnect();
})
.catch(async(e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
})

// export {
    
// }