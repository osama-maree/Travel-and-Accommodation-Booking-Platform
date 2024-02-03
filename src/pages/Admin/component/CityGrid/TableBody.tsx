import {
  TableRow,
  TableBody as Body,
  TableCell,
  IconButton,
} from "@mui/material";
import React, { useCallback } from "react";
import { Search } from "../../types";
import useSWR from "swr";
import { searchCity } from "./api";
import Loader from "../../../../container/Loader";
import DeleteIcon from "@mui/icons-material/Delete";
import NumberOfHotel from "./component/NumberOfHotel";
import useDeleteCity from "./component/hooks/useDeleteCity";
interface bodyProps {
  searchTerm: Search | null;
}
const TableBody: React.FC<bodyProps> = ({ searchTerm }) => {
  const {
    data,
    isLoading,
    mutate: mutateSWR,
  } = useSWR(searchTerm,searchCity);
  const { mutate } = useDeleteCity();
  const handleDelete = useCallback(
    (id: number) => {
      mutate(id);
      mutateSWR();
    },
    [mutate, mutateSWR]
  );
  if (isLoading) return <Loader />;

  return (
    <Body>
      {data?.map((row) => (
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
            <NumberOfHotel id={row.id} />
          </TableCell>
          <TableCell align="center">
            <IconButton
              aria-label="delete"
              size="large"
              onClick={() => handleDelete(row.id)}
              color="error"
            >
              <DeleteIcon />
            </IconButton>
          </TableCell>
        </TableRow>
      ))}
    </Body>
  );
};

export default TableBody;
