import { useAuthContext } from "../contexts/AuthContext";
import { User } from "../models/User";

type AuthData = {
  email: string;
  password: string;
};

export function useAuthService() {
  const { setIsAuthenticated, setUser } = useAuthContext();
  const serverUrl = import.meta.env.VITE_NODE_SERVER_URL;

  const login = async (authData: AuthData) => {
    try {
      const response = await fetch(serverUrl + "/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(authData),
        credentials: "include", // dodaje ciasteczka
      });
      if (response.ok) {
        const user = (await response.json()) as User;
        setUser(user);
        setIsAuthenticated(true);
      }

      return response.status;
    } catch (error) {
      throw new Error((error as Error).message);
    }
  };

  const logout = async () => {
    try {
      const response = await fetch(serverUrl + "/auth/logout", {
        method: "GET",
        credentials: "include", // dodaje ciasteczka
      });
      if (response.ok) {
        setUser(undefined);
        setIsAuthenticated(false);
      }
    } catch {
      throw new Error("Logout failed ");
    }
  };

  return { login, logout };
}
