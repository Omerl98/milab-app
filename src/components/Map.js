import { useLoadScript } from "@react-google-maps/api";
import GoogleMapReact from 'google-map-react';
import { API_KEY } from "../keys.js";
import Marker from "./Marker.jsx";
import { Link } from "react-router-dom";

export default function Map(props) {

  const defaultProps = {
    center: {
      lat: 32.109333,
      lng: 34.855499
    },
    zoom: 10
  };

  const onMarkerClick = (obj) => {
    console.log(obj.lat)
  }
  const { activities } = props;

  const createMapOptions = (maps) => {
    return {
      panControl: false,
      mapTypeControl: false,
      scrollwheel: false,
      disableDefaultUI: true,
      styles: [{ stylers: [{ 'saturation': -100 }, { 'gamma': 0.9 }, { 'lightness': 50 }, { 'visibility': 'on' }] }]
    }
  }

  const { isLoaded } = useLoadScript({
      id: 'google-map-script',
      googleMapsApiKey: API_KEY,
    });


  if (!isLoaded) return <div> Loading... </div>
  return(
          <div className="mapContainer" style={{width: "100%", height:"40vh"}}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: API_KEY }}
              options={createMapOptions}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
              onClick={onMarkerClick}
            >
                {activities.map(activity => 
                  <Marker
                  lat={activity.lat}
                  lng={activity.lng}
                /> 
                )}
          
            </GoogleMapReact>
          </div>
  )
}