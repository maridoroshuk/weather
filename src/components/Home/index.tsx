import React, { useEffect } from 'react';
import SearchBar from '@components/SearchBar';
import SwitchWeatherAPI from '@components/SwitchWeatherAPI';
import {
  IOptions,
} from '@customTypes/weather';
import Main from '@components/Main';
import useDispatchWeatherRequest from '@hooks/useDispatchWeatherRequest';
import useCurrentLocation from '@hooks/useCurrentLocation';
import { Container } from './styled';

function Home() {
  const { currentLocation, setCurrentLocation } = useCurrentLocation();
  const dispatchWeatherRequest = useDispatchWeatherRequest(currentLocation);

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
      <SearchBar />
      <SwitchWeatherAPI />
      <Main />
    </Container>
  );
}

export default Home;
