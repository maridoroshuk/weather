import React, { useState } from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';
import { IOptions } from 'src/customTypes/search';
import { GEO_API_URL } from '@constants/api';
import getCityStringFromResponse from '@utils/getCityStringFromResponse';
import { Container } from './styled';

type SearchBarProps = {
  onSearchChange: (input: IOptions | null) => void;
};

function SearchBar({ onSearchChange }: SearchBarProps) {
  const [value, setValue] = useState<IOptions | null>(null);

  const loadOptionsHandler = async (query: string) => {
    const response = await fetch(
      `${GEO_API_URL}/city?limit=30&name=${query}`,
      {
        method: 'GET',
        headers: {
          'X-API-Key': `${process.env.REACT_APP_NINJAS_API_KEY}`,
        },
      },
    );

    const data = await response.json();
    const options = getCityStringFromResponse(data);

    return {
      options,
      hasMore: data.length >= 1,
    };
  };

  const onChangeHandler = (input: any) => {
    setValue(input);
    onSearchChange(input);
    setValue(null);
  };

  return (
    <Container>
      <AsyncPaginate
        placeholder="Search for city"
        debounceTimeout={600}
        value={value}
        onChange={onChangeHandler}
        loadOptions={loadOptionsHandler}
      />
    </Container>
  );
}

export default SearchBar;
