import mongoose from "mongoose";

interface User {
    username: string;
    email: string;
    password: string;
}

const userSchema = new mongoose.Schema(
    {
        username: { type: String, required: true, unique: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
    },
    { timestamps: true }
);

const User = mongoose.model<User>("User", userSchema);

export default User;
