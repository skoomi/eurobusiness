import { useState } from "react";

export default function Login() {
  const [username, setUserame] = useState("");
  const [password, setPassword] = useState("");
  return (
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
  );
}
