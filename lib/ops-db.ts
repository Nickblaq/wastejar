
import { db } from './prisma';


interface dbProps {
    name: string;
    phone: string
}
export async function dbJar ({ name, phone }: dbProps)  {
        console.log('db data', name, phone)
        const user = await db.user.findUnique({
            where: {
                phone,
            },
        })
        if (!user) return null   
        return user  as dbProps; // Type assertion to dbProps
}
