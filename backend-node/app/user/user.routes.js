import { Router } from "express";
import { registerUsera } from "./user.controller.js";

export const router = Router();

console.log("router.post(/, registerUsera");

router.post("/", registerUsera);
