import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import RoomsGrid from "../RoomsGrid";
import useGetHotels from "./hooks/useGetHotels";
import Loader from "../../../../../../container/Loader";
import TransitionsModal from "../CreateRoom/Modal";
import { Box } from "@mui/material";
export default function CollapsibleTable() {
  const { data, isLoading } = useGetHotels();
  const [open, setOpen] = React.useState(false);
  const [Id, setID] = React.useState(0);
  const handleOpen = (id: number) => {
    setOpen(true);
    setID(id);
  };
  const handleClose = () => setOpen(false);
  if (isLoading) return <Loader />;
  return (
    <Box>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Hotel Name</TableCell>
              <TableCell align="center">Rating</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((row) => (
              <RoomsGrid
                handleOpen={handleOpen}
                key={row.name}
                id={row.id}
                name={row.name}
                starRating={row.starRating}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TransitionsModal handleClose={handleClose} open={open} id={Id} />
    </Box>
  );
}
