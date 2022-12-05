import { WEATHERBIT_API_URL } from '@constants/api';

interface ServerResponse {
  temp: number;
  code: number;
}

const getWeatherBitAPI = async (
  lat: number,
  lon: number,
): Promise<ServerResponse> => {
  const response = await fetch(
    `${WEATHERBIT_API_URL}/current?lat=${lat}&lon=${lon}&key=${process.env.REACT_APP_WEATHERBIT_API_KEY}`,
  );
  const data = await response.json();
  const temp = data.data[0].app_temp;
  const { code } = data.data[0].weather;
  return { temp, code };
};

export default getWeatherBitAPI;
