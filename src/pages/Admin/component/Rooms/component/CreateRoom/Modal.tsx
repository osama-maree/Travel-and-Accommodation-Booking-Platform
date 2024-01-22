import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { Button, Divider, TextField } from "@mui/material";
import useCreateCity from "./hook/useCreateRoom";
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
  handleClose: () => void;
  open: boolean;
  id:number;
}
const TransitionsModal: React.FC<modalProps> = ({ handleClose, open,id }) => {
  const { formik, isPending } = useCreateCity(id);

  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography
              id="transition-modal-title"
              variant="h6"
              mb={1}
              component="h2"
              sx={{ textAlign: "center", color: "#00acc1" }}
            >
              Enter Room Information
            </Typography>
            <Divider />

            <form onSubmit={formik.handleSubmit}>
              <div style={{ margin: "1rem 0px" }}>
                <TextField
                  id="roomNumber"
                  name="roomNumber"
                  label="Room Number"
                  type="number"
                  variant="outlined"
                  onChange={formik.handleChange}
                  value={formik.values.roomNumber}
                  error={formik.touched.roomNumber && Boolean(formik.errors.roomNumber)}
                  helperText={formik.touched.roomNumber && formik.errors.roomNumber}
                  fullWidth
                />
              </div>

              <div>
                <TextField
                  id="cost"
                  name="cost"
                  label="($) Cost"
                  type="number"
                  variant="outlined"
                  onChange={formik.handleChange}
                  value={formik.values.cost}
                  error={
                    formik.touched.cost &&
                    Boolean(formik.errors.cost)
                  }
                  helperText={
                    formik.touched.cost && formik.errors.cost
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
                Create
              </Button>
            </form>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};
export default TransitionsModal;
