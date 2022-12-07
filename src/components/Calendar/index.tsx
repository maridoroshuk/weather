import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ApiCalendar from 'react-google-calendar-api';
import {
  getEventsRequest,
  setApiCalendar,
  setIsLoggedIn,
} from '@store/features/calendarSlice';
import { IEvent } from '@customTypes/events';
import getApiCalendar from '@utils/getApiCalendar';

import Events from './Events';
import Login from './Login';

function Calendar() {
  const dispatch = useDispatch();

  const { events, apiCalendar, isLoggedIn } = useSelector(
    (state: {
      calendar: {
        events: IEvent[] | null;
        isLoggedIn: boolean;
        apiCalendar: ApiCalendar;
      };
    }) => state.calendar,
  );

  useEffect(() => {
    dispatch(
      setApiCalendar({ apiCalendar: getApiCalendar() }),
    );
  }, []);

  const handleAuthClick = () => {
    apiCalendar.handleAuthClick();
    apiCalendar.tokenClient.callback = async (
      resp: any,
    ) => {
      if (resp.error !== undefined) {
        throw resp;
      }
      dispatch(setIsLoggedIn({ isLoggedIn: true }));
      dispatch(getEventsRequest());
    };
  };

  return (
    <>
      {!isLoggedIn && <Login onLogin={handleAuthClick} />}
      {events && <Events events={events} />}
    </>
  );
}
export default Calendar;
