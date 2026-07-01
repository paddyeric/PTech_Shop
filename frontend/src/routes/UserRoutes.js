import { Outlet, Navigate } from "react-router-dom";
import { isAuthenticated } from "../auth/authentication";

const UserRoutes = () => {
  return isAuthenticated() ? <Outlet /> : <Navigate to={"/login"} replace />;
};

export default UserRoutes;
