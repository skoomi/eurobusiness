import { Player } from "../../models/Player";

type PlayerPanelProps = {
  player: Player;
};
export default function PlayerPanel({ player }: PlayerPanelProps) {
  return (
    <>
      <div className="bg-white  p-4 shadow-xl">
        <div className="border-4 border-solid border-black p-4 grid gap-2">
          <div className="border-4 border-solid border-black p-4 bg-[#066FB4]">
            <p className="text-center text-white text-2xl">{player.username}</p>
          </div>
          <p className="ml-4 text-2xl">Punkty gracza: {player.points}</p>
          <p className="ml-4 text-2xl">Pieniądze gracza: {player.balance}</p>
        </div>
      </div>
    </>
  );
}
