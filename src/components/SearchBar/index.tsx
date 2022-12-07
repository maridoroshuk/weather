import React, { useState } from 'react';
import AsyncSelect from 'react-select/async';
import {
  ICurrentLocation,
  IOptions,
} from '@customTypes/weather';
import filterCities from '@utils/filterCities';
import { Container } from './styled';

type SearchBarProps = {
  onSearchChange: (input: IOptions) => void;
  currentLocation: ICurrentLocation;
};

function SearchBar({
  onSearchChange,
  currentLocation,
}: SearchBarProps) {
  const [value, setValue] = useState<IOptions | null>(
    () => ({
      value: `${currentLocation.lat} ${currentLocation.lon}`,
      label: `${currentLocation.currentCity}`,
    }),
  );

  const loadOptionsHandler = (inputValue: string) => {
    if (inputValue) {
      return filterCities(inputValue);
    }
    if (currentLocation.currentCity) {
      return filterCities(currentLocation.currentCity);
    }
  };

  const onFocusHandler = () => {
    setValue(null);
  };

  const onChangeHandler = (input: any) => {
    setValue(input);
    onSearchChange(input);
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
