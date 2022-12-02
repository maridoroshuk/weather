import { IForecast } from 'src/customTypes/weather';
import { createSlice } from '@reduxjs/toolkit';

interface WeatherState {
  search: {
    lat: string | null;
    lon: string | null;
  };
  city: string | null;
  isLoading: boolean;
  temp: number | null;
  icon: string | null;
  forecast: IForecast[],
  errorMessage: string | null;
}

const initialState: WeatherState = {
  search: {
    lat: null,
    lon: null,
  },
  city: null,
  isLoading: false,
  temp: null,
  icon: null,
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
      icon: action.payload.current.icon,
      forecast: action.payload.forecast,
    }),
    getWeatherFailure: (state, action) => ({
      ...state,
      isLoading: false,
      errorMessage: action.payload.message,
    }),
  },
});

export const {
  getWeatherRequest,
  getWeatherSuccess,
  getWeatherFailure,
} = weatherSlice.actions;

export default weatherSlice.reducer;
