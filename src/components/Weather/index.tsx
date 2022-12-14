import React from 'react';
import { IForecastDaily } from 'src/customTypes/weather';
import { useSelector } from 'react-redux';
import Loader from '@components/Loader';
import CurrentWeather from './CurrentWeather';
import Forecast from './Forecast';
import { Container } from './styled';

function Weather() {
  const { isLoading, forecast } = useSelector(
    (state: {
      weather: {
        isLoading: boolean;
        forecast: IForecastDaily[];
      };
    }) => state.weather,
  );

  const renderDataOrLoader = () => {
    if (isLoading) {
      return <Loader />;
    }
    return (
      <Container>
        <CurrentWeather />
        <Forecast forecast={forecast} />
      </Container>
    );
  };

  return <>{renderDataOrLoader()}</>;
}

export default Weather;
