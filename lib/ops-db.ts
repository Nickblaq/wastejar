import 'server-only'
import { prisma } from './prisma';


interface dbProps {
    name: string;
    phone: string;
}
export async function dbJar ({ name, phone }: dbProps) {
        console.log('db data', name, phone)
    try {
        const user = await prisma.user.upsert({
            where: { phone },
            update: {},
            create: {
                name,
                phone,
            },
        });
        console.log(user);
        return
    } catch (error) {
        console.log(error)
        return error
    }
}
