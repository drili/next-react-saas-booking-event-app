import bcrypt from 'bcrypt'
import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from "next/server";

import AdminUser from '@/app/models/AdminUser'
import connectDb from '@/app/lib/connectToDb';

export async function POST(req: Request, res: NextApiResponse) {
    await connectDb();
    
    try {
        const body = await req.json()
        const { email, password, domain } = body 
        // console.log({ email, password, domain });
        
        if (!email || !password || !domain) {
            return new NextResponse("Fields are missing", { status: 401 })
        }

        const existingUser = await AdminUser.findOne({ email })
        if (existingUser) {
            return new NextResponse("User already exists", { status: 401 })
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const newUser = new AdminUser({
            email,
            password: hashedPassword,
            domain,
            plan: 'free',
        })

        await newUser.save()

        return NextResponse.json(newUser)
    } catch (error) {
        console.log(["REGISTRATION_POST"], {error});
        return new NextResponse("Internal error", { status: 500 })
    }
}