import React, { useEffect, useRef, useState } from 'react';
import { getDate, getTime } from '@utils/date';

function Time() {
  const [date, setDate] = useState(() => new Date());
  const timer = useRef<null | NodeJS.Timeout>(null);

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
    <>
      <h1>{time}</h1>
      <h2>{day}</h2>
    </>
  );
}

export default Time;
