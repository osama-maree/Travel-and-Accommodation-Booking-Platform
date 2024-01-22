import React from "react";
import { Grid, Paper} from "@mui/material";
import HotelCard from "../HotelCard";
import useDebounce from "../../../../hooks/useDebounse";
import { dataTypes } from "../../types";
import useSearch from "../../context/useSearch";
import Filter from "../Filter";

const MainSection: React.FC = () => {
  const { data } = useSearch();
  const debouncedSearchValue: dataTypes | null = useDebounce<dataTypes>(data, 1000);
  return (
    <Grid container spacing={2} marginTop={1}>
      <Grid item xs={12} md={3}>
        <Paper style={{ padding: 20 }}>
          <Filter/>
        </Paper>
      </Grid>

      <Grid item xs={12} md={9}>
        <Paper style={{ padding: 1 }}>
          <HotelCard searchTerm={debouncedSearchValue} />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default MainSection;
