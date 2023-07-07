import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = ({ place }) => {
    const mapStyles = {
      height: "100vh",
      width: "100%"
    };
  
    const defaultCenter = {
      lat: 3.1319, lng: 101.6841
    }
  
    return (
       <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY}>
         <GoogleMap
           mapContainerStyle={mapStyles}
           zoom={13}
           center={place?.geometry?.location ? { lat: place.geometry.location.lat, lng: place.geometry.location.lng } : defaultCenter}
         >
           {
             place?.geometry?.location &&
             <Marker position={{ lat: place.geometry.location.lat, lng: place.geometry.location.lng }} />
           }
         </GoogleMap>
       </LoadScript>
    )
  }
  

export default Map;
