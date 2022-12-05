import { APIOptions, APIType } from '@customTypes/weather';
import getWeatherIcon from '@utils/getWeatherIcon';
import React from 'react';
import {
  Label,
  Container,
  Temperature,
  Section,
  WeatherIcon,
} from './styled';

interface CurrentWeatherProps {
  temp: number;
  code: number;
}

function CurrentWeather({
  temp,
  code,
}: CurrentWeatherProps) {
  return (
    <Container>
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
    </Container>
  );
}

export default CurrentWeather;
