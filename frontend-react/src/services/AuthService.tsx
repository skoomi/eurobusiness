import { useAuthContext } from "../contexts/AuthContext";

interface AuthData {
  email: string;
  password: string;
}

export function useAuthService() {
  const { setJwtToken, setIsAuthenticated } = useAuthContext();
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
        setIsAuthenticated(true);
        const resToken = await response.json();
        setJwtToken(resToken);
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
      console.log("front response:");
      console.log(response);
      if (response.ok) {
        setIsAuthenticated(false);
        setJwtToken(undefined);
      }
    } catch {
      throw new Error("Logout failed ");
    }
  };

  return { login, logout };
}
