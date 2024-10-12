import { useEffect, useState } from "react";
import Leaderboard from "../../leaderboard/Leaderboard";
import Menu from "../../menu/Menu";

interface Field {
  id: number;
  name: string;
  orderNumber: number;
}
export default function HomePage() {
  const [, setFields] = useState<Field[]>([]);

  useEffect(() => {
    const fetchFields = async () => {
      const asd = import.meta.env.VITE_RENDER_NODE_HTTPS_URL;
      const response = await fetch(asd + "/fields");
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
