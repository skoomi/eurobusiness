import { Router } from "express";
import { login, logOut } from "./auth.controller.js";
import { cookieJwtAuth } from "./crypt.js";

export const router = Router();

router.post("/login", login);
router.get("/logout", cookieJwtAuth, logOut);
