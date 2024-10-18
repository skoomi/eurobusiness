import { useAuthContext } from "../../contexts/AuthContext";

export default function User() {
  const { user } = useAuthContext();
  // const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault(); // Prevent form default action

  //   await logout();
  // };

  return (
    <>
      {user ? (
        <div className="bg-white w-96 p-4 shadow-xl">
          <div className="border-4 border-solid border-black p-4 grid gap-2">
            <form method="post" className="grid gap-2">
              <div
                // type="submit"
                className="border-4 border-solid border-black p-4 bg-[#066FB4]"
              >
                <p className="text-center text-white text-2xl">
                  {user.username}
                </p>
              </div>
              <p className="ml-4 text-2xl">email: {user.email}</p>
              <p className="ml-4 text-2xl">games played: {user.gamesPlayed}</p>
              <p className="ml-4 text-2xl">points: {user.points}</p>
            </form>
          </div>
        </div>
      ) : (
        <p>Loading user data...</p> // Display a loader or fallback
      )}
    </>
  );
}
