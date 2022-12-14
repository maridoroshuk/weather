import React from 'react';
import {
  Label,
  Section,
  Temperature,
  WeatherIcon,
} from './styled';

interface IDaily {
  temp: number;
  icon: string;
}

function Daily({ temp, icon }: IDaily) {
  const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
  return (
    <>
      <Section>
        <Label>Today</Label>
        <WeatherIcon
          alt="weather"
          src={iconUrl}
        />
      </Section>
      <Section>
        <Temperature>
          {Math.round(temp)}
          °C
        </Temperature>
      </Section>
    </>
  );
}

export default Daily;
