import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getEventsRequest,
  setApiCalendar,
  setIsLoggedIn,
} from '@store/features/calendarSlice';
import getApiCalendar from '@utils/getApiCalendar';
import {
  selectApiCalendar,
  selectEvents,
  selectLogin,
} from '@store/selectors/calendar';
import Events from './Events';
import Button from './Button';
import {
  Container, Text, Title, Wrapper,
} from './styled';

function Calendar() {
  const dispatch = useDispatch();

  const events = useSelector(selectEvents);
  const isLoggedIn = useSelector(selectLogin);
  const apiCalendar = useSelector(selectApiCalendar);

  useEffect(() => {
    dispatch(
      setApiCalendar({ apiCalendar: getApiCalendar() }),
    );
  }, []);

  const handleAuthClick = () => {
    apiCalendar.handleAuthClick();
    apiCalendar.tokenClient.callback = async (resp: {
      error: string | undefined;
    }) => {
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
      {isLoggedIn ? (
        <Wrapper>
          <Title>Google Calender Events:</Title>
          {events && events?.length > 0 ? (
            <Events events={events} />
          ) : (
            <Text>You have no events for today ✅</Text>
          )}
          <Button
            onClick={handleLogoutClick}
            text="Logout"
          />
        </Wrapper>
      ) : (
        <Wrapper>
          <Title>
            Login with google to see your events
          </Title>
          <Button onClick={handleAuthClick} text="Login" />
        </Wrapper>
      )}
    </Container>
  );
}
export default Calendar;
