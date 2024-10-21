import mongoose, { Schema } from "mongoose";
import { TurnSnapshot } from "../types/turnSnapshot.ts";

export type Game = {
  startdate: Date;
  history?: TurnSnapshot[];
};

const gameSchema = new mongoose.Schema({
  startdate: Date,
  history: [
    {
      turn: Number,
      players: [
        {
          username: String,
          points: Number,
          balance: Number,
          userId: Schema.Types.ObjectId,
        },
      ],
      properties: [
        {
          ownerId: Schema.Types.ObjectId,
          field: {
            orderNumber: Number,
            name: String,
            price: Number,
            value1h: Number,
            value2h: Number,
            value3h: Number,
            value4h: Number,
            value5h: Number,
          },
        },
      ],
    },
  ],
});

export const Game = mongoose.model("Game", gameSchema);

export async function createNewGame(game: Game) {
  return await Game.create(game);
}

export async function findById(gameId: string) {
  return await Game.findById(gameId);
}
