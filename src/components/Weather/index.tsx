import React from 'react';
import { ForecastType } from 'src/customTypes/weather';
import { useSelector } from 'react-redux';
import Loader from '@components/Loader';
import CurrentWeather from './CurrentWeather';
import Forecast from './Forecast';
import { Container } from './styled';

function Weather() {
  const { temp, code, forecast } = useSelector(
    (state: {
      weather: {
        temp: number | null;
        code: number | null;
        forecast: ForecastType;
      };
    }) => state.weather,
  );
  return (
    <Container>
      {temp && code && forecast && (
        <>
          <CurrentWeather temp={temp} code={code} />
          <Forecast forecast={forecast} />
        </>
      )}
      {(!temp || !code || !forecast) && <Loader />}
    </Container>
  );
}

export default Weather;
