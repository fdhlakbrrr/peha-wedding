import "mapbox-gl/dist/mapbox-gl.css";
import ReactMapboxGl, { Layer, Feature, Marker, Popup } from "react-mapbox-gl";

export default function MapBox() {
  const Map = ReactMapboxGl({
    accessToken:
      "pk.eyJ1IjoiZmRobGFrYnJyciIsImEiOiJjbTVncHAzdnIwYWFqMmtvZnozZ3ZxanlvIn0.mKA8NTleOB2e48Q-jUUC1Q",
  });

  return (
    <Map
      style="mapbox://styles/mapbox/streets-v9"
      containerStyle={{
        height: "100vh",
        width: "100vw",
      }}
      zoom={[18]}
      center={[106.710373, -6.409605]}
    >
      <Marker coordinates={[106.710373, -6.409605]}>
        <div style={{ width: "100px", height: "100px", background: "red" }}>
          <h1>Kontol</h1>
        </div>
      </Marker>
      {/* <Marker longitude={-6.409605} latitude={106.710373}>
        <div style={{ width: "100px", height: "100px", background: "red" }}>
          <h1>Kontol</h1>
        </div>
      </Marker>
      <Popup
        tipSize={5}
        anchor="bottom-right"
        longitude={-6.409605}
        latitude={106.710373}
        // onMouseLeave={(e) => {
        //   e.preventDefault();
        //   setPopupInfo(null);
        // }}
        closeOnClick={true}
      ></Popup> */}
      {/* <Layer type="point" id="marker" layout={{ "icon-image": "marker-15" }}>
        <Feature coordinates={[106.710373, -6.409605]} />
      </Layer> */}
    </Map>
  );
}
