import { APIOptions } from '@customTypes/weather';
import { updateWeatherAPI } from '@store/features/weatherSlice';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Container,
  Label,
  RadioInput,
  Title,
  SelectWrapper,
} from './styled';

interface ISwitchWeatherAPI {
  onAPIChange: () => void;
}

function SwitchWeatherAPI({
  onAPIChange,
}: ISwitchWeatherAPI) {
  const dispatch = useDispatch();
  const [activeIndex, setActiveIndex] = useState(0);

  const handleAPIChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    dispatch(updateWeatherAPI({ api: e.target.value }));
    onAPIChange();
    setActiveIndex((prevState) => (prevState === 0 ? 1 : 0));
  };
  return (
    <Container>
      <Title>Weather service:</Title>
      <SelectWrapper>
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
        <Label htmlFor="weatherBit">WeatherBit (hourly)</Label>
      </SelectWrapper>
    </Container>
  );
}

export default SwitchWeatherAPI;
