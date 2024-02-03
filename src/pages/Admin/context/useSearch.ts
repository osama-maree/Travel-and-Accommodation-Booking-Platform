import { useContext } from "react";
import { SearchContext } from "./AdminContext";
export default function useSearch() {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearch must be used within a AdminContextProvider");
  }
  return context;
}
