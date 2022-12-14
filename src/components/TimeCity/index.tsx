import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { getDate, getTime } from '@utils/date';
import { selectCity } from '@store/selectors/weather';
import Time from './Time';
import City from './City';
import { Container, Section } from './styled';

interface ITimeCity {
  defaultCity: string | undefined;
}

function TimeCity({ defaultCity }: ITimeCity) {
  const [date, setDate] = useState(() => new Date());
  const timer = useRef<null | NodeJS.Timeout>(null);

  const city = useSelector(selectCity);

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
    <Container data-testid="timeCity">
      <Section>
        {time && day ? (
          <Time time={time} day={day} />
        ) : null}
      </Section>
      <Section>
        {city ? <City city={defaultCity || city} /> : null}
      </Section>
    </Container>
  );
}

export default TimeCity;
