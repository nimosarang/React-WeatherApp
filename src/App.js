import "./App.css";
import React, { useState } from "react";
import SearchBox from "./components/SearchBox";
import WeatherBox from "./components/WeatherBox";

const App = () => {
  const [error, setError] = useState(false);
  const [city, setCity] = useState("");
  const [data, setData] = useState({
    temperature: "",
    description: "",
    humidity: "",
    wind: "",
    imageSrc: "",
  });

  const handleSearch = async (city) => {
    const API_KEY = "b86a02cd2a7b9983d569874adc939529";
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
        <h1>리액트 날씨 앱</h1>
      </header>
      <main>
        <SearchBox city={city} handleSearch={handleSearch} />
        <WeatherBox data={data} />
      </main>
    </div>
  );
};

export default App;
