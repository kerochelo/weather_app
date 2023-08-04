export const fetchWeatherData = async (city) => {
  try {
    const response = await fetch(`/forecast?city=${encodeURIComponent(city)}`);
    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    return null;
  }
};

