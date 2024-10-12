import Login from "../auth/Login";
import Registration from "../auth/Registration";

export default function Menu() {
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
      <Login />
      <Registration />
    </div>
  );
}
// #F8FAFC
// #1E293B
// #C1CBD7
