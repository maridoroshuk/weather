import { IEvent } from '@customTypes/calendar';
import ApiCalendar from 'react-google-calendar-api';

export const selectEvents = (state: {
  calendar: {
    events: IEvent[] | null;
  };
}) => state.calendar.events;

export const selectLogin = (state: {
  calendar: {
    isLoggedIn: boolean;
  };
}) => state.calendar.isLoggedIn;

export const selectApiCalendar = (state: {
  calendar: {
    apiCalendar: ApiCalendar;
  };
}) => state.calendar.apiCalendar;
