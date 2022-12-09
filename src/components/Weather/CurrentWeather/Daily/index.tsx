import React from 'react';
import getWeatherIcon from '@utils/getWeatherIcon';
import {
  Label,
  Section,
  Temperature,
  WeatherIcon,
} from './styled';

interface IDaily {
  temp: number;
  code: number;
}

function Daily({ temp, code }: IDaily) {
  return (
    <>
      <Section>
        <Label>Today</Label>
        <WeatherIcon
          alt="weather"
          src={`icons/${getWeatherIcon(code)}.png`}
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
