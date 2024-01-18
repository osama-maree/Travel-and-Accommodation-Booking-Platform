import React, { FC, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectRoute";
import { UserRole } from "../constant/auth";
import BlockUI from "../container/BlockUI";
const AdminHome = lazy(() => import("../pages/Admin"));
const Login = lazy(() => import("../pages/Login"));
const UserHome = lazy(() => import("../pages/User"));
const RecentlyHotel = lazy(
  () => import("../pages/User/component/RecentlyHotel")
);
const FeaturedDeal = lazy(
  () => import("../pages/User/component/FeaturedDeals")
);
const AppLayout = lazy(() => import("../container/AppLayout"));
const TrendingHighLight = lazy(
  () => import("../pages/User/component/HighLight")
);
const Hotel = lazy(() => import("../pages/User/component/Hotel"));
const AppRoutes: FC = () => {
  const { User, Admin } = UserRole;
  return (
    <Suspense fallback={<BlockUI isBlocked={true} />}>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route element={<AppLayout />}>
          <Route element={<ProtectedRoute allowedRoles={[User]} />}>
            <Route path="" element={<UserHome />} />
            <Route path="hotels" element={<RecentlyHotel />} />
            <Route path="deals" element={<FeaturedDeal />} />
            <Route path="hightlights" element={<TrendingHighLight />} />
            <Route path="hotel/:id" element={<Hotel />} />
          </Route>
          <Route element={<ProtectedRoute allowedRoles={[Admin]} />}>
            <Route path="admin" element={<AdminHome />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
