import React from 'react';
import { useSelector } from 'react-redux';
import {
  selectEvents,
  selectLogin,
} from '@store/selectors/calendar';
import useCalendar from '@hooks/useCalendar';
import Events from './Events';
import Button from './Button';
import {
  Container, Text, Title, Wrapper,
} from './styled';

function Calendar() {
  const events = useSelector(selectEvents);
  const isLoggedIn = useSelector(selectLogin);

  const { handleLogin, handleLogout } = useCalendar();

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
          <Button onClick={handleLogout} text="Logout" />
        </Wrapper>
      ) : (
        <Wrapper>
          <Title>
            Login with google to see your events
          </Title>
          <Button onClick={handleLogin} text="Login" />
        </Wrapper>
      )}
    </Container>
  );
}
export default Calendar;
