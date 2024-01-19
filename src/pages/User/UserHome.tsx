import { Paper } from "@mui/material";
import React from "react";
import MainSection from "./component/MainSection";
import { SearchProvider } from "./context/SearchContext";
import Search from "./component/Search";
const UserHome: React.FC = () => {
  return (
    <SearchProvider>
      <Paper sx={{ padding: 1 }}>
        <Search />
        <MainSection />
      </Paper>
    </SearchProvider>
  );
};

export default UserHome;
