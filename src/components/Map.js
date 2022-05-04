import {
    GoogleMap,
    Marker,
    DirectionsRenderer,
    Circle,
    MarkerClusterer,
    useLoadScript
  } from "@react-google-maps/api";
import { useState, useMemo, useEffect, useRef } from "react";
import "./Map.css";


const API_KEY = "AIzaSyDhLlbHxVGotIwjbr7dRuRZXhnEQblopeM";

export default function Map() {


    const { isLoaded } = useLoadScript({
        id: 'google-map-script',
        googleMapsApiKey: API_KEY,
      });


    if (!isLoaded) return <div> Loading... </div>
    return(
            <GoogleMap zoom={10} center={{lat:100, lng: 100}} mapContainerClassName="mapContainer" >
                <Marker  position={{lat:100, lng: 100}}></Marker>
            </GoogleMap>
    )
}