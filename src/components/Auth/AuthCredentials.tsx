import { useAuthContext } from "./AuthContext";

export const AuthCredentials = () => {
  const context = useAuthContext();

  return (
    <div>
      <p>Is logged: {context.isLogged ? "YES" : "NO"}</p>
      <button onClick={() => context.toggle()}>Toggle auth</button>
    </div>
  );
};
