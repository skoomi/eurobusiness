import { createContext, ReactNode, useContext, useState } from "react";

type AuthContext = {
  jwtToken: string | undefined;
  setJwtToken: React.Dispatch<React.SetStateAction<string | undefined>>;
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
};

const AuthContext = createContext<AuthContext | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [jwtToken, setJwtToken] = useState<string | undefined>(undefined);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <AuthContext.Provider
      value={{
        jwtToken,
        setJwtToken,
        isAuthenticated,
        setIsAuthenticated,
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
