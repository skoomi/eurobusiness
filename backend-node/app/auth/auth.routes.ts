import { Router } from "express";
import { login, logOut } from "./auth.controller.ts";
import { cookieJwtAuth } from "./crypt.ts";

export const router = Router();

router.post("/login", login);
router.get("/logout", cookieJwtAuth, logOut);
