import { Paper, Grid, TextField, IconButton, Tooltip } from "@mui/material";
import React from "react";
import useSearch from "../../context/useSearch";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ModalMUI from "../CreateCity/Modal";
const SearchCity = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { Params, setParams } = useSearch();
  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (Params) setParams({ ...Params, [name]: value });
  };
  return (
    <Paper sx={{ padding: 1 }}>
      <Grid container columnSpacing={1}>
        <Grid item xs={12} md={5} sx={{ mb: { xs: 2, md: 0 } }}>
          <TextField
            label="City"
            onChange={onChange}
            name="name"
            placeholder="The name of the city or a part of it to search for.."
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
            placeholder="A string to search for in the city descriptions..."
            fullWidth
          />
          <Tooltip title="Add City">
            <IconButton color="primary" onClick={handleOpen}>
              <AddCircleOutlineIcon />
            </IconButton>
          </Tooltip>
        </Grid>
      </Grid>
      <ModalMUI open={open} handleClose={handleClose} />
    </Paper>
  );
};

export default SearchCity;
