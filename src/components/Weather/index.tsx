import React from 'react';
import {
  APIType,
  IForecast,
} from 'src/customTypes/weather';
import { useSelector } from 'react-redux';
import CurrentWeather from './CurrentWeather';
import Forecast from './Forecast';
import { Container } from './styled';

function Weather() {
  const { temp, code, forecast } = useSelector(
    (state: {
      weather: {
        temp: number | null;
        code: number | null;
        forecast: IForecast[];
      };
    }) => state.weather,
  );
  return (
    <Container>
      {temp && code && (
        <CurrentWeather temp={temp} code={code} />
      )}
      {forecast && <Forecast forecast={forecast} />}
    </Container>
  );
}

export default Weather;
