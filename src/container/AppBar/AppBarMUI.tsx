import {
  IconButton,
  ImageListItem,
  Box,
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
import { UserRole } from "../../constant/auth";
import { useNavigate } from "react-router";

const AppBarMUI: React.FC = () => {
  const { open } = useAppSelector((state) => state.open);
  const { userType } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleToggleDrawer = () => {
    dispatch(handleToggle({ open: !open }));
  };
  const handleLogout = () => {
    dispatch(logOut());
  };
  const handleShopping = () => {
    navigate("/order");
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
          <Box
            sx={{
              gap: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ImageListItem>
              <img
                src="/assets/logo.png"
                style={{ height: 56, width: 56, borderRadius: "50%" }}
                alt="logo"
              />
            </ImageListItem>
            <ImageListItem className={classes.imgItem}>
              <img
                src="/assets/logo-text.png"
                style={{
                  filter: `brightness(0) invert(1)`,
                  height: "100% !important",
                  width: "100% !important",
                }}
                alt="logo"
              />
            </ImageListItem>
          </Box>
        </Typography>
        {userType === UserRole.User && (
          <IconButton sx={{ color: "white" }} onClick={handleShopping}>
            <ShoppingCartIcon />
          </IconButton>
        )}
        <IconButton sx={{ color: "white" }} onClick={handleLogout}>
          <ExitToAppIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarMUI;
