import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

dotenv.config();
import authRoutes from "./routes/auth/authRoutes.js";
import toyRoutes from "./routes/auth/toyRoutes.js"; // Import toy routes

const server = express();
const prisma = new PrismaClient(); 

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
server.use("/toys", toyRoutes); // Use toy routes

const connectDB = async () => {
  try {
    await prisma.$connect();
    console.log("✅ Prisma connected to MongoDB successfully");
  } catch (error) {
    console.error("❌ Prisma failed to connect to MongoDB:", error.message);
    process.exit(1); 
  }
};

const PORT = process.env.PORT;

connectDB().then(() => {
  server.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
  });
});
