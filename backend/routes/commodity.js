const express = require('express');
const axios = require('axios');
const router = express.Router();

const API_KEY = process.env.FMP_API_KEY;

router.get('/', async (req, res) => {
  try {
    const response = await axios.get(`https://financialmodelingprep.com/api/v3/historical-price-full/gold?apikey=${API_KEY}`);
    const data = response.data.historical.slice(0, 30).map(item => ({
      date: item.date,
      price: item.close,
    }));
    res.json(data);
  } catch (error) {
    console.error('Error fetching commodity data:', error.message);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

module.exports = router;
