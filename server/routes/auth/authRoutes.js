import { Router } from "express";
import { login } from "../../controllers/auth/login/login";
import { signup } from "../../controllers/auth/signup/signup";

const authRoutes = Router();

authRoutes.post("/login", login);
authRoutes.post("/signup", signup);

export default authRoutes;
