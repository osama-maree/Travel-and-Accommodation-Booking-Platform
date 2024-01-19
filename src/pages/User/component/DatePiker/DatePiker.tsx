import * as React from "react";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";

import { dataTypes } from "../../types";
import { DateRange } from "@mui/x-date-pickers-pro";
interface propsTypes {
  setData: React.Dispatch<React.SetStateAction<dataTypes | null>>;
  data: dataTypes | null;
}
const ResponsiveDateRangePickers: React.FC<propsTypes> = ({
  data,
  setData,
}) => {
  const handleDateChange = (newValue: DateRange<dayjs.Dayjs>) => {
    if (newValue && newValue.length === 2 && data && setData) {
      setData({
        ...data,
        checkInDate: dayjs(newValue[0]).format("YYYY-DD-MM"),
        checkOutDate: dayjs(newValue[1]).format("YYYY-DD-MM"),
      });
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateRangePicker
        defaultValue={[dayjs(data?.checkInDate), dayjs(data?.checkOutDate)]}
        onChange={handleDateChange}
      />
    </LocalizationProvider>
  );
};
export default ResponsiveDateRangePickers;
