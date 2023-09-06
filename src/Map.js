import React, { useState } from "react";
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

const locations = [
  {
    name: "お店01",
    info: "在庫あり\n肉:◯/魚:×/米:◯",
    location: {
      lat: 26.21697737990871,
      lng: 127.67862138356263
    }
  },
  {
    name: "お店02",
    info: "在庫あり\n肉:◯/魚:×/米:◯",
    location: {
      lat: 26.21997737990871,
      lng: 127.68862138356263
    }
  },
  {
    name: "お店03",
    info: "在庫あり\n肉:◯/魚:×/米:◯",
    location: {
      lat: 26.21597737990871,
      lng: 127.68862138356263
    }
  },
  {
    name: "お店04",
    info: "在庫あり\n肉:◯/魚:×/米:◯",
    location: {
      lat: 26.21997737990871,
      lng: 127.67562138356263
    }
  }
];

function App() {
  const location = useGPS();
  const position = {
    lat: location ? location.latitude : null,
    lng: location ? location.longitude : null
  };
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
                  label={item.name}
                />
              );
            })}
            {selected.location && (
              <InfoWindowF
                position={selected.location}
                clickable={true}
                onCloseClick={() => setSelected({})}
              >
                <p className="text">{selected.info}</p>
              </InfoWindowF>
            )}
          </GoogleMap>
        </LoadScript>
        {position.lat !== null && position.lng !== null ? (
          <></>
        ) : (
          <p>GPS情報を取得中...</p>
        )}
      </div>
    </>
  );
}

export default App;
