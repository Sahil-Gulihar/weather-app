import React from 'react';
import './WeatherCard.css';

const WeatherCard = ({ weather }) => {
  if (!weather) return null;

  const { name, main, weather: weatherArray, wind, sys } = weather;
  const weatherInfo = weatherArray[0];

  return (
    <div className="weather-card">
      <div className="weather-header">
        <h2>{name}, {sys.country}</h2>
      </div>
      
      <div className="weather-main">
        <div className="weather-icon">
          <img
            src={`http://openweathermap.org/img/wn/${weatherInfo.icon}@4x.png`}
            alt={weatherInfo.description}
          />
        </div>
        <div className="temperature">
          <h1>{Math.round(main.temp)}°C</h1>
          <p className="description">{weatherInfo.description}</p>
        </div>
      </div>

      <div className="weather-details">
        <div className="detail-item">
          <span className="detail-label">Feels Like</span>
          <span className="detail-value">{Math.round(main.feels_like)}°C</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Humidity</span>
          <span className="detail-value">{main.humidity}%</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Wind Speed</span>
          <span className="detail-value">{wind.speed} m/s</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Pressure</span>
          <span className="detail-value">{main.pressure} hPa</span>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
