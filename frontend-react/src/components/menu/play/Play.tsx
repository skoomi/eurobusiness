import MySimpleButton from "../../MySimpleButton";
import { useAuthContext } from "../../../contexts/AuthContext";
import { Game } from "../../../models/Game";
import { useNavigate } from "react-router-dom";
import { Field } from "../../../models/Field";
import { useEffect, useState } from "react";
import { Property } from "../../../models/Property";

export default function Play() {
  const serverUrl = import.meta.env.VITE_NODE_SERVER_URL;
  const { user } = useAuthContext();

  const navigate = useNavigate();

  const [presetName, setPresetName] = useState("default");
  const [fields, setFields] = useState<Field[]>([]);

  useEffect(() => {
    fetchFieldsByPreset();
  }, [presetName]);

  const fetchFieldsByPreset = async () => {
    const response = await fetch(serverUrl + "/fields/" + presetName, {
      method: "GET",
      credentials: "include", // dodaje ciasteczka
    });
    if (response.ok) {
      const fields = (await response.json()) as Field[];
      setFields(fields);
    }
  };

  const handlePlayButtonClick = async () => {
    if (!user) {
      throw new Error("Do rozpoczęcia gry musisz się zalogować");
    }

    const game = initializeGame();

    const response = await fetch(serverUrl + "/game/startNewGame", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      credentials: "include", // dodaje ciasteczka
      body: JSON.stringify({ game: game }),
    });
    if (response.status == 201) {
      const game = (await response.json()) as Game;
      navigate("/game", { state: { gameId: game._id } });
    }
  };

  const initializeGame = () => {
    const properties = fields.map((field) => {
      return {
        field: field,
        ownerId: null,
      } as Property;
    });
    return {
      startdate: new Date(Date.now()),

      history: [
        {
          turn: 0,
          players: [
            {
              username: user?.username,
              points: user?.points,
              balance: 1101,
              userId: user?.id,
            },
            {
              username: "222",
              points: 0,
              balance: 2202,
              userId: "671585e756be4cfc7f296466",
            },
          ],
          properties: properties,
        },
      ],
    } as Game;
  };
  return (
    <>
      <MySimpleButton onClick={handlePlayButtonClick} text="Graj" />
    </>
  );
}
