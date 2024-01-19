import { useEffect, useState } from "react";
import { dataTypes } from "../pages/User/types";

const useDebounce = (value:dataTypes | null, delay = 500) => {
  const [debouncedValue, setDebouncedValue] = useState<dataTypes | null>(value);
  useEffect(() => {
    const id = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(id);
    };
  }, [value, delay]);

  return debouncedValue;
};
export default useDebounce;
