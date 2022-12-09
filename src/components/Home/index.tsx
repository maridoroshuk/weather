import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import SearchBar from '@components/SearchBar';
import { weatherRequest } from '@store/features/weatherSlice';
import SwitchWeatherAPI from '@components/SwitchWeatherAPI';
import {
  ICurrentLocation,
  IOptions,
} from '@customTypes/weather';
import getCurrentLocation from '@utils/getCurrentLocation';
import Main from '@components/Main';
import { Container } from './styled';

function Home() {
  const dispatch = useDispatch();

  const [currentLocation, setCurrentLocation] = useState<ICurrentLocation | null>(null);

  const dispatchWeatherRequest = () => {
    if (currentLocation) {
      dispatch(
        weatherRequest({
          search: {
            lat: currentLocation.lat,
            lon: currentLocation.lon,
          },
          city: currentLocation.currentCity,
        }),
      );
    }
  };

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
      <SearchBar
        onSearchChange={handleSearchChange}
        currentLocation={currentLocation}
      />
      <SwitchWeatherAPI
        onAPIChange={dispatchWeatherRequest}
      />
      <Main currentLocation={currentLocation} />
    </Container>
  );
}

export default Home;
