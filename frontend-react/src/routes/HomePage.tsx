import Leaderboard from "../components/menu/leaderboard/Leaderboard";
import Logout from "../components/menu/auth/Logout";
import Login from "../components/menu/auth/Login";
import Registration from "../components/menu/auth/Registration";
import { useAuthContext } from "../contexts/AuthContext";
import User from "../components/menu/user/User";
import NewGame from "../components/menu/newGame/NewGame";
import LoadGame from "../components/menu/loadGame/LoadGame";

export default function HomePage() {
  // const [, setFields] = useState<Field[]>([]);
  const { isAuthenticated } = useAuthContext();

  // useEffect(() => {
  //   const fetchFields = async () => {
  //     const serverUrl = import.meta.env.VITE_NODE_SERVER_URL;
  //     const response = await fetch(serverUrl + "/fields");
  //     const resField = (await response.json()) as Field[];
  //     setFields(resField);
  //   };

  //   fetchFields();
  // }, []);

  return (
    <>
      <div className="grid grid-cols-[1fr_2fr_1fr]">
        <div className="menu-left grid gap-2 m-10">
          {isAuthenticated && <NewGame />}
          {isAuthenticated && <LoadGame />}
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
        <div> Demo gierki </div>

        <div className="menu-right grid gap-2 m-10">
          {isAuthenticated && <Logout />}
          <Leaderboard />
        </div>
      </div>
    </>
  );
}
