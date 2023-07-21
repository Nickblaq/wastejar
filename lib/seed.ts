import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function main () {

    try {
        const user = await prisma.user.upsert({
            where: { phone: "1234567890" },
            update: {},
            create: {
                name: "John Doe",
                phone: "1234567890",
            },
        });
        console.log(user);
        return
    } catch (error) {
        console.log(error)
        return error
    } finally {
        await prisma.$disconnect();
    }
}

// main()
// .then(() => {
//     prisma.$disconnect();
// })
// .catch(async(e) => {
//     console.error(e);
//     await prisma.$disconnect();
//     process.exit(1);
// })

// export {
    
// }