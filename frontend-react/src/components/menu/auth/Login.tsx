import { useRef, useState } from "react";
import { useAuthService } from "../../../services/AuthService";
import Modal from "../../modal/Modal";

export default function Login() {
  const { login } = useAuthService();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [modalMessage, setModalMessage] = useState("");

  const loginModalRef = useRef<HTMLDialogElement>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent form default action
    try {
      const responseCode = await login({ email, password });
      if (responseCode === 200) {
        setModalMessage("Zalogowano");
        loginModalRef.current?.showModal();
      } else if (responseCode === 401) {
        setModalMessage("Błędne hasło");
        loginModalRef.current?.showModal();
      } else if (responseCode === 404) {
        setModalMessage("Użytkownik nie istnieje");
        loginModalRef.current?.showModal();
      } else if (responseCode === 400) {
        setModalMessage("Uzupełnij oba pola");
        loginModalRef.current?.showModal();
      }
    } catch (error) {
      console.log(error);
      setModalMessage("Nieznany błąd");
      loginModalRef.current?.showModal();
    }
  };

  const closeModal = () => {
    loginModalRef.current?.close();
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
              <p className="text-center text-white text-2xl">Zaloguj się</p>
            </button>
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
        </div>
      </div>
    </>
  );
}
