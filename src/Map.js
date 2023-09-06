import React, { useState} from "react";
import { useGPS } from "./GPS";
import {
  GoogleMap,
  LoadScript,
  MarkerF,
  InfoWindowF
} from "@react-google-maps/api";

const container = {
  width: "75%",
  height: "500px"
};

const position = {

  lat: location ? location.latitude : null,

  lng: location ? location.longitude : null,

};

const locations = [
  {
    name: "Location 1",
    location: {
      lat: 41.3954,
      lng: 2.162
    }
  },
  {
    name: "Location 2",
    location: {
      lat: 41.3917,
      lng: 2.1649
    }
  }
];

function App() {
  const location = useGPS();
  const [selected, setSelected] = useState({});
  const onSelect = (item) => {
    setSelected(item);
  };
  return (
    <>
      <h2>React & Google Map</h2>
      <div className="wrap">
        <LoadScript googleMapsApiKey="AIzaSyBkVf8mvOwMcwGDWF-Ry0HoKAJ5MF6Dsws">
          <GoogleMap mapContainerStyle={container} center={position} zoom={15}>
            {locations.map((item) => {
              return (
                <MarkerF
                  key={item.name}
                  position={item.location}
                  onClick={() => onSelect(item)}
                />
              );
            })}
            {selected.location && (
              <InfoWindowF
                position={selected.location}
                clickable={true}
                onCloseClick={() => setSelected({})}
              >
                <p>{selected.name}</p>
              </InfoWindowF>
            )}
          </GoogleMap>
        </LoadScript>
        {position.lat !== null && position.lng !== null ? (
          <>
            </>
        ) : (
          <p>GPS情報を取得中...</p>
        )}
      </div>
    </>
  );
}

export default App;
