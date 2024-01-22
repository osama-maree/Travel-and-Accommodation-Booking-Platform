import { hotel } from "./component/Hotels/component/HotelGrid/api/types";
export interface Search {
  name: string;
  searchQuery: string;
}
export enum types {
  CREATE = "create",
  EDIT = "edit",
}
export interface ModalType {
  open: boolean;
  hotel?:hotel;
  type: types.CREATE | types.EDIT;
}
