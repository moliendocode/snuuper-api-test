import "dotenv/config";
import express from "express";
import cors from "cors";
import userRoutes from "./routes/user";
import mongoose from "mongoose";
import jwt from "./utils/jwt";

const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGO_URI || "localhost";

const app = express();
app.use(express.json());
mongoose.connect(MONGODB_URI, {
    dbName: "snuuperbacan",
    autoCreate: true,
    autoIndex: true,
});
app.use(jwt());
app.use(cors());
app.get("/", (_, res) => {
    res.send("Snuuper API");
});
app.use("/", userRoutes);
app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto ${PORT}`);
});
