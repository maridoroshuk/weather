import { WEATHER_API_URL } from '@constants/api';

interface ServerResponse {
  temperature: number;
  icon: string;
}

const getForecast = async (
  lat: number,
  lon: number,
): Promise<ServerResponse> => {
  const response = await fetch(
    `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`,
  );
  const data = await response.json();
  return data.list.splice(0, 7);
};

export default getForecast;
