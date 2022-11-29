import React, { useState } from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';
import { ISearch } from '@interfaces/search';
import { geoApiOptions, GEO_API_URL } from '@constants/api';
import { Container } from './styled';

type SearchBarProps = {
  onSearchChange: (input: ISearch | null) => void;
};

function SearchBar({ onSearchChange }: SearchBarProps) {
  const [search, setSearch] = useState<ISearch | null>(
    null,
  );

  const loadOptionsHandler = async (query: string) => {
    const response = await fetch(
      `${GEO_API_URL}/cities?inPopulation=100000&namePrefix=${query}`,
      geoApiOptions,
    );

    const data = await response.json();

    return {
      options: data.data.map(
        (city: {
          latitude: number;
          longitude: number;
          name: string;
          countryCode: string;
        }) => ({
          value: `${city.latitude} ${city.longitude}`,
          label: `${city.name}, ${city.countryCode}`,
        }),
      ),
      hasMore: data.length >= 1,
    };
  };

  const onChangeHandler = (input: ISearch | null) => {
    setSearch(input);
    onSearchChange(input);
  };

  return (
    <Container>
      <AsyncPaginate
        placeholder="Search for city"
        debounceTimeout={600}
        value={search}
        onChange={onChangeHandler}
        loadOptions={loadOptionsHandler}
      />
    </Container>
  );
}

export default SearchBar;
