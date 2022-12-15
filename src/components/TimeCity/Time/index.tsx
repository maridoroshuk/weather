import React, { Fragment } from 'react';
import { TimeContainer, DayContainer } from './styled';

interface ITimeProps {
  time: string;
  day: string;
}

function Time({ time, day }: ITimeProps) {
  return (
    <>
      <TimeContainer data-testid="time">{time}</TimeContainer>
      <DayContainer data-testid="day">{day}</DayContainer>
    </>
  );
}

export default Time;
