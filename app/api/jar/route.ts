
import { NextResponse } from "next/server";
// import { dbJar } from "@/lib/ops-db";
import { db } from "@/lib/prisma";

export  async function POST(req: Request) {
    try {
        const { name, phone } = (await req.json()) as {
            name: string;
            phone: string;
        }
        const user = await db.user.upsert({
            where: {
                phone,
            },
            update: {},
            create: {
                name,
                phone,
            }
        })
        console.log('User api operation done', user);
        return NextResponse.json({
            body: user
        })
    } catch (error: any) {
        return new NextResponse(JSON.stringify(null),{ status: 500 });
    }
}