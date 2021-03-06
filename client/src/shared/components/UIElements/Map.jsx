import React, { useRef, useEffect } from "react";
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

import "../../../css/shared/UIElements/Map.css";

const Map = (props) => {
  const MapGl = ReactMapboxGl({
    accessToken:
      "pk.eyJ1Ijoic2h1YmhhbXdlYmRlc2lnbiIsImEiOiJja2w5MDNobmIxeDRtMm9sYXV6bjM1bDJ6In0.TarmDEKQDlMNjVsvFNPmmA",
  });
  // pk.eyJ1IjoiZmFicmljOCIsImEiOiJjaWc5aTV1ZzUwMDJwdzJrb2w0dXRmc2d0In0.p6GGlfyV-WksaDV_KdN27A

  return (
    <div
      id='map-container'
      className={`map ${props.classname}`}
      style={props.style}
    >
      <MapGl
        style='mapbox://styles/mapbox/streets-v9'
        containerStyle={{
          height: "100%",
          width: "100%",
        }}
      />
      <Layer type='symbol' id='marker' layout={{ "icon-image": "marker-15" }}>
        <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
      </Layer>
    </div>
  );
};

export default Map;
