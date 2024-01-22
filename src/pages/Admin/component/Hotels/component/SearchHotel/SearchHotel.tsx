import { Paper, Grid, TextField, IconButton, Tooltip } from "@mui/material";
import React from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import useSearch from "../../../../context/useSearch";
import CreateHotel from "../HotelGrid/component/CreateHotel";
import { types } from "../../../../types";
const SearchHotel = () => {
  const { Params, setParams, open, setOpen } = useSearch();
  const handleOpen = () => setOpen({ open: true, type: types.CREATE });
  const handleClose = () => setOpen({ open: false, type: types.CREATE });
  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (Params) setParams({ ...Params, [name]: value });
  };
  return (
    <Paper sx={{ padding: 1 }}>
      <Grid container columnSpacing={1}>
        <Grid item xs={12} md={5} sx={{ mb: { xs:1, md: 0 } }}>
          <TextField
            label="Hotel Name"
            onChange={onChange}
            name="name"
            placeholder="The name of the hotel or a part of it to search for.."
            fullWidth
          />
        </Grid>

        <Grid
          item
          xs={12}
          md={7}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <TextField
            label="Description"
            onChange={onChange}
            name="searchQuery"
            placeholder="A string to search for in the hotel descriptions..."
            fullWidth
          />
          <Tooltip title="Add Room">
            <IconButton color="primary" onClick={handleOpen}>
              <AddCircleOutlineIcon />
            </IconButton>
          </Tooltip>
        </Grid>
      </Grid>
      {open.type === types.CREATE && (
        <CreateHotel open={open} handleClose={handleClose} />
      )}
    </Paper>
  );
};

export default SearchHotel;
