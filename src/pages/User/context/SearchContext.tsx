import React, { createContext, FC, ReactNode, useState } from "react";
import { dataTypes, filter } from "../types";
import { extractDate, extractTomorowDate } from "../../../utilties/extractDate";
import { roomType } from "../component/Hotel/component/AvailbleRooms/types";

interface contextValueType {
  data: dataTypes | null;
  setData: React.Dispatch<React.SetStateAction<dataTypes | null>>;
  searchData: filter | null;
  setSearchData: React.Dispatch<React.SetStateAction<filter | null>>;
  rooms: roomType[] | undefined;
  setRooms: React.Dispatch<React.SetStateAction<roomType[] | undefined>>;
}
export const SearchContext = createContext<contextValueType | null>(null);

export interface SearchProviderProps {
  children: ReactNode;
}

export const SearchProvider: FC<SearchProviderProps> = ({ children }) => {
  const [data, setData] = useState<dataTypes | null>({
    city: "",
    adults: 2,
    numberOfRooms: 1,
    children: 0,
    checkInDate: extractDate(),
    checkOutDate: extractTomorowDate(),
  });
  const [searchData, setSearchData] = useState<filter | null>({
    priceRange: [0, 10000],
    starRating: 0,
    amenities: "",
    roomType: "Luxury",
  });
  const [rooms, setRooms] = useState<roomType[]>();
  return (
    <React.Fragment>
      <SearchContext.Provider
        value={{ data, setData, searchData, setSearchData, rooms, setRooms }}
      >
        {children}
      </SearchContext.Provider>
    </React.Fragment>
  );
};
