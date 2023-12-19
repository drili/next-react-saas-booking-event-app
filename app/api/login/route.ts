import bcrypt from 'bcrypt'
import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from "next/server";
import jwt from 'jsonwebtoken';

import connectDb from '@/app/lib/connectToDb';
import AdminUser, { AdminUserDocument } from '@/app/models/AdminUser';

const secretKey = 'your-secret-key';

export async function POST(req: Request, res: NextApiResponse) {
    await connectDb();

    try {
        const body = await req.json()
        const { email, password } = body

        const user = await AdminUser.findOne({ email })

        if (!user) {
            return new NextResponse("User not found", { status: 401 })
        }

        const passwordMatch = await bcrypt.compare(password, user.password)

        if (!passwordMatch) {
            return new NextResponse("Invalid credentials", { status: 401 })
        }

        const token = jwt.sign({ userId: user._id }, secretKey, { expiresIn: '1h' });

        return NextResponse.json({ token, user: filterUserData(user) })
    } catch (error) {
        console.log(["LOGIN_POST"], { error });
        return new NextResponse("Internal error", { status: 500 })
    }

}

const filterUserData = (user: AdminUserDocument) => {
    const { _id, email, domain, plan } = user;
    return { _id, email, domain, plan };
};