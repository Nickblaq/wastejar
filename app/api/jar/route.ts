
import { NextResponse } from "next/server";
import { dbJar } from "@/lib/ops-db";

export  async function POST(req: Request) {
    try {
        const { name, phone } = (await req.json()) as {
            name: string;
            phone: string;
        }
        const user = await dbJar({ name, phone });
        console.log('User db operation done', user);
        return NextResponse.json({
            message: "Success",
            user
        })
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