import { Property } from "./property.ts";

export type TurnSnapshot = {
  turn: number;
  players: Player[];
  properties: Property[];
};
