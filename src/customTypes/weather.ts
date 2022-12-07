export interface IForecastOpenWeather {
  main: {
    temp: number | null;
  };
  weather: {
    id: number;
  }[];
}

export interface IForecastWeatherBit {
  temp: number | null;
  weather: {
    code: number;
  };
}

export type ForecastType = IForecastOpenWeather[] | IForecastWeatherBit[]

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
