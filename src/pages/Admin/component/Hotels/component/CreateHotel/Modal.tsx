import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import {
  Button,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";
import { Response } from "../../../CityGrid/api/types";
import { RequestBody } from "./types";
import { ModalType, types } from "../../../../types";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #00acc1",
  boxShadow: 24,
  p: 4,
};
interface modalProps {
  handleClose: () => void;
  open: ModalType;
  type: string;
  isPending: boolean;
  formik: ReturnType<typeof useFormik<RequestBody>>;
  data?: Response[] | undefined;
}
const TransitionsModal: React.FC<modalProps> = ({
  handleClose,
  open,
  type,
  isPending,
  formik,
  data,
}) => {
  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open.open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open.open}>
          <Box sx={style}>
            <Typography
              id="transition-modal-title"
              variant="h6"
              mb={1}
              component="h2"
              sx={{ textAlign: "center", color: "#00acc1" }}
            >
              Enter Hotel Information
            </Typography>
            <Divider />

            <form onSubmit={formik.handleSubmit}>
              {type === types.CREATE && (
                <FormControl fullWidth sx={{ mt: 2 }}>
                  <InputLabel id="demo-simple-select-helper-label">
                    Select City
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    name="cityId"
                    label="Select City"
                    value={formik.values.cityId}
                    onChange={formik.handleChange}
                  >
                    {data?.map((city) => (
                      <MenuItem value={city.id} key={city.id}>
                        {city.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              )}
              <div style={{ margin: "1rem 0px" }}>
                <TextField
                  id="name"
                  name="name"
                  label="Name"
                  type="text"
                  variant="outlined"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                  fullWidth
                />
              </div>
              <div>
                <TextField
                  id="description"
                  name="description"
                  label="Description"
                  type="text"
                  variant="outlined"
                  onChange={formik.handleChange}
                  value={formik.values.description}
                  error={
                    formik.touched.description &&
                    Boolean(formik.errors.description)
                  }
                  helperText={
                    formik.touched.description && formik.errors.description
                  }
                  fullWidth
                />
              </div>
              <div style={{ margin: "1rem 0px" }}>
                <TextField
                  id="hotelType"
                  name="Hotel Type"
                  label="hotelType"
                  type="number"
                  variant="outlined"
                  onChange={formik.handleChange}
                  value={formik.values.hotelType}
                  error={
                    formik.touched.hotelType && Boolean(formik.errors.hotelType)
                  }
                  helperText={
                    formik.touched.hotelType && formik.errors.hotelType
                  }
                  fullWidth
                />
              </div>
              <div>
                <TextField
                  id="starRating"
                  name="starRating"
                  type="number"
                  label="Rating"
                  variant="outlined"
                  onChange={formik.handleChange}
                  value={formik.values.starRating}
                  error={
                    formik.touched.starRating &&
                    Boolean(formik.errors.starRating)
                  }
                  helperText={
                    formik.touched.starRating && formik.errors.starRating
                  }
                  fullWidth
                />
              </div>
              <div style={{ margin: "1rem 0px" }}>
                <TextField
                  id="latitude"
                  name="latitude"
                  label="Latitude"
                  type="number"
                  variant="outlined"
                  onChange={formik.handleChange}
                  value={formik.values.latitude}
                  error={
                    formik.touched.latitude && Boolean(formik.errors.latitude)
                  }
                  helperText={formik.touched.latitude && formik.errors.latitude}
                  fullWidth
                />
              </div>
              <div>
                <TextField
                  id="longitude"
                  name="longitude"
                  label="Longitude"
                  type="number"
                  variant="outlined"
                  onChange={formik.handleChange}
                  value={formik.values.longitude}
                  error={
                    formik.touched.longitude && Boolean(formik.errors.longitude)
                  }
                  helperText={
                    formik.touched.longitude && formik.errors.longitude
                  }
                  fullWidth
                />
              </div>
              <Button
                type="submit"
                sx={{ mt: "1rem" }}
                variant="contained"
                fullWidth
                color="primary"
                disabled={isPending}
              >
                {`${type} Hotel`}
              </Button>
            </form>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};
export default TransitionsModal;
