import "mapbox-gl/dist/mapbox-gl.css";
import Map, { Marker } from "react-map-gl";
import { Button, Container } from "./ui";
import Image from "next/image";
import Link from "next/link";
import MarkerImage from "../assets/images/location-pin.svg";
import { useRouter } from "next/navigation";

export default function MapBox() {
  const router = useRouter();

  return (
    <Container align="CENTER">
      <Map
        mapboxAccessToken="pk.eyJ1IjoiZmRobGFrYnJyciIsImEiOiJjbTVncHAzdnIwYWFqMmtvZnozZ3ZxanlvIn0.mKA8NTleOB2e48Q-jUUC1Q"
        initialViewState={{
          latitude: -6.409605,
          longitude: 106.710373,
          zoom: 13,
        }}
        style={{
          width: "80%",
          height: "300px",
          borderRadius: "10%",
        }}
        mapStyle="mapbox://styles/mapbox/outdoors-v12"
      >
        <Marker longitude={106.710373} latitude={-6.409605} anchor="bottom">
          <Image alt="marker" src={MarkerImage} width={25} height={25} />
        </Marker>
      </Map>
      <Button
        onClick={() =>
          window.open(
            "https://maps.google.com/?q=-6.409605,106.710373",
            "blank"
          )
        }
        className="bg-[#9daa97] hover:bg-[#9daa97]"
      >
        Lihat Lokasi
      </Button>
    </Container>
  );
}
