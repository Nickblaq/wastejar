import { db } from "@/lib/prisma";
import { NextResponse } from "next/server";

export default async function POST(req: Request) {

    try {

// const { name, phone } = (await req.json()) as {
//             name: string;
//             phone: string;
//         }
//         console.log('server data', name, phone)
//         return NextResponse.json({
//                     message: "Success",
//                 })


        const { name, phone } = (await req.json()) as {
            name: string;
            phone: string;
        }
    
        const user = await db.user.findUnique({
            where: {
                phone,
            },
        });
    
        if (user) {
            return NextResponse.json({
                message: "Success",
                user
            })
        }
    
        const newUser = db.user.create({
            data: {
                name,
                phone,
            },
        })

        if (newUser) {
            return NextResponse.json({
                message: "Success",
                user: newUser
            })
        }

    } catch (error: any) {
        return new NextResponse(
            JSON.stringify({
              status: "error",
              message: error.message,
            }),
            { status: 500 }
          );
    }
}