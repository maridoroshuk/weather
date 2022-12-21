import {
  APIOptions,
  IForcastHourly,
  IForecastDaily,
} from '@customTypes/weather';
import { createSelector } from '@reduxjs/toolkit';

export const selectWeatherApi = (state: {
  weather: {
    api: APIOptions;
  };
}) => state.weather.api;

export const selectTemp = (state: {
  weather: {
    temp: number;
  };
}) => state.weather.temp;

export const selectIcon = (state: {
  weather: {
    icon: string;
  };
}) => state.weather.icon;

export const selectHourlyForecast = (state: {
  weather: {
    hourly: IForcastHourly[];
  };
}) => state.weather.hourly;

export const selectDailyForecast = (state: {
  weather: {
    forecast: IForecastDaily[];
  };
}) => state.weather.forecast;

export const selectCity = (state: {
  weather: {
    city: string | null;
  };
}) => state.weather.city;

export const selectLoading = (state: {
  weather: {
    isLoading: boolean;
  };
}) => state.weather.isLoading;

export const selectCurrenWeather = createSelector(
  [
    selectWeatherApi,
    selectTemp,
    selectIcon,
    selectHourlyForecast,
  ],
  (api, temp, icon, hourly) => ({
    api,
    temp,
    icon,
    hourly,
  }),
);
