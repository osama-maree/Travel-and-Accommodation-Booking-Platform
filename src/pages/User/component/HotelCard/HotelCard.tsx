import React, { useCallback, useEffect, useState } from "react";
import { List, ListItem } from "@mui/material";
import CardItem from "../CardItem";
import { propsType } from "../MainSection/types";
import { dataTypes } from "../../types";
import useSWR from "swr";
import { searchRes } from "./api";
import Lottie from "lottie-react";
import animationData from "../../../../lotties/main-page.json";
import useSearch from "../../context/useSearch";
import { useNavigate } from "react-router-dom";
interface hotelProps {
  searchTerm: dataTypes | null;
}
const HotelList: React.FC<hotelProps> = ({ searchTerm }) => {
  const navigate = useNavigate();
  const { searchData } = useSearch();
  const { data } = useSWR(searchTerm, searchRes);
  const [res, setRes] = useState<propsType[] | undefined>(data);

  const handleBooking = useCallback(
    (hotelId: number) => {
      navigate(`/hotel/${hotelId}`);
    },
    [navigate]
  );
  useEffect(() => {
    if (data) setRes(data);
  }, [data]);
  useEffect(() => {
    if (searchData) {
      const filtered = data?.filter((item) => {
        return (
          (item.roomPrice >= searchData?.priceRange[0] &&
            item.roomPrice <= searchData?.priceRange[1]) ||
          item.starRating === searchData?.starRating ||
          item.amenities?.find(
            (amenity) => amenity.name === searchData?.amenities
          )
        );
      });
      setRes(filtered);
    }
  }, [searchData, data]);

  return (
    <List sx={{ width: "100%" }}>
      {res && res.length ? (
        res.map((hotel: propsType) => (
          <ListItem key={hotel.hotelId}>
            <CardItem hotel={hotel} handleBooking={handleBooking} />
          </ListItem>
        ))
      ) : (
        <Lottie
          animationData={animationData}
          style={{ width: "300px", height: "300px" }}
        />
      )}
    </List>
  );
};

export default HotelList;
