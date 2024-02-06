import {
  TableRow,
  TableBody as Body,
  TableCell,
  IconButton,
  Rating,
} from "@mui/material";
import React, { useCallback, useEffect } from "react";
import useSWR from "swr";
import DeleteIcon from "@mui/icons-material/Delete";
import { Search } from "../../../../../types";
import { searchHotel } from "../api";
import useDeleteHotel from "../hooks/useDeleteHotel";
import { Edit } from "@mui/icons-material";
import { hotel } from "../api/types";
import useAdmin from "../../../../../context/useAdmin";

interface bodyProps {
  searchTerm: Search | null;
  handleOpen: (row: hotel) => void;
}
const TableBody: React.FC<bodyProps> = ({ searchTerm, handleOpen }) => {
  const { data } = useSWR("hotels", () => searchHotel(searchTerm));
  const { hotels, setHotels } = useAdmin();
  const { mutate } = useDeleteHotel();
  const handleDelete = useCallback(
    (id: number) => {
      mutate(id);
    },
    [mutate]
  );
  useEffect(() => {
    if (data) {
      setHotels(data);
    }
  }, [data, setHotels]);
  return (
    <Body>
      {hotels?.map((row) => (
        <TableRow
          key={row.id}
          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
        >
          <TableCell component="th" scope="row">
            {row.name}
          </TableCell>
          <TableCell
            align="center"
            sx={{ display: { xs: "none", md: "table-cell" } }}
          >
            {row.description}
          </TableCell>
          <TableCell align="center">
            <Rating name="read-only" value={row.starRating} readOnly />
          </TableCell>
          <TableCell align="center">
            <IconButton
              aria-label="delete"
              size="large"
              color="error"
              onClick={() => handleDelete(row.id)}
            >
              <DeleteIcon />
            </IconButton>
          </TableCell>
          <TableCell align="center">
            <IconButton
              aria-label="delete"
              size="large"
              color="warning"
              onClick={() => handleOpen(row)}
            >
              <Edit />
            </IconButton>
          </TableCell>
        </TableRow>
      ))}
    </Body>
  );
};

export default TableBody;
