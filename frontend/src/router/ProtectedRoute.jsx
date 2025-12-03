import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ children, allowedRoles }) {
  const { user } = useAuth();

  // Not logged in → go to login
  if (!user) return <Navigate to="/login" replace />;

  // If role restriction exists and user isn't allowed
  if (allowedRoles && !allowedRoles.includes(user.role)) {
    switch (user.role) {
      case "admin":
        return <Navigate to="/admin" replace />;
      case "staff":
        return <Navigate to="/staff" replace />;
      default:
        return <Navigate to="/user" replace />;
    }
  }

  // All good → allow access
  return children;
}
