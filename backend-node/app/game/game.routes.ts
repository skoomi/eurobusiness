import { Router } from "express";
import { startNewGame, getGameById } from "./game.controller.ts";

export const router = Router();

router.post("/startNewGame", startNewGame);
router.get("/:id", getGameById);
