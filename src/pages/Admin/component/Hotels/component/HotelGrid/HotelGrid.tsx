import * as React from "react";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TableBody from "./component/TableBody";
import useDebounce from "../../../../../../hooks/useDebounse";
import useSearch from "../../../../context/useAdmin";
import { ModalType, Search, types } from "../../../../types";
import UpdateHotel from "./component/UpdateHotel";
import { hotel } from "./api/types";
import { INITIAL_FORM_STATE } from "../CreateHotel/constant";
export default function HotelGrid() {
  const { Params, open, setOpen } = useSearch();
  const debouncedSearchValue: Search | null = useDebounce<Search>(Params, 1000);
  const handleClose = () => {
    setOpen((prev: ModalType) => {
      return { ...prev, hotel: { ...INITIAL_FORM_STATE, id: 0 } };
    });
  };

  const handleOpen = (hotel: hotel) => {
    setOpen(() => {
      return { hotel, type: types.EDIT, open: true };
    });
  };

  return (
    <>
      <TableContainer component={Paper} sx={{ mt: 2 }}>
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell
                align="center"
                sx={{ display: { xs: "none", md: "block" } }}
              >
                Description
              </TableCell>
              <TableCell align="center">Rating</TableCell>
              <TableCell align="center">Delete</TableCell>
              <TableCell align="center">Edit</TableCell>
            </TableRow>
          </TableHead>
          <TableBody
            searchTerm={debouncedSearchValue}
            handleOpen={handleOpen}
          />
        </Table>
      </TableContainer>
      {open.type === types.EDIT && open.hotel?.description !== "" && (
        <UpdateHotel open={open} handleClose={handleClose} />
      )}
    </>
  );
}
