import { useLocation, Navigate, Outlet } from "react-router-dom";
import AuthContext from "../context/AuthContext";

import React, { useContext } from "react";

function RequireAuth({ allowedRoles }) {
  // const { auth } = useAuth();
  const authCtx = useContext(AuthContext);
  const location = useLocation();

  return authCtx.user?.roles?.find((role) => allowedRoles?.includes(role)) ? (
    <Outlet />
  ) : authCtx.isLoggedIn ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace /> //burdaki replace keywordu: Login değilsin, protected bir route'a tıkladın seni logine attı, login olmak istemedin ve tarayıcının geri tuşuyla bir önceki sayfaya gidebiliyosun bu keyword sayesinde. Aksi taktirde enteresan bi şekilde loginde kalıyosun geri gidemiyosun.
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}

export default RequireAuth;
