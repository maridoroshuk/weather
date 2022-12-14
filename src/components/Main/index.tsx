import React from 'react';
import { useSelector } from 'react-redux';
import Weather from '@components/Weather';
import TimeCity from '@components/TimeCity';
import Calendar from '@components/Calendar';
import { ICurrentLocation } from '@customTypes/weather';
import getBackgroundImage from '@utils/getBackgroundImage';
import { selectIcon } from '@store/selectors/weather';
import { Wrapper } from './styled';

interface IMain {
  currentLocation: ICurrentLocation | null;
}
function Main({ currentLocation }: IMain) {
  const icon = useSelector(selectIcon);

  const backgroundImage = getBackgroundImage(icon);

  return (
    <Wrapper
      style={{
        backgroundImage,
      }}
      data-testid="main"
    >
      <TimeCity
        defaultCity={currentLocation?.currentCity}
      />
      <Calendar />
      {currentLocation && <Weather />}
    </Wrapper>
  );
}

export default Main;
