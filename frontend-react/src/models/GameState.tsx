import { TurnSnapshot } from "./TurnSnapshot";

export type GameState = {
  _id: string;
  startdate: Date;
  history: TurnSnapshot[];
};
