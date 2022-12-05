export interface IForecast {
  main: {
    temp: number | null;
  };
  weather: {
    icon: string | null;
  }[];
}
export enum APIOptions {
  OPENWEATHER = 'OpenWeatherApi',
  WEATHERBIT = 'WeatherBitAPI',
}

export type APIType =
  | APIOptions.OPENWEATHER
  | APIOptions.WEATHERBIT;
