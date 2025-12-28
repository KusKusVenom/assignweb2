const axios = require("axios");

async function getCountryData(code) {
  const url = `https://restcountries.com/v3.1/alpha/${code}`;
  const response = await axios.get(url);
  const data = response.data[0];

  return {
    name: data.name.common,
    capital: data.capital[0],
    population: data.population,
    currency: Object.keys(data.currencies)[0]
  };
}

module.exports = { getCountryData };
