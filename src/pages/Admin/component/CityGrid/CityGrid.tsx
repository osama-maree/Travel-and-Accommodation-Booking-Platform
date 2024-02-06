import * as React from "react";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import useDebounce from "../../../../hooks/useDebounse";
import { Search } from "../../types";
import useAdmin from "../../context/useAdmin";
import TableBody from "./TableBody";
export default function DenseTable() {
  const { Params } = useAdmin();
  const debouncedSearchValue: Search | null = useDebounce<Search>(Params, 1000);
  return (
    <TableContainer component={Paper} sx={{ mt: 2 }}>
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell
              align="center"
              sx={{ display: { xs: "none", md: "table-cell" } }}
            >
              Description
            </TableCell>
            <TableCell align="center">#Hotels</TableCell>
            <TableCell align="center">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody searchTerm={debouncedSearchValue} />
      </Table>
    </TableContainer>
  );
}
