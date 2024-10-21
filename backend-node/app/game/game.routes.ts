import { Router } from "express";
import { startNewGame, getGameById, endTurn } from "./game.controller.ts";

export const router = Router();

router.post("/startNewGame", startNewGame);
router.post("/:id/endTurn", endTurn);
router.get("/:id", getGameById);
