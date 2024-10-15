import { useState } from "react";
import ModalError from "../modals/ModalError";
import { useAuthService } from "../../auth/AuthService";

export default function Login() {
  const { login } = useAuthService();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [modalText] = useState<string>("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent form default action

    login({ email, password });
  };
  return (
    <>
      <ModalError
        show={showModal}
        text={modalText}
        onClick={() => setShowModal(false)}
      />
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
