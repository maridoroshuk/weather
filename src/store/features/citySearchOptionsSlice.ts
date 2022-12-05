import { createSlice } from '@reduxjs/toolkit';
import { IOptions } from '@customTypes/search';

export interface CitySearchOptionsState {
  query: string | null;
  options: IOptions[];
  hasMore: boolean;
  isLoading: boolean;
}

const initialState: CitySearchOptionsState = {
  query: null,
  options: [],
  hasMore: false,
  isLoading: false,
};

export const citySearchOptionsSlice = createSlice({
  name: 'citySearchOptions',
  initialState,
  reducers: {
    citiesOptionsRequest: (state, action) => ({
      ...state,
      query: action.payload.query,
      isLoading: true,
    }),
    citiesOptionsSuccess: (state, action) => ({
      ...state,
      isLoading: false,
      options: action.payload.options,
      hasMore: action.payload.hasMore,
    }),
    citiesOptionsFailure: (state, action) => ({
      ...state,
      isLoading: false,
      errorMessage: action.payload.message,
    }),
    clearCitiesOptions: (state) => ({
      ...state,
    }),
    cityAutocomplete: () => ({
      ...initialState,
    }),
  },
});

export const {
  citiesOptionsRequest,
  citiesOptionsSuccess,
  citiesOptionsFailure,
  cityAutocomplete,
} = citySearchOptionsSlice.actions;

export default citySearchOptionsSlice.reducer;
