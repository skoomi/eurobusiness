import { Request, Response } from "express";
import { createNewGame, findById, saveSnapshot } from "./game.model.ts";
import { TurnSnapshot } from "../types/turnSnapshot.ts";

export async function startNewGame(req: Request, res: Response) {
  const { game } = req.body;
  const gameStored = await createNewGame(game);
  return res.status(201).json(gameStored);
}

export async function getGameById(req: Request, res: Response) {
  const { id } = req.params;
  if (id.length != 24) {
    return res.status(400).send("Game id should contain 24 characters");
  }
  const game = await findById(id);
  return res.status(200).json(game);
}

export async function endTurn(req: Request, res: Response) {
  const turnSnapshot = req.body as TurnSnapshot;
  const { id } = req.params;

  const gameSaved = await saveSnapshot(turnSnapshot, id);
  return res.status(200).send();
}
