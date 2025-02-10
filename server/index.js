import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import cors from "cors";

import authRoutes from "./routes/auth/authRoutes.js";

const server = express();

dotenv.config();

server.use(
  cors({
    origin: process.env.CLIENT_URL,
  })
);
server.use(cookieParser());
server.use(express.json());

server.get("/", (req, res) => {
  res.send("Server is running");
});

server.use("/auth", authRoutes);

server.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
