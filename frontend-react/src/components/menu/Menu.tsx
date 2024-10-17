import { useAuthContext } from "../../contexts/AuthContext";
import Login from "../auth/Login";
import Logout from "../auth/Logout";
import Registration from "../auth/Registration";
import User from "../user/User";

export default function Menu() {
  const { isAuthenticated } = useAuthContext();

  return (
    <div className="grid gap-2 m-10 ">
      {isAuthenticated && <Logout />}
      {isAuthenticated && <User />}
      {!isAuthenticated && (
        <div className="bg-white w-96 p-4 shadow-xl">
          <div className="border-4 border-solid border-black p-4 grid gap-2">
            <button className="border-4 border-solid border-black p-4 bg-blue">
              <p className="text-center text-white text-2xl">
                Zagraj bez rejestracji
              </p>
            </button>
          </div>
        </div>
      )}

      {!isAuthenticated && <Login />}
      {!isAuthenticated && <Registration />}
    </div>
  );
}
// #F8FAFC
// #1E293B
// #C1CBD7
//CZERWONY ERROR #E73B27
//NIEBIESKI INFO #1076BE
//NIEBIESKI INFO2 #066FB4
//ZIELONY #18AC4C
//ŻÓŁTY #FCEF26
//POMARAŃCZ #FBAA1B
//MAGENTA #C92186
//BŁĘKIT #B5D9F3
