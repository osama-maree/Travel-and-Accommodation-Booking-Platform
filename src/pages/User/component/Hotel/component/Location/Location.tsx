import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import "./styles.css";
import { Paper } from "@mui/material";
interface MapProps {
  latitude: number;
  longitude: number;
  hotelName: string;
}
const MapComponent: React.FC<MapProps> = ({
  latitude,
  longitude,
  hotelName,
}) => {
  return (
    <Paper>
      <MapContainer
        center={[latitude, longitude]}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: "626px", width: "100%", padding: ".5rem" }}
      >
        <TileLayer
          url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=LFVSscM1KK8Mz1ygaH8t"
        />
        <Marker position={[latitude, longitude]}>
          <Popup>{hotelName}</Popup>
        </Marker>
      </MapContainer>
    </Paper>
  );
};

export default MapComponent;
