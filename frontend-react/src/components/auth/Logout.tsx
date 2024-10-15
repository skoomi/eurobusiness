import { useAuthService } from "../../auth/AuthService";

export default function Logout() {
  const { logout } = useAuthService();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent form default action

    logout();
  };

  return (
    <>
      <div className="bg-white w-96 p-4 shadow-xl">
        <div className="border-4 border-solid border-black p-4 grid gap-2">
          <form method="post" onSubmit={handleSubmit} className="grid gap-2">
            <button
              type="submit"
              className="border-4 border-solid border-black p-4 bg-[#066FB4]"
            >
              <p className="text-center text-white text-2xl">Wyloguj się</p>
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
