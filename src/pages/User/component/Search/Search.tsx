import React from "react";
import useSearch from "../../context/useSearch";
import { Box, Grid, TextField, Typography } from "@mui/material";
import DatePiker from "../DatePiker";
import "./styles.css";
const Search = () => {
  const { data, setData } = useSearch();
  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (data) {
      setData({ ...data, [name]: value });
    }
  };
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} md={6}>
        <TextField
          id="outlined-search"
          label="Search for hotels, cities..."
          type="search"
          name="city"
          value={data?.city}
          onChange={onChange}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Box sx={{ display: "flex", gap: 1 }}>
          <Typography>
            <DatePiker data={data} setData={setData} />
          </Typography>
          <Box className="boxInput">
            <input
              type="number"
              min={0}
              value={data?.adults}
              name="adults"
              onChange={onChange}
              className="searchInput"
            />
            <Typography>adult, </Typography>
            <input
              type="number"
              min={0}
              value={data?.children}
              onChange={onChange}
              name="children"
              className="searchInput"
            />
            <Typography paddingRight={1}>Children, </Typography>
            <input
              type="number"
              value={data?.numberOfRooms}
              name="numberOfRooms"
              min={1}
              onChange={onChange}
              className="searchInput"
            />
            <Typography paddingRight={1}>Rooms</Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Search;
