import { Navigate } from "react-router-dom";
import { useUser } from "../src/context/UserContext";

const ProtectedRoute = ({ children, isPublicOnly = false }) => {
  const { token } = useUser();

  if (isPublicOnly) {
    if (token) {
      return <Navigate to="/" replace />;
    }
  } else {
    if (!token) {
      return <Navigate to="/login" replace />;
    }
  }

  return children;
};

export default ProtectedRoute;
