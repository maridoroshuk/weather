import { OPEN_WEATHER_API_URL } from '@constants/api';

interface ServerResponse {
  temp: number;
  icon: string;
}

const getWeatherOpenWeatherAPI = async (
  lat: number,
  lon: number,
): Promise<ServerResponse> => {
  const response = await fetch(
    `${OPEN_WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}&units=metric`,
  );
  const data = await response.json();
  const { temp } = data.main;
  const { icon } = data.weather[0];
  return { temp, icon };
};

export default getWeatherOpenWeatherAPI;
