import { Router } from "express";
import { authenticate, logOut } from "./auth.controller.js";
import { cookieJwtAuth } from "./crypt.js";

export const router = Router();

router.post("/login", authenticate);
router.get("/logout", cookieJwtAuth, logOut);
