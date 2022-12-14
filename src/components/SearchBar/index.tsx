import React, { useEffect, useState } from 'react';
import AsyncSelect from 'react-select/async';
import {
  IOptions,
} from '@customTypes/weather';
import filterCities from '@utils/filterCities';
import useCurrentLocation from '@hooks/useCurrentLocation';
import useDispatchWeatherRequest from '@hooks/useDispatchWeatherRequest';
import { Container } from './styled';

function SearchBar() {
  const [value, setValue] = useState<IOptions | null>(null);

  const { currentLocation, setCurrentLocation } = useCurrentLocation();
  const dispatchWeatherRequest = useDispatchWeatherRequest(currentLocation);

  useEffect(() => {
    if (currentLocation) {
      setValue({
        value: `${currentLocation.lat} ${currentLocation.lon}`,
        label: `${currentLocation.currentCity}`,
      });
    }
  }, [currentLocation]);

  const loadOptionsHandler = (inputValue: string) => {
    if (inputValue) {
      return filterCities(inputValue);
    }
    if (currentLocation?.currentCity) {
      return filterCities(currentLocation.currentCity);
    }
  };

  const onFocusHandler = () => {
    setValue(null);
  };

  const handleSearchChange = (search: IOptions | null) => {
    if (search) {
      const [lat, lon]: string[] = search.value.split(' ');
      setCurrentLocation({
        lat: +lat,
        lon: +lon,
        currentCity: search.label,
      });
      dispatchWeatherRequest();
    }
  };

  const onChangeHandler = (input: any) => {
    setValue(input);
    handleSearchChange(input);
    setValue(null);
  };

  return (
    <Container>
      <AsyncSelect
        placeholder="Search for city"
        cacheOptions
        defaultOptions
        value={value}
        onFocus={onFocusHandler}
        onChange={onChangeHandler}
        loadOptions={loadOptionsHandler}
      />
    </Container>
  );
}

export default SearchBar;
