import { useContext } from "react";
import { AuthContext } from "./AuthContext";

export const AuthCredentials = () => {
  const context = useContext(AuthContext);

  return (
    <div>
      <p>Is logged: {context.isLogged ? "YES" : "NO"}</p>
      <button onClick={() => context.setIsLogged((value) => !value)}>
        Toggle auth
      </button>
    </div>
  );
};
