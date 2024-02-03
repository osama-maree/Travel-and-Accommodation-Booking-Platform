import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles(() => ({
  root: {
    padding: 20,
  },
  productionError: {
    justifyContent: "center",
    alignItems: "center",
  },
  error: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  icon: {
    margin: 10,
  },
  errorMessage: {
    fontSize: "1.2rem",
    overflow: "auto",
  },
  errorStack: {
    padding: "15px",
    border: "2px solid lightgrey",
    background: "#fdfdfd",
    borderRadius: "4px",
    fontSize: "1.1rem",
    overflow: "auto",
  },
}));

export default useStyles;
