import { IEvent } from '@customTypes/calendar';
import getApiCalendar from '@utils/getApiCalendar';
import ApiCalendar from 'react-google-calendar-api';
import reducer, {
  CalendarState,
  getEventsFailure,
  getEventsRequest,
  getEventsSuccess,
  setApiCalendar,
  setIsLoggedIn,
} from './calendarSlice';

const prevState: CalendarState = {
  events: null,
  isLoading: false,
  isLoggedIn: false,
  errorMessage: null,
  apiCalendar: null,
};

it('should handle calendar events request', () => {
  expect(reducer(prevState, getEventsRequest())).toEqual({
    ...prevState,
    isLoading: true,
  });
});

const events: IEvent[] = [
  {
    summary: 'Lunch',
    end: {
      dateTime: '2022-12-13T14:00:00+03:00',
    },
    start: {
      dateTime: '2022-12-13T13:00:00+03:00',
    },
    id: '7od0rt12grkcioh1pjuemhbuuu',
  },
  {
    summary: 'Meeting',
    end: {
      dateTime: '2022-12-13T16:00:00+03:00',
    },
    start: {
      dateTime: '2022-12-13T15:00:00+03:00',
    },
    id: 'ofrt18qerkci0h1pjqemrb8ru',
  },
  {
    summary: 'Workout',
    end: {
      dateTime: '2022-12-13T20:00:00+03:00',
    },
    start: {
      dateTime: '2022-12-13T18:00:00+03:00',
    },
    id: 'sfrrl87waklloff3ffd58f6aa',
  },
];

it('should handle new calendar events being added', () => {
  const data = {
    events,
  };
  expect(
    reducer(prevState, getEventsSuccess(data)),
  ).toEqual({
    ...prevState,
    isLoading: false,
    events,
  });
});

const message = 'Internal Server Error';

it('should handle calendar message error being added', () => {
  const data = {
    message,
  };
  expect(
    reducer(prevState, getEventsFailure(data)),
  ).toEqual({
    ...prevState,
    isLoading: false,
    errorMessage: message,
  });
});

const apiCalendar: ApiCalendar = getApiCalendar();

it('should handle an ApiCalendar being added', () => {
  const data = {
    apiCalendar,
  };
  expect(reducer(prevState, setApiCalendar(data))).toEqual({
    ...prevState,
    isLoading: false,
    apiCalendar,
  });
});

it('should handle login status being updated', () => {
  const data = {
    isLoggedIn: true,
  };
  expect(reducer(prevState, setIsLoggedIn(data))).toEqual({
    ...prevState,
    isLoading: false,
    isLoggedIn: true,
  });
});
