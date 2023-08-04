import * as bootstrap from "bootstrap"

import { fetchWeatherData } from './weather';

document.addEventListener('DOMContentLoaded', () => {
  const searchForm = document.getElementById('search-form');
  const cityInput = document.getElementById('city');
  const weatherDisplay = document.getElementById('weather-display');

  searchForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const city = cityInput.value;
    const weatherData = await fetchWeatherData(city);
    displayWeather(weatherData);
  });

  const displayWeather = (data) => {
    weatherDisplay.innerHTML = `<h2>${data.name}の天気</h2>
                                 <p>天気: ${data.weather[0].main}</p>
                                 <p>気温: ${data.main.temp} ℃</p>
                                 <p>湿度: ${data.main.humidity} %</p>`;
  };
});

