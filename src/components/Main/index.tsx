import React from 'react';
import { useSelector } from 'react-redux';
import Weather from '@components/Weather';
import TimeCity from '@components/TimeCity';
import Calendar from '@components/Calendar';
import getWeatherIcon from '@utils/getWeatherIcon';
import useCurrentLocation from '@hooks/useCurrentLocation';
import { Wrapper } from './styled';

function Main() {
  const { currentLocation } = useCurrentLocation();

  const { code } = useSelector(
    (state: {
      weather: {
        code: number | null;
      };
    }) => state.weather,
  );

  const backgroundImage = code
    ? `url('./background/${getWeatherIcon(code)}.jpg')`
    : '';

  const renderWeather = () => {
    if (currentLocation) {
      return <Weather />;
    }
  };

  return (
    <Wrapper
      style={{
        backgroundImage,
      }}
    >
      <TimeCity
        defaultCity={currentLocation?.currentCity}
      />
      <Calendar />
      {renderWeather()}
    </Wrapper>
  );
}

export default Main;
