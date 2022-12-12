import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { APIOptions, APIType } from '@customTypes/weather';
import { updateWeatherAPI } from '@store/features/weatherSlice';
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
  const { api } = useSelector(
    (state: {
      weather: {
        api: APIType;
      };
    }) => state.weather,
  );
  const handleAPIChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    dispatch(updateWeatherAPI({ api: e.target.value }));
    onAPIChange();
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
          checked={api === APIOptions.OPENWEATHER}
        />
        <Label htmlFor="openWeather">OpenWeather</Label>
        <RadioInput
          type="radio"
          id="weatherBit"
          value={APIOptions.WEATHERBIT}
          onChange={handleAPIChange}
          checked={api === APIOptions.WEATHERBIT}
        />
        <Label htmlFor="weatherBit">
          WeatherBit (hourly)
        </Label>
      </SelectWrapper>
    </Container>
  );
}

export default SwitchWeatherAPI;
