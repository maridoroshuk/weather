import { WEATHERBIT_API_URL } from '@constants/api';
import { IForcastHourly } from '@customTypes/weather';

const getWeatherBitAPI = async (
  lat: number,
  lon: number,
): Promise<IForcastHourly[]> => {
  const response = await fetch(
    `${WEATHERBIT_API_URL}/forecast/hourly?lat=${lat}&lon=${lon}&hours=24&key=${process.env.REACT_APP_WEATHERBIT_API_KEY}`,
  );
  const data = await response.json();
  return data.data;
};

export default getWeatherBitAPI;
