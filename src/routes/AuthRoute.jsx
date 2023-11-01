import { useAuth } from "../context/AuthProvider";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const AuthRoute = () => {
  const token = sessionStorage.getItem('token')
  const location = useLocation();


  return token ? (
    <Outlet />
  ) : (
    <Navigate to={"/login"} replace state={{ path: location.pathname }} />
  );
};

export default AuthRoute;