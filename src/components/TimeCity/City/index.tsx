import React from 'react';
import { CityContainer } from './styled';

interface ICityProps {
  city: string;
}

function City({ city }: ICityProps) {
  return <CityContainer data-testid="city">{city}</CityContainer>;
}

export default City;
