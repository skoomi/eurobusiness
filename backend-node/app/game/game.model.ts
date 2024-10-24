import mongoose, { Schema } from "mongoose";
import { TurnSnapshot } from "../types/turnSnapshot.ts";

export type Game = {
  _id: string;
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
            fieldType: String,
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

export async function saveSnapshot(turnSnapshot: TurnSnapshot, id: string) {
  console.log(id);
  console.log(turnSnapshot);
  try {
    return await Game.updateOne(
      { _id: id },
      { $push: { history: turnSnapshot } }
    );
  } catch {
    throw new Error("Błąd zapisu");
  }
}
