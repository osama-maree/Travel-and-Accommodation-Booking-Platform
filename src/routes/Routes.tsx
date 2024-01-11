import React, { FC, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import BlockUI from "../container/BlockUI";
import UserHome from "../pages/User";
import ProtectedRoute from "./ProtectRoute";
import { UserRole } from "../constant/auth";
import AdminHome from "../pages/Admin";
const Login = lazy(() => import("../pages/Login"));

const AppRoutes: FC = () => {
  const { User, Admin } = UserRole;
  return (
    <Suspense fallback={<BlockUI isBlocked />}>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route element={<ProtectedRoute allowedRoles={[User]} />}>
          <Route path="" element={<UserHome />} />
        </Route>
        <Route element={<ProtectedRoute allowedRoles={[Admin]} />}>
          <Route path="admin" element={<AdminHome />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
