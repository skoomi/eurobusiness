import Leaderboard from "../../leaderboard/Leaderboard";
import Menu from "../../menu/Menu";

export default function HomePage() {
  return (
    <>
      <div className="grid grid-cols-[1fr_2fr_1fr]">
        <Menu />
        <div> Demo gierki </div>
        <Leaderboard />
      </div>
    </>
  );
}
