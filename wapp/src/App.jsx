import SearchBar from "./component/SearchBar";
import WeatherCard from "./component/WeatherCard";
import {useState, useEffect} from "react";
import axios from "axios";
import "./App.css";


export default function App() {
    const [weather, setWeather] = useState(null);
    const [city, setCity] = useState("London");
    const [error, setError] = useState(null);
    const API_KEY = import.meta.env.VITE_REACT_APP_API_KEY


  
useEffect(() => {
    const fetchWeather = async () => {
        try {
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
            );
            setWeather(response.data);
            setError(null);
        } catch (error) {
            console.error("Error fetching weather data:", error);
            setError("City not found");
            setWeather(null);
        }
    };
      
        fetchWeather ();
        // eslint-disable-next-line
    }, [city]);
// enter search term in search bar and directly enterning by clicking in enter key
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            setCity(event.target.value);
        }
    };
   
    // Handle search bar input
    const handleInputChange = (e) => {
        setCity(e.target.value);
        console.log("onchange", e.target.value);
    };
   
  

    return (
        <div className="App">
            <h1>Weather App</h1>
            <SearchBar onChange={handleInputChange} onkeyPress={handleKeyPress}/>
            {weather ? <WeatherCard weatherData={weather} /> : <p>No Data Found.</p>}
        </div>
    );
}