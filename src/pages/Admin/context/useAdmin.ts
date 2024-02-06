import { useContext } from "react";
import { AdminContext } from "./AdminContext";
export default function useAdmin() {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error("useSearch must be used within a AdminContextProvider");
  }
  return context;
}
