import { useState } from "react";

export default function Menu() {
  const [username, setUserame] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="grid gap-2 m-10 ">
      <div className="bg-white w-96 p-4 shadow-xl">
        <div className="border-4 border-solid border-black p-4 grid gap-2">
          <button className="border-4 border-solid border-black p-4 bg-[#066FB4]">
            <p className="text-center text-white text-2xl">
              Zagraj bez rejestracji
            </p>
          </button>
        </div>
      </div>

      <br />

      <div className="bg-white w-96 p-4 shadow-xl">
        <div className="border-4 border-solid border-black p-4 grid gap-2">
          <button className="border-4 border-solid border-black p-4 bg-[#066FB4]">
            <p className="text-center text-white text-2xl">Zaloguj się</p>
          </button>
          <input
            className="justify-self-center border-2 border-solid border-[#1E293B] h-12 w-64 text-center "
            placeholder="email / login"
            value={username}
            onChange={(event) => setUserame(event.currentTarget.value)}
          />

          <input
            className="justify-self-center border-2 border-solid border-[#1E293B] h-12 w-64 text-center "
            placeholder="Hasło"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.currentTarget.value)}
          />
          <br />
        </div>
      </div>

      <br />

      <div className="bg-white w-96 p-4 shadow-xl">
        <div className="border-4 border-solid border-black p-4 grid gap-2">
          <button className="border-4 border-solid border-black p-4 bg-[#066FB4]">
            <p className="text-center text-white text-2xl">Zarejestruj się</p>
          </button>

          <h3></h3>
          <ul className="list-disc justify-self-center">
            <li>rezerwacja nazwy gracza</li>
            <li>udział w rankingu</li>
            <li>możliwość gry ze znajomymi</li>
            <li>historia rozegranych gier</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
// #F8FAFC
// #1E293B
// #C1CBD7
