import React from 'react';
import { OPEN_WEATHER_IMAGE } from '@constants/api';
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
  const iconUrl = `${OPEN_WEATHER_IMAGE}/${icon}@2x.png`;
  const roundTemp = Math.round(temp);
  return (
    <>
      <Section>
        <Label>Today</Label>
        <WeatherIcon
          data-testid="dailyImage"
          alt="weather"
          src={iconUrl}
        />
      </Section>
      <Section>
        <Temperature data-testid="dailyTemp">
          {roundTemp}
          °C
        </Temperature>
      </Section>
    </>
  );
}

export default Daily;
