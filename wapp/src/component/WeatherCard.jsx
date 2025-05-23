import React from 'react'

const WeatherCard = ({ weatherData }) => {
    console.log("WeatherCard", weatherData);
    if (!weatherData) {
        return <div className='weather-card'>Loading...</div>;
    }

    const { name, main, weather: [weatherInfo] } = weatherData;

    const getWeatherIcon = () => {
        console.log("Weather-Info", 'Weather main:', weatherInfo.main);

        const mainValue = weatherInfo.main ? weatherInfo.main.trim().toLowerCase() : '';
        switch (mainValue) {
            case 'clear':
                return '☀️';
            case 'clouds':
                return '☁️';
            case 'rain':
                return '🌧️';
            case 'snow':
                return '❄️';
            case 'thunderstorm':
                return '⛈️';
            case 'mist':
                return '🌫️';
            case 'fog':
                return '🌁';
            case 'drizzle':
                return '🌦️';
            default:
                return '🌈'; // Default icon for other weather types
        }
    }
    return (
        <div className='weather-card'>
            <h2>{name}</h2>
            <div style={{ fontSize: '2rem' }}>{getWeatherIcon()}</div>
            <p style={{ fontSize: '1.5rem' }}>{Math.round(main.temp)}&deg;C</p>
            <p>{weatherInfo.description}</p>
        </div>
    )
}

export default WeatherCard
