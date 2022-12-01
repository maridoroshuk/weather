import React from 'react';
import { TimeContainer, DayContainer } from './styled';

interface ITimeProps {
  time: string;
  day: string;
}

function Time({ time, day }: ITimeProps) {
  return (
    <>
      <TimeContainer>{time}</TimeContainer>
      <DayContainer>{day}</DayContainer>
    </>
  );
}

export default Time;
