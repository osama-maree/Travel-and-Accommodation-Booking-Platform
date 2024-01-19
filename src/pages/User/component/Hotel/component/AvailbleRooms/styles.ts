import makeStyles from "@mui/styles/makeStyles";
const useStyles = makeStyles(() => ({
  root: {
    height: "626px",
    overflow: "scroll",
    overflowX: "hidden",
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  box: {
    display: "flex",
    alignItems: "center",
    mb: 1,
  },
  stack: {
    bgcolor: "white",
    color: "#e1bee7",
    borderRadius: "10px",
    border: "1px solid #eeee",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  typo: {
    display: "flex",
    alignItems: "center",
  },
  cardAction: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "0px",
    paddingTop: "0px",
  },
}));
export default useStyles;