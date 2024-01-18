import {
  IconButton,
  ImageListItem,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "../AppBarHeader/AppBarHeader";
import { useAppSelector } from "../../store";
import { handleToggle } from "../../features/openSlice/openSlice";
import { useDispatch } from "react-redux";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { logOut } from "../../features/authSlice/authSlice";
import useStyles from "./styles";
const AppBarMUI: React.FC = () => {
  const { open } = useAppSelector((state) => state.open);
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleToggleDrawer = () => {
    dispatch(handleToggle({ open: !open }));
  };
  const handleLogout = () => {
    dispatch(logOut());
  };
  return (
    <AppBar position="fixed">
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleToggleDrawer}
          edge="start"
          sx={{
            marginRight: 5,
          }}
        >
          <MenuIcon />
        </IconButton>
        <Typography margin={"0px auto"} variant="h6" noWrap component="div">
          <Stack
            direction="row"
            sx={{
              height: (theme) => theme.mixins.toolbar.minHeight,
              alignItems: "baseline",
              maxWidth: "275px",
              gap: 1,
              mb: 0.5,
            }}
          >
            <ImageListItem>
              <img
                src="assets/logo.png"
                style={{ height: 54, width: 54, borderRadius: "50%" }}
                alt="logo"
              />
            </ImageListItem>
            <ImageListItem className={classes.imgItem}>
              <img
                src="assets/logo-text.png"
                style={{
                  filter: `brightness(0) invert(1)`,
                  height: "100% !important",
                  width: "100% !important",
                }}
                alt="logo"
              />
            </ImageListItem>
          </Stack>
        </Typography>

        <IconButton sx={{ color: "white" }}>
          <ShoppingCartIcon />
        </IconButton>
        <IconButton sx={{ color: "white" }} onClick={handleLogout}>
          <ExitToAppIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarMUI;
