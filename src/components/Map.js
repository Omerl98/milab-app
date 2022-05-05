import { useLoadScript } from "@react-google-maps/api";
import GoogleMapReact from 'google-map-react';
import { API_KEY } from "../keys.js";
import Marker from "./Marker.jsx";

export default function Map(props) {

  const defaultProps = {
    center: {
      lat: 32.109333,
      lng: 34.855499
    },
    zoom: 10
  };

  const { activities } = props;

  const { isLoaded } = useLoadScript({
      id: 'google-map-script',
      googleMapsApiKey: API_KEY,
    });


  if (!isLoaded) return <div> Loading... </div>
  return(
          <div className="mapContainer" style={{width: "100%", height:"40vh"}}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: API_KEY }}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
            >
             <Marker
            lat={32.109333}
            lng={34.855499}
            text="My Marker"
          />
            </GoogleMapReact>
          </div>
  )
}