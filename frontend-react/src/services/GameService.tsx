import { Game } from "../models/Game";

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

  return { startNewGame };
}
