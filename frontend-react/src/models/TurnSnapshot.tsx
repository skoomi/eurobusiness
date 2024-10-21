import { Player } from "./Player";
import { Property } from "./Property";

export type TurnSnapshot = {
  turn: number;
  players: Player[];
  properties: Property[];
};
