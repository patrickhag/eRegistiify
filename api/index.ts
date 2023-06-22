import { log } from "console";
import express, { Request, Response } from "express";
import cors from "cors";
import userRoutes from "./routes/user";
import phoneRoutes from "./routes/phone";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.use("/user", userRoutes);
app.use("/phone", phoneRoutes);
app.use(cookieParser());
dotenv.config();

const PORT = process.env.PORT || 3001;

app.listen(3001, () => log("Listening..."));
