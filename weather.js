const express = require("express");
const router = express.Router();
const { getWeatherData } = require("../services/weatherService");
const { getCountryData } = require("../services/countryService");

router.get("/:city", async (req, res) => {
  try {
    const weather = await getWeatherData(req.params.city);
    const country = await getCountryData(weather.countryCode);

    res.json({
      weather,
      country
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

module.exports = router;
