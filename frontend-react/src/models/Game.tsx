import { Property } from "./Property";
import { User } from "./User";

export type Game = {
  turn: number;
  // JAK SIĘ OBCHODZIĆ z PIENIĘDZMI W JS ?
  players: { user: User; cash: number; properties: Property[] }[];
};
