const WeatherBox = ({ data }) => {
  if (!data || !data.main || !data.weather || !data.weather[0]) {
    return null;
  }

  const { temp } = data.main;
  const { description, icon } = data.weather[0];

  const iconUrl = `https://openweathermap.org/img/w/${icon}.png`;

  return (
    <div className="weather-box">
      <img src={iconUrl} alt="Weather icon" />
      <p className="temperature">{temp}°C</p>
      <p className="description">{description}</p>
    </div>
  );
};

export default WeatherBox;
