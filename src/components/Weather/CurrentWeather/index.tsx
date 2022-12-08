import React from 'react';
import { Container } from './styled';
import Daily from './Daily';
import Hourly from './Hourly';

interface ICurrentWeather {
  isDaily: boolean;
}

function CurrentWeather({ isDaily }: ICurrentWeather) {
  return (
    <Container>
      {isDaily && <Daily />}
      {!isDaily && <Hourly />}
    </Container>
  );
}

export default CurrentWeather;
