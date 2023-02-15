import { useAuth } from "./Auth-context";
import { useHistory } from "react-router-dom";
import Loading from "../Loading/Loading";

export const ProtectedRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  const history = useHistory();

  if (loading) return <Loading />;
  if (!user) history.push("/login");
  return <>{children}</>;
};
