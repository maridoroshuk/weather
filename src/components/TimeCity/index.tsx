import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { getDate, getTime } from '@utils/date';
import { Container, Section } from './styled';
import Time from './Time';
import City from './City';

function TimeCity() {
  const [date, setDate] = useState(() => new Date());
  const timer = useRef<null | NodeJS.Timeout>(null);

  const city = useSelector(
    (state: {
      weather: {
        city: string | null;
      };
    }) => state.weather.city,
  );

  useEffect(() => {
    timer.current = setInterval(() => {
      const current = new Date();
      setDate((prevDate) => (prevDate.getMinutes() === current.getMinutes()
        ? prevDate
        : current));
    }, 1000);

    return () => clearInterval(timer.current as NodeJS.Timeout);
  });

  const time = getTime(date);
  const day = getDate(date);

  return (
    <Container>
      <Section>
        {time && day && <Time time={time} day={day} />}
      </Section>
      <Section>{city && <City city={city} />}</Section>
    </Container>
  );
}

export default TimeCity;
