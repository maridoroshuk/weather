import { IEvent } from '@customTypes/events';
import { createSlice } from '@reduxjs/toolkit';

interface CalendarState {
  events: IEvent[] | null;
  isLoading: boolean;
  isLoggedIn: boolean;
  errorMessage: string | null;
}

const initialState: CalendarState = {
  events: null,
  isLoading: false,
  isLoggedIn: false,
  errorMessage: null,
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
    setIsLoggedInd: (state) => ({
      ...state,
      isLoggedIn: true,
    }),
  },
});

export const {
  getEventsRequest,
  getEventsSuccess,
  getEventsFailure,
  setIsLoggedInd,
} = calendarSlice.actions;

export default calendarSlice.reducer;
