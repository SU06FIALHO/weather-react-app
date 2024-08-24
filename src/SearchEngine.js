import React, { useState } from "react";
import axios from "axios";
import "./SearchEngine.css";


export default function SearchEngine() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});
  

  function showData(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
    
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "b23c754df0827a29530a91fd27930ace";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showData);
      
    
  }

  function updateCity(event) {
    setCity(event.target.value);
    
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Enter a city..."
        onChange={updateCity}
      ></input>
      <button type="Submit"> Search</button>
    </form>
  );
  

  if (loaded) {
    return (
      <div>
        {form}
        <ul>
          <li> Temperature: {Math.round(weather.temperature)}°C</li>
          <li> Description: {weather.description} </li>
          <li> Humidty: {weather.humidity}%</li>
          <li> Wind: {weather.wind}km/h </li>
          <li>
            <img src={weather.icon} alt={weather.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  } 
  
}
