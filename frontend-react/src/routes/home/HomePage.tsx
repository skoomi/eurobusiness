import { useEffect, useState } from "react";
import Leaderboard from "../../components/leaderboard/Leaderboard";
import Menu from "../../components/menu/Menu";

interface Field {
  id: number;
  name: string;
  orderNumber: number;
}
export default function HomePage() {
  const [, setFields] = useState<Field[]>([]);

  useEffect(() => {
    const fetchFields = async () => {
      const serverUrl = import.meta.env.VITE_NODE_SERVER_URL;
      const response = await fetch(serverUrl + "/fields");
      const resField = (await response.json()) as Field[];
      setFields(resField);
    };

    fetchFields();
  }, []);

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
