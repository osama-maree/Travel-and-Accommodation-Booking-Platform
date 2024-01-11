import React, { FC, PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { ProtectedRouteProps } from "./types";
import BlockUI from "../container/BlockUI";
import { useAppSelector } from "../store";

const ProtectedRoute: FC<PropsWithChildren<ProtectedRouteProps>> = ({
  allowedRoles,
}) => {
  const { token, userType } = useAppSelector((state) => state.auth);
  const location = useLocation();
  if (!token)
    return <Navigate to="/login" replace state={{ from: location.pathname }} />;
  if (!allowedRoles?.includes(userType)) return <BlockUI isBlocked />;
  return <Outlet />;
};

export default ProtectedRoute;
