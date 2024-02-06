import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { Button, Divider, TextField } from "@mui/material";
import useCreateCity from "./hook/useCreateCity";

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
}
const TransitionsModal: React.FC<modalProps> = ({ handleClose, open }) => {
  const { formik, isPending } = useCreateCity();

  return (
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
              Enter City Information
            </Typography>
            <Divider />

            <form onSubmit={formik.handleSubmit}>
              <div style={{ margin: "1rem 0px" }}>
                <TextField
                  id="name"
                  name="name"
                  label="name"
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
                  label="description"
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
  );
};
export default TransitionsModal;
