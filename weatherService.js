const axios = require("axios");

async function getWeatherData(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.OPENWEATHER_API_KEY}&units=metric`;
  const response = await axios.get(url);
  const data = response.data;

  return {
    temperature: data.main.temp,
    feelsLike: data.main.feels_like,
    description: data.weather[0].description,
    coordinates: data.coord,
    windSpeed: data.wind.speed,
    countryCode: data.sys.country,
    rainVolume: data.rain ? data.rain["3h"] : 0
  };
}

module.exports = { getWeatherData };
