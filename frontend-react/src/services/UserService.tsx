import { LeaderBoardScore } from "../models/LeaderBoardScore";

export function useUserService() {
  const serverUrl = import.meta.env.VITE_NODE_SERVER_URL;

  const fetchTop10Scores = async () => {
    const response = await fetch(serverUrl + "/users/top");
    if (response.ok) {
      const jsonBodyResponse = (await response.json()) as LeaderBoardScore[];

      return jsonBodyResponse;
    } else {
      return [];
    }
  };
  //  POPRAWIĆ żeby zwracane były tylko username i punkty
  return { fetchTop10Scores };
}
