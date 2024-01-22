import { useEffect, useState } from "react";

const useDebounce = <T>(value: T | null, delay = 500): T | null => {
  const [debouncedValue, setDebouncedValue] = useState<T | null>(value);
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
