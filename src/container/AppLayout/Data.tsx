import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import OnlinePredictionIcon from "@mui/icons-material/OnlinePrediction";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import HotelIcon from "@mui/icons-material/Hotel";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import { data } from "./types";
export const userData: data[] = [
  { icon: <ManageSearchIcon />, title: "Search Bar", route: "/" },
  { icon: <OnlinePredictionIcon />, title: "Featured Deals", route: "/deals" },
  { icon: <HotelIcon />, title: "Recently Hotels", route: "/hotels" },
  {
    icon: <AutoFixHighIcon />,
    title: "Trending  Highlights",
    route: "/hightlights",
  },
];
export const adminData: data[] = [
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
