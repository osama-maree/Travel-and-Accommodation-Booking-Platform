import React from "react";
import { ModalType, Search } from "../../../../../types";
import useSWR from "swr";
import { searchCity } from "../../../../CityGrid/api";
import useCreateHotel from "./hook/useCreateHotel";
import TransitionsModal from "../../CreateHotel/Modal";
const searchTerm: Search = { name: "", searchQuery: "" };
interface modalProps {
  handleClose: () => void;
  open: ModalType;
}
const CreateHotel: React.FC<modalProps> = ({ handleClose, open }) => {
  const { data } = useSWR("cities", () => searchCity(searchTerm));
  const { formik, isPending } = useCreateHotel();
  return (
    <>
      <TransitionsModal
        data={data}
        isPending={isPending}
        formik={formik}
        type={"create"}
        open={open}
        handleClose={handleClose}
      />
    </>
  );
};

export default CreateHotel;
