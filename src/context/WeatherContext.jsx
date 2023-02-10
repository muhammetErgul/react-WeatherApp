import CityData from "../Data.json";
import { createContext, useContext, useState } from "react";

const Context = createContext();

export const WeatherProvider = ({ children }) => {
  const [weather, setWeather] = useState([]);
  const [city, setCity] = useState(CityData[34]);

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const data = {
    weather,
    setWeather,
    city,
    setCity,
    days,
    CityData,
  };

  return <Context.Provider value={data}>{children}</Context.Provider>;
};

export const useWeather = () => useContext(Context);
