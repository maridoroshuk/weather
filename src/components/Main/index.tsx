import React from 'react';
import { useSelector } from 'react-redux';
import Weather from '@components/Weather';
import TimeCity from '@components/TimeCity';
import Calendar from '@components/Calendar';
import { ICurrentLocation } from '@customTypes/weather';
import getBackgroundImage from '@utils/getBackgroundImage';
import { Wrapper } from './styled';

interface IMain {
  currentLocation: ICurrentLocation | null;
}
function Main({ currentLocation }: IMain) {
  const { icon } = useSelector(
    (state: {
      weather: {
        icon: string | null;
      };
    }) => state.weather,
  );

  const backgroundImage = getBackgroundImage(icon);

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
