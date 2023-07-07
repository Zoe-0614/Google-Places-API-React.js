import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import Map from './components/Map';

function App() {
  const [place, setPlace] = useState(null);

  return (
    <div className="App">
      <SearchBar onPlaceSelect={setPlace} />
      <Map place={place} />
    </div>
  );
}

export default App;
