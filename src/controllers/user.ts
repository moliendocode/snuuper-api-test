import User from "../models/user";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const getUsers = async (_: Request, res: Response) => {
    await User.find()
        .exec()
        .then((users) => {
            return res.status(200).json(users);
        })
        .catch((err) => {
            return res.status(500).json(err);
        });
};

export const registerUser = async (req: Request, res: Response) => {
    const { username, email, password } = req.body;
    if (await User.findOne({ username })) {
        return res.status(400).json({ message: "Username already exists" });
    } else if (await User.findOne({ email })) {
        return res.status(400).json({ message: "Email already exists" });
    } else {
        const user = new User({
            username,
            email,
            password,
        });
        user.password = await bcrypt.hash(password, 10);
        await user.save();
        return res.send(user);
    }
};

export const loginUser = async (req: Request, res: Response) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
        return res.status(400).send("User not found");
    } else if (user && bcrypt.compareSync(password, user.password)) {
        const token = jwt.sign(
            { sub: user.id },
            process.env.JWT_SECRET || "secret"
        );
        console.log(user);
        console.log(token);
        return res.status(200).send({ token });
    } else {
        return res.status(400).send("Wrong password");
    }
};
