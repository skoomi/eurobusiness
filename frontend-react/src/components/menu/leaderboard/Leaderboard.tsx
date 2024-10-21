import { useEffect, useState } from "react";
import { useUserService } from "../../../services/UserService";
import { LeaderBoardScore } from "../../../models/LeaderBoardScore";

export default function Leaderboard() {
  const [top10Scores, setTop10Scores] = useState<LeaderBoardScore[]>([]);
  const { fetchTop10Scores } = useUserService();
  useEffect(() => {
    const getTopUsers = async () => {
      const top10Scores = await fetchTop10Scores();
      setTop10Scores(top10Scores);
    };

    getTopUsers();
  }, []);

  return (
    <div className="bg-white w-96 p-4 shadow-xl">
      <div className="border-4 border-solid border-black p-4 grid gap-2">
        <button className="border-4 border-solid border-black p-4 bg-blue">
          <p className="text-center text-white text-2xl">Ranking TOP 10</p>
        </button>

        <ul>
          {top10Scores.length > 0 ? (
            top10Scores.map((score) => {
              return (
                <li key={score.username}>
                  <p className="ml-4 text-2xl">
                    {score.username} - {score.points}
                  </p>
                </li>
              );
            })
          ) : (
            // TODO: zrobić popup z info że błąd bazy albo serwera
            <p className="ml-4 text-2xl">Brak danych</p>
          )}
        </ul>
      </div>
    </div>
  );
}
