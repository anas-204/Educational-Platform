import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";
const ProtectedRoute = ({ children, role }) => {
  const user = localStorage.getItem("userType");

  if (!user) {
    return <Navigate to="/" />;
  }
  if (role && user !== role) {
    Cookies.remove("token");
    localStorage.removeItem("userType");
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
