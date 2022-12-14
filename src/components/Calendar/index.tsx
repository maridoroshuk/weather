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
import Button from './Button';
import {
  Container, Text, Title, Wrapper,
} from './styled';

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

  const renderEvents = () => {
    if (events) {
      return <Events events={events} />;
    }
    return <Text>You have no events for today ✅</Text>;
  };

  const renderLoginOrEvents = () => {
    if (isLoggedIn) {
      return (
        <Wrapper>
          <Title>Google Calender Events:</Title>
          {renderEvents()}
          <Button
            onClick={handleLogoutClick}
            text="Logout"
          />
        </Wrapper>
      );
    }
    return (
      <Wrapper>
        <Title>Login with google to see your events</Title>
        <Button onClick={handleAuthClick} text="Login" />
      </Wrapper>
    );
  };

  return <Container>{renderLoginOrEvents()}</Container>;
}
export default Calendar;
