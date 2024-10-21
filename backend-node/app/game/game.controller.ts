import { Request, Response } from "express";
import { createNewGame, findById } from "./game.model.ts";

export async function startNewGame(req: Request, res: Response) {
  const { game } = req.body;
  const gameStored = await createNewGame(game);
  return res.status(201).json(gameStored);
}

export async function getGameById(req: Request, res: Response) {
  const { id } = req.params;
  const game = await findById(id);
  return res.status(200).json(game);
}
