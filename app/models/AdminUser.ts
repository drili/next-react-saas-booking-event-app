import mongoose, { Document, Schema } from 'mongoose';

export interface AdminUserDocument extends Document {
    email: string;
    password: string;
    domain: string;
    plan: string;
}

const AdminUserSchema = new Schema<AdminUserDocument>({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    domain: { type: String, required: true, unique: true },
    plan: { type: String, default: 'free' },
})

const AdminUser = mongoose.model<AdminUserDocument>("AdminUser", AdminUserSchema)

export default AdminUser;