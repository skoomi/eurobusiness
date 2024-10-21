import { Game } from "../models/Game";
import { TurnSnapshot } from "../models/TurnSnapshot";

export function useGameService() {
  const serverUrl = import.meta.env.VITE_NODE_SERVER_URL;

  const startNewGame = async (game: Game) => {
    return await fetch(serverUrl + "/game/startNewGame", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      credentials: "include", // dodaje ciasteczka
      body: JSON.stringify({ game: game }),
    });
  };

  const getGameById = async (gameId: string) => {
    const response = await fetch(serverUrl + "/game/" + gameId);
    if (response.ok) {
      return (await response.json()) as Game;
    }
    throw new Error("Błąd wczytywania gry");
  };

  const endTurn = async (turnSnapshot: TurnSnapshot, gameId: string) => {
    const response = await fetch(serverUrl + "/game/" + gameId + "/endTurn", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(turnSnapshot),
      credentials: "include", // dodaje ciasteczka
    });
    if (response.ok) {
      console.log("endTurn OK");
      return;
    }
    throw new Error("Błąd zapisu gry");
  };

  return { startNewGame, getGameById, endTurn };
}
