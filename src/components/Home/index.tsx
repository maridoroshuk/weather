import React from 'react';
import { useDispatch } from 'react-redux';
import SearchBar from '@components/SearchBar';
import { ISearch } from '@interfaces/search';
import { getWeatherRequest } from '@store/features/weather/weatherSlice';
import Weather from '@components/Weather';
import Time from '@components/Time';

function Home() {
  const dispatch = useDispatch();

  const handleSearchChange = (search: ISearch | null) => {
    if (search) {
      const [lat, lon]: string[] = search.value.split(' ');
      dispatch(
        getWeatherRequest({
          search: {
            lat,
            lon,
          },
          city: search.label,
        }),
      );
    }
  };

  return (
    <>
      <SearchBar onSearchChange={handleSearchChange} />
      <Time />
      <Weather />
    </>
  );
}

export default Home;
