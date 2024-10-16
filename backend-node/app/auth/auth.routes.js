import { Router } from "express";
import { authenticate, logOut } from "./auth.controller.js";
import { authToken } from "./crypt.js";

export const router = Router();

router.post("/login", authenticate);
router.get("/logout", authToken, logOut);
