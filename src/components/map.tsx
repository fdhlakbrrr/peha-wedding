import "mapbox-gl/dist/mapbox-gl.css";
import Map, { Marker } from "react-map-gl";
import Image from "next/image";
import MarkerImage from "../assets/images/location-pin.svg";

export default function MapBox() {
  return (
    <Map
      mapboxAccessToken="pk.eyJ1IjoiZmRobGFrYnJyciIsImEiOiJjbTVncHAzdnIwYWFqMmtvZnozZ3ZxanlvIn0.mKA8NTleOB2e48Q-jUUC1Q"
      initialViewState={{
        latitude: -6.409605,
        longitude: 106.710373,
        zoom: 15,
      }}
      style={{ width: "80%", height: "300px" }}
      mapStyle="mapbox://styles/mapbox/light-v10"
    >
      <Marker longitude={106.710373} latitude={-6.409605} anchor="bottom">
        <Image alt="marker" src={MarkerImage} width={25} height={25} />
      </Marker>
    </Map>
  );
}
