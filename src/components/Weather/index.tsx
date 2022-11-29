import { IForecast } from '@interfaces/weather';
import React from 'react';
import { useSelector } from 'react-redux';
import CurrentWeather from './CurrentWeather';
import Forecast from './Forecast';
import { Container } from './styled';

function Weather() {
  const { temp, icon, forecast } = useSelector(
    (state: {
      weather: {
        temp: number | null;
        icon: string | null;
        forecast: IForecast[];
      };
    }) => state.weather,
  );

  return (
    <Container>
      {temp && icon && (
        <CurrentWeather temp={temp} icon={icon} />
      )}
      {forecast && <Forecast forecast={forecast} />}
    </Container>
  );
}

export default Weather;
