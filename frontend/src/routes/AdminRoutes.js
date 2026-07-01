import { Outlet, Navigate } from "react-router-dom";
import { isAuthenticated } from "../auth/authentication";

const AdminRoutes = () => {
  return isAuthenticated() && isAuthenticated().isAdmin ? (
    <Outlet />
  ) : (
    <Navigate to={"/login"} replace />
  );
};

export default AdminRoutes;
