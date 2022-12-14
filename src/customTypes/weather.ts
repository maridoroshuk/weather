export interface IForecastDaily {
  main: {
    temp: number | null;
  };
  weather: {
    icon: string;
  }[];
}

export interface IForcastHourly {
  app_temp: number;
  weather: {
    icon: string;
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
  lat: number;
  lon: number;
  currentCity: string;
}
