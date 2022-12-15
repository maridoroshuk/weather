import React, { useEffect, useState } from 'react';
import AsyncSelect from 'react-select/async';
import {
  ICurrentLocation,
  IOptions,
} from '@customTypes/weather';
import filterCities from '@utils/filterCities';
import { Container } from './styled';

interface ISearchBar {
  onSearchChange: (input: IOptions) => void;
  currentLocation: ICurrentLocation | null;
}
function SearchBar({
  onSearchChange,
  currentLocation,
}: ISearchBar) {
  const [value, setValue] = useState<IOptions | null>(null);

  useEffect(() => {
    if (currentLocation) {
      const { lat, lon, currentCity } = currentLocation;
      setValue({
        value: `${lat} ${lon}`,
        label: `${currentCity}`,
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
