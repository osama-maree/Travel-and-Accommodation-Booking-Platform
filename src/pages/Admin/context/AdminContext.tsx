import { createContext, FC, ReactNode, useState } from "react";
import { ModalType, Search, types } from "../types";
import { Response } from "../component/CityGrid/api/types";
import { hotel } from "../component/Hotels/component/HotelGrid/api/types";

interface contextValueType {
  Params: Search | null;
  setParams: React.Dispatch<React.SetStateAction<Search | null>>;
  open: ModalType;
  setOpen: React.Dispatch<React.SetStateAction<ModalType>>;
  cities: Response[];
  setCities: React.Dispatch<React.SetStateAction<Response[]>>;
  hotels: hotel[];
  setHotels: React.Dispatch<React.SetStateAction<hotel[]>>;
}
export const AdminContext = createContext<contextValueType | null>(null);

export interface SearchProviderProps {
  children: ReactNode;
}

export const AdminProvider: FC<SearchProviderProps> = ({ children }) => {
  const [Params, setParams] = useState<Search | null>({
    name: "",
    searchQuery: "",
  });
  const [open, setOpen] = useState<ModalType>({
    open: false,
    type: types.CREATE,
  });
  const [cities, setCities] = useState<Response[]>([]); 
  const [hotels, setHotels] = useState<hotel[]>([]);
  return (
    <AdminContext.Provider
      value={{
        Params,
        setParams,
        open,
        setOpen,
        cities,
        setCities,
        hotels,
        setHotels,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};
