import React from 'react';
import getWeatherIcon from '@utils/getWeatherIcon';
import { useSelector } from 'react-redux';
import {
  Label,
  Section,
  Temperature,
  WeatherIcon,
} from './styled';

function Daily() {
  const { temp, code } = useSelector(
    (state: {
      weather: {
        temp: number;
        code: number;
      };
    }) => state.weather,
  );

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
