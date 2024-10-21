import { useEffect, useState } from "react";
import PlayerPanel from "./PlayerPanel";
import { Game } from "../../models/Game";
import { useLocation } from "react-router-dom";

export default function GameBoard() {
  const serverUrl = import.meta.env.VITE_NODE_SERVER_URL;

  const location = useLocation(); // Access the state passed via navigate
  const { gameId } = location.state;

  const [game, setGame] = useState<Game>();
  const [currentTurn, setCurrentTurn] = useState(0);

  const loadGame = async () => {
    const response = await fetch(serverUrl + "/game/" + gameId);
    if (response.ok) {
      const gameFetched = (await response.json()) as Game;
      setGame(gameFetched);
    }
  };
  useEffect(() => {
    loadGame();
  }, []);
  return (
    <>
      {game && (
        <div className="grid grid-cols-[1fr_2fr_1fr]">
          <div className="game-left grid gap-2 m-10">
            {game.history[currentTurn].players[0] && (
              <PlayerPanel player={game.history[currentTurn].players[0]} />
            )}
            {game.history[currentTurn].players[1] && (
              <PlayerPanel player={game.history[currentTurn].players[1]} />
            )}{" "}
          </div>
          <div className="game-center">dsd</div>
          <div className="game-right grid gap-2 m-10">
            {game.history[currentTurn].players[2] && (
              <PlayerPanel player={game.history[currentTurn].players[2]} />
            )}
            {game.history[currentTurn].players[3] && (
              <PlayerPanel player={game.history[currentTurn].players[3]} />
            )}
          </div>
        </div>
      )}
    </>
  );
}
