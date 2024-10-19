import { useRef, useState } from "react";
import Modal from "../../modal/Modal";

export default function Registration() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [modalMessage, setModalMessage] = useState("");
  const loginModalRef = useRef<HTMLDialogElement>(null);
  const closeModal = () => {
    loginModalRef.current?.close();
  };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent form default action

    const registerReqBody = { username, email, password };
    const serverUrl = import.meta.env.VITE_NODE_SERVER_URL;

    try {
      const response = await fetch(serverUrl + "/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(registerReqBody),
      });
      if (response.status === 201) {
        setModalMessage("Utworzono użytkownika Możesz się zalogować");
        loginModalRef.current?.showModal();
        // setUsername("");
        // setEmail("");
        // setPassword("");
      } else if (response.status === 422) {
        setModalMessage("Użytkownik z podanym email juz istnieje");
        loginModalRef.current?.showModal();
      } else if (response.status === 400) {
        setModalMessage("Uzupełnij wszystkie pola");
        loginModalRef.current?.showModal();
      }
    } catch (error) {
      console.log(error);
      setModalMessage("Nieznany błąd");
      loginModalRef.current?.showModal();
    }
  };

  return (
    <>
      <Modal
        ref={loginModalRef}
        title="Błąd logowania"
        message={modalMessage}
        close={closeModal}
      ></Modal>
      <div className="bg-white w-96 p-4 shadow-xl">
        <div className="border-4 border-solid border-black p-4 grid gap-2">
          <form method="post" onSubmit={handleSubmit} className="grid gap-2">
            <button
              type="submit"
              className="border-4 border-solid border-black p-4 bg-[#066FB4]"
            >
              <p className="text-center text-white text-2xl">Zarejestruj się</p>
            </button>

            <input
              className="justify-self-center border-2 border-solid border-[#1E293B] h-12 w-64 text-center "
              placeholder="username"
              value={username}
              onChange={(event) => setUsername(event.currentTarget.value)}
            />

            <input
              className="justify-self-center border-2 border-solid border-[#1E293B] h-12 w-64 text-center "
              placeholder="email"
              value={email}
              onChange={(event) => setEmail(event.currentTarget.value)}
            />

            <input
              className="justify-self-center border-2 border-solid border-[#1E293B] h-12 w-64 text-center "
              placeholder="Hasło"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.currentTarget.value)}
            />
          </form>
          <ul className="list-disc justify-self-center">
            <li>rezerwacja nazwy gracza</li>
            <li>udział w rankingu</li>
            <li>możliwość gry ze znajomymi</li>
            <li>historia rozegranych gier</li>
          </ul>
        </div>
      </div>
    </>
  );
}
