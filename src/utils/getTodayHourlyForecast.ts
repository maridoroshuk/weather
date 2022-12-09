import { IForcastHourly } from '@customTypes/weather';

const getWeatherDate = (date: string): string => new Date(date).toLocaleDateString();

const getTodayHourlyForecast = (data: IForcastHourly[]) => data.filter(
  (el) => getWeatherDate(el.timestamp_local)
      === new Date().toLocaleDateString(),
);

export default getTodayHourlyForecast;
