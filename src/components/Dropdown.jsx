import React from "react";
import { useWeather } from "../context/WeatherContext";

function Dropdown() {
  const { city, setCity, CityData } = useWeather();
  const changeCity = (e) => {
    CityData.map((item) => {
      if (item.name === e.target.value) setCity(item);
    });
  };
  return (
    <div className="select-box">
      <h1 className="title">Weather App</h1>
      <select name="cities" id="cities" value={city.name} onChange={changeCity}>
        {CityData.map((item, i) => (
          <option value={item.name} key={i}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;
