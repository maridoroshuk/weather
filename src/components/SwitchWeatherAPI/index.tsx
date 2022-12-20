import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import {
  APIType,
  ICurrentLocation,
} from '@customTypes/weather';
import { updateWeatherAPI } from '@store/features/weatherSlice';
import useDispatchWeatherRequest from '@hooks/useDispatchWeatherRequest';
import { selectButtons } from '@constants/selectButtons';
import { selectWeatherApi } from '@store/selectors/weather';
import SelectButton from './SelectButton';
import { Container, Title, SelectWrapper } from './styled';

interface ISwitchWeatherAPI {
  currentLocation: ICurrentLocation | null;
}
function SwitchWeatherAPI({
  currentLocation,
}: ISwitchWeatherAPI) {
  const dispatch = useDispatch();
  const dispatchWeatherRequest = useDispatchWeatherRequest(currentLocation);

  const api = useSelector(selectWeatherApi);

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
