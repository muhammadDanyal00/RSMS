import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const AuthenticatedRoute = ({ token, children }) => {
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children ? children : <Outlet />;
};

export default AuthenticatedRoute;
