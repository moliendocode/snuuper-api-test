import expressJwt from "express-jwt";
import User from "../models/user";

const revoked = async (req: any, payload: any, done: any) => {
    const user = await User.findOne({ username: payload.username });
    if (!user) {
        return done(null, false);
    }
    return done(null, true);
};
const jwt = () => {
    const secret = process.env.JWT_SECRET || "secret";
    return expressJwt({ secret, algorithms: ["HS256"], revoked }).unless({
        path: ["/auth/login", "/auth/signin"],
    });
};

export default jwt;
