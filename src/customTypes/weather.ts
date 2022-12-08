export interface IForecastDaily {
  main: {
    temp: number | null;
  };
  weather: {
    id: number;
  }[];
}

export interface IForcastHourly {
  app_temp: number;
  weather: {
    code: number;
  };
  timestamp_local: string;
}

export enum APIOptions {
  OPENWEATHER = 'OpenWeatherApi',
  WEATHERBIT = 'WeatherBitAPI',
}

export type APIType =
  | APIOptions.OPENWEATHER
  | APIOptions.WEATHERBIT;

export interface IOptions {
  value: string;
  label: string;
}

export interface ICurrentLocation {
  lat: number | null;
  lon: number | null;
  currentCity: string | null;
}
