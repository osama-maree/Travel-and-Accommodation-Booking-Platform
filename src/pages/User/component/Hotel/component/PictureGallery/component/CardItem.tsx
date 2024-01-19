import * as React from "react";
import ImageListItem from "@mui/material/ImageListItem";
interface cardItemProps {
  url: string;
}
const CardItem: React.FC<cardItemProps> = ({ ...item }) => {
  return (
    <ImageListItem  cols={2} rows={2}>
      <img src={item.url}style={{borderRadius:"3px"}}alt="img" loading="lazy" />
    </ImageListItem>
  );
};

export default CardItem;
