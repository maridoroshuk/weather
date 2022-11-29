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
  icon: string;
}

function CurrentWeather({
  temp,
  icon,
}: CurrentWeatherProps) {
  return (
    <Container>
      <Section>
        <Label>Today</Label>
        <WeatherIcon
          alt="weather"
          src={`icons/${icon}.png`}
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
