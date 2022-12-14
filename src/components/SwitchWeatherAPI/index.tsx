import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { APIType } from '@customTypes/weather';
import { updateWeatherAPI } from '@store/features/weatherSlice';
import useDispatchWeatherRequest from '@hooks/useDispatchWeatherRequest';
import useCurrentLocation from '@hooks/useCurrentLocation';
import { selectButtons } from '@constants/selectButtons';
import { Container, Title, SelectWrapper } from './styled';
import SelectButton from './SelectButton';

function SwitchWeatherAPI() {
  const dispatch = useDispatch();
  const { currentLocation } = useCurrentLocation();
  const dispatchWeatherRequest = useDispatchWeatherRequest(currentLocation);

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
    dispatchWeatherRequest();
  };
  return (
    <Container>
      <Title>Weather service:</Title>
      <SelectWrapper>
        {selectButtons.map((button) => (
          <SelectButton
            key={uuidv4()}
            id={button.id}
            value={button.value}
            handleOnCHange={handleAPIChange}
            isChecked={api === button.value}
            label={button.label}
          />
        ))}
      </SelectWrapper>
    </Container>
  );
}

export default SwitchWeatherAPI;
