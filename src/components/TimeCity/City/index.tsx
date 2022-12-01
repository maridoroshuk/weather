import React from 'react';
import { CityContainer } from './styled';

interface ICityProps {
  city: string;
}

function City({ city }: ICityProps) {
  return <CityContainer>{city}</CityContainer>;
}

export default City;
