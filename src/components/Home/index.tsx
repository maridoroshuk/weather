import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import SearchBar from '@components/SearchBar';
import { IOptions } from 'src/customTypes/search';
import { getWeatherRequest } from '@store/features/weatherSlice';
import Weather from '@components/Weather';
import TimeCity from '@components/TimeCity';
import Calendar from '@components/Calendar';
import SwitchWeatherAPI from '@components/SwitchWeatherAPI';

function Home() {
  const dispatch = useDispatch();

  const handleSearchChange = (search: IOptions | null) => {
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

  const [lat, setLat] = useState<number | null>(null);
  const [lon, setLon] = useState<number | null>(null);

  const [currentLocation, setCurrentLocation] = useState<ICurrentLocation>()
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      const { latitude, longitude } = pos.coords;
      dispatch(
        getWeatherRequest({
          search: {
            lat: latitude,
            lon: longitude,
          },
        }),
      );
    });
  }, []);

  return (
    <>
      <SearchBar onSearchChange={handleSearchChange} />
      <SwitchWeatherAPI />
      <TimeCity />
      <Calendar />
      <Weather />
    </>
  );
}

export default Home;
