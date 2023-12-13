import mongoose from "mongoose";

const connectDb = async () => {
    if (mongoose.connections[0].readyState) {
        return;
    }
    return mongoose.connect(process.env.MONGODB_URI, {
    });
};

export default connectDb;