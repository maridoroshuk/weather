import { APIOptions } from '@customTypes/weather';

export const selectButtons = [
  {
    label: 'OpenWeather',
    id: 'openWeather',
    value: APIOptions.OPENWEATHER,
  },
  {
    label: 'WeatherBit (hourly)',
    id: 'weatherBit',
    value: APIOptions.WEATHERBIT,
  },
];
