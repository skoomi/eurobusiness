import { useAuthContext } from "../contexts/AuthContext";

interface AuthData {
  email: string;
  password: string;
}

export function useAuthService() {
  const { setJwtToken, setIsAuthenticated } = useAuthContext();
  const serverUrl = import.meta.env.VITE_NODE_SERVER_URL;

  const login = async (authData: AuthData) => {
    const response = await fetch(serverUrl + "/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(authData),
      // credentials: "include", // dodaje ciasteczka
    });

    if (response.status == 404) {
      throw new Error("Login failed - account for that email does not exist.");
    } else if (response.status === 401) {
      throw new Error("Login failed - wrong password.");
    } else if (response.status === 400) {
      throw new Error("Login failed - all fields required.");
    } else if (response.ok) {
      setIsAuthenticated(true);
      const resToken = await response.json();
      setJwtToken(resToken);
    }
  };

  const logout = async () => {
    const response = await fetch(serverUrl + "/auth/logout", {
      method: "GET",
      credentials: "include", // dodaje ciasteczka
    });

    if (response.ok) {
      setIsAuthenticated(false);
      setJwtToken(undefined);
    } else {
      throw new Error("Logout failed ");
    }
  };

  return { login, logout };
}
