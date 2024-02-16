import Box from "@mui/material/Box";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useAppSelector } from "../../store";
import AppBar from "../AppBar";
import Drawer from "../Drawer";
import DrawerHeader from "../DrawerHeader";
import React from "react";
import { Link, Outlet } from "react-router-dom";
import { UserRole } from "../../constant/auth";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import OnlinePredictionIcon from "@mui/icons-material/OnlinePrediction";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import HotelIcon from "@mui/icons-material/Hotel";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import { data } from "./types";
const userData: data[] = [
  { icon: <ManageSearchIcon />, title: "Search Bar", route: "/" },
  { icon: <OnlinePredictionIcon />, title: "Featured Deals", route: "/deals" },
  { icon: <HotelIcon />, title: "Recently Hotels", route: "/hotels" },
  {
    icon: <AutoFixHighIcon />,
    title: "Trending  Highlights",
    route: "/hightlights",
  },
];
const adminData: data[] = [
  {
    icon: <LocationCityIcon />,
    title: "Manage Cities",
    route: "/manageCities",
  },
  {
    icon: <ManageAccountsIcon />,
    title: "Manage Hotels",
    route: "/manageHotels",
  },
  {
    icon: <FamilyRestroomIcon />,
    title: "Manage Rooms",
    route: "/manageRooms",
  },
];

const AppLayout: React.FC = () => {
  const { open } = useAppSelector((state) => state.open);
  const { userType, token } = useAppSelector((state) => state.auth);
  const { Admin } = UserRole;
  const data = userType === Admin ? adminData : userData;
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar />
      {token && (
        <Drawer variant="permanent" open={open}>
          <DrawerHeader />
          <List>
            {data.map((item, index) => (
              <Link
                to={item.route}
                key={index}
                style={{ textDecoration: "none", color: "black" }}
              >
                <ListItem disablePadding sx={{ display: "block" }}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.title}
                      sx={{ opacity: open ? 1 : 0 }}
                    />
                  </ListItemButton>
                </ListItem>
              </Link>
            ))}
          </List>
        </Drawer>
      )}
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Outlet />
      </Box>
    </Box>
  );
};
export default AppLayout;
