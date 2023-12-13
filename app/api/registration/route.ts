import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import AdminUser from '@/app/models/AdminUser';

const server = express()
server.use(express.json())

// *** Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || '')

server.post("/api/register", async (req: Request, res: Response) => {
    try {
        const { email, password, domain } = req.body

        const existingUser = await AdminUser.findOne({ email })
        if (existingUser) {
            return res.status(400).json({ error: "Email is already registered" })
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const newUser = new AdminUser({
            email,
            password: hashedPassword,
            domain,
            plan: "free"
        })

        await newUser.save()

        res.status(201).json({ message: "Registration successful." })
    } catch (error) {
        console.error('Registration error', error);
        res.status(500).json({ error: 'Internal server error' });
    }
})

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});