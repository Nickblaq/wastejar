
import { db } from './prisma';


interface dbProps {
    name: string;
    phone: string
}
export async function dbJar ({ name, phone }: dbProps)  {
        console.log('db data', name, phone)
    try {
        const user = await db.user.upsert({
            where: { phone },
            update: {},
            create: {
                name,
                phone,
            },
        });
        console.log(user);
        return user  as dbProps; // Type assertion to dbProps
    } catch (error) {
        console.log(error)
        throw error;
    }
}
