import { APIOptions, APIType, IForecast } from 'src/customTypes/weather';
import { createSlice } from '@reduxjs/toolkit';

export interface WeatherState {
  search: {
    lat: string | null;
    lon: string | null;
  };
  city: string | null;
  isLoading: boolean;
  api: APIType;
  temp: number | null;
  code: number | null;
  forecast: IForecast[];
  errorMessage: string | null;
}

const initialState: WeatherState = {
  search: {
    lat: null,
    lon: null,
  },
  city: null,
  api: APIOptions.OPENWEATHER,
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
    getWeatherRequest: (state, action) => ({
      ...state,
      isLoading: true,
      search: action.payload.search,
      city: action.payload.city,
    }),
    getWeatherSuccess: (state, action) => ({
      ...state,
      isLoading: false,
      temp: action.payload.current.temp,
      code: action.payload.current.code,
      forecast: action.payload.forecast,
    }),
    getWeatherFailure: (state, action) => ({
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
  getWeatherRequest,
  getWeatherSuccess,
  getWeatherFailure,
  updateWeatherAPI,
} = weatherSlice.actions;

export default weatherSlice.reducer;
