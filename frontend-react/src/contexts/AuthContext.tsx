import { createContext, ReactNode, useContext, useState } from "react";
import { User } from "../models/User";

type AuthContext = {
  // Nie przechowuję, bo przeglądarka ogarnia je w ciasteczkach
  // jwtToken: string | undefined;
  // setJwtToken: React.Dispatch<React.SetStateAction<string | undefined>>;
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  user: User | undefined;
  setUser: React.Dispatch<React.SetStateAction<User | undefined>>;
};

const AuthContext = createContext<AuthContext | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  // const [jwtToken, setJwtToken] = useState<string | undefined>(undefined);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | undefined>(undefined);

  return (
    <AuthContext.Provider
      value={{
        // jwtToken,
        // setJwtToken,
        isAuthenticated,
        setIsAuthenticated,
        user,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
// TO DO
// TODO
// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error("useAuthContext must be used with <AuthProvider>");
  }
  return authContext;
};
