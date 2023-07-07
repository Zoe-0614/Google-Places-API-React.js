require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();

app.use(cors());

app.get('/api/places', async (req, res) => {
  const { input } = req.query;
  const response = await axios.get(
    `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${input}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`
  );
  res.json(response.data);
});

app.get('/api/placeDetails', async (req, res) => {
  const { place_id } = req.query;
  const response = await axios.get(
    `https://maps.googleapis.com/maps/api/place/details/json?place_id=${place_id}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`
  );
  res.json(response.data.result);
});

app.listen(5000, () => console.log('Server running on port 5000'));
