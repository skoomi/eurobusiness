import { TurnSnapshot } from "./TurnSnapshot";

export type Game = {
  _id: string;
  startdate: Date;
  history: TurnSnapshot[];
};
