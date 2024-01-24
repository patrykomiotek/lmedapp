import { SetStateAction, Dispatch, createContext } from "react";

type AuthContextType = {
  isLogged: boolean;
  setIsLogged: Dispatch<SetStateAction<boolean>>;
};

export const AuthContext = createContext<AuthContextType>({
  isLogged: false,
  setIsLogged: () => null,
});
