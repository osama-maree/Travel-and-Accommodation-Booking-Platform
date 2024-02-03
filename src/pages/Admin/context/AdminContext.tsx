import { createContext, FC, ReactNode, useState } from "react";
import { ModalType, Search, types } from "../types";

interface contextValueType {
  Params: Search | null;
  setParams: React.Dispatch<React.SetStateAction<Search | null>>;
  open: ModalType;
  setOpen:React.Dispatch<React.SetStateAction<ModalType>>;
}
export const SearchContext = createContext<contextValueType | null>(null);

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
  return (
    <SearchContext.Provider value={{ Params, setParams, open, setOpen }}>
      {children}
    </SearchContext.Provider>
  );
};
