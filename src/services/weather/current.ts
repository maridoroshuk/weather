import { WEATHER_API_URL } from '@constants/api';

interface ServerResponse {
  temp: number;
  icon: string;
}

const getCurrentWeather = async (
  lat: number,
  lon: number,
): Promise<ServerResponse> => {
  const response = await fetch(
    `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`,
  );
  const data = await response.json();
  return {
    temp: data.main.temp,
    icon: data.weather[0].icon,
  };
};

export default getCurrentWeather;
