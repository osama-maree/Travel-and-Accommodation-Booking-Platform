import makeStyles from "@mui/styles/makeStyles";
const useStyles = makeStyles(() => ({
  root: {
    padding: "2",
    position: "relative",
    backgroundColor: "white !important",
    borderRadius: "5px",
    boxShadow: "-3px 2px 32px -2px rgba(0,0,0,0.37)",
  },
  avatar: {
    bgcolor: "secondary.main",
    backgroundColor: "primary.main",
    position: "absolute",
    top: `-20px`, // -padding - half of the avatar size
    left: "calc(50% - 20px)",
  },
  login: {
    backgroundColor: "rgb(245,245,245)",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default useStyles;
