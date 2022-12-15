import getApiCalendar from '@utils/getApiCalendar';
import ApiCalendar from 'react-google-calendar-api';
import reducer, {
  CalendarState,
  getEventsFailure,
  getEventsRequest,
  getEventsSuccess,
  setApiCalendar,
  setIsLoggedIn,
} from '@store/features/calendarSlice';
import { events } from '@mock/calendar';

const prevState: CalendarState = {
  events: null,
  isLoading: false,
  isLoggedIn: false,
  errorMessage: null,
  apiCalendar: null,
};

const message = 'Internal Server Error';
const apiCalendar: ApiCalendar = getApiCalendar();

describe('sign in and get calender events', () => {
  it('should handle calendar events request', () => {
    expect(reducer(prevState, getEventsRequest())).toEqual({
      ...prevState,
      isLoading: true,
    });
  });

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

  it('should handle an ApiCalendar being added', () => {
    const data = {
      apiCalendar,
    };
    expect(
      reducer(prevState, setApiCalendar(data)),
    ).toEqual({
      ...prevState,
      isLoading: false,
      apiCalendar,
    });
  });

  it('should handle login status being updated', () => {
    const data = {
      isLoggedIn: true,
    };
    expect(reducer(prevState, setIsLoggedIn(data))).toEqual(
      {
        ...prevState,
        isLoading: false,
        isLoggedIn: true,
      },
    );
  });
});
