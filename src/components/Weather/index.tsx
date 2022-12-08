import React from 'react';
import {
  APIOptions,
  IForecastDaily,
  IForcastHourly,
} from 'src/customTypes/weather';
import { useSelector } from 'react-redux';
import Loader from '@components/Loader';
import CurrentWeather from './CurrentWeather';
import Forecast from './Forecast';
import { Container } from './styled';

function Weather() {
  const {
    api, hourly, temp, code, forecast,
  } = useSelector(
    (state: {
      weather: {
        api: APIOptions;
        hourly: IForcastHourly[];
        temp: number | null;
        code: number | null;
        forecast: IForecastDaily[];
      };
    }) => state.weather,
  );

  const isDaily = api === APIOptions.OPENWEATHER;

  return (
    <Container>
      {forecast && (
        <>
          <CurrentWeather isDaily={isDaily} />
          <Forecast forecast={forecast} />
        </>
      )}
    </Container>
  );
}

export default Weather;
