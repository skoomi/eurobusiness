import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../../modal/Modal";

export default function LoadGame() {
  const navigate = useNavigate();

  const [gameId, setGameId] = useState("");

  const handleLoadGame = async () => {
    if (gameId.length != 24) {
      loginModalRef.current?.showModal();
    } else {
      navigate("/game", { state: { gameId: gameId } });
    }
  };

  const loginModalRef = useRef<HTMLDialogElement>(null);
  const closeModal = () => {
    loginModalRef.current?.close();
  };

  return (
    <>
      <Modal
        ref={loginModalRef}
        title="Błąd ładowania"
        message="Id gry musi mieć 24 znaki"
        close={closeModal}
      ></Modal>
      <div className="bg-white w-96 p-4 shadow-xl">
        <div className="border-4 border-solid border-black p-4 grid gap-2">
          <button
            onClick={handleLoadGame}
            className="border-4 border-solid border-black p-4 bg-[#066FB4]"
          >
            <p className="text-center text-white text-2xl">Załaduj grę</p>
          </button>
          <input
            className="justify-self-center border-2 border-solid border-[#1E293B] h-12 w-64 text-center "
            placeholder="Id gry"
            value={gameId}
            onChange={(event) => setGameId(event.currentTarget.value)}
          />
        </div>
      </div>
    </>
  );
}
