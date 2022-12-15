import React from 'react';
import {
  APIOptions,
  IForcastHourly,
} from '@customTypes/weather';
import { useSelector } from 'react-redux';
import Daily from './Daily';
import Hourly from './Hourly';
import { Container } from './styled';

function CurrentWeather() {
  const {
    api, temp, icon, hourly,
  } = useSelector(
    (state: {
      weather: {
        api: APIOptions;
        temp: number;
        icon: string;
        hourly: IForcastHourly[];
      };
    }) => state.weather,
  );

  const isDaily = api === APIOptions.OPENWEATHER;

  return (
    <Container data-testid="currentWeather">
      {isDaily ? (
        <Daily temp={temp} icon={icon} />
      ) : (
        <Hourly hourlyList={hourly} />
      )}
    </Container>
  );
}

export default CurrentWeather;
