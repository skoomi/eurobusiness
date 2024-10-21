import { useLocation } from "react-router-dom";
import GameBoard from "../components/inGame/GameBoard";
import { useGameService } from "../services/GameService";
import { useEffect, useState } from "react";
import { Game } from "../models/Game";

export default function GamePage() {
  const location = useLocation();
  const { gameId } = location.state;

  const { getGameById } = useGameService();

  const [game, setGame] = useState<Game>();

  useEffect(() => {
    const loadGame = async () => {
      const loadedGame = await getGameById(gameId);
      setGame(loadedGame);
    };

    loadGame();
  }, []);

  return (
    <>
      {game ? <GameBoard game={game}></GameBoard> : <p>Nie znaleziono gry</p>}
    </>
  );
}
