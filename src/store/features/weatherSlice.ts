import {
  APIOptions,
  APIType,
  IForecastDaily,
  IForcastHourly,
} from '@customTypes/weather';
import { createSlice } from '@reduxjs/toolkit';

export interface WeatherState {
  search: {
    lat: string | null;
    lon: string | null;
  };
  city: string | null;
  isLoading: boolean;
  api: APIType;
  hourly: IForcastHourly[];
  temp: number | null;
  code: number | null;
  forecast: IForecastDaily[];
  errorMessage: string | null;
}

const initialState: WeatherState = {
  search: {
    lat: null,
    lon: null,
  },
  city: null,
  api: APIOptions.OPENWEATHER,
  hourly: [],
  isLoading: false,
  temp: null,
  code: null,
  forecast: [],
  errorMessage: null,
};

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    weatherRequest: (state, action) => ({
      ...state,
      isLoading: true,
      search: action.payload.search,
      city: action.payload.city,
    }),
    weatherDailySuccess: (state, action) => ({
      ...state,
      isLoading: false,
      temp: action.payload.current.temp,
      code: action.payload.current.code,
      forecast: action.payload.forecast,
    }),
    weatherHourlySuccess: (state, action) => ({
      ...state,
      isLoading: false,
      hourly: action.payload.current,
    }),
    weatherDailyFailure: (state, action) => ({
      ...state,
      isLoading: false,
      errorMessage: action.payload.message,
    }),
    weatherHourlyFailure: (state, action) => ({
      ...state,
      isLoading: false,
      errorMessage: action.payload.message,
    }),
    updateWeatherAPI: (state, action) => ({
      ...state,
      api: action.payload.api,
    }),
  },
});

export const {
  weatherRequest,
  weatherDailySuccess,
  weatherDailyFailure,
  weatherHourlySuccess,
  weatherHourlyFailure,
  updateWeatherAPI,
} = weatherSlice.actions;

export default weatherSlice.reducer;
