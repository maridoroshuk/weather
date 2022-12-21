import React from 'react';
import { APIOptions } from '@customTypes/weather';
import { useSelector } from 'react-redux';
import { selectCurrenWeather } from '@store/selectors/weather';
import Daily from './Daily';
import Hourly from './Hourly';
import { Container } from './styled';

function CurrentWeather() {
  const {
    api, temp, icon, hourly,
  } = useSelector(
    selectCurrenWeather,
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
