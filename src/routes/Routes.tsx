import { FC, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectRoute";
import { UserRole } from "../constant/auth";
import BlockUI from "../container/BlockUI";
const PageNotFound=lazy(()=>import("../pages/PageNotFound"));
const Order = lazy(() => import("../pages/User/order"));
const AdminHome = lazy(() => import("../pages/Admin"));
const Hotels = lazy(() => import("../pages/Admin/component/Hotels"));
const Rooms = lazy(() => import("../pages/Admin/component/Rooms"));
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
            <Route path="order" element={<Order />} />
          </Route>
          <Route element={<ProtectedRoute allowedRoles={[Admin]} />}>
            <Route path="manageCities" element={<AdminHome />} />
            <Route path="manageHotels" element={<Hotels />} />
            <Route path="manageRooms" element={<Rooms />} />
          </Route>
          <Route path="*" element={<PageNotFound/>}/>
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
