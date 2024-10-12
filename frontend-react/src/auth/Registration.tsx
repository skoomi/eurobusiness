import { useState } from "react";

export default function Registration() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: any) => {
    event.preventDefault(); // Prevent form default action
    console.log("handleSubmit");

    const user = { email, password };
    const nodeAppHttpsUrl = import.meta.env.VITE_RENDER_NODE_HTTPS_URL;
    try {
      const response = await fetch(nodeAppHttpsUrl + "/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(user),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
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
  );
}