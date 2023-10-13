import "./App.css";
import React, { useState } from "react";
import SearchBox from "./components/SearchBox";
import WeatherBox from "./components/WeatherBox";
import NotFound from "./components/NotFound";

const App = () => {
  const [error, setError] = useState(false);
  const [city, setCity] = useState("");
  const [data, setData] = useState("");

  const handleSearch = async (city) => {
    const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );

      const weatherData = await response.json();
      const { cod } = weatherData;

      if (cod === "404") {
        setData(null);
        setError(true);
        return;
      }

      setError(false);
      setData(weatherData);
    } catch {
      console.warn(error);
    }
  };

  return (
    <div className="container">
      <header>
        <h1>🌈 React Weather App</h1>
      </header>
      <main>
        <SearchBox city={city} handleSearch={handleSearch} />
        {error && <NotFound />}
        {!error && <WeatherBox data={data} />}
      </main>
    </div>
  );
};

export default App;
