import { Router } from "express";
import { registerUser } from "./user.controller.js";

export const router = Router();

router.post("/", registerUser);
