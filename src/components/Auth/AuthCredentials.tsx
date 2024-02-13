import { Text, Button } from "../../ui";
import { useAuthContext } from "./AuthContext";

export const AuthCredentials = () => {
  const context = useAuthContext();

  return (
    <div>
      <Text>Is logged: {context.isLogged ? "YES" : "NO"}</Text>
      <Button label="Toggle auth" onClick={() => context.toggle()} />
    </div>
  );
};
