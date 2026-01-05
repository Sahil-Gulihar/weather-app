const API_KEY = process.env.REACT_APP_WEATHER_API_KEY || 'YOUR_API_KEY'; // Users will need to add their own API key
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const getWeatherByCity = async (city) => {
  try {
    const response = await fetch(
      `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    
    if (!response.ok) {
      throw new Error('City not found');
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const getWeatherByCoords = async (lat, lon) => {
  try {
    const response = await fetch(
      `${BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    );
    
    if (!response.ok) {
      throw new Error('Location not found');
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
