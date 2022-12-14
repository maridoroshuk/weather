import React, { useEffect, useState } from 'react';
import SearchBar from '@components/SearchBar';
import SwitchWeatherAPI from '@components/SwitchWeatherAPI';
import {
  ICurrentLocation,
  IOptions,
} from '@customTypes/weather';
import Main from '@components/Main';
import useDispatchWeatherRequest from '@hooks/useDispatchWeatherRequest';
import getCurrentLocation from '@utils/getCurrentLocation';
import { Container } from './styled';

function Home() {
  const [currentLocation, setCurrentLocation] = useState<ICurrentLocation | null>(null);
  const dispatchWeatherRequest = useDispatchWeatherRequest(currentLocation);

  useEffect(() => {
    getCurrentLocation(setCurrentLocation);
  }, []);

  useEffect(() => {
    dispatchWeatherRequest();
  }, [currentLocation]);

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

  return (
    <Container>
      <SearchBar onSearchChange={handleSearchChange} currentLocation={currentLocation} />
      <SwitchWeatherAPI
        currentLocation={currentLocation}
      />
      <Main currentLocation={currentLocation} />
    </Container>
  );
}

export default Home;
