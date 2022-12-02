import React from 'react';
import { IEvent } from '@customTypes/events';
import { getTaskTime } from '@utils/date';
import {
  Container,
  DateContainer,
  DateString,
  Title,
} from './styled';

interface IEventsProps {
  events: IEvent[];
}

function Events({ events }: IEventsProps) {
  return (
    <>
      {events.map((event) => (
        <Container key={event.id}>
          <DateContainer>
            <DateString>
              {getTaskTime(event.start.dateTime)}
            </DateString>
            <DateString>
              {getTaskTime(event.end.dateTime)}
            </DateString>
          </DateContainer>
          <Title>{event.summary}</Title>
        </Container>
      ))}
    </>
  );
}

export default React.memo(Events);
