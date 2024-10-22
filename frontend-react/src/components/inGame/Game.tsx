import { useState } from "react";
import PlayerPanel from "./PlayerPanel";
import { GameState } from "../../models/GameState";
import MySimpleButton from "../MySimpleButton";
import { useGameService } from "../../services/GameService";
import { TurnSnapshot } from "../../models/TurnSnapshot";
import Board from "./Board";

type GameProps = {
  gameState: GameState;
};
export default function Games({ gameState: initGameState }: GameProps) {
  const { endTurn, getGameById } = useGameService();
  const [gameState, setGameState] = useState<GameState>(initGameState);
  const [currentTurn, setCurrentTurn] = useState<TurnSnapshot>(
    gameState.history[gameState.history.length - 1]
  );

  const handleEndTurn = async () => {
    const tempTurn = { ...currentTurn, turn: currentTurn.turn + 1 };
    // tempTurn.players[0].points = 1;
    await endTurn(tempTurn, gameState._id);
    const updatedGame = await getGameById(gameState._id);
    if (updatedGame) {
      setGameState(updatedGame);
      setCurrentTurn(updatedGame.history[updatedGame.history.length - 1]);
    }
  };
  return (
    <>
      {gameState && (
        <div className="grid grid-cols-[1fr_2fr_1fr]">
          <div className="game-left grid gap-2 m-10">
            {currentTurn.players[0] && (
              <PlayerPanel player={currentTurn.players[0]} />
            )}
            {currentTurn.players[1] && (
              <PlayerPanel player={currentTurn.players[1]} />
            )}{" "}
            <MySimpleButton
              text="Dev: dodaj turę"
              onClick={handleEndTurn}
            ></MySimpleButton>
          </div>
          <div className="game-center">
            <Board></Board>
          </div>
          <div className="game-right grid gap-2 m-10">
            {currentTurn.players[2] && (
              <PlayerPanel player={currentTurn.players[2]} />
            )}
            {currentTurn.players[3] && (
              <PlayerPanel player={currentTurn.players[3]} />
            )}
          </div>
        </div>
      )}
    </>
  );
}
