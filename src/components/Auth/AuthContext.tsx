import { createContext, useState } from "react";

type AuthContextType = {
  isLogged: boolean;
  logIn: () => void;
  logOut: () => void;
  toggle: () => void;
};

export const AuthContext = createContext<AuthContextType>({
  isLogged: false,
  logIn: () => null,
  logOut: () => null,
  toggle: () => null,
});

const useAuth = () => {
  const [isLogged, setIsLogged] = useState(false);

  const logIn = () => setIsLogged(true);
  const logOut = () => setIsLogged(false);
  const toggle = () => setIsLogged((value) => !value);

  return { isLogged, logIn, logOut, toggle };
};

type Props = {
  children: React.ReactNode;
};

export const AuthProvider = ({ children }: Props) => {
  const { isLogged, logIn, logOut, toggle } = useAuth();
  return (
    <AuthContext.Provider value={{ isLogged, logIn, logOut, toggle }}>
      {children}
    </AuthContext.Provider>
  );
};
