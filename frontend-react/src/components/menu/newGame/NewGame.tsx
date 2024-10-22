import { useAuthContext } from "../../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { Field } from "../../../models/Field";
import { useEffect, useState } from "react";
import { Property } from "../../../models/Property";
import { useFieldService } from "../../../services/FieldService";
import { useGameService } from "../../../services/GameService";
import MySimpleButton from "../../MySimpleButton";
import { GameState } from "../../../models/GameState";

export default function NewGame() {
  const navigate = useNavigate();

  const { user } = useAuthContext();
  const { fetchFieldsByPreset } = useFieldService();
  const { startNewGame } = useGameService();

  const [presetName] = useState("default");
  const [fields, setFields] = useState<Field[]>([]);

  useEffect(() => {
    fetchFields();
  }, [presetName]);

  const fetchFields = async () => {
    const fields = await fetchFieldsByPreset(presetName);
    setFields(fields);
  };

  const handleNewGame = async () => {
    if (!user) {
      throw new Error("Do rozpoczęcia gry musisz się zalogować");
    }

    const initGame = initializeGame();

    const response = await startNewGame(initGame);
    if (response.status == 201) {
      const game = (await response.json()) as GameState;
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
    } as GameState;
  };
  return (
    <>
      <MySimpleButton onClick={handleNewGame} text="Nowa gra" />
    </>
  );
}
