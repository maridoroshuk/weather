import { WEATHERBIT_API_URL } from '@constants/api';

interface ServerResponse {}

const getWeatherBitForecast = async (
  lat: number,
  lon: number,
): Promise<ServerResponse> => {
  const response = await fetch(
    `${WEATHERBIT_API_URL}/forecast/daily?lat=${lat}&lon=${lon}&key=${process.env.REACT_APP_WEATHERBIT_API_KEY}`,
  );
  const data = await response.json();
  return data.data.splice(0, 7);
};

export default getWeatherBitForecast;
