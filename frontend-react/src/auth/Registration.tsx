import { useState } from "react";

export default function Registration() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    const user = { name, email, password };
    console.log(user);
    const res = await fetch("http://localhost:80/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(user),
    });

    if (res.ok) {
      //   const data = await res.json();
      //   alert("User registered successfully!");
    } else {
      //   const message = await res.text();
    }
  };

  return (
    <div className="bg-white w-96 p-4 shadow-xl">
      <div className="border-4 border-solid border-black p-4 grid gap-2">
        <button
          onClick={handleSubmit}
          type="submit"
          className="border-4 border-solid border-black p-4 bg-[#066FB4]"
        >
          <p className="text-center text-white text-2xl">Zarejestruj się</p>
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
        <ul className="list-disc justify-self-center">
          <li>rezerwacja nazwy gracza</li>
          <li>udział w rankingu</li>
          <li>możliwość gry ze znajomymi</li>
          <li>historia rozegranych gier</li>
        </ul>
      </div>
    </div>
  );
}
