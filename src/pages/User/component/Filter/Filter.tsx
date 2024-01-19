import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  Divider,
  Typography,
  Slider,
  Stack,
  Rating,
  FormControl,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import useGetAmenities from "./hooks/useGetAmenitties";
import useSearch from "../../context/useSearch";

const Sidebar: React.FC = () => {
  const { searchData, setSearchData } = useSearch();
  const { data, isLoading } = useGetAmenities();
  const handlePriceChange = (event: Event, newValue: number | number[]) => {
    if (searchData)
      setSearchData({ ...searchData, priceRange: newValue as number[] });
  };
  const handleStarRatingChange = (
    event: React.SyntheticEvent<Element, Event>,
    newValue: number | null
  ) => {
    if (searchData) setSearchData({ ...searchData, starRating: newValue });
  };
  const handleRoomTypeChange = (e: SelectChangeEvent<string>) => {
    if (searchData) setSearchData({ ...searchData, roomType: e.target.value });
  };
  const handleAmenities = (e: SelectChangeEvent<string>) => {
    if (searchData) setSearchData({ ...searchData, amenities: e.target.value });
  };
  return (
    <List>
      <Typography variant="h6" align="center" gutterBottom>
        Filters
      </Typography>
      <Divider />

      <ListItem>
        <Stack>
          <ListItemText primary="Star Rating" />

          <Rating
            name="rating"
            value={searchData?.starRating}
            onChange={handleStarRatingChange}
            precision={1}
            max={5}
          />
        </Stack>
      </ListItem>
      <ListItem>
        <Stack sx={{ width: "100%" }}>
          <ListItemText primary="Price Range" color="main.secondary" />
          <Slider
            getAriaLabel={() => "Price range"}
            value={searchData?.priceRange}
            onChange={handlePriceChange}
            valueLabelDisplay="auto"
            max={1000}
          />
        </Stack>
      </ListItem>
      {/* Amenities */}
      <ListItem>
        <Stack sx={{ width: "100%" }}>
          <ListItemText primary="Amenitie Type" />
          <FormControl fullWidth>
            <Select value={searchData?.amenities} onChange={handleAmenities}>
              {isLoading
                ? null
                : data?.map((e,indx) => (
                    <MenuItem key={indx} value={e.name}>{e.name}</MenuItem>
                  ))}
            </Select>
          </FormControl>
        </Stack>
      </ListItem>

      <ListItem>
        <Stack sx={{ width: "100%" }}>
          <ListItemText primary="Room Type" />
          <FormControl fullWidth>
            <Select
              value={searchData?.roomType}
              onChange={handleRoomTypeChange}
            >
              {["Luxury", "Budget", "Boutique"].map((e,indx) => (
                <MenuItem value={e} key={indx}>{e}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Stack>
      </ListItem>
    </List>
  );
};

export default Sidebar;
