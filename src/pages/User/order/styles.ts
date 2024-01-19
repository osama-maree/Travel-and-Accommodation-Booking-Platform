import makeStyles from "@mui/styles/makeStyles";
const useStyles = makeStyles(() => ({
  box: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  price: {
    color: "#00acc1",
    border: "solid 1px #00acc1",
  },
  alert: {
    margin: "1rem 0px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default useStyles