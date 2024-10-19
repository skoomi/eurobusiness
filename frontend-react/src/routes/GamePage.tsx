import { useState } from "react";
import { Game } from "../models/Game";

export default function GamePage() {
  const [game, setGame] = useState<Game>();
  return (
    <>
      <div className="grid grid-cols-[1fr_2fr_1fr]">
        <p>asd</p>
        <p>asd</p>
        <p>asd</p>
      </div>
    </>
  );
}
