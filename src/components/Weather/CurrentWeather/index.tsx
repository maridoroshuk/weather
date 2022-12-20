import React from 'react';
import {
  APIOptions,
} from '@customTypes/weather';
import { useSelector } from 'react-redux';
import {
  selectHourlyForecast,
  selectIcon,
  selectTemp,
  selectWeatherApi,
} from '@store/selectors/weather';
import Daily from './Daily';
import Hourly from './Hourly';
import { Container } from './styled';

function CurrentWeather() {
  const api = useSelector(selectWeatherApi);
  const temp = useSelector(selectTemp);
  const icon = useSelector(selectIcon);
  const hourly = useSelector(selectHourlyForecast);

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
