const API_KEY = "0ed6f2a1de4622452b9f5f05f31ac7a0";

const getWeatherData = async (city) => {
  const URL = `https://api.openweathermap.org/data/2.5/onecall?lat=${city.latitude}&lon=${city.longitude}&exclude={part}&appid=${API_KEY}`;

  const data = await fetch(URL)
    .then((res) => res.json())
    .then((data) => data);

  const { daily } = data;

  return {
    daily,
  };
};

export { getWeatherData };
