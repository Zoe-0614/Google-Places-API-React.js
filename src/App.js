// src/App.js

import React, { useState } from 'react';
import axios from 'axios';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

function App() {
  const [input, setInput] = useState('');
  const [coordinates, setCoordinates] = useState(center);

  const fetchPlaces = async (e) => {
    setInput(e.target.value);
    if (input.length > 3) {
      const res = await axios.get(`http://localhost:5000/api/places?input=${input}`);
      const data = res.data.predictions[0];
      if (data) {
        const lat = data.geometry.location.lat;
        const lng = data.geometry.location.lng;
        setCoordinates({ lat, lng });
      }
    }
  };

  return (
    <div className="App">
      <h1>Place Search</h1>
      <input type="text" value={input} onChange={fetchPlaces} />
      <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY}>
        <GoogleMap mapContainerStyle={containerStyle} center={coordinates} zoom={10}>
          <Marker position={coordinates} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default App;
