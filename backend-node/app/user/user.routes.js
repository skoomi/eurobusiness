import { Router } from "express";
import { registerUser, getTop10Scores } from "./user.controller.js";

export const router = Router();

router.post("/register", registerUser);
router.get("/top", getTop10Scores);
