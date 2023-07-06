import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

function Map({ location }) {
  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY}>
      <GoogleMap center={location} zoom={14}>
        <Marker position={location} />
      </GoogleMap>
    </LoadScript>
  );
}

export default Map;
