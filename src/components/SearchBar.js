import React, { useState } from 'react';
import axios from 'axios';

const SearchBar = ({ onPlaceSelect }) => {
  const [input, setInput] = useState('');
  const [predictions, setPredictions] = useState([]);

  const fetchPlaces = async (e) => {
    setInput(e.target.value);
    if (input.length > 2) {
      const res = await axios.get(`http://localhost:5000/api/places?input=${input}`);
      setPredictions(res.data.predictions);
    } else {
      setPredictions([]);
    }
  };

  const handlePredictionSelect = (place) => {
    setInput(place.description);
    setPredictions([]);
    onPlaceSelect(place);
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={fetchPlaces}
        placeholder="Search places..."
      />
      {predictions.length > 0 && (
        <ul>
          {predictions.map((place) => (
            <li key={place.place_id} onClick={() => handlePredictionSelect(place)}>
              {place.description}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
