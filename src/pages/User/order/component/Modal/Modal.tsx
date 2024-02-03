import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import {
  Button,
  CircularProgress,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

import useBooking from "./hook/useBooking";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #00acc1",
  boxShadow: 24,
  p: 4,
};
interface modalProps {
  onClose: () => void;
  isOpen: boolean;
  price: number;
}
const TransitionsModal: React.FC<modalProps> = ({ onClose, isOpen, price }) => {
  const { formik, isPending, isSuccess } = useBooking();
  React.useEffect(() => {
    if (isSuccess) onClose();
  }, [isSuccess, onClose]);
  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={isOpen}
        onClose={onClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={isOpen}>
          <Box sx={style}>
            <Typography
              id="transition-modal-title"
              variant="h6"
              mb={1}
              component="h2"
              sx={{ textAlign: "center", color: "#00acc1" }}
            >
              Enter Your Information
            </Typography>
            <Divider />

            <form onSubmit={formik.handleSubmit}>
              <div style={{ margin: "1rem 0px" }}>
                <FormControl fullWidth sx={{ mt: 2 }}>
                  <InputLabel id="demo-simple-select-helper-label">
                    Select City
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    name="paymentMethod"
                    label="Payment Method"
                    value={formik.values.paymentMethod}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.paymentMethod &&
                      Boolean(formik.errors.paymentMethod)
                    }
                  >
                    {["Cash", "Credit Card"].map((method) => (
                      <MenuItem value={method} key={method}>
                        {method}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>

              <div>
                <TextField
                  id="totalCost"
                  name="totalCost"
                  label="Total Cost"
                  type="number"
                  variant="outlined"
                  onChange={formik.handleChange}
                  value={price}
                  error={
                    formik.touched.totalCost && Boolean(formik.errors.totalCost)
                  }
                  helperText={
                    formik.touched.totalCost && formik.errors.totalCost
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
                {isPending ? (
                  <CircularProgress size={24} color="inherit" />
                ) : (
                  "Book"
                )}
              </Button>
            </form>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};
export default TransitionsModal;
