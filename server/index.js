import express from "express";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { configDotenv } from "dotenv";
import cors from "cors";

import authRoutes from "./routes/auth/authRoutes";

const server = express();

configDotenv();

server.use(cors());
server.use(cookieParser());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

server.use("/auth", authRoutes);

server.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});