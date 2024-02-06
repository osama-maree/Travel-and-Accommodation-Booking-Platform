import {
  TableRow,
  TableBody as Body,
  TableCell,
  IconButton,
} from "@mui/material";
import React, { useCallback, useEffect } from "react";
import { Search } from "../../types";
import useSWR from "swr";
import { searchCity } from "./api";
import DeleteIcon from "@mui/icons-material/Delete";
import NumberOfHotel from "./component/NumberOfHotel";
import useDeleteCity from "./component/hooks/useDeleteCity";
import useSearch from "../../context/useAdmin";
interface bodyProps {
  searchTerm: Search | null;
}
const TableBody: React.FC<bodyProps> = ({ searchTerm }) => {
  const { data } = useSWR(searchTerm, searchCity);
  const { cities, setCities } = useSearch();
  const { mutate } = useDeleteCity();
  const handleDelete = useCallback(
    (id: number) => {
      mutate(id);
      setCities(cities?.filter((city) => city.id !== id));
    },
    [mutate, cities, setCities]
  );
  useEffect(() => {
    if (data) {
      setCities(data);
    }
  }, [data, setCities]);

  return (
    <Body>
      {cities?.map((row) => (
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
