import React from "react";
import { useWeather } from "../context/WeatherContext";
import { useEffect } from "react";
import { getWeatherData } from "../WeatherService";

function Days() {
  const { days, weather, setWeather, city } = useWeather();
  useEffect(() => {
    const fetchWeatherData = async () => {
      const res = await getWeatherData(city);
      setWeather(res.daily);
    };
    fetchWeatherData();
  }, [city, setWeather]);

  return (
    <div className="days">
      {weather.map((item, ind) => (
        <div className="day" key={ind}>
          <div className="day-title">
            {days[new Date(item.dt * 1000).getDay()]}
          </div>
          <img
            src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
            alt="iconImg"
            className="day-img"
            title={item.weather[0].description.toUpperCase()}
          />
          <div className="day-deg">
            <span className="tmp-high">
              {Math.round(item.temp["max"] - 273.15)} &deg;
            </span>
            <span>{Math.round(item.temp["min"] - 273.15)} &deg;</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Days;
