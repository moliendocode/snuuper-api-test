import express from "express";
import { getUsers, registerUser, loginUser } from "../controllers/user";

const router = express.Router();

router.get("/users", getUsers);

router.post("/auth/signin", registerUser);

router.post("/auth/login", loginUser);

export default router;
