import { Paper } from "@mui/material";
import React from "react";
import ImageList from "@mui/material/ImageList";
import usePictureGallery from "./hooks/useGetPictureGallry";
import CardItem from "./component/CardItem";
import Loader from "../../../../../../container/Loader";
interface pictureProps {
  id: string | undefined;
}
const PictrueGallery: React.FC<pictureProps> = ({ id }) => {
  const { data, isLoading } = usePictureGallery(id);
  if (isLoading) return <Loader />;
  return (
    <Paper>
      {data ? (
        <ImageList
          sx={{
            height: "609px",
            transform: "translateZ(0)",
          }}
          rowHeight={302}
        >
          {data?.map((item, indx) =>
            indx === 0 ? <></> : <CardItem key={item.id} url={item.url} />
          )}
        </ImageList>
      ) : null}
    </Paper>
  );
};

export default PictrueGallery;
