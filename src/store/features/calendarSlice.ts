import { IEvent } from '@customTypes/calendar';
import { createSlice } from '@reduxjs/toolkit';
import ApiCalendar from 'react-google-calendar-api';

interface CalendarState {
  events: IEvent[] | null;
  isLoading: boolean;
  isLoggedIn: boolean;
  errorMessage: string | null;
  apiCalendar: ApiCalendar | null;
}

const initialState: CalendarState = {
  events: null,
  isLoading: false,
  isLoggedIn: false,
  errorMessage: null,
  apiCalendar: null,
};

export const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    getEventsRequest: (state) => ({
      ...state,
      isLoading: true,
    }),
    getEventsSuccess: (state, acttion) => ({
      ...state,
      isLoading: false,
      events: acttion.payload.events,
    }),
    getEventsFailure: (state, action) => ({
      ...state,
      isLoading: false,
      errorMessage: action.payload.message,
    }),

    setApiCalendar: (state, action) => ({
      ...state,
      apiCalendar: action.payload.apiCalendar,
    }),
    setIsLoggedIn: (state, action) => ({
      ...state,
      isLoggedIn: action.payload.isLoggedIn,
    }),
  },
});

export const {
  getEventsRequest,
  getEventsSuccess,
  getEventsFailure,
  setIsLoggedIn,
  setApiCalendar,
} = calendarSlice.actions;

export default calendarSlice.reducer;
