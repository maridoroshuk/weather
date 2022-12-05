import { APIOptions } from '@customTypes/weather';
import { updateWeatherAPI } from '@store/features/weatherSlice';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Label, RadioInput } from './styled';

function SwitchWeatherAPI() {
  const dispatch = useDispatch();
  const [activeIndex, setActiveIndex] = useState(0);

  const handleAPIChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    dispatch(updateWeatherAPI({ api: e.target.value }));
    setActiveIndex((prevState) => (prevState === 0 ? 1 : 0));
  };
  return (
    <Container>
      <RadioInput
        type="radio"
        id="openWeather"
        value={APIOptions.OPENWEATHER}
        onChange={handleAPIChange}
        checked={activeIndex === 0}
      />
      <Label htmlFor="openWeather">OpenWeather</Label>
      <RadioInput
        type="radio"
        id="weatherBit"
        value={APIOptions.WEATHERBIT}
        onChange={handleAPIChange}
        checked={activeIndex === 1}
      />
      <Label htmlFor="weatherBit">WeatherBit</Label>
    </Container>
  );
}

export default SwitchWeatherAPI;
