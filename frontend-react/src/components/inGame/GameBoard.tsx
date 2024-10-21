import { useState } from "react";
import PlayerPanel from "./PlayerPanel";
import { Game } from "../../models/Game";
import MySimpleButton from "../MySimpleButton";
import { useGameService } from "../../services/GameService";
import { TurnSnapshot } from "../../models/TurnSnapshot";

type GameProps = {
  game: Game;
};
export default function GameBoard({ game: initGame }: GameProps) {
  const { endTurn, getGameById } = useGameService();
  const [game, setGame] = useState<Game>(initGame);
  const [currentTurn, setCurrentTurn] = useState<TurnSnapshot>(
    game.history[game.history.length - 1]
  );

  const handleEndTurn = async () => {
    const tempTurn = { ...currentTurn, turn: currentTurn.turn + 1 };
    // tempTurn.players[0].points = 1;
    await endTurn(tempTurn, game._id);
    const updatedGame = await getGameById(game._id);
    if (updatedGame) {
      setGame(updatedGame);
      setCurrentTurn(updatedGame.history[updatedGame.history.length - 1]);
    }
  };
  return (
    <>
      {game && (
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
          <div className="game-center">dsd</div>
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
