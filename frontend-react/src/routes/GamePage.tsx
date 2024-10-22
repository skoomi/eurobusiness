import { useLocation } from "react-router-dom";
import { useGameService } from "../services/GameService";
import { useEffect, useState } from "react";
import { GameState } from "../models/GameState";
import Game from "../components/inGame/Game";

export default function GamePage() {
  const location = useLocation();
  const { gameId } = location.state;

  const { getGameById } = useGameService();

  const [gameState, setGameState] = useState<GameState>();

  useEffect(() => {
    const loadGame = async () => {
      const loadedGame = await getGameById(gameId);
      setGameState(loadedGame);
    };

    loadGame();
  }, []);

  return (
    <>
      {gameState ? (
        <Game gameState={gameState}></Game>
      ) : (
        <p>Nie znaleziono gry</p>
      )}
    </>
  );
}
