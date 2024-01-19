import { createContext, FC, ReactNode, useState } from "react";
import { dataTypes, filter } from "../types";
import { extractDate, extractTomorowDate } from "../../../utilties/extractDate";

interface contextValueType {
  data: dataTypes | null;
  setData: React.Dispatch<React.SetStateAction<dataTypes | null>>;
  searchData: filter | null;
  setSearchData: React.Dispatch<React.SetStateAction<filter | null>>;
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

  return (
    <SearchContext.Provider
      value={{ data, setData, searchData, setSearchData }}
    >
      {children}
    </SearchContext.Provider>
  );
};
