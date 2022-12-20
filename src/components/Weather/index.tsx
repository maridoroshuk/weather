import React from 'react';
import { useSelector } from 'react-redux';
import Loader from '@components/Loader';
import { selectDailyForecast, selectLoading } from '@store/selectors/weather';
import CurrentWeather from './CurrentWeather';
import Forecast from './Forecast';
import { Container } from './styled';

function Weather() {
  const isLoading = useSelector(selectLoading);
  const forecast = useSelector(selectDailyForecast);

  return !isLoading ? (
    <Container>
      <CurrentWeather />
      <Forecast forecast={forecast} />
    </Container>
  ) : (
    <Loader />
  );
}

export default Weather;
