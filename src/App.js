import React, { useState, useEffect } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import { getWeatherByCity, getWeatherByCoords } from './services/weatherService';

function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Get user's location on component mount
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            setLoading(true);
            const data = await getWeatherByCoords(
              position.coords.latitude,
              position.coords.longitude
            );
            setWeather(data);
            setError(null);
          } catch (err) {
            setError('Failed to fetch weather data');
          } finally {
            setLoading(false);
          }
        },
        () => {
          // If user denies location, load default city
          handleSearch('London');
        }
      );
    }
  }, []);

  const handleSearch = async (city) => {
    try {
      setLoading(true);
      setError(null);
      const data = await getWeatherByCity(city);
      setWeather(data);
    } catch (err) {
      setError('City not found. Please try again.');
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <p>Get current weather information for any city</p>
      </header>
      
      <main className="App-main">
        <SearchBar onSearch={handleSearch} />
        
        {loading && <div className="loading">Loading...</div>}
        
        {error && <div className="error">{error}</div>}
        
        {weather && !loading && <WeatherCard weather={weather} />}
        
        {!weather && !loading && !error && (
          <div className="welcome-message">
            <p>Search for a city to see the weather</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
