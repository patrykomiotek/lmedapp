import { Navigate } from "react-router-dom";
import { useAuthContext } from "./Auth/AuthContext";

type Props = {
  children: React.ReactNode;
};

export const ProtectedRoute = ({ children }: Props) => {
  const context = useAuthContext();
  if (context.isLogged) {
    return children;
  }
  return <Navigate to="/auth" />;
};
