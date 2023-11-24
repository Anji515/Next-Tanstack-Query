import mongoose from "mongoose";

export const connectDatabase = async () => {

    try {
        const { connection } = await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_URI);

        connection.on('connected', () => {
            console.log("Connected to MongoDB");
        });

        connection.on('error', (err) => {
            console.error("MongoDB connection error:", err);
        });

        connection.on('disconnected', () => {
            console.log("Disconnected from MongoDB");
        });

    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}