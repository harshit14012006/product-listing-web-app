import { Router } from "express";
import { login } from "../../controllers/auth/login/login.js";
import { signup } from "../../controllers/auth/signup/signup.js";

const authRoutes = Router();

authRoutes.post("/login", login);
authRoutes.post("/signup", signup);

export default authRoutes;
