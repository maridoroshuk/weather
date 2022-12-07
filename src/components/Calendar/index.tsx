import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ApiCalendar from 'react-google-calendar-api';
import {
  getEventsRequest,
  setApiCalendar,
  setIsLoggedIn,
} from '@store/features/calendarSlice';
import { IEvent } from '@customTypes/calendar';
import getApiCalendar from '@utils/getApiCalendar';
import Events from './Events';
import { Container } from './styled';
import Button from './Button';

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

  const handleLogoutClick = () => {
    apiCalendar.handleSignoutClick();
    dispatch(setIsLoggedIn({ isLoggedIn: false }));
  };

  return (
    <Container>
      {isLoggedIn && events && (
        <>
          <Events events={events} />
          <Button
            onClick={handleLogoutClick}
            text="Logout"
          />
        </>
      )}
      {!isLoggedIn && (
        <Button
          onClick={handleAuthClick}
          text="Login with Google"
        />
      )}
    </Container>
  );
}
export default Calendar;
