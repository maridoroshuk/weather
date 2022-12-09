import React from 'react';
import { useSelector } from 'react-redux';
import { ICurrentLocation } from '@customTypes/weather';
import Weather from '@components/Weather';
import TimeCity from '@components/TimeCity';
import Calendar from '@components/Calendar';
import getWeatherIcon from '@utils/getWeatherIcon';
import Loader from '@components/Loader';
import { Wrapper } from './styled';

interface IMain {
  currentLocation: ICurrentLocation | null;
}
function Main({ currentLocation }: IMain) {
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

  return (
    <>
      {currentLocation && (
        <Wrapper
          style={{
            backgroundImage,
          }}
        >
          <TimeCity
            defaultCity={currentLocation.currentCity}
          />
          <Calendar />
          <Weather />
        </Wrapper>
      )}
      {!currentLocation && <Loader />}
    </>
  );
}

export default Main;
