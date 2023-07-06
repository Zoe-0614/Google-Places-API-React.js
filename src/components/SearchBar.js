import React from 'react';
import axios from 'axios';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

function SearchBar({ setLocation }) {
  const handleSelect = async (value) => {
    const response = await axios.get(`/api/places?input=${value.description}`);
    const { lat, lng } = response.data.candidates[0].geometry.location;
    setLocation({ lat, lng });
  };

  return (
    <GooglePlacesAutocomplete
      onSelect={handleSelect}
      placeholder="Search for a place..."
      apiKey={process.env.REACT_APP_GOOGLE_API_KEY}
    />
  );
}

export default SearchBar;

